import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { Request } from './request.js';
export class PaginatorReturn extends Array {
    constructor(res, query) {
        super();
        if (res) {
            this.push(...res.data);
        }
        this.info = this.parseInfo(res?.paginatorInfo);
        this.query = query;
    }
    parseInfo(info) {
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
    }
    async fetchMore() {
        if (this.info.hasMorePages) {
            this.info.currentPage += 1;
            const q = this.query;
            q.args.page = this.info.currentPage;
            const req = [q.endpoint, q];
            const res = await config.executor.push(req);
            const end = res[q.endpoint];
            this.push(...end.data);
            this.info = this.parseInfo(end.paginatorInfo);
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
}
