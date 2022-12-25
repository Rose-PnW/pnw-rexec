import { Executor } from './executors.js';
import { Arguments, BaseRequest, QueryRequest, Request } from './request.js';
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
type PaginatorArgs<T> = Arguments<T> extends {page?:number|null} ? Arguments<T> : never;
export class PaginatorReturn<T, R, O, A extends {} = PaginatorArgs<T>> extends Array<R> {
  info?: ParsedPaginatorInfo<R>;
  private query?: QueryRequest<PaginatorType<T>, PaginatorType<R>, A>;
  private executor?: Executor<O>;
  constructor(length: number);
  constructor(length?: number);
  constructor(...items: R[]);
  constructor(
    paginator: PaginatorType<R>,
    query: QueryRequest<PaginatorType<T>, PaginatorType<R>, A>,
    executor: Executor<O>
  );
  constructor(
    first?: number | R | PaginatorType<R> | undefined,
    second?: QueryRequest<PaginatorType<T>, PaginatorType<R>, A> | R | undefined,
    third?: Executor<O> | undefined,
    ...rest: R[]
  ) {
    super();
    if(second) {
      if(
        Object.hasOwnProperty.call(first, 'data') &&
        Object.hasOwnProperty.call(first, 'paginatorInfo') &&
        second instanceof QueryRequest
      ) {
        this.query = second as QueryRequest<PaginatorType<T>, PaginatorType<R>, A>;
        const res = first as PaginatorType<R>;
        this.push(...res.data);
        this.info = this.parseInfo(res.paginatorInfo);
        this.executor = third as Executor<O>;
      } else {
        this.push(first as R, second as R, ...rest);
      }
    } else if(typeof first === 'number') {
      this.length = first;
    } else if(first) {
      this.push(first as R);
    }
  }
  private parseInfo(info: Partial<PaginatorInfo> | undefined): ParsedPaginatorInfo<R> {
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
  async fetchMore(options?: O): Promise<ParsedPaginatorInfo<R>> {
    if(this.info?.hasMorePages) {
      this.info.currentPage += 1;
      const q = this.query as QueryRequest<PaginatorType<T>, PaginatorType<R>, A & {page:number}>;
      q.args.page = this.info.currentPage;
      const req = [q.endpoint, q] as [keyof Query, QueryRequest<any, any, any>];
      const res = await this.executor?.push([req], options) as {[K in string]: any};
      const end = res[q.endpoint] as PaginatorType<R>;
      this.push(...end.data);
      this.info = this.parseInfo(end.paginatorInfo);
    }
    return this.info as ParsedPaginatorInfo<R>;
  }
  async fetchAll(options?: O): Promise<ParsedPaginatorInfo<R>> {
    while(this.info?.hasMorePages) await this.fetchMore(options);
    return this.info as ParsedPaginatorInfo<R>;
  }
  async fetchWhile(f: (info: ParsedPaginatorInfo<R>) => boolean, options?: O) {
    if(this.info) {
      while(f(this.info)) await this.fetchMore(options);
    }
    return this.info as ParsedPaginatorInfo<R>;
  }
}
export class PaginatorRequest<T, R, O, A extends {} = PaginatorArgs<T>>
implements
  BaseRequest<PaginatorType<T>, PaginatorReturn<T, R, O, A>>
{
  query: QueryRequest<PaginatorType<T>, PaginatorType<R>, A>;
  executor: Executor<O>;
  constructor(endpoint: string, args: A, request: Request<T, R>, executor: Executor<O>) {
    const r: Request<PaginatorType<T>, {}> = new Request();
    this.query = new QueryRequest(endpoint, args, r
      .child('data', () => request)
      .child('paginatorInfo', p => p.fields(
        'total','currentPage','perPage','lastPage','hasMorePages'
      ))
    );
    this.executor = executor;
  }
  stringify(): string {
    return this.query.stringify();
  }
  parse(res: PaginatorType<T>): PaginatorReturn<T, R, O, A> | undefined {
    const r = this.query.parse(res);
    return new PaginatorReturn(r as PaginatorType<R>, this.query, this.executor);
  }
  hash(): number {
    return this.query.hash();
  }
}