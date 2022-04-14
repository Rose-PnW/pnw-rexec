import { config } from './executors.js';
import { Request } from './request.js';
export class QueryRequest {
    constructor(endpoint, args, request) {
        this.endpoint = endpoint;
        this.args = args;
        this.request = request;
    }
    stringify() {
        if (Object.keys(this.args).length > 0) {
            const args = Object.entries(this.args).map(([k, v]) => `${k}:${v}`).join(' ');
            return `${this.endpoint}(${args}){${this.request.stringify()}}`;
        }
        else {
            return `${this.endpoint}{${this.request.stringify()}}`;
        }
    }
    parse(res) {
        return this.request.parse(res);
    }
}
;
export class RequestBuilder {
    constructor() {
        this.requests = {};
    }
    nations(args, f) {
        const builder = this;
        builder.requests.nations = new QueryRequest('nations', args, f(new Request()));
        return builder;
    }
    alliances(args, f) {
        const builder = this;
        builder.requests.alliances = new QueryRequest('alliances', args, f(new Request()));
        return builder;
    }
    tradeprices(args, f) {
        const builder = this;
        builder.requests.tradeprices = new QueryRequest('tradeprices', args, f(new Request()));
        return builder;
    }
    trades(args, f) {
        const builder = this;
        builder.requests.trades = new QueryRequest('trades', args, f(new Request()));
        return builder;
    }
    wars(args, f) {
        const builder = this;
        builder.requests.wars = new QueryRequest('wars', args, f(new Request()));
        return builder;
    }
    bounties(args, f) {
        const builder = this;
        builder.requests.bounties = new QueryRequest('bounties', args, f(new Request()));
        return builder;
    }
    warattacks(args, f) {
        const builder = this;
        builder.requests.warattacks = new QueryRequest('warattacks', args, f(new Request()));
        return builder;
    }
    treaties(args, f) {
        const builder = this;
        builder.requests.treaties = new QueryRequest('treaties', args, f(new Request()));
        return builder;
    }
    cities(args, f) {
        const builder = this;
        builder.requests.cities = new QueryRequest('cities', args, f(new Request()));
        return builder;
    }
    bankrecs(args, f) {
        const builder = this;
        builder.requests.bankrecs = new QueryRequest('bankrecs', args, f(new Request()));
        return builder;
    }
    baseball_games(args, f) {
        const builder = this;
        builder.requests.baseball_games = new QueryRequest('baseball_games', args, f(new Request()));
        return builder;
    }
    baseball_teams(args, f) {
        const builder = this;
        builder.requests.baseball_teams = new QueryRequest('baseball_teams', args, f(new Request()));
        return builder;
    }
    baseball_players(args, f) {
        const builder = this;
        builder.requests.baseball_players = new QueryRequest('baseball_players', args, f(new Request()));
        return builder;
    }
    async send() {
        return await config.executor.push(this.requests);
    }
}
async function test() {
    const response = await new RequestBuilder()
        .nations({}, (n) => n.child('data', (d) => d
        .fields('nation_name')
        .child('alliance', (a) => a.fields('accept_members'))))
        .bankrecs({ first: 1 }, (b) => b.child('data', (d) => d
        .fields('date')))
        .send();
    console.log(JSON.stringify(response));
}
await test();
