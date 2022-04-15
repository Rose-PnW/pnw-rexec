declare type Child<T> = T extends (infer U)[] ? NonNullable<U> : NonNullable<T>;
declare type ChildReturn<T, R> = T extends any[] ? R[] : R;
declare type ChildrenKeys<T> = Exclude<keyof T, PrimitiveKeys<T>>;
declare type PrimitiveKeys<T> = {
    [K in keyof T]: T[K] extends string | number | boolean | null | undefined ? K : never;
}[keyof T];
export interface BaseRequest<ApiType, Return> {
    stringify(): string;
    parse(response: ApiType | null): Return | undefined;
    hash(): number;
}
export declare class Request<ApiType, Return> implements BaseRequest<ApiType, Return> {
    _fields: string[];
    static new<T, R>(): Request<T, R>;
    fields<F extends PrimitiveKeys<ApiType>>(...fields: F[]): Request<ApiType, Return & {
        [K in F]: ApiType[K];
    }>;
    child<R, F extends ChildrenKeys<ApiType>>(key: F, f: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>): Request<ApiType, Return & {
        [K in F]: ChildReturn<ApiType[F], R>;
    }>;
    stringify(): string;
    parse(response: ApiType | null): Return | undefined;
    hash(): number;
}
export declare function stringifyArgs<A>(args: A): string;
export {};
