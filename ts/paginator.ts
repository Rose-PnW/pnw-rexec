import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { BaseRequest, Request } from './request.js';
import { PaginatorInfo, Query } from "./types.js";

type PaginatorType<T> = {
  data: T[];
  paginatorInfo?: { hasMorePages: boolean };
};
export class PaginatorReturn<A extends {page?:number|null}, T, R> extends Array<R> {
  page: number;
  hasMorePages: boolean;
  query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
  constructor(res: PaginatorType<R> | undefined, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>) {
    super();
    if(res) {
      this.push(...res.data);
    }
    this.page = query.args.page ?? 1;
    this.hasMorePages = res?.paginatorInfo?.hasMorePages ?? false;
    this.query = query;
  }
  async fetchMore(): Promise<Partial<PaginatorInfo>> {
    if(this.hasMorePages) {
      this.page += 1;
      const q = this.query as any as QueryRequest<A & {page:number}, PaginatorType<T>, PaginatorType<R>>;
      q.args.page = this.page;
      const req = [q.endpoint, q] as [keyof Query, QueryRequest<any, any, any>];
      const res = await config.executor.push(req) as {[K in string]: any};
      const end = res[q.endpoint] as PaginatorType<R>;
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
  async fetchAll(): Promise<Partial<PaginatorInfo>> {
    while(this.hasMorePages) await this.fetchMore();
    return {
      hasMorePages: this.hasMorePages,
      firstItem: 0,
      count: this.length,
      lastItem: this.length - 1,
      currentPage: this.page,
    };
  }
}
export class PaginatorRequest<A, T, R>
implements
  BaseRequest<PaginatorType<T>, PaginatorReturn<A, T, R>>
{
  query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
  constructor(endpoint: string, args: A, request: Request<T, R>) {
    const r: Request<PaginatorType<T>, {}> = new Request();
    this.query = new QueryRequest(endpoint, args, r
      .child('data', () => request)
      .child('paginatorInfo', p => p.fields('hasMorePages'))
    );
  }
  stringify(): string {
    return this.query.stringify();
  }
  parse(res: PaginatorType<T>): PaginatorReturn<A, T, R> | undefined {
    const r = this.query.parse(res);
    return new PaginatorReturn(r, this.query);
  }
}