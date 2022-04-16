import { QueryRequest } from './queries.js';
import { Request } from './request.js';
export class PaginatorReturn extends Array {
    constructor(first, second, third, ...rest) {
        super();
        if (second) {
            if (Object.hasOwnProperty.call(first, 'data') &&
                Object.hasOwnProperty.call(first, 'paginatorInfo') &&
                second instanceof QueryRequest) {
                this.query = second;
                const res = first;
                this.push(...res.data);
                this.info = this.parseInfo(res.paginatorInfo);
                this.executor = third;
            }
            else {
                this.push(first, second, ...rest);
            }
        }
        else if (typeof first === 'number') {
            this.length = first;
        }
        else if (first) {
            this.push(first);
        }
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
    async fetchMore(options) {
        if (this.info?.hasMorePages) {
            this.info.currentPage += 1;
            const q = this.query;
            q.args.page = this.info.currentPage;
            const req = [q.endpoint, q];
            const res = await this.executor?.push([req], options);
            const end = res[q.endpoint];
            this.push(...end.data);
            this.info = this.parseInfo(end.paginatorInfo);
        }
        return this.info;
    }
    async fetchAll(options) {
        while (this.info?.hasMorePages)
            await this.fetchMore(options);
        return this.info;
    }
    async fetchWhile(f, options) {
        if (this.info) {
            while (f(this.info))
                await this.fetchMore(options);
        }
        return this.info;
    }
}
export class PaginatorRequest {
    constructor(endpoint, args, request, executor) {
        const r = new Request();
        this.query = new QueryRequest(endpoint, args, r
            .child('data', () => request)
            .child('paginatorInfo', p => p.fields('total', 'currentPage', 'perPage', 'lastPage', 'hasMorePages')));
        this.executor = executor;
    }
    stringify() {
        return this.query.stringify();
    }
    parse(res) {
        const r = this.query.parse(res);
        return new PaginatorReturn(r, this.query, this.executor);
    }
    hash() {
        return this.query.hash();
    }
}
