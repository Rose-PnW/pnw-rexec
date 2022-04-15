import { Query } from "./types";
import { Response } from "node-fetch";
import { BaseRequest } from "./request";
export interface Executor {
    push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
}
interface ExecutorLog {
    date: Date;
    query: string;
    response: Response;
}
export declare class InstantExecutor implements Executor {
    push<R>(...requests: [keyof Query, BaseRequest<any, any>][]): Promise<R>;
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
