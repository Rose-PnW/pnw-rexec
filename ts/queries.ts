import { config } from './executors.js';
import { Request } from './request.js';
import {
  AlliancePaginator, BankrecPaginator, BbGamePaginator, BbPlayerPaginator, BbTeamPaginator,
  BountyPaginator, CityPaginator,
  NationPaginator,
  Query,
  QueryAlliancesArgs, QueryBankrecsArgs, QueryBaseball_GamesArgs, QueryBaseball_PlayersArgs, QueryBaseball_TeamsArgs,
  QueryBountiesArgs, QueryCitiesArgs,
  QueryNationsArgs,
  QueryTradepricesArgs,
  QueryTradesArgs, QueryTreatiesArgs,
  QueryWarattacksArgs,
  QueryWarsArgs,
  TradePaginator,
  TradepricePaginator, TreatyPaginator, WarAttackPaginator,
  WarPaginator
} from './types';

export class QueryRequest<A, T, R> {
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
      const args = Object.entries(this.args).map(([k, v]) => `${k}:${v}`).join(' ');
      return `${this.endpoint}(${args}){${this.request.stringify()}}`;
    } else {
      return `${this.endpoint}{${this.request.stringify()}}`;
    }
  }
  parse(res: T): R | undefined {
    return this.request.parse(res);
  }
}

export interface RequestBuilder<Response> {
  requests: { [K in keyof Query]: QueryRequest<any, any, any> };
};

export class RequestBuilder<Response = {}> {
  requests: { [K in keyof Query]: QueryRequest<any, any, any> } = {};
  nations<R> (
    args: QueryNationsArgs,
    f: (req: Request<NationPaginator, {}>) => Request<NationPaginator, R>
  ): RequestBuilder<Response & {nations: R}> {
    const builder = this as any as RequestBuilder<Response & {nations: R}>;
    builder.requests.nations = new QueryRequest('nations', args, f(new Request()));
    return builder;
  }
  alliances<R> (
    args: QueryAlliancesArgs,
    f: (req: Request<AlliancePaginator, {}>) => Request<AlliancePaginator, R>
  ): RequestBuilder<Response & {alliances: R}> {
    const builder = this as any as RequestBuilder<Response & {alliances: R}>;
    builder.requests.alliances = new QueryRequest('alliances', args, f(new Request()));
    return builder;
  }
  tradeprices<R> (
      args: QueryTradepricesArgs,
      f: (req: Request<TradepricePaginator, {}>) => Request<TradepricePaginator, R>
  ): RequestBuilder<Response & {tradeprices: R}> {
    const builder = this as any as RequestBuilder<Response & {tradeprices: R}>;
    builder.requests.tradeprices = new QueryRequest('tradeprices', args, f(new Request()));
    return builder;
  }
  trades<R> (
      args: QueryTradesArgs,
      f: (req: Request<TradePaginator, {}>) => Request<TradePaginator, R>
  ): RequestBuilder<Response & {trades: R}> {
    const builder = this as any as RequestBuilder<Response & {trades: R}>;
    builder.requests.trades = new QueryRequest('trades', args, f(new Request()));
    return builder;
  }
  wars<R> (
      args: QueryWarsArgs,
      f: (req: Request<WarPaginator, {}>) => Request<WarPaginator, R>
  ): RequestBuilder<Response & {wars: R}> {
    const builder = this as any as RequestBuilder<Response & {wars: R}>;
    builder.requests.wars = new QueryRequest('wars', args, f(new Request()));
    return builder;
  }
  bounties<R> (
      args: QueryBountiesArgs,
      f: (req: Request<BountyPaginator, {}>) => Request<BountyPaginator, R>
  ): RequestBuilder<Response & {bounties: R}> {
    const builder = this as any as RequestBuilder<Response & {bounties: R}>;
    builder.requests.bounties = new QueryRequest('bounties', args, f(new Request()));
    return builder;
  }
  warattacks<R> (
      args: QueryWarattacksArgs,
      f: (req: Request<WarAttackPaginator, {}>) => Request<WarAttackPaginator, R>
  ): RequestBuilder<Response & {warattacks: R}> {
    const builder = this as any as RequestBuilder<Response & {warattacks: R}>;
    builder.requests.warattacks = new QueryRequest('warattacks', args, f(new Request()));
    return builder;
  }
  treaties<R> (
      args: QueryTreatiesArgs,
      f: (req: Request<TreatyPaginator, {}>) => Request<TreatyPaginator, R>
  ): RequestBuilder<Response & {treaties: R}> {
    const builder = this as any as RequestBuilder<Response & {treaties: R}>;
    builder.requests.treaties = new QueryRequest('treaties', args, f(new Request()));
    return builder;
  }
  cities<R> (
      args: QueryCitiesArgs,
      f: (req: Request<CityPaginator, {}>) => Request<CityPaginator, R>
  ): RequestBuilder<Response & {cities: R}> {
    const builder = this as any as RequestBuilder<Response & {cities: R}>;
    builder.requests.cities = new QueryRequest('cities', args, f(new Request()));
    return builder;
  }
  bankrecs<R> (
      args: QueryBankrecsArgs,
      f: (req: Request<BankrecPaginator, {}>) => Request<BankrecPaginator, R>
  ): RequestBuilder<Response & {bankrecs: R}> {
    const builder = this as any as RequestBuilder<Response & {bankrecs: R}>;
    builder.requests.bankrecs = new QueryRequest('bankrecs', args, f(new Request()));
    return builder;
  }
  baseball_games<R> (
      args: QueryBaseball_GamesArgs,
      f: (req: Request<BbGamePaginator, {}>) => Request<BbGamePaginator, R>
  ): RequestBuilder<Response & {baseball_games: R}> {
    const builder = this as any as RequestBuilder<Response & {baseball_games: R}>;
    builder.requests.baseball_games = new QueryRequest('baseball_games', args, f(new Request()));
    return builder;
  }
  baseball_teams<R> (
      args: QueryBaseball_TeamsArgs,
      f: (req: Request<BbTeamPaginator, {}>) => Request<BbTeamPaginator, R>
  ): RequestBuilder<Response & {baseball_teams: R}> {
    const builder = this as any as RequestBuilder<Response & {baseball_teams: R}>;
    builder.requests.baseball_teams = new QueryRequest('baseball_teams', args, f(new Request()));
    return builder;
  }
  baseball_players<R> (
      args: QueryBaseball_PlayersArgs,
      f: (req: Request<BbPlayerPaginator, {}>) => Request<BbPlayerPaginator, R>
  ): RequestBuilder<Response & {baseball_players: R}> {
    const builder = this as any as RequestBuilder<Response & {baseball_players: R}>;
    builder.requests.baseball_players = new QueryRequest('baseball_players', args, f(new Request()));
    return builder;
  }

  async send(): Promise<Response> {
    return await config.executor.push(this.requests);
  }
}

async function test() {
  const response =   await new RequestBuilder()
    .nations({}, (n) => n.child('data', (d) => d
      .fields('nation_name')
      .child('alliance', (a) => a.fields('accept_members')))
    )
    .bankrecs({first:1}, (b) => b.child('data', (d) => d
      .fields('date'))
    )
    .send();
  console.log(JSON.stringify(response));
}
await test();