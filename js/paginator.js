var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PaginatorReturn_instances, _PaginatorReturn_parseInfo;
import { requesterConfig } from './executors.js';
import { QueryRequest } from './queries.js';
import { Request } from './request.js';
export class PaginatorReturn extends Array {
    constructor(res, query) {
        super();
        _PaginatorReturn_instances.add(this);
        if (res) {
            this.push(...res.data);
        }
        this.info = __classPrivateFieldGet(this, _PaginatorReturn_instances, "m", _PaginatorReturn_parseInfo).call(this, res?.paginatorInfo);
        this.query = query;
    }
    async fetchMore() {
        if (this.info.hasMorePages) {
            this.info.currentPage += 1;
            const q = this.query;
            q.args.page = this.info.currentPage;
            const req = [q.endpoint, q];
            const res = await requesterConfig.executor.push(req);
            const end = res[q.endpoint];
            this.push(...end.data);
            this.info = __classPrivateFieldGet(this, _PaginatorReturn_instances, "m", _PaginatorReturn_parseInfo).call(this, end.paginatorInfo);
        }
        return this.info;
    }
    async fetchAll() {
        while (this.info.hasMorePages)
            await this.fetchMore();
        return this.info;
    }
    async fetchWhile(f) {
        while (f(this.info))
            await this.fetchMore();
        return this.info;
    }
}
_PaginatorReturn_instances = new WeakSet(), _PaginatorReturn_parseInfo = function _PaginatorReturn_parseInfo(info) {
    return {
        count: this.length,
        firstItem: this.length > 0 ? this[0] : undefined,
        lastItem: this.length > 0 ? this[this.length - 1] : undefined,
        currentPage: info?.currentPage ?? 1,
        hasMorePages: info?.hasMorePages ?? false,
        lastPage: info?.lastPage ?? 1,
        perPage: info?.perPage ?? 0,
        total: info?.total ?? 0,
    };
};
export class PaginatorRequest {
    constructor(endpoint, args, request) {
        const r = new Request();
        this.query = new QueryRequest(endpoint, args, r
            .child('data', () => request)
            .child('paginatorInfo', p => p.fields('total', 'currentPage', 'perPage', 'lastPage', 'hasMorePages')));
    }
    stringify() {
        return this.query.stringify();
    }
    parse(res) {
        const r = this.query.parse(res);
        return new PaginatorReturn(r, this.query);
    }
    hash() {
        return this.query.hash();
    }
}
