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
}, T, R> extends Array<R> {
    info: ParsedPaginatorInfo<R>;
    query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
    constructor(res: PaginatorType<R> | undefined, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>);
    parseInfo(info: Partial<PaginatorInfo> | undefined): ParsedPaginatorInfo<R>;
    fetchMore(): Promise<ParsedPaginatorInfo<R>>;
    fetchAll(): Promise<ParsedPaginatorInfo<R>>;
    fetchWhile(f: (info: ParsedPaginatorInfo<R>) => boolean): Promise<ParsedPaginatorInfo<R>>;
}
export declare class PaginatorRequest<A, T, R> implements BaseRequest<PaginatorType<T>, PaginatorReturn<A, T, R>> {
    query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: PaginatorType<T>): PaginatorReturn<A, T, R> | undefined;
}
export {};
