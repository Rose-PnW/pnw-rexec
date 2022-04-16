import fetch, { Response } from "node-fetch";
import { RequestBuilder } from "./queries.js";
import { BaseRequest } from "./request.js";
import { Query } from "./types.js";

export interface Executor<O> {
  config: RequesterProfile<O>;
  defaultOptions: O;
  push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: O | undefined): Promise<R>;
}

class QueryError extends Error {
	constructor(response: Response, query: string) {
		super(`GraphQL Query Error: ${response.status} ${response.statusText} ${query}`);
	}
}

export interface ExecutorLog {
  date: Date;
  query: string;
  response: Response;
}

export class InstantExecutor implements Executor<{}> {
  config: RequesterProfile<{}>;
  defaultOptions = {};
  constructor(config: RequesterProfile<{}>) {
    this.config = config;
  }
  private url() {
    if(this.config._key) {
      return `https://api.politicsandwar.com/graphql?api_key=${this.config.key}`;
    } else {
      throw new Error("No API key provided");
    }
  }
  async push<R>(requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    while(true) {
      const queries: string[] = requests.map(([_, req]) => req.stringify());
      const query = `{${queries.join('')}}`;
      const response = await fetch(this.url(), {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: `{"query":"${query}"}`
      });
      const log = {
        date: new Date(),
        query,
        response
      };
      this.config._log?.(log);
      if(response.ok) {
        const query = await response.json() as { data: Query, errors: any[] };
        if(query.errors?.length > 0) {
          throw new QueryError(response, JSON.stringify(query.errors));
        } else {
          const data = query.data;
          const result = Object.fromEntries(requests.map(([k,r]) => [k, r.parse(data[k])])) as R;
          return result;
        }
      } else {
        if(response.status === 429) {
          const seconds = Number(response.headers.get("x-ratelimit-reset-after"));
          await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        } else {
          throw new QueryError(response, query);
        }
      }
    }
  }
}

export interface SleepingRequest {
  request: BaseRequest<any, any>,
  resolve: (result: any) => void,
}

class ExecutorBin<O> {
  private requests: {[K in keyof Query]: SleepingRequest} = {};
  private executor: Executor<O>;
  constructor(executor: Executor<O>) {
    this.executor = executor;
  }
  has(key: keyof Query): boolean {
    return this.requests[key] !== undefined;
  }
  push(key: keyof Query, request: BaseRequest<any, any>, resolve: (result: any) => void) {
    this.requests[key] = {
      request,
      resolve
    };
  }
  async run() {
    const requests = Object.entries(this.requests).map(([k, req]) => [k, req.request]) as [keyof Query, BaseRequest<any, any>][];
    const result = await this.executor.push(requests) as Query;
    Object.entries(this.requests).forEach(([s, req]) => {
      const k = s as keyof Query;
      req.resolve([k, result[k]]);
    });
  }
}

export interface BinExecutorOptions {
  defer?: boolean;
  timeout?: number;
}

export class BinExecutor<O> implements Executor<O & BinExecutorOptions> {
  config: RequesterProfile<O & BinExecutorOptions>;
  defaultOptions: O & BinExecutorOptions;
  private bins: ExecutorBin<O>[] = [];
  private executor: Executor<O>;
  constructor(
    config: RequesterProfile<O & BinExecutorOptions>,
    executor: Executor<O>,
    options: O & BinExecutorOptions
  ) {
    this.config = config;
    this.executor = executor;
    this.defaultOptions = options;
  }
  private async run() {
    const bins = this.bins;
    this.bins = [];
    await Promise.all(bins.map(bin => bin.run()));
  }
  private async tryDefer(promise: Promise<any>, options: BinExecutorOptions) {
    if(options.defer) {
      const timeout = setTimeout(() => this.run(), options.timeout);
      const result = await promise;
      clearTimeout(timeout);
      return result;
    } else {
      this.run();
      return await promise;
    }
  }
  async push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: O & BinExecutorOptions): Promise<R> {
    const res = await this.tryDefer(Promise.all(requests.map(([key, request]) => new Promise(res => {
      for(const bin of this.bins) {
        if(!bin.has(key)) return bin.push(key, request, res);
      }
      const bin = new ExecutorBin(this.executor);
      bin.push(key, request, res);
      this.bins.push(bin);
    }))) as Promise<[keyof Query, any][]>, options ?? this.defaultOptions);
    return Object.fromEntries(res) as R;
  }
}

export interface CacheExecutorOptions {
  lifetime?: number;
}

export class CacheExecutor<O> implements Executor<O & CacheExecutorOptions> {
  config: RequesterProfile<O & CacheExecutorOptions>;
  defaultOptions: O & CacheExecutorOptions;
  private executor: Executor<O>;
  private cache: {[K in keyof Query]: {[k: number]: any}} = {};
  constructor(
    config: RequesterProfile<O & CacheExecutorOptions>,
    executor: Executor<O>,
    options: O & CacheExecutorOptions
  ) {
    this.config = config;
    this.executor = executor;
    this.defaultOptions = options;
  }
  private async tryCache(
    key: keyof Query,
    request: BaseRequest<any, any>,
    get: (request: [keyof Query, BaseRequest<any, any>]) => Promise<Query>,
    options: O & CacheExecutorOptions
  ): Promise<any> {
    const hash = request.hash();
    const w = <T, R>(v: T, f: (v: NonNullable<T>) => R): R | undefined => v ? f(v as NonNullable<T>) : undefined;
    this.cache[key] ??= {};
    const cached = this.cache[key]?.[hash];
    if(cached) {
      return [key, cached];
    } else {
      const result = await get([key, request]);
      w(this.cache[key], (c) => c[hash] = result[key]);
      setTimeout(() => delete this.cache[key]?.[hash], options?.lifetime ?? 60_000);
      return [key, result[key]];
    }
  }
  async push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: CacheExecutorOptions & O): Promise<R> {
    const res = await Promise.all(requests.map(([key, request]) => 
      this.tryCache(key, request, (r) => this.executor.push([r], options), options ?? this.defaultOptions)
    ));
    return Object.fromEntries(res) as R;
  }
}

type Constructor<O, N> = new (
  config: RequesterProfile<O & N>,
  executor: Executor<O>,
  options: O & N
) => Executor<O & N>;
export class RequesterProfile<O = {}> {
  _defaultOptions: O = {} as O;
  _executor: Executor<O> = new InstantExecutor(this) as any as Executor<O>;
  _key?: string;
  _log?: (log: ExecutorLog) => void;
  executor<N, E extends Constructor<O, N>>(e: E, options: N): RequesterProfile<O & N> {
    const p = this as any as RequesterProfile<O & N>;
    const newOptions = Object.assign({}, this._defaultOptions, options);
    const executor = new e(p, this._executor, newOptions);
    p._executor = executor;
    return p;
  }
  cache(options?: CacheExecutorOptions): RequesterProfile<O & CacheExecutorOptions> {
    return this.executor(CacheExecutor, options);
  }
  bin(options?: BinExecutorOptions): RequesterProfile<O & BinExecutorOptions> {
    return this.executor(BinExecutor, options);
  }
  key(key: string) {
    this._key = key;
    return this;
  }
  log(log: (log: ExecutorLog) => void) {
    this._log = log;
    return this;
  }
  request() {
    return new RequestBuilder(this._executor);
  }
}