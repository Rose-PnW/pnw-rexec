import fetch, { Response } from "node-fetch";
import { BaseRequest } from "./request.js";
import { Query, TradeType } from "./types.js";

export interface Executor {
  push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
  pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}

function url() {
  if(requesterConfig.key) {
    return `https://api.politicsandwar.com/graphql?api_key=${requesterConfig.key}`;
  } else {
    throw new Error("No API key provided");
  }
}

class QueryError extends Error {
	constructor(response: Response, query: string) {
		super(`GraphQL Query Error: ${response.status} ${response.statusText} ${query}`);
	}
}

interface ExecutorLog {
  date: Date;
  query: string;
  response: Response;
}

export class InstantExecutor implements Executor {
  async push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    while(true) {
      const queries: string[] = requests.map(([_, req]) => req.stringify());
      const query = `{${queries.join('')}}`;
      const response = await fetch(url(), {
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
      requesterConfig.log?.(log);
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
  async pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    return this.push(...requests);
  }
}

interface SleepingRequest {
  request: BaseRequest<any, any>,
  resolve: (result: any) => void,
}

class ExecutorBin {
  private requests: {[K in keyof Query]: SleepingRequest} = {};
  private executor: Executor;
  constructor(executor: Executor) {
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
    const result = await this.executor.push(...requests) as Query;
    Object.entries(this.requests).forEach(([s, req]) => {
      const k = s as keyof Query;
      req.resolve([k, result[k]]);
    });
  }
}

export class BinExecutor implements Executor {
  private bins: ExecutorBin[] = [];
  private executor: Executor;
  private interval: number;
  constructor(executor: Executor, interval: number) {
    this.executor = executor;
    this.interval = interval;
  }
  private async run() {
    const bins = this.bins;
    this.bins = [];
    await Promise.all(bins.map(bin => bin.run()));
  }
  async push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    const p = this.pushSlow(...requests) as Promise<R>;
    this.run();
    return await p;
  }
  async pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    const timeout = setTimeout(() => this.run(), this.interval);
    const res = await Promise.all(requests.map(([key, request]) => new Promise(res => {
      for(const bin of this.bins) {
        if(!bin.has(key)) return bin.push(key, request, res);
      }
      const bin = new ExecutorBin(this.executor);
      bin.push(key, request, res);
      this.bins.push(bin);
    }))) as [keyof Query, any][];
    clearTimeout(timeout);
    return Object.fromEntries(res) as R;
  }
}

export class CacheExecutor implements Executor {
  private executor: Executor;
  private cache: {[K in keyof Query]: {[k: number]: any}} = {};
  private lifetime: number;
  constructor(executor: Executor, lifetime: number) {
    this.executor = executor;
    this.lifetime = lifetime;
  }
  private async tryCache(
    key: keyof Query,
    request: BaseRequest<any, any>,
    get: (request: [keyof Query, BaseRequest<any, any>]) => Promise<Query>
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
      setTimeout(() => delete this.cache[key]?.[hash], this.lifetime);
      return [key, result[key]];
    }
  }
  async push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    const res = await Promise.all(requests.map(([key, request]) => this.tryCache(key, request, (r) => this.executor.push(r))));
    return Object.fromEntries(res) as R;
  }
  async pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R> {
    const res = await Promise.all(requests.map(([key, request]) => this.tryCache(key, request, (r) => this.executor.pushSlow(r))));
    return Object.fromEntries(res) as R;
  }
}

class RequesterConfig {
  executor: Executor = new InstantExecutor();
  key?: string;
  log?: (log: ExecutorLog) => void;
  withExecutor(executor: Executor) {
    this.executor = executor;
  }
  withKey(key: string) {
    this.key = key;
  }
  withLog(log: (log: ExecutorLog) => void) {
    this.log = log;
  }
}

export const requesterConfig = new RequesterConfig();