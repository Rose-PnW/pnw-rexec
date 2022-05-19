import { ChildArgs } from './children_args';
import {
  City, Bounty, Trade, Treaty,
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

type Child<T> = T extends (infer U)[] ? NonNullable<U> : NonNullable<T>;
type ChildReturn<T, R> = T extends any[] ? R[] : R;
type ChildrenKeys<T> = Exclude<keyof T, PrimitiveKeys<T>>;
type PrimitiveKeys<T> = {[K in keyof T]: T[K] extends string | number | boolean | null | undefined ? K : never}[keyof T];
export interface BaseRequest<ApiType, Return> {
  stringify(): string;
  parse(response: ApiType | null): Return | undefined;
  hash(): number;
}
export type Arguments<Q> = Q extends Nation ? QueryNationsArgs :
  Q extends City ? QueryCitiesArgs :
  Q extends Trade ? QueryTradesArgs :
  Q extends Bounty ? QueryBountiesArgs :
  Q extends War ? QueryWarsArgs :
  Q extends WarAttack ? QueryWarattacksArgs :
  Q extends BbGame ? QueryBaseball_GamesArgs :
  Q extends BbPlayer ? QueryBaseball_PlayersArgs :
  Q extends BbTeam ? QueryBaseball_TeamsArgs :
  Q extends Bankrec ? QueryBankrecsArgs :
  Q extends Tradeprice ? QueryTradepricesArgs :
  Q extends Alliance ? QueryAlliancesArgs :
  Q extends Treaty ? QueryTreatiesArgs :
  never;

export class QueryRequest<T, R, A = Arguments<T>>
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

export class Request<ApiType, Return>
implements
  BaseRequest<ApiType, Return>
{
  _fields: string[] = [];
  static new<T, R>(): Request<T, R> {
    return new Request<T, R>();
  }
  fields<F extends PrimitiveKeys<ApiType>>(...fields: F[]): Request<ApiType, Return & {[K in F]: ApiType[K]}> {
    type NewReturn = Return & {[K in F]: ApiType[K]};
    const r = this as any as Request<ApiType, NewReturn>;
    r._fields.push(...fields.map(f => f.toString()));
    return r;
  }
  child<R, F extends ChildrenKeys<ApiType>>(
    key: F,
    args: ChildArgs<ApiType, F>,
    f: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>
  ): Request<ApiType, Return & {[K in F]: ChildReturn<ApiType[F], R>}>;
  child<R, F extends ChildrenKeys<ApiType>>(
    key: F,
    f: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>
  ): Request<ApiType, Return & {[K in F]: ChildReturn<ApiType[F], R>}>;
  child<R, F extends ChildrenKeys<ApiType>>(
    key: F,
    second: ChildArgs<ApiType, F> | ((req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>),
    third?: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>
  ): Request<ApiType, Return & {[K in F]: ChildReturn<ApiType[F], R>}> {
    const f = (third === undefined ? second : third) as (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>;
    type NewReturn = Return & {[K in F]: ChildReturn<ApiType[F], R>};
    const r = this as any as Request<ApiType, NewReturn>;
    const child = f(Request.new<Child<ApiType[F]>, {}>());
    if(second === undefined) {
      r._fields.push(`${key}{${child.stringify()}}`);
    } else {
      const cr = new QueryRequest(key as string, second, child);
      r._fields.push(`${cr.stringify()}`);
    }
    return r;
  }
  stringify(): string {
    return this._fields.sort().join(' ');
  }
  parse(response: ApiType | null): Return | undefined {
    if(response) {
      return response as any as Return;
    }
  }
  hash(): number {
    const s = this.stringify();
    let hash = 0;
    for(const c of s) hash = ((hash << 5) - hash) + c.charCodeAt(0);
    return hash;
  }
}

function stringifyObjArgs<A>(args: A): string {
  if(typeof args === 'string') {
    return args;
  } else {
    return stringifyArgs(args);
  }
}

export function stringifyArgs<A>(args: A): string {
  if(Array.isArray(args)) {
    return `[${args
      .sort()
      .map((v) => `${stringifyArgs(v)}`)
      .join(',')
    }]`;
  } else if(typeof args === 'object') {
    return `{${Object
      .entries(args)
      .sort(([a],[b])=> a > b ? -1 : a===b ? 0 : 1)
      .map(([k, v]) =>  `${k}:${stringifyObjArgs(v)}`).join(' ')
    }}`;
  } else if(typeof args === 'string') {
    return `"${args}"`;
  } else {
    return String(args);
  }
}