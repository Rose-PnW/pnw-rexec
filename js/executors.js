import fetch from "node-fetch";
import { RequestBuilder } from "./queries.js";
class QueryError extends Error {
    constructor(response, query) {
        super(`GraphQL Query Error: ${response.status} ${response.statusText} ${query}`);
    }
}
export class InstantExecutor {
    constructor(config) {
        this.defaultOptions = {};
        this.config = config;
    }
    url() {
        if (this.config._key) {
            return `https://api.politicsandwar.com/graphql?api_key=${this.config._key}`;
        }
        else {
            throw new Error("No API key provided");
        }
    }
    async push(requests) {
        while (true) {
            const queries = requests.map(([_, req]) => req.stringify());
            const query = `{${queries.join('')}}`;
            const response = await fetch(this.url(), {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: `{"query":"${query.replaceAll('"', '\\"')}"}`,
            });
            const log = {
                date: new Date(),
                query,
                response
            };
            this.config._log?.(log);
            if (response.ok) {
                const query = await response.json();
                if (query.errors?.length > 0) {
                    throw new QueryError(response, JSON.stringify(query.errors));
                }
                else {
                    const data = query.data;
                    const result = Object.fromEntries(requests.map(([k, r]) => [k, r.parse(data[k])]));
                    return result;
                }
            }
            else {
                if (response.status === 429) {
                    const seconds = Number(response.headers.get("x-ratelimit-reset-after"));
                    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
                }
                else {
                    throw new QueryError(response, query);
                }
            }
        }
    }
}
class ExecutorBin {
    constructor(executor) {
        this.requests = {};
        this.executor = executor;
    }
    has(key) {
        return this.requests[key] !== undefined;
    }
    push(key, request, resolve, reject) {
        this.requests[key] = {
            request,
            resolve,
            reject
        };
    }
    async run() {
        const entries = Object.entries(this.requests);
        const requests = entries.map(([k, req]) => [k, req.request]);
        try {
            const result = await this.executor.push(requests);
            entries.forEach(([k, req]) => req.resolve([k, result[k]]));
        }
        catch (err) {
            entries.forEach(([_, req]) => req.reject(err));
        }
    }
}
export class BinExecutor {
    constructor(config, executor, options) {
        this.bins = [];
        this.config = config;
        this.executor = executor;
        this.defaultOptions = options;
    }
    async run() {
        const bins = this.bins;
        this.bins = [];
        await Promise.all(bins.map(bin => bin.run()));
    }
    async tryDefer(promise, options) {
        if (options.defer) {
            const timeout = setTimeout(() => this.run(), options.timeout);
            const result = await promise;
            clearTimeout(timeout);
            return result;
        }
        else {
            this.run();
            return await promise;
        }
    }
    async push(requests, options) {
        const res = await this.tryDefer(Promise.all(requests.map(([key, request]) => new Promise((res, rej) => {
            for (const bin of this.bins) {
                if (!bin.has(key))
                    return bin.push(key, request, res, rej);
            }
            const bin = new ExecutorBin(this.executor);
            bin.push(key, request, res, rej);
            this.bins.push(bin);
        }))), options ?? this.defaultOptions);
        return Object.fromEntries(res);
    }
}
export class CacheExecutor {
    constructor(config, executor, options) {
        this.cache = {};
        this.config = config;
        this.executor = executor;
        this.defaultOptions = options;
    }
    async tryCache(key, request, get, options) {
        const hash = request.hash();
        const w = (v, f) => v ? f(v) : undefined;
        this.cache[key] ??= {};
        const cached = this.cache[key]?.[hash];
        if (cached) {
            return [key, cached];
        }
        else {
            const result = await get([key, request]);
            w(this.cache[key], (c) => c[hash] = result[key]);
            setTimeout(() => delete this.cache[key]?.[hash], options?.lifetime ?? 60000);
            return [key, result[key]];
        }
    }
    async push(requests, options) {
        if (options?.cache) {
            const res = await Promise.all(requests.map(([key, request]) => this.tryCache(key, request, (r) => this.executor.push([r], options), options ?? this.defaultOptions)));
            return Object.fromEntries(res);
        }
        else {
            return this.executor.push(requests, options);
        }
    }
}
export class RequesterProfile {
    constructor() {
        this._defaultOptions = {};
        this._executor = new InstantExecutor(this);
    }
    executor(e, options) {
        const p = this;
        const newOptions = Object.assign(this._defaultOptions, options);
        const executor = new e(p, this._executor, newOptions);
        p._executor = executor;
        return p;
    }
    cache(options) {
        return this.executor(CacheExecutor, options);
    }
    bin(options) {
        return this.executor(BinExecutor, options);
    }
    key(key) {
        this._key = key;
        return this;
    }
    log(log) {
        this._log = log;
        return this;
    }
    request() {
        return new RequestBuilder(this._executor);
    }
}
