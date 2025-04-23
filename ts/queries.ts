import { Executor } from './executors.js';
import { PaginatorRequest, PaginatorReturn } from './paginator.js';
import { Arguments, BaseRequest, QueryRequest, Request } from './request.js';
import {
  Query,
  City, Color, GameInfo, ApiKeyDetails, Bounty, Trade, Treasure, Treaty,
  Bankrec, BbGame, BbPlayer, BbTeam, Nation, Tradeprice, War, WarAttack, Alliance
} from './types.js';

export class RequestBuilder<O, Response = {}> {
  private executor: Executor<O>;
  private requests: { [K in keyof Query]: BaseRequest<any, any> } = {};
  constructor(executor: Executor<O>) {
    this.executor = executor;
  }
  me<R> (
    f: (req: Request<ApiKeyDetails, {}>) => Request<ApiKeyDetails, R>
  ): RequestBuilder<O, Response & {me: R}> {
    const builder = this as any as RequestBuilder<O, Response & {me: R}>;
    builder.requests.me = new QueryRequest('me', {}, f(new Request()));
    return builder;
  }
  treasures<R> (
    f: (req: Request<Treasure, {}>) => Request<Treasure, R>
  ): RequestBuilder<O, Response & {treasures: R[]}> {
    const builder = this as any as RequestBuilder<O, Response & {treasures: R[]}>;
    builder.requests.treasures = new QueryRequest('treasures', {}, f(new Request()));
    return builder;
  }
  colors<R>(f: (req: Request<Color, {}>) => Request<Color, R>): RequestBuilder<O, Response & {colors: R[]}> {
    const builder = this as any as RequestBuilder<O, Response & {colors: R[]}>;
    builder.requests.colors = new QueryRequest('colors', {}, f(new Request()));
    return builder;
  }
  game_info<R>(f: (req: Request<GameInfo, {}>) => Request<GameInfo, R>): RequestBuilder<O, Response & {game_info: R}> {
    const builder = this as any as RequestBuilder<O, Response & {game_info: R}>;
    builder.requests.game_info = new QueryRequest('game_info', {}, f(new Request()));
    return builder;
  }
  nations<R> (
    args: Arguments<Nation>,
    f: (req: Request<Nation, {}>) => Request<Nation, R>
  ): RequestBuilder<O, Response & {nations: PaginatorReturn<Nation, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {nations: PaginatorReturn<Nation, R, O>}>;
    builder.requests.nations = new PaginatorRequest('nations', args, f(new Request()), this.executor);
    return builder;
  }
  alliances<R> (
    args: Arguments<Alliance>,
    f: (req: Request<Alliance, {}>) => Request<Alliance, R>
  ): RequestBuilder<O, Response & {alliances: PaginatorReturn<Alliance, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {alliances: PaginatorReturn<Alliance, R, O>}>;
    builder.requests.alliances = new PaginatorRequest('alliances', args, f(new Request()), this.executor);
    return builder;
  }
  tradeprices<R> (
    args: Arguments<Tradeprice>,
    f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>
  ): RequestBuilder<O, Response & {tradeprices: PaginatorReturn<Tradeprice, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {tradeprices: PaginatorReturn<Tradeprice, R, O>}>;
    builder.requests.tradeprices = new PaginatorRequest('tradeprices', args, f(new Request()), this.executor);
    return builder;
  }
  trades<R> (
    args: Arguments<Trade>,
    f: (req: Request<Trade, {}>) => Request<Trade, R>
  ): RequestBuilder<O, Response & {trades: PaginatorReturn<Trade, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {trades: PaginatorReturn<Trade, R, O>}>;
    builder.requests.trades = new PaginatorRequest('trades', args, f(new Request()), this.executor);
    return builder;
  }
  wars<R> (
    args: Arguments<War>,
    f: (req: Request<War, {}>) => Request<War, R>
  ): RequestBuilder<O, Response & {wars: PaginatorReturn<War, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {wars: PaginatorReturn<War, R, O>}>;
    builder.requests.wars = new PaginatorRequest('wars', args, f(new Request()), this.executor);
    return builder;
  }
  bounties<R> (
    args: Arguments<Bounty>,
    f: (req: Request<Bounty, {}>) => Request<Bounty, R>
  ): RequestBuilder<O, Response & {bounties: PaginatorReturn<Bounty, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {bounties: PaginatorReturn<Bounty, R, O>}>;
    builder.requests.bounties = new PaginatorRequest('bounties', args, f(new Request()), this.executor);
    return builder;
  }
  warattacks<R> (
    args: Arguments<WarAttack>,
    f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>
  ): RequestBuilder<O, Response & {warattacks: PaginatorReturn<WarAttack, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {warattacks: PaginatorReturn<WarAttack, R, O>}>;
    builder.requests.warattacks = new PaginatorRequest('warattacks', args, f(new Request()), this.executor);
    return builder;
  }
  treaties<R> (
    args: Arguments<Treaty>,
    f: (req: Request<Treaty, {}>) => Request<Treaty, R>
  ): RequestBuilder<O, Response & {treaties: PaginatorReturn<Treaty, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {treaties: PaginatorReturn<Treaty, R, O>}>;
    builder.requests.treaties = new PaginatorRequest('treaties', args, f(new Request()), this.executor);
    return builder;
  }
  cities<R> (
    args: Arguments<City>,
    f: (req: Request<City, {}>) => Request<City, R>
  ): RequestBuilder<O, Response & {cities: PaginatorReturn<City, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {cities: PaginatorReturn<City, R, O>}>;
    builder.requests.cities = new PaginatorRequest('cities', args, f(new Request()), this.executor);
    return builder;
  }
  bankrecs<R> (
    args: Arguments<Bankrec>,
    f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>
  ): RequestBuilder<O, Response & {bankrecs: PaginatorReturn<Bankrec, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {bankrecs: PaginatorReturn<Bankrec, R, O>}>;
    builder.requests.bankrecs = new PaginatorRequest('bankrecs', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_games<R> (
    args: Arguments<BbGame>,
    f: (req: Request<BbGame, {}>) => Request<BbGame, R>
  ): RequestBuilder<O, Response & {baseball_games: PaginatorReturn<BbGame, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_games: PaginatorReturn<BbGame, R, O>}>;
    builder.requests.baseball_games = new PaginatorRequest('baseball_games', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_teams<R> (
    args: Arguments<BbTeam>,
    f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>
  ): RequestBuilder<O, Response & {baseball_teams: PaginatorReturn<BbTeam, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_teams: PaginatorReturn<BbTeam, R, O>}>;
    builder.requests.baseball_teams = new PaginatorRequest('baseball_teams', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_players<R> (
    args: Arguments<BbPlayer>,
    f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>
  ): RequestBuilder<O, Response & {baseball_players: PaginatorReturn<BbPlayer, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_players: PaginatorReturn<BbPlayer, R, O>}>;
    builder.requests.baseball_players = new PaginatorRequest('baseball_players', args, f(new Request()), this.executor);
    return builder;
  }
  async send(options?: O): Promise<Response> {
    const entries = Object.entries(this.requests) as [keyof Query, BaseRequest<any, any>][];
    const o = Object.assign({}, this.executor.defaultOptions, options);
    return await this.executor.push(entries, o);
  }
}