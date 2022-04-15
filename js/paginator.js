import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { Request } from './request.js';
export class PaginatorReturn extends Array {
    constructor(res, query) {
        super();
        if (res) {
            this.push(...res.data);
        }
        this.info = {
            count: res?.paginatorInfo?.count ?? 0,
            firstItem: res?.paginatorInfo?.firstItem,
            lastItem: res?.paginatorInfo?.lastItem,
            currentPage: res?.paginatorInfo?.currentPage ?? 1,
            hasMorePages: res?.paginatorInfo?.hasMorePages ?? false,
            lastPage: res?.paginatorInfo?.lastPage ?? 1,
            perPage: res?.paginatorInfo?.perPage ?? 0,
            total: res?.paginatorInfo?.total ?? 0,
        };
        this.query = query;
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
            Object.assign(this.info, end.paginatorInfo);
        }
        return this.info;
    }
    async fetchAll() {
        while (this.info.hasMorePages)
            await this.fetchMore();
        return this.info;
    }
}
export class PaginatorRequest {
    constructor(endpoint, args, request) {
        const r = new Request();
        this.query = new QueryRequest(endpoint, args, r
            .child('data', () => request)
            .child('paginatorInfo', p => p.fields('firstItem', 'count', 'lastItem', 'total', 'currentPage', 'perPage', 'lastPage', 'hasMorePages')));
    }
    stringify() {
        return this.query.stringify();
    }
    parse(res) {
        const r = this.query.parse(res);
        return new PaginatorReturn(r, this.query);
    }
}
