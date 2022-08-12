import { ChildArgs } from './children_args';
import { City, Bounty, Trade, Treaty, Alliance, QueryAlliancesArgs, Bankrec, QueryBankrecsArgs, Nation, QueryNationsArgs, BbGame, QueryBaseball_GamesArgs, BbPlayer, QueryBaseball_PlayersArgs, BbTeam, QueryBaseball_TeamsArgs, QueryBountiesArgs, QueryCitiesArgs, Tradeprice, QueryTradepricesArgs, QueryTradesArgs, QueryTreatiesArgs, WarAttack, QueryWarattacksArgs, War, QueryWarsArgs } from './types';
declare type Child<T> = T extends (infer U)[] ? NonNullable<U> : NonNullable<T>;
declare type ChildReturn<T, R> = T extends any[] ? R[] : R;
declare type ChildrenKeys<T> = Exclude<keyof T, PrimitiveKeys<T>>;
declare type PrimitiveKeys<T> = {
    [K in keyof T]: T[K] extends string | number | boolean | null | undefined ? K : never;
}[keyof T];
export declare class RawArg {
    inner: string;
    constructor(inner: string);
}
export declare function Raw(inner: string): RawArg;
export interface BaseRequest<ApiType, Return> {
    stringify(): string;
    parse(response: ApiType | null): Return | undefined;
    hash(): number;
}
declare type OrRaw<Q> = RawArg | {
    [K in keyof Q]: RawArg | Q[K];
};
export declare type Arguments<Q> = Q extends Nation ? OrRaw<QueryNationsArgs> : Q extends City ? OrRaw<QueryCitiesArgs> : Q extends Trade ? OrRaw<QueryTradesArgs> : Q extends Bounty ? OrRaw<QueryBountiesArgs> : Q extends War ? OrRaw<QueryWarsArgs> : Q extends WarAttack ? OrRaw<QueryWarattacksArgs> : Q extends BbGame ? OrRaw<QueryBaseball_GamesArgs> : Q extends BbPlayer ? OrRaw<QueryBaseball_PlayersArgs> : Q extends BbTeam ? OrRaw<QueryBaseball_TeamsArgs> : Q extends Bankrec ? OrRaw<QueryBankrecsArgs> : Q extends Tradeprice ? OrRaw<QueryTradepricesArgs> : Q extends Alliance ? OrRaw<QueryAlliancesArgs> : Q extends Treaty ? OrRaw<QueryTreatiesArgs> : never;
export declare class QueryRequest<T, R, A = Arguments<T>> implements BaseRequest<T, R> {
    endpoint: string;
    args: A;
    request: Request<T, R>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: T): R | undefined;
    hash(): number;
}
export declare class Request<ApiType, Return> implements BaseRequest<ApiType, Return> {
    _fields: string[];
    static new<T, R>(): Request<T, R>;
    fields<F extends PrimitiveKeys<ApiType>>(...fields: F[]): Request<ApiType, Return & {
        [K in F]: ApiType[K];
    }>;
    child<R, F extends ChildrenKeys<ApiType>>(key: F, args: ChildArgs<ApiType, F>, f: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>): Request<ApiType, Return & {
        [K in F]: ChildReturn<ApiType[F], R>;
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
