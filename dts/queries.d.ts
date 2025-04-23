import { Executor } from './executors.js';
import { PaginatorReturn } from './paginator.js';
import { Arguments, Request } from './request.js';
import { City, Color, GameInfo, ApiKeyDetails, Bounty, Trade, Treasure, Treaty, Bankrec, BbGame, BbPlayer, BbTeam, Nation, Tradeprice, War, WarAttack, Alliance } from './types.js';
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
    nations<R>(args: Arguments<Nation>, f: (req: Request<Nation, {}>) => Request<Nation, R>): RequestBuilder<O, Response & {
        nations: PaginatorReturn<Nation, R, O>;
    }>;
    alliances<R>(args: Arguments<Alliance>, f: (req: Request<Alliance, {}>) => Request<Alliance, R>): RequestBuilder<O, Response & {
        alliances: PaginatorReturn<Alliance, R, O>;
    }>;
    tradeprices<R>(args: Arguments<Tradeprice>, f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>): RequestBuilder<O, Response & {
        tradeprices: PaginatorReturn<Tradeprice, R, O>;
    }>;
    trades<R>(args: Arguments<Trade>, f: (req: Request<Trade, {}>) => Request<Trade, R>): RequestBuilder<O, Response & {
        trades: PaginatorReturn<Trade, R, O>;
    }>;
    wars<R>(args: Arguments<War>, f: (req: Request<War, {}>) => Request<War, R>): RequestBuilder<O, Response & {
        wars: PaginatorReturn<War, R, O>;
    }>;
    bounties<R>(args: Arguments<Bounty>, f: (req: Request<Bounty, {}>) => Request<Bounty, R>): RequestBuilder<O, Response & {
        bounties: PaginatorReturn<Bounty, R, O>;
    }>;
    warattacks<R>(args: Arguments<WarAttack>, f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>): RequestBuilder<O, Response & {
        warattacks: PaginatorReturn<WarAttack, R, O>;
    }>;
    treaties<R>(args: Arguments<Treaty>, f: (req: Request<Treaty, {}>) => Request<Treaty, R>): RequestBuilder<O, Response & {
        treaties: PaginatorReturn<Treaty, R, O>;
    }>;
    cities<R>(args: Arguments<City>, f: (req: Request<City, {}>) => Request<City, R>): RequestBuilder<O, Response & {
        cities: PaginatorReturn<City, R, O>;
    }>;
    bankrecs<R>(args: Arguments<Bankrec>, f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>): RequestBuilder<O, Response & {
        bankrecs: PaginatorReturn<Bankrec, R, O>;
    }>;
    baseball_games<R>(args: Arguments<BbGame>, f: (req: Request<BbGame, {}>) => Request<BbGame, R>): RequestBuilder<O, Response & {
        baseball_games: PaginatorReturn<BbGame, R, O>;
    }>;
    baseball_teams<R>(args: Arguments<BbTeam>, f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>): RequestBuilder<O, Response & {
        baseball_teams: PaginatorReturn<BbTeam, R, O>;
    }>;
    baseball_players<R>(args: Arguments<BbPlayer>, f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>): RequestBuilder<O, Response & {
        baseball_players: PaginatorReturn<BbPlayer, R, O>;
    }>;
    send(options?: O): Promise<Response>;
}
