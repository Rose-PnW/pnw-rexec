import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { BaseRequest, Request } from './request.js';
import { PaginatorInfo, Query } from "./types.js";

type PaginatorType<T> = {
  data: T[];
  paginatorInfo?: PaginatorInfo;
};
export class PaginatorReturn<A extends {page?:number|null}, T, R> extends Array<R> {
  info: PaginatorInfo;
  query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
  constructor(res: PaginatorType<R> | undefined, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>) {
    super();
    if(res) {
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
    }
    this.query = query;
  }
  async fetchMore(): Promise<Partial<PaginatorInfo>> {
    if(this.info.hasMorePages) {
      this.info.currentPage += 1;
      const q = this.query as any as QueryRequest<A & {page:number}, PaginatorType<T>, PaginatorType<R>>;
      q.args.page = this.info.currentPage;
      const req = [q.endpoint, q] as [keyof Query, QueryRequest<any, any, any>];
      const res = await config.executor.push(req) as {[K in string]: any};
      const end = res[q.endpoint] as PaginatorType<R>;
      this.push(...end.data);
      Object.assign(this.info, end.paginatorInfo);
    }
    return this.info;
  }
  async fetchAll(): Promise<Partial<PaginatorInfo>> {
    while(this.info.hasMorePages) await this.fetchMore();
    return this.info;
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
      .child('paginatorInfo', p => p.fields(
        'firstItem','count','lastItem','total',
        'currentPage','perPage','lastPage','hasMorePages'
      ))
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