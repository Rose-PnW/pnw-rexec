import { requesterConfig } from './executors.js';
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
}

export class RequestBuilder<Response = {}> {
  private requests: { [K in keyof Query]: BaseRequest<any, any> } = {};
  me<R> (
      f: (req: Request<ApiKeyDetails, {}>) => Request<ApiKeyDetails, R>
  ): RequestBuilder<Response & {me: R}> {
    const builder = this as any as RequestBuilder<Response & {me: R}>;
    builder.requests.me = new QueryRequest('me', {}, f(new Request()));
    return builder;
  }
  treasures<R> (
      f: (req: Request<Treasure, {}>) => Request<Treasure, R>
  ): RequestBuilder<Response & {treasures: R[]}> {
    const builder = this as any as RequestBuilder<Response & {treasures: R[]}>;
    builder.requests.treasures = new QueryRequest('treasures', {}, f(new Request()));
    return builder;
  }
  colors<R>(f: (req: Request<Color, {}>) => Request<Color, R>): RequestBuilder<Response & {colors: R[]}> {
    const builder = this as any as RequestBuilder<Response & {colors: R[]}>;
    builder.requests.colors = new QueryRequest('colors', {}, f(new Request()));
    return builder;
  }
  game_info<R>(f: (req: Request<GameInfo, {}>) => Request<GameInfo, R>): RequestBuilder<Response & {game_info: R}> {
    const builder = this as any as RequestBuilder<Response & {game_info: R}>;
    builder.requests.game_info = new QueryRequest('game_info', {}, f(new Request()));
    return builder;
  }
  nations<R> (
    args: QueryNationsArgs,
    f: (req: Request<Nation, {}>) => Request<Nation, R>
  ): RequestBuilder<Response & {nations: PaginatorReturn<QueryNationsArgs, Nation, R>}> {
    const builder = this as any as RequestBuilder<Response & {nations: PaginatorReturn<QueryNationsArgs, Nation, R>}>;
    builder.requests.nations = new PaginatorRequest('nations', args, f(new Request()));
    return builder;
  }
  alliances<R> (
    args: QueryAlliancesArgs,
    f: (req: Request<Alliance, {}>) => Request<Alliance, R>
  ): RequestBuilder<Response & {alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R>}> {
    const builder = this as any as RequestBuilder<Response & {alliances: PaginatorReturn<QueryAlliancesArgs, Alliance, R>}>;
    builder.requests.alliances = new PaginatorRequest('alliances', args, f(new Request()));
    return builder;
  }
  tradeprices<R> (
    args: QueryTradepricesArgs,
    f: (req: Request<Tradeprice, {}>) => Request<Tradeprice, R>
  ): RequestBuilder<Response & {tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R>}> {
    const builder = this as any as RequestBuilder<Response & {tradeprices: PaginatorReturn<QueryTradepricesArgs, Tradeprice, R>}>;
    builder.requests.tradeprices = new PaginatorRequest('tradeprices', args, f(new Request()));
    return builder;
  }
  trades<R> (
    args: QueryTradesArgs,
    f: (req: Request<Trade, {}>) => Request<Trade, R>
  ): RequestBuilder<Response & {trades: PaginatorReturn<QueryTradesArgs, Trade, R>}> {
    const builder = this as any as RequestBuilder<Response & {trades: PaginatorReturn<QueryTradesArgs, Trade, R>}>;
    builder.requests.trades = new PaginatorRequest('trades', args, f(new Request()));
    return builder;
  }
  wars<R> (
    args: QueryWarsArgs,
    f: (req: Request<War, {}>) => Request<War, R>
  ): RequestBuilder<Response & {wars: PaginatorReturn<QueryWarsArgs, War, R>}> {
    const builder = this as any as RequestBuilder<Response & {wars: PaginatorReturn<QueryWarsArgs, War, R>}>;
    builder.requests.wars = new PaginatorRequest('wars', args, f(new Request()));
    return builder;
  }
  bounties<R> (
    args: QueryBountiesArgs,
    f: (req: Request<Bounty, {}>) => Request<Bounty, R>
  ): RequestBuilder<Response & {bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R>}> {
    const builder = this as any as RequestBuilder<Response & {bounties: PaginatorReturn<QueryBountiesArgs, Bounty, R>}>;
    builder.requests.bounties = new PaginatorRequest('bounties', args, f(new Request()));
    return builder;
  }
  warattacks<R> (
    args: QueryWarattacksArgs,
    f: (req: Request<WarAttack, {}>) => Request<WarAttack, R>
  ): RequestBuilder<Response & {warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R>}> {
    const builder = this as any as RequestBuilder<Response & {warattacks: PaginatorReturn<QueryWarattacksArgs, WarAttack, R>}>;
    builder.requests.warattacks = new PaginatorRequest('warattacks', args, f(new Request()));
    return builder;
  }
  treaties<R> (
    args: QueryTreatiesArgs,
    f: (req: Request<Treaty, {}>) => Request<Treaty, R>
  ): RequestBuilder<Response & {treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R>}> {
    const builder = this as any as RequestBuilder<Response & {treaties: PaginatorReturn<QueryTreatiesArgs, Treaty, R>}>;
    builder.requests.treaties = new PaginatorRequest('treaties', args, f(new Request()));
    return builder;
  }
  cities<R> (
    args: QueryCitiesArgs,
    f: (req: Request<City, {}>) => Request<City, R>
  ): RequestBuilder<Response & {cities: PaginatorReturn<QueryCitiesArgs, City, R>}> {
    const builder = this as any as RequestBuilder<Response & {cities: PaginatorReturn<QueryCitiesArgs, City, R>}>;
    builder.requests.cities = new PaginatorRequest('cities', args, f(new Request()));
    return builder;
  }
  bankrecs<R> (
    args: QueryBankrecsArgs,
    f: (req: Request<Bankrec, {}>) => Request<Bankrec, R>
  ): RequestBuilder<Response & {bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R>}> {
    const builder = this as any as RequestBuilder<Response & {bankrecs: PaginatorReturn<QueryBankrecsArgs, Bankrec, R>}>;
    builder.requests.bankrecs = new PaginatorRequest('bankrecs', args, f(new Request()));
    return builder;
  }
  baseball_games<R> (
    args: QueryBaseball_GamesArgs,
    f: (req: Request<BbGame, {}>) => Request<BbGame, R>
  ): RequestBuilder<Response & {baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R>}> {
    const builder = this as any as RequestBuilder<Response & {baseball_games: PaginatorReturn<QueryBaseball_GamesArgs, BbGame, R>}>;
    builder.requests.baseball_games = new PaginatorRequest('baseball_games', args, f(new Request()));
    return builder;
  }
  baseball_teams<R> (
    args: QueryBaseball_TeamsArgs,
    f: (req: Request<BbTeam, {}>) => Request<BbTeam, R>
  ): RequestBuilder<Response & {baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R>}> {
    const builder = this as any as RequestBuilder<Response & {baseball_teams: PaginatorReturn<QueryBaseball_TeamsArgs, BbTeam, R>}>;
    builder.requests.baseball_teams = new PaginatorRequest('baseball_teams', args, f(new Request()));
    return builder;
  }
  baseball_players<R> (
    args: QueryBaseball_PlayersArgs,
    f: (req: Request<BbPlayer, {}>) => Request<BbPlayer, R>
  ): RequestBuilder<Response & {baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R>}> {
    const builder = this as any as RequestBuilder<Response & {baseball_players: PaginatorReturn<QueryBaseball_PlayersArgs, BbPlayer, R>}>;
    builder.requests.baseball_players = new PaginatorRequest('baseball_players', args, f(new Request()));
    return builder;
  }
  async send(): Promise<Response> {
    const entries = Object.entries(this.requests) as [keyof Query, BaseRequest<any, any>][];
    return await requesterConfig.executor.push(...entries);
  }
}