import { QueryRequest } from './queries.js';
import { BaseRequest, Request } from './request.js';
import { PaginatorInfo } from "./types.js";
declare type PaginatorType<T> = {
    data: T[];
    paginatorInfo?: Partial<PaginatorInfo>;
};
export declare class PaginatorReturn<A extends {
    page?: number | null;
}, T, R> extends Array<R> {
    info: PaginatorInfo;
    query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
    constructor(res: PaginatorType<R> | undefined, query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>);
    fetchMore(): Promise<Partial<PaginatorInfo>>;
    fetchAll(): Promise<Partial<PaginatorInfo>>;
}
export declare class PaginatorRequest<A, T, R> implements BaseRequest<PaginatorType<T>, PaginatorReturn<A, T, R>> {
    query: QueryRequest<A, PaginatorType<T>, PaginatorType<R>>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: PaginatorType<T>): PaginatorReturn<A, T, R> | undefined;
}
export {};
