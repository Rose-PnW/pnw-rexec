type Child<T> = T extends (infer U)[] ? NonNullable<U> : NonNullable<T>;
type ChildReturn<T, R> = T extends any[] ? R[] : R;
type ChildrenKeys<T> = Exclude<keyof T, PrimitiveKeys<T>>;
type PrimitiveKeys<T> = {[K in keyof T]: T[K] extends string | number | boolean | null | undefined ? K : never}[keyof T];
export interface BaseRequest<ApiType, Return> {
  stringify(): string;
  parse(response: ApiType | null): Return | undefined;
  hash(): number;
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
    f: (req: Request<Child<ApiType[F]>, {}>) => Request<Child<ApiType[F]>, R>
  ): Request<ApiType, Return & {[K in F]: ChildReturn<ApiType[F], R>}> {
    type NewReturn = Return & {[K in F]: ChildReturn<ApiType[F], R>};
    const r = this as any as Request<ApiType, NewReturn>;
    const child = f(Request.new<Child<ApiType[F]>, {}>());
    r._fields.push(`${key}{${child.stringify()}}`);
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
      .map(([k, v]) =>  `${k}:${stringifyArgs(v)}`).join(' ')
    }}`;
  } else if(typeof args === 'number') {
    return args.toString();
  } else {
    return `"${args}"`;
  }
}