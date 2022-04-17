# PnW Rexec
## A Request Builder and Executor for the [Politics and War](https://politicsandwar.com/) API

## Features

- Create different profiles for queries.
- Chain executors to create the behavior you want.
- Log your requests with a log callback.
- Paginator results have helper methods.
- Requests are typed with the fields you request and nothing more.

## Sections
- [Install](#install)
- [Usage](#usage)
- [Executors](#executors)
- [Logging](#logging)
- [Paginators](#paginators)
- [Writing an Executor](#writing-an-executor)

## Install
```sh
npm i pnw-rexec
```

## Usage
```js
import { RequesterProfile } from 'pnw-rexec';
```
or
```js
const { RequesterProfile } = require('pnw-rexec');
```
and
```js
const profile = new RequesterProfile().key('my-key');

const { me } = await profile.request().me((me) => me
    .child('nation', (n) => n.fields('nation_name', 'leader_name'))
  )
  .send();
const { leader_name, nation_name } = me.nation;
console.log(`Hello, I'm ${leader_name} of ${nation_name}`);
```

## Executors

You can set up your profiles to use one of the available executors, or write your own.
```js
new RequesterProfile()
  .bin({defer: true, timeout: 1000})
  .cache({cache: true, lifetime: 60_000});
```
This profile, for example, has three executors chained:
- An instantaneous executor, that gets created with the profile.
- A bin executor, that merges together requests of different endpoints.
- A cache executor, that hashes requests and throws them in a cache.

They are called from the last to the first, so this requester will first look at the cache, then for an empty bin, then execute.
You may specify default configurations for each executor, but they can also be overriden in the request itself.
```js
const urgentRequest = await profile.request().send({defer: false});
const unlikelyToChange = await profile.request().send({cache: true, lifetime: 7_200_000})
```
## Logging
You can specify a log callback, that gets a [Date object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), a query string and a [node-fetch Response](https://www.npmjs.com/package/node-fetch#class-response) as parameters.
```ts
profile.log((log) => {
  console.log("I was ran on ", log.date);
  console.log("I tried to get", log.query);
  console.log("I got", log.result);
});
```

## Paginators
You can fetch until there are no more pages
```js
const { tradeprices } = await profile.request()
  .tradeprices({}, (t) => t.fields('food','date'))
  .send();
await tradeprices.fetchAll();
```
Fetch until a callback returns false
```js
const thisYear = '2022-01-01';
await tradeprices.fetchWhile((p) => p.lastItem?.date >= thisYear);
```
And then filter the results
```js
const filtered = tradeprices.filter((t) => t.date >= thisYear);
```
Or fetch only the next page
```js
await tradeprices.fetchMore();
```
The return type of these functions is a parsed version of paginator info
```js
const  p = await tradeprices.fetchMore();
console.log('The first price of food was', p.lastItem?.food);
```
That is also available in the first page
```js
const p = tradeprices.info;
console.log('The last price of food was', p?.firstItem?.food);
```
You can also send executor options to these functions
```js
await tradeprices.fetchAll({defer:false});
await tradeprices.fetchWhile(() => false, {defer:false});
await tradeprices.fetchMore({defer:false});
```
And then you use your result as you wish
```js
tradeprices.forEach((d) => console.log('Food was',d.food,'on',d.date));
```
## Writing an Executor
To create an executor you must import a few types
```ts
import { Executor, RequesterProfile, BaseRequest, Types } from 'pnw-rexec';
type Query = Types.Query;
```
Then you declare your config type
```ts
interface MyOptions {...}
```
Then create an executor class
```ts
class MyExecutor<O> implements Executor<MyOptions & O> {
  config: RequesterProfile<MyOptions & O>;
  executor: Executor<O>;
  defaultOptions: MyOptions & O;
}
```
>`config` is the profile that created your executor
`executor` is the next executor down the line
`defaultOptions` is an object that merges executor previous

Now we need a constructor
```ts
constructor(
  config: RequesterProfile<O & MyOptions>,
  executor: Executor<O>,
  options: MyOptions & O
) {
  this.config = config;
  this.executor = executor;
  this.defaultOptions = options;
}
 ```
 And a `push()` method, where you do your stuff and send the request.
 ```ts
async push<R>(
  requests: [keyof Query, BaseRequest<any, any>][],
  options?: O & MyOptions
): Promise<R> {
  // DoStuff
  // ...
  // Send
  const res = await this.executor.push(requests, options);
  return res as R;
}
```
To use your executor, you attach it to a profile like so
```ts
const profile = new  RequesterProfile().executor(MyExecutor, {});
```
And that's it
### Credits
This package was created by the tech team at [Rose](https://politicsandwar.com/alliance/id=790).
The basic types were generated with help from [GraphQL Code Generator](https://www.graphql-code-generator.com/).