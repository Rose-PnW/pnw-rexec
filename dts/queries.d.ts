import { PaginatorReturn } from './paginator.js';
import { BaseRequest, Request } from './request.js';
import { Query, City, Color, GameInfo, ApiKeyDetails, Bounty, Trade, Treasure, Treaty, Alliance, QueryAlliancesArgs, Bankrec, QueryBankrecsArgs, Nation, QueryNationsArgs, BbGame, QueryBaseball_GamesArgs, BbPlayer, QueryBaseball_PlayersArgs, BbTeam, QueryBaseball_TeamsArgs, QueryBountiesArgs, QueryCitiesArgs, Tradeprice, QueryTradepricesArgs, QueryTradesArgs, QueryTreatiesArgs, WarAttack, QueryWarattacksArgs, War, QueryWarsArgs } from './types';
export declare class QueryRequest<A, T, R> implements BaseRequest<T, R> {
    endpoint: string;
    args: A;
    request: Request<T, R>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: T): R | undefined;
}
export interface RequestBuilder<Response> {
    requests: {
        [K in keyof Query]: BaseRequest<any, any>;
    };
}
export declare class RequestBuilder<Response = {}> {
    requests: {
        [K in keyof Query]: BaseRequest<any, any>;
    };
    me<R>(f: (req: Request<ApiKeyDetails, {}>) => Request<ApiKeyDetails, R>): RequestBuilder<Response & {
        me: R;
    }>;
    treasures<R>(f: (req: Request<Treasure, {}>) => Request<Treasure, R>): RequestBuilder<Response & {
        treasures: R[];
    }>;
    colors<R>(f: (req: Request<Color, {}>) => Request<Color, R>): RequestBuilder<Response & {
        colors: R[];
    }>;
    game_info<R>(f: (req: Request<GameInfo, {}>) => Request<GameInfo, R>): RequestBuilder<Response & {
        game_info: R;
    }>;
    nations<R>(args: QueryNationsArgs, f: (req: Request<Nation, {}>) => Request<Nation, R>): RequestBuilder<Response & {
        nations: PaginatorReturn<QueryNationsArgs, Nation, R>;
    }>;
    alliances<R>(args: QueryAlliancesArgs, f: (req: Request<Alliance, {}>) => Request<Alliance, R>): RequestBuilder<Response & {
        alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R>;
    }>;
    tradeprices<R>(args: QueryTradepricesArgs, f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>): RequestBuilder<Response & {
        tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R>;
    }>;
    trades<R>(args: QueryTradesArgs, f: (req: Request<Trade, {}>) => Request<Trade, R>): RequestBuilder<Response & {
        trades: PaginatorReturn<QueryTradesArgs, Trade, R>;
    }>;
    wars<R>(args: QueryWarsArgs, f: (req: Request<War, {}>) => Request<War, R>): RequestBuilder<Response & {
        wars: PaginatorReturn<QueryWarsArgs, War, R>;
    }>;
    bounties<R>(args: QueryBountiesArgs, f: (req: Request<Bounty, {}>) => Request<Bounty, R>): RequestBuilder<Response & {
        bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R>;
    }>;
    warattacks<R>(args: QueryWarattacksArgs, f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>): RequestBuilder<Response & {
        warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R>;
    }>;
    treaties<R>(args: QueryTreatiesArgs, f: (req: Request<Treaty, {}>) => Request<Treaty, R>): RequestBuilder<Response & {
        treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R>;
    }>;
    cities<R>(args: QueryCitiesArgs, f: (req: Request<City, {}>) => Request<City, R>): RequestBuilder<Response & {
        cities: PaginatorReturn<QueryCitiesArgs, City, R>;
    }>;
    bankrecs<R>(args: QueryBankrecsArgs, f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>): RequestBuilder<Response & {
        bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R>;
    }>;
    baseball_games<R>(args: QueryBaseball_GamesArgs, f: (req: Request<BbGame, {}>) => Request<BbGame, R>): RequestBuilder<Response & {
        baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R>;
    }>;
    baseball_teams<R>(args: QueryBaseball_TeamsArgs, f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>): RequestBuilder<Response & {
        baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R>;
    }>;
    baseball_players<R>(args: QueryBaseball_PlayersArgs, f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>): RequestBuilder<Response & {
        baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R>;
    }>;
    send(): Promise<Response>;
}
