import { Executor } from './executors.js';
import { Arguments, BaseRequest, QueryRequest, Request } from './request.js';
import { PaginatorInfo } from "./types.js";
type PaginatorType<T> = {
    data: T[];
    paginatorInfo?: Partial<PaginatorInfo>;
};
interface ParsedPaginatorInfo<T> {
    count: number;
    currentPage: number;
    firstItem?: T;
    lastItem?: T;
    hasMorePages: boolean;
    lastPage: number;
    perPage: number;
    total: number;
}
type PaginatorArgs<T> = Arguments<T> extends {
    page?: number | null;
} ? Arguments<T> : never;
export declare class PaginatorReturn<T, R, O, A extends {} = PaginatorArgs<T>> extends Array<R> {
    info?: ParsedPaginatorInfo<R>;
    private query?;
    private executor?;
    constructor(length: number);
    constructor(length?: number);
    constructor(...items: R[]);
    constructor(paginator: PaginatorType<R>, query: QueryRequest<PaginatorType<T>, PaginatorType<R>, A>, executor: Executor<O>);
    private parseInfo;
    fetchMore(options?: O): Promise<ParsedPaginatorInfo<R>>;
    fetchAll(options?: O): Promise<ParsedPaginatorInfo<R>>;
    fetchWhile(f: (info: ParsedPaginatorInfo<R>) => boolean, options?: O): Promise<ParsedPaginatorInfo<R>>;
}
export declare class PaginatorRequest<T, R, O, A extends {} = PaginatorArgs<T>> implements BaseRequest<PaginatorType<T>, PaginatorReturn<T, R, O, A>> {
    query: QueryRequest<PaginatorType<T>, PaginatorType<R>, A>;
    executor: Executor<O>;
    constructor(endpoint: string, args: A, request: Request<T, R>, executor: Executor<O>);
    stringify(): string;
    parse(res: PaginatorType<T>): PaginatorReturn<T, R, O, A> | undefined;
    hash(): number;
}
export {};
