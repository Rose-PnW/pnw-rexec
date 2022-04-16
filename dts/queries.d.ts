import { Executor } from './executors.js';
import { PaginatorReturn } from './paginator.js';
import { BaseRequest, Request } from './request.js';
import { City, Color, GameInfo, ApiKeyDetails, Bounty, Trade, Treasure, Treaty, Alliance, QueryAlliancesArgs, Bankrec, QueryBankrecsArgs, Nation, QueryNationsArgs, BbGame, QueryBaseball_GamesArgs, BbPlayer, QueryBaseball_PlayersArgs, BbTeam, QueryBaseball_TeamsArgs, QueryBountiesArgs, QueryCitiesArgs, Tradeprice, QueryTradepricesArgs, QueryTradesArgs, QueryTreatiesArgs, WarAttack, QueryWarattacksArgs, War, QueryWarsArgs } from './types';
export declare class QueryRequest<A, T, R> implements BaseRequest<T, R> {
    endpoint: string;
    args: A;
    request: Request<T, R>;
    constructor(endpoint: string, args: A, request: Request<T, R>);
    stringify(): string;
    parse(res: T): R | undefined;
    hash(): number;
}
export declare class RequestBuilder<O, Response = {}> {
    private executor;
    private requests;
    constructor(executor: Executor<O>);
    me<R>(f: (req: Request<ApiKeyDetails, {}>) => Request<ApiKeyDetails, R>): RequestBuilder<O, Response & {
        me: R;
    }>;
    treasures<R>(f: (req: Request<Treasure, {}>) => Request<Treasure, R>): RequestBuilder<O, Response & {
        treasures: R[];
    }>;
    colors<R>(f: (req: Request<Color, {}>) => Request<Color, R>): RequestBuilder<O, Response & {
        colors: R[];
    }>;
    game_info<R>(f: (req: Request<GameInfo, {}>) => Request<GameInfo, R>): RequestBuilder<O, Response & {
        game_info: R;
    }>;
    nations<R>(args: QueryNationsArgs, f: (req: Request<Nation, {}>) => Request<Nation, R>): RequestBuilder<O, Response & {
        nations: PaginatorReturn<QueryNationsArgs, Nation, R, O>;
    }>;
    alliances<R>(args: QueryAlliancesArgs, f: (req: Request<Alliance, {}>) => Request<Alliance, R>): RequestBuilder<O, Response & {
        alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R, O>;
    }>;
    tradeprices<R>(args: QueryTradepricesArgs, f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>): RequestBuilder<O, Response & {
        tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R, O>;
    }>;
    trades<R>(args: QueryTradesArgs, f: (req: Request<Trade, {}>) => Request<Trade, R>): RequestBuilder<O, Response & {
        trades: PaginatorReturn<QueryTradesArgs, Trade, R, O>;
    }>;
    wars<R>(args: QueryWarsArgs, f: (req: Request<War, {}>) => Request<War, R>): RequestBuilder<O, Response & {
        wars: PaginatorReturn<QueryWarsArgs, War, R, O>;
    }>;
    bounties<R>(args: QueryBountiesArgs, f: (req: Request<Bounty, {}>) => Request<Bounty, R>): RequestBuilder<O, Response & {
        bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R, O>;
    }>;
    warattacks<R>(args: QueryWarattacksArgs, f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>): RequestBuilder<O, Response & {
        warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R, O>;
    }>;
    treaties<R>(args: QueryTreatiesArgs, f: (req: Request<Treaty, {}>) => Request<Treaty, R>): RequestBuilder<O, Response & {
        treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R, O>;
    }>;
    cities<R>(args: QueryCitiesArgs, f: (req: Request<City, {}>) => Request<City, R>): RequestBuilder<O, Response & {
        cities: PaginatorReturn<QueryCitiesArgs, City, R, O>;
    }>;
    bankrecs<R>(args: QueryBankrecsArgs, f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>): RequestBuilder<O, Response & {
        bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R, O>;
    }>;
    baseball_games<R>(args: QueryBaseball_GamesArgs, f: (req: Request<BbGame, {}>) => Request<BbGame, R>): RequestBuilder<O, Response & {
        baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R, O>;
    }>;
    baseball_teams<R>(args: QueryBaseball_TeamsArgs, f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>): RequestBuilder<O, Response & {
        baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R, O>;
    }>;
    baseball_players<R>(args: QueryBaseball_PlayersArgs, f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>): RequestBuilder<O, Response & {
        baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R, O>;
    }>;
    send(options?: O): Promise<Response>;
}
