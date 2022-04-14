import { PaginatorInfo } from "./types";
declare type PaginatorFields = keyof PaginatorInfo;
export interface Paginator<T, I extends PaginatorFields> {
    data: T;
    paginatorInfo: {
        [K in I]: PaginatorInfo[I];
    };
}
export declare class Paginator<T, I> {
    next(): Promise<void>;
}
export {};
