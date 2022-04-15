import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { Request } from './request.js';
export class PaginatorReturn extends Array {
    constructor(res, query) {
        super();
        if (res) {
            this.push(...res.data);
        }
        this.page = query.args.page ?? 1;
        this.hasMorePages = res?.paginatorInfo?.hasMorePages ?? false;
        this.query = query;
    }
    async fetchMore() {
        if (this.hasMorePages) {
            this.page += 1;
            const q = this.query;
            q.args.page = this.page;
            const req = [q.endpoint, q];
            const res = await config.executor.push(req);
            const end = res[q.endpoint];
            this.push(...end.data);
            this.hasMorePages = end.paginatorInfo?.hasMorePages ?? false;
            return {
                hasMorePages: this.hasMorePages,
                firstItem: 0,
                count: end.data.length,
                lastItem: this.length - 1,
                currentPage: this.page,
            };
        }
        return {
            hasMorePages: this.hasMorePages,
            firstItem: 0,
            count: 0,
            lastItem: this.length - 1,
            currentPage: this.page,
        };
    }
    async fetchAll() {
        while (this.hasMorePages)
            await this.fetchMore();
        return {
            hasMorePages: this.hasMorePages,
            firstItem: 0,
            count: this.length,
            lastItem: this.length - 1,
            currentPage: this.page,
        };
    }
}
export class PaginatorRequest {
    constructor(endpoint, args, request) {
        const r = new Request();
        this.query = new QueryRequest(endpoint, args, r
            .child('data', () => request)
            .child('paginatorInfo', p => p.fields('hasMorePages')));
    }
    stringify() {
        return this.query.stringify();
    }
    parse(res) {
        const r = this.query.parse(res);
        return new PaginatorReturn(r, this.query);
    }
}
