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
    child(key, f) {
        const r = this;
        const child = f(Request.new());
        r._fields.push(`${key}{${child.stringify()}}`);
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
export function stringifyArgs(args) {
    if (Array.isArray(args)) {
        return `[${args
            .sort()
            .map((v) => `${stringifyArgs(v)}`)
            .join(',')}]`;
    }
    else if (typeof args === 'object') {
        return `{${Object
            .entries(args)
            .sort(([a], [b]) => a > b ? -1 : a === b ? 0 : 1)
            .map(([k, v]) => `${k}:${stringifyArgs(v)}`).join(' ')}}`;
    }
    else {
        return `"${args}"`;
    }
}
