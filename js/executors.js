import fetch from "node-fetch";
function url() {
    if (config.key) {
        return `https://api.politicsandwar.com/graphql?api_key=${config.key}`;
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
            const query = `{${queries.join(' ')}}`;
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
            config.log?.(log);
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
export const config = new RequesterConfig();
