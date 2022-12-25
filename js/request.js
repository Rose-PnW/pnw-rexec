export class RawArg {
    constructor(inner) {
        this.inner = inner;
    }
}
export function Raw(inner) {
    return new RawArg(inner);
}
export class QueryRequest {
    constructor(endpoint, args, request) {
        this.endpoint = endpoint;
        this.args = args;
        this.request = request;
    }
    stringify() {
        if (Object.keys(this.args).length > 0) {
            const args = Object.entries(this.args).map(([k, v]) => `${k}:${stringifyArgs(v)}`).join(' ');
            return `${this.endpoint}(${args}){${this.request.stringify()}}`;
        }
        else {
            return `${this.endpoint}{${this.request.stringify()}}`;
        }
    }
    parse(res) {
        return this.request.parse(res);
    }
    hash() {
        const args = stringifyArgs(this.args);
        const req = this.request.hash();
        let hash = 0;
        for (const c of args)
            hash = ((hash << 5) - hash) + c.charCodeAt(0);
        hash = ((hash << 5) - hash) + req;
        return hash;
    }
}
export class Request {
    constructor() {
        this._fields = [];
    }
    static new() {
        return new Request();
    }
    fields(...fields) {
        const r = this;
        r._fields.push(...fields.map(f => f.toString()));
        return r;
    }
    child(key, second, third) {
        const f = (third === undefined ? second : third);
        const r = this;
        const child = f(Request.new());
        if (second === undefined) {
            r._fields.push(`${key.toString()}{${child.stringify()}}`);
        }
        else {
            const cr = new QueryRequest(key, second, child);
            r._fields.push(`${cr.stringify()}`);
        }
        return r;
    }
    stringify() {
        return this._fields.sort().join(' ');
    }
    parse(response) {
        if (response) {
            return response;
        }
    }
    hash() {
        const s = this.stringify();
        let hash = 0;
        for (const c of s)
            hash = ((hash << 5) - hash) + c.charCodeAt(0);
        return hash;
    }
}
function stringifyObjArgs(args) {
    if (typeof args === 'string') {
        return args;
    }
    else {
        return stringifyArgs(args);
    }
}
export function stringifyArgs(args) {
    if (args instanceof RawArg) {
        return args.inner;
    }
    else if (Array.isArray(args)) {
        return `[${args
            .sort()
            .map((v) => `${stringifyArgs(v)}`)
            .join(',')}]`;
    }
    else if (typeof args === 'object' && args) {
        return `{${Object
            .entries(args)
            .sort(([a], [b]) => a > b ? -1 : a === b ? 0 : 1)
            .map(([k, v]) => `${k}:${stringifyObjArgs(v)}`).join(' ')}}`;
    }
    else if (typeof args === 'string') {
        return `"${args}"`;
    }
    else {
        return String(args);
    }
}
