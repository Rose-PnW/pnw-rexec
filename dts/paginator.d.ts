import { Executor } from './executors.js';
import { QueryRequest } from './queries.js';
import { BaseRequest, Request } from './request.js';
import { PaginatorInfo } from "./types.js";
declare type PaginatorType<T> = {
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
export declare class PaginatorReturn<A extends {
    page?: number | null;
}, T, R, O> extends Array<R> {
    info?: ParsedPaginatorInfo<R>;
    private query?;
    private executor?;
    constructor(length: number);
    constructor(length?: number);
    constructor(...items: R[]);
    constructor(paginator: PaginatorType<R>, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>, executor: Executor<O>);
    private parseInfo;
    fetchMore(options?: O): Promise<ParsedPaginatorInfo<R>>;
    fetchAll(options?: O): Promise<ParsedPaginatorInfo<R>>;
    fetchWhile(f: (info: ParsedPaginatorInfo<R>) => boolean, options?: O): Promise<ParsedPaginatorInfo<R>>;
}
export declare class PaginatorRequest<A, T, R, O> implements BaseRequest<PaginatorType<T>, PaginatorReturn<A, T, R, O>> {
    query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
    executor: Executor<O>;
    constructor(endpoint: string, args: A, request: Request<T, R>, executor: Executor<O>);
    stringify(): string;
    parse(res: PaginatorType<T>): PaginatorReturn<A, T, R, O> | undefined;
    hash(): number;
}
export {};
