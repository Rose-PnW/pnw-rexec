import { Request } from './request.js';
import { AlliancePaginator, BankrecPaginator, BbGamePaginator, BbPlayerPaginator, BbTeamPaginator, BountyPaginator, CityPaginator, Color, GameInfo, Nation, NationPaginator, Query, QueryAlliancesArgs, QueryBankrecsArgs, QueryBaseball_GamesArgs, QueryBaseball_PlayersArgs, QueryBaseball_TeamsArgs, QueryBountiesArgs, QueryCitiesArgs, QueryNationsArgs, QueryTradepricesArgs, QueryTradesArgs, QueryTreatiesArgs, QueryWarattacksArgs, QueryWarsArgs, TradePaginator, TradepricePaginator, TreatyPaginator, WarAttackPaginator, WarPaginator } from './types';
export declare class QueryRequest<A, T, R> {
    endpoint: string;
    args: A;
    request: Request<T, R>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: T): R | undefined;
}
export interface RequestBuilder<Response> {
    requests: {
        [K in keyof Query]: QueryRequest<any, any, any>;
    };
}
export declare class RequestBuilder<Response = {}> {
    requests: {
        [K in keyof Query]: QueryRequest<any, any, any>;
    };
    me<R>(f: (req: Request<{
        nation: Nation;
    }, {}>) => Request<{
        nation: Nation;
    }, R>): RequestBuilder<Response & {
        me: R;
    }>;
    nations<R>(args: QueryNationsArgs, f: (req: Request<NationPaginator, {}>) => Request<NationPaginator, R>): RequestBuilder<Response & {
        nations: R;
    }>;
    alliances<R>(args: QueryAlliancesArgs, f: (req: Request<AlliancePaginator, {}>) => Request<AlliancePaginator, R>): RequestBuilder<Response & {
        alliances: R;
    }>;
    tradeprices<R>(args: QueryTradepricesArgs, f: (req: Request<TradepricePaginator, {}>) => Request<TradepricePaginator, R>): RequestBuilder<Response & {
        tradeprices: R;
    }>;
    trades<R>(args: QueryTradesArgs, f: (req: Request<TradePaginator, {}>) => Request<TradePaginator, R>): RequestBuilder<Response & {
        trades: R;
    }>;
    wars<R>(args: QueryWarsArgs, f: (req: Request<WarPaginator, {}>) => Request<WarPaginator, R>): RequestBuilder<Response & {
        wars: R;
    }>;
    bounties<R>(args: QueryBountiesArgs, f: (req: Request<BountyPaginator, {}>) => Request<BountyPaginator, R>): RequestBuilder<Response & {
        bounties: R;
    }>;
    warattacks<R>(args: QueryWarattacksArgs, f: (req: Request<WarAttackPaginator, {}>) => Request<WarAttackPaginator, R>): RequestBuilder<Response & {
        warattacks: R;
    }>;
    treaties<R>(args: QueryTreatiesArgs, f: (req: Request<TreatyPaginator, {}>) => Request<TreatyPaginator, R>): RequestBuilder<Response & {
        treaties: R;
    }>;
    cities<R>(args: QueryCitiesArgs, f: (req: Request<CityPaginator, {}>) => Request<CityPaginator, R>): RequestBuilder<Response & {
        cities: R;
    }>;
    bankrecs<R>(args: QueryBankrecsArgs, f: (req: Request<BankrecPaginator, {}>) => Request<BankrecPaginator, R>): RequestBuilder<Response & {
        bankrecs: R;
    }>;
    baseball_games<R>(args: QueryBaseball_GamesArgs, f: (req: Request<BbGamePaginator, {}>) => Request<BbGamePaginator, R>): RequestBuilder<Response & {
        baseball_games: R;
    }>;
    baseball_teams<R>(args: QueryBaseball_TeamsArgs, f: (req: Request<BbTeamPaginator, {}>) => Request<BbTeamPaginator, R>): RequestBuilder<Response & {
        baseball_teams: R;
    }>;
    baseball_players<R>(args: QueryBaseball_PlayersArgs, f: (req: Request<BbPlayerPaginator, {}>) => Request<BbPlayerPaginator, R>): RequestBuilder<Response & {
        baseball_players: R;
    }>;
    colors<R>(f: (req: Request<Color, {}>) => Request<Color, R>): RequestBuilder<Response & {
        colors: R[];
    }>;
    game_info<R>(f: (req: Request<GameInfo, {}>) => Request<GameInfo, R>): RequestBuilder<Response & {
        game_info: R;
    }>;
    send(): Promise<Response>;
}
