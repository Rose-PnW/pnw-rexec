import { config } from './executors.js';
import { QueryRequest } from './queries.js';
import { BaseRequest, Request } from './request.js';
import { PaginatorInfo, Query } from "./types.js";

type PaginatorType<T> = {
  data: T[];
  paginatorInfo?: Partial<PaginatorInfo>;
};
interface ParsedPaginatorInfo<T> {
  count: number,
  currentPage: number,
  firstItem?: T,
  lastItem?: T,
  hasMorePages: boolean,
  lastPage: number,
  perPage: number,
  total: number,
}
export class PaginatorReturn<A extends {page?:number|null}, T, R> extends Array<R> {
  info: ParsedPaginatorInfo<R>;
  query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
  constructor(res: PaginatorType<R> | undefined, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>) {
    super();
    if(res) {
      this.push(...res.data);
    }
    this.info = this.parseInfo(res?.paginatorInfo);
    this.query = query;
  }
  parseInfo(info: Partial<PaginatorInfo> | undefined): ParsedPaginatorInfo<R> {
    return {
      count: this.length,
      firstItem: this.length > 0 ? this[0] : undefined,
      lastItem: this.length > 0 ? this[this.length - 1] : undefined,
      currentPage: info?.currentPage ?? 1,
      hasMorePages: info?.hasMorePages ?? false,
      lastPage: info?.lastPage ?? 1,
      perPage: info?.perPage ?? 0,
      total: info?.total ?? 0,
    }
  }
  async fetchMore(): Promise<ParsedPaginatorInfo<R>> {
    if(this.info.hasMorePages) {
      this.info.currentPage += 1;
      const q = this.query as any as QueryRequest<A & {page:number}, PaginatorType<T>, PaginatorType<R>>;
      q.args.page = this.info.currentPage;
      const req = [q.endpoint, q] as [keyof Query, QueryRequest<any, any, any>];
      const res = await config.executor.push(req) as {[K in string]: any};
      const end = res[q.endpoint] as PaginatorType<R>;
      this.push(...end.data);
      this.info = this.parseInfo(end.paginatorInfo);
    }
    return this.info;
  }
  async fetchAll(): Promise<ParsedPaginatorInfo<R>> {
    while(this.info.hasMorePages) await this.fetchMore();
    return this.info;
  }
  async fetchWhile(f: (info: ParsedPaginatorInfo<R>) => boolean) {
    while(f(this.info)) await this.fetchMore();
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
        'total','currentPage','perPage','lastPage','hasMorePages'
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