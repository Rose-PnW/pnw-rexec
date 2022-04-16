import { Response } from "node-fetch";
import { RequestBuilder } from "./queries.js";
import { BaseRequest } from "./request.js";
import { Query } from "./types.js";
export interface Executor<O> {
    config: RequesterProfile<O>;
    defaultOptions: O;
    push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: O | undefined): Promise<R>;
}
export interface ExecutorLog {
    date: Date;
    query: string;
    response: Response;
}
export declare class InstantExecutor implements Executor<{}> {
    config: RequesterProfile<{}>;
    defaultOptions: {};
    constructor(config: RequesterProfile<{}>);
    private url;
    push<R>(requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}
export interface SleepingRequest {
    request: BaseRequest<any, any>;
    resolve: (result: any) => void;
}
export interface BinExecutorOptions {
    defer?: boolean;
    timeout?: number;
}
export declare class BinExecutor<O> implements Executor<O & BinExecutorOptions> {
    config: RequesterProfile<O & BinExecutorOptions>;
    defaultOptions: O & BinExecutorOptions;
    private bins;
    private executor;
    constructor(config: RequesterProfile<O & BinExecutorOptions>, executor: Executor<O>, options: O & BinExecutorOptions);
    private run;
    private tryDefer;
    push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: O & BinExecutorOptions): Promise<R>;
}
export interface CacheExecutorOptions {
    lifetime?: number;
}
export declare class CacheExecutor<O> implements Executor<O & CacheExecutorOptions> {
    config: RequesterProfile<O & CacheExecutorOptions>;
    defaultOptions: O & CacheExecutorOptions;
    private executor;
    private cache;
    constructor(config: RequesterProfile<O & CacheExecutorOptions>, executor: Executor<O>, options: O & CacheExecutorOptions);
    private tryCache;
    push<R>(requests: [keyof Query, BaseRequest<any, any>][], options?: CacheExecutorOptions & O): Promise<R>;
}
declare type Constructor<O, N> = new (config: RequesterProfile<O & N>, executor: Executor<O>, options: O & N) => Executor<O & N>;
export declare class RequesterProfile<O = {}> {
    _defaultOptions: O;
    _executor: Executor<O>;
    _key?: string;
    _log?: (log: ExecutorLog) => void;
    executor<N, E extends Constructor<O, N>>(e: E, options: N): RequesterProfile<O & N>;
    cache(options?: CacheExecutorOptions): RequesterProfile<O & CacheExecutorOptions>;
    bin(options?: BinExecutorOptions): RequesterProfile<O & BinExecutorOptions>;
    key(key: string): this;
    log(log: (log: ExecutorLog) => void): this;
    request(): RequestBuilder<O, {}>;
}
export {};
