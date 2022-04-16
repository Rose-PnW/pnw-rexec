import { Executor } from './executors.js';
import { PaginatorRequest, PaginatorReturn } from './paginator.js';
import { BaseRequest, Request, stringifyArgs } from './request.js';
import {
  Query,
  City, Color, GameInfo, ApiKeyDetails, Bounty, Trade, Treasure, Treaty,
  Alliance, QueryAlliancesArgs, 
  Bankrec, QueryBankrecsArgs,
  Nation, QueryNationsArgs,
  BbGame, QueryBaseball_GamesArgs,
  BbPlayer, QueryBaseball_PlayersArgs,
  BbTeam, QueryBaseball_TeamsArgs,
  QueryBountiesArgs, QueryCitiesArgs,
  Tradeprice, QueryTradepricesArgs,
  QueryTradesArgs, QueryTreatiesArgs,
  WarAttack, QueryWarattacksArgs,
  War, QueryWarsArgs
} from './types';

export class QueryRequest<A, T, R>
implements
  BaseRequest<T, R>
{
  endpoint: string;
  args: A;
  request: Request<T, R>
  constructor(endpoint: string, args: A, request: Request<T, R>) {
    this.endpoint = endpoint;
    this.args = args;
    this.request = request;
  }
  stringify(): string {
    if(Object.keys(this.args).length > 0) {
      const args = Object.entries(this.args).map(([k, v]) =>  `${k}:${stringifyArgs(v)}`).join(' ');
      return `${this.endpoint}(${args}){${this.request.stringify()}}`;
    } else {
      return `${this.endpoint}{${this.request.stringify()}}`;
    }
  }
  parse(res: T): R | undefined {
    return this.request.parse(res);
  }
  hash(): number {
    const args = stringifyArgs(this.args);
    const req = this.request.hash();
    let hash = 0;
    for(const c of args) hash = ((hash << 5) - hash) + c.charCodeAt(0);
    hash = ((hash << 5) - hash) + req;
    return hash;
  }
}

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
    args: QueryNationsArgs,
    f: (req: Request<Nation, {}>) => Request<Nation, R>
  ): RequestBuilder<O, Response & {nations: PaginatorReturn<QueryNationsArgs, Nation, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {nations: PaginatorReturn<QueryNationsArgs, Nation, R, O>}>;
    builder.requests.nations = new PaginatorRequest('nations', args, f(new Request()), this.executor);
    return builder;
  }
  alliances<R> (
    args: QueryAlliancesArgs,
    f: (req: Request<Alliance, {}>) => Request<Alliance, R>
  ): RequestBuilder<O, Response & {alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R, O>}>;
    builder.requests.alliances = new PaginatorRequest('alliances', args, f(new Request()), this.executor);
    return builder;
  }
  tradeprices<R> (
    args: QueryTradepricesArgs,
    f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>
  ): RequestBuilder<O, Response & {tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R, O>}>;
    builder.requests.tradeprices = new PaginatorRequest('tradeprices', args, f(new Request()), this.executor);
    return builder;
  }
  trades<R> (
    args: QueryTradesArgs,
    f: (req: Request<Trade, {}>) => Request<Trade, R>
  ): RequestBuilder<O, Response & {trades: PaginatorReturn<QueryTradesArgs, Trade, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {trades: PaginatorReturn<QueryTradesArgs, Trade, R, O>}>;
    builder.requests.trades = new PaginatorRequest('trades', args, f(new Request()), this.executor);
    return builder;
  }
  wars<R> (
    args: QueryWarsArgs,
    f: (req: Request<War, {}>) => Request<War, R>
  ): RequestBuilder<O, Response & {wars: PaginatorReturn<QueryWarsArgs, War, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {wars: PaginatorReturn<QueryWarsArgs, War, R, O>}>;
    builder.requests.wars = new PaginatorRequest('wars', args, f(new Request()), this.executor);
    return builder;
  }
  bounties<R> (
    args: QueryBountiesArgs,
    f: (req: Request<Bounty, {}>) => Request<Bounty, R>
  ): RequestBuilder<O, Response & {bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R, O>}>;
    builder.requests.bounties = new PaginatorRequest('bounties', args, f(new Request()), this.executor);
    return builder;
  }
  warattacks<R> (
    args: QueryWarattacksArgs,
    f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>
  ): RequestBuilder<O, Response & {warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R, O>}>;
    builder.requests.warattacks = new PaginatorRequest('warattacks', args, f(new Request()), this.executor);
    return builder;
  }
  treaties<R> (
    args: QueryTreatiesArgs,
    f: (req: Request<Treaty, {}>) => Request<Treaty, R>
  ): RequestBuilder<O, Response & {treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R, O>}>;
    builder.requests.treaties = new PaginatorRequest('treaties', args, f(new Request()), this.executor);
    return builder;
  }
  cities<R> (
    args: QueryCitiesArgs,
    f: (req: Request<City, {}>) => Request<City, R>
  ): RequestBuilder<O, Response & {cities: PaginatorReturn<QueryCitiesArgs, City, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {cities: PaginatorReturn<QueryCitiesArgs, City, R, O>}>;
    builder.requests.cities = new PaginatorRequest('cities', args, f(new Request()), this.executor);
    return builder;
  }
  bankrecs<R> (
    args: QueryBankrecsArgs,
    f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>
  ): RequestBuilder<O, Response & {bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R, O>}>;
    builder.requests.bankrecs = new PaginatorRequest('bankrecs', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_games<R> (
    args: QueryBaseball_GamesArgs,
    f: (req: Request<BbGame, {}>) => Request<BbGame, R>
  ): RequestBuilder<O, Response & {baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R, O>}>;
    builder.requests.baseball_games = new PaginatorRequest('baseball_games', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_teams<R> (
    args: QueryBaseball_TeamsArgs,
    f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>
  ): RequestBuilder<O, Response & {baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R, O>}>;
    builder.requests.baseball_teams = new PaginatorRequest('baseball_teams', args, f(new Request()), this.executor);
    return builder;
  }
  baseball_players<R> (
    args: QueryBaseball_PlayersArgs,
    f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>
  ): RequestBuilder<O, Response & {baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R, O>}> {
    const builder = this as any as RequestBuilder<O, Response & {baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R, O>}>;
    builder.requests.baseball_players = new PaginatorRequest('baseball_players', args, f(new Request()), this.executor);
    return builder;
  }
  async send(options?: O): Promise<Response> {
    const entries = Object.entries(this.requests) as [keyof Query, BaseRequest<any, any>][];
    return await this.executor.push(entries, options);
  }
}