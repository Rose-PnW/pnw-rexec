import { QueryRequest } from "./queries";
import { Query } from "./types";
import { Response } from "node-fetch";
export interface Executor {
    push<R>(requests: {
        [K in keyof Query]: QueryRequest<any, any, any>;
    }): Promise<R>;
}
interface ExecutorLog {
    date: Date;
    query: string;
    response: Response;
}
export declare class InstantExecutor implements Executor {
    push<R>(requests: {
        [K in keyof Query]: QueryRequest<any, any, any>;
    }): Promise<R>;
}
declare class RequesterConfig {
    executor: Executor;
    key?: string;
    log?: (log: ExecutorLog) => void;
    withExecutor(executor: Executor): void;
    withKey(key: string): void;
    withLog(log: (log: ExecutorLog) => void): void;
}
export declare const config: RequesterConfig;
export {};
