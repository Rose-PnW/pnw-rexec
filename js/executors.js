import fetch from "node-fetch";
function url() {
    if (requesterConfig.key) {
        return `https://api.politicsandwar.com/graphql?api_key=${requesterConfig.key}`;
    }
    else {
        throw new Error("No API key provided");
    }
}
class QueryError extends Error {
    constructor(response, query) {
        super(`GraphQL Query Error: ${response.status} ${response.statusText} ${query}`);
    }
}
export class InstantExecutor {
    async push(...requests) {
        while (true) {
            const queries = requests.map(([_, req]) => req.stringify());
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
    async pushSlow(...requests) {
        return this.push(...requests);
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
    push(key, request, resolve) {
        this.requests[key] = {
            request,
            resolve
        };
    }
    async run() {
        const requests = Object.entries(this.requests).map(([k, req]) => [k, req.request]);
        const result = await this.executor.push(...requests);
        Object.entries(this.requests).forEach(([s, req]) => {
            const k = s;
            req.resolve([k, result[k]]);
        });
    }
}
export class BinExecutor {
    constructor(executor, interval) {
        this.bins = [];
        this.executor = executor;
        this.interval = interval;
    }
    async run() {
        const bins = this.bins;
        this.bins = [];
        await Promise.all(bins.map(bin => bin.run()));
    }
    async push(...requests) {
        const p = this.pushSlow(...requests);
        this.run();
        return await p;
    }
    async pushSlow(...requests) {
        const timeout = setTimeout(() => this.run(), this.interval);
        const res = await Promise.all(requests.map(([key, request]) => new Promise(res => {
            for (const bin of this.bins) {
                if (!bin.has(key))
                    return bin.push(key, request, res);
            }
            const bin = new ExecutorBin(this.executor);
            bin.push(key, request, res);
            this.bins.push(bin);
        })));
        clearTimeout(timeout);
        return Object.fromEntries(res);
    }
}
export class CacheExecutor {
    constructor(executor, lifetime) {
        this.cache = {};
        this.executor = executor;
        this.lifetime = lifetime;
    }
    async tryCache(key, request, get) {
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
            setTimeout(() => delete this.cache[key]?.[hash], this.lifetime);
            return [key, result[key]];
        }
    }
    async push(...requests) {
        const res = await Promise.all(requests.map(([key, request]) => this.tryCache(key, request, (r) => this.executor.push(r))));
        return Object.fromEntries(res);
    }
    async pushSlow(...requests) {
        const res = await Promise.all(requests.map(([key, request]) => this.tryCache(key, request, (r) => this.executor.pushSlow(r))));
        return Object.fromEntries(res);
    }
}
class RequesterConfig {
    constructor() {
        this.executor = new InstantExecutor();
    }
    withExecutor(executor) {
        this.executor = executor;
    }
    withKey(key) {
        this.key = key;
    }
    withLog(log) {
        this.log = log;
    }
}
export const requesterConfig = new RequesterConfig();
