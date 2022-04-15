import { Response } from "node-fetch";
import { BaseRequest } from "./request.js";
import { Query } from "./types.js";
export interface Executor {
    push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
    pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}
interface ExecutorLog {
    date: Date;
    query: string;
    response: Response;
}
export declare class InstantExecutor implements Executor {
    push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
    pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}
export declare class BinExecutor implements Executor {
    private bins;
    private executor;
    private running;
    private interval;
    constructor(executor: Executor, interval: number);
    private run;
    push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
    pushSlow<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}
declare class RequesterConfig {
    executor: Executor;
    key?: string;
    log?: (log: ExecutorLog) => void;
    withExecutor(executor: Executor): void;
    withKey(key: string): void;
    withLog(log: (log: ExecutorLog) => void): void;
}
export declare const requesterConfig: RequesterConfig;
export {};
