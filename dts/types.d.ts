export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    DateTimeAuto: {
        input: any;
        output: any;
    };
    DateTime: {
        input: any;
        output: any;
    };
    Date: {
        input: any;
        output: any;
    };
    DateTimeTz: {
        input: any;
        output: any;
    };
};
export type Query = {
    __typename?: 'Query';
    me?: Maybe<ApiKeyDetails>;
    treasures?: Maybe<Array<Maybe<Treasure>>>;
    colors?: Maybe<Array<Maybe<Color>>>;
    game_info?: Maybe<GameInfo>;
    top_trade_info?: Maybe<TopTradeInfo>;
    nation_resource_stats?: Maybe<Array<Maybe<NationResourceStat>>>;
    nations?: Maybe<NationPaginator>;
    alliances?: Maybe<AlliancePaginator>;
    tradeprices?: Maybe<TradepricePaginator>;
    trades?: Maybe<TradePaginator>;
    wars?: Maybe<WarPaginator>;
    bounties?: Maybe<BountyPaginator>;
    warattacks?: Maybe<WarAttackPaginator>;
    treaties?: Maybe<TreatyPaginator>;
    cities?: Maybe<CityPaginator>;
    bankrecs?: Maybe<BankrecPaginator>;
    baseball_games?: Maybe<BbGamePaginator>;
    baseball_teams?: Maybe<BbTeamPaginator>;
    baseball_players?: Maybe<BbPlayerPaginator>;
    treasure_trades?: Maybe<TreasureTradePaginator>;
    embargoes?: Maybe<EmbargoPaginator>;
    resource_stats?: Maybe<ResourceStatPaginator>;
    activity_stats?: Maybe<ActivityStatPaginator>;
    banned_nations?: Maybe<BannedNationPaginator>;
};
export type QueryNation_Resource_StatsArgs = {
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    orderBy?: InputMaybe<Array<QueryNationResourceStatsOrderByOrderByClause>>;
};
export type QueryNationsArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    max_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    nation_name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    leader_name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    alliance_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    alliance_position?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    alliance_position_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    color?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    created_before?: InputMaybe<Scalars['DateTime']['input']>;
    created_after?: InputMaybe<Scalars['DateTime']['input']>;
    active_since?: InputMaybe<Scalars['DateTime']['input']>;
    active_before?: InputMaybe<Scalars['DateTime']['input']>;
    min_score?: InputMaybe<Scalars['Float']['input']>;
    max_score?: InputMaybe<Scalars['Float']['input']>;
    cities?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_cities?: InputMaybe<Scalars['Int']['input']>;
    max_cities?: InputMaybe<Scalars['Int']['input']>;
    vmode?: InputMaybe<Scalars['Boolean']['input']>;
    discord?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    discord_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    tax_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    continent?: InputMaybe<Array<InputMaybe<Continents>>>;
    orderBy?: InputMaybe<Array<QueryNationsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryAlliancesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    color?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    orderBy?: InputMaybe<Array<QueryAlliancesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryTradepricesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryTradesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    type?: InputMaybe<TradeType>;
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    offer_resource?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    buy_or_sell?: InputMaybe<Scalars['String']['input']>;
    accepted?: InputMaybe<Scalars['Boolean']['input']>;
    original_trade_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryTradesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryWarsArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    attid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    defid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    days_ago?: InputMaybe<Scalars['Int']['input']>;
    active?: InputMaybe<Scalars['Boolean']['input']>;
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    alliance_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryWarsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBountiesArgs = {
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_amount?: InputMaybe<Scalars['Float']['input']>;
    max_amount?: InputMaybe<Scalars['Float']['input']>;
    orderBy?: InputMaybe<Array<QueryBountiesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryWarattacksArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    war_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    orderBy?: InputMaybe<Array<QueryWarattacksOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryTreatiesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryTreatiesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryCitiesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryCitiesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBankrecsArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    stype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryBankrecsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBaseball_GamesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    team_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryBaseballGamesOrderByOrderByClause>>;
    open?: InputMaybe<Scalars['Boolean']['input']>;
    max_wager?: InputMaybe<Scalars['Float']['input']>;
    min_wager?: InputMaybe<Scalars['Float']['input']>;
    wager?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBaseball_TeamsArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryBaseballTeamsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBaseball_PlayersArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    team_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<QueryBaseballPlayersOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryTreasure_TradesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<QueryTreasureTradesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryEmbargoesArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<QueryEmbargoesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryResource_StatsArgs = {
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    orderBy?: InputMaybe<Array<QueryResourceStatsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryActivity_StatsArgs = {
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    orderBy?: InputMaybe<Array<QueryActivityStatsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBanned_NationsArgs = {
    nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    leader_name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    nation_name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    orderBy?: InputMaybe<Array<QueryBannedNationsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
};
export type ApiKeyDetails = {
    __typename?: 'ApiKeyDetails';
    nation?: Maybe<Nation>;
    key?: Maybe<Scalars['String']['output']>;
    requests?: Maybe<Scalars['Int']['output']>;
    max_requests?: Maybe<Scalars['Int']['output']>;
    permissions?: Maybe<ApiKeyPermissions>;
    permission_bits?: Maybe<Scalars['Int']['output']>;
};
export type Nation = {
    __typename?: 'Nation';
    id?: Maybe<Scalars['ID']['output']>;
    alliance_id?: Maybe<Scalars['ID']['output']>;
    alliance_position?: Maybe<AlliancePositionEnum>;
    alliance_position_id?: Maybe<Scalars['ID']['output']>;
    alliance_position_info?: Maybe<AlliancePosition>;
    alliance?: Maybe<Alliance>;
    nation_name?: Maybe<Scalars['String']['output']>;
    leader_name?: Maybe<Scalars['String']['output']>;
    continent?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use war_policy instead. */
    warpolicy?: Maybe<Scalars['String']['output']>;
    war_policy?: Maybe<WarPolicy>;
    /** @deprecated Use domestic_policy instead. */
    dompolicy?: Maybe<Scalars['String']['output']>;
    domestic_policy?: Maybe<DomesticPolicy>;
    color?: Maybe<Scalars['String']['output']>;
    num_cities?: Maybe<Scalars['Int']['output']>;
    cities: Array<City>;
    score?: Maybe<Scalars['Float']['output']>;
    update_tz?: Maybe<Scalars['Float']['output']>;
    population?: Maybe<Scalars['Int']['output']>;
    flag?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use vacation_mode_turns instead. */
    vmode?: Maybe<Scalars['Int']['output']>;
    vacation_mode_turns?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use beige_turns instead. */
    beigeturns?: Maybe<Scalars['Int']['output']>;
    beige_turns?: Maybe<Scalars['Int']['output']>;
    espionage_available?: Maybe<Scalars['Boolean']['output']>;
    last_active?: Maybe<Scalars['DateTimeAuto']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    soldiers?: Maybe<Scalars['Int']['output']>;
    tanks?: Maybe<Scalars['Int']['output']>;
    aircraft?: Maybe<Scalars['Int']['output']>;
    ships?: Maybe<Scalars['Int']['output']>;
    missiles?: Maybe<Scalars['Int']['output']>;
    nukes?: Maybe<Scalars['Int']['output']>;
    spies?: Maybe<Scalars['Int']['output']>;
    soldiers_today?: Maybe<Scalars['Int']['output']>;
    tanks_today?: Maybe<Scalars['Int']['output']>;
    aircraft_today?: Maybe<Scalars['Int']['output']>;
    ships_today?: Maybe<Scalars['Int']['output']>;
    missiles_today?: Maybe<Scalars['Int']['output']>;
    nukes_today?: Maybe<Scalars['Int']['output']>;
    spies_today?: Maybe<Scalars['Int']['output']>;
    discord?: Maybe<Scalars['String']['output']>;
    discord_id?: Maybe<Scalars['String']['output']>;
    treasures: Array<Treasure>;
    /** @deprecated Use wars instead */
    offensive_wars: Array<War>;
    /** @deprecated Use wars instead */
    defensive_wars: Array<War>;
    wars: Array<War>;
    /** @deprecated Use bankrecs instead */
    sent_bankrecs: Array<Bankrec>;
    /** @deprecated Use bankrecs instead */
    received_bankrecs: Array<Bankrec>;
    bankrecs?: Maybe<Array<Maybe<Bankrec>>>;
    trades?: Maybe<Array<Maybe<Trade>>>;
    taxrecs?: Maybe<Array<Maybe<Bankrec>>>;
    bounties?: Maybe<Array<Maybe<Bounty>>>;
    turns_since_last_city?: Maybe<Scalars['Int']['output']>;
    turns_since_last_project?: Maybe<Scalars['Int']['output']>;
    money?: Maybe<Scalars['Float']['output']>;
    coal?: Maybe<Scalars['Float']['output']>;
    oil?: Maybe<Scalars['Float']['output']>;
    uranium?: Maybe<Scalars['Float']['output']>;
    iron?: Maybe<Scalars['Float']['output']>;
    bauxite?: Maybe<Scalars['Float']['output']>;
    lead?: Maybe<Scalars['Float']['output']>;
    gasoline?: Maybe<Scalars['Float']['output']>;
    munitions?: Maybe<Scalars['Float']['output']>;
    steel?: Maybe<Scalars['Float']['output']>;
    aluminum?: Maybe<Scalars['Float']['output']>;
    food?: Maybe<Scalars['Float']['output']>;
    credits?: Maybe<Scalars['Int']['output']>;
    projects?: Maybe<Scalars['Int']['output']>;
    project_bits?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use iron_works instead */
    ironw?: Maybe<Scalars['Boolean']['output']>;
    iron_works?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use bauxite_works instead */
    bauxitew?: Maybe<Scalars['Boolean']['output']>;
    bauxite_works?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use arms_stockpile instead */
    armss?: Maybe<Scalars['Boolean']['output']>;
    arms_stockpile?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use emergency_gasoline_reserve instead */
    egr?: Maybe<Scalars['Boolean']['output']>;
    emergency_gasoline_reserve?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use mass_irrigation instead */
    massirr?: Maybe<Scalars['Boolean']['output']>;
    mass_irrigation?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use international_trade_center instead */
    itc?: Maybe<Scalars['Boolean']['output']>;
    international_trade_center?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use missile_launch_pad instead */
    mlp?: Maybe<Scalars['Boolean']['output']>;
    missile_launch_pad?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use nuclear_research_facility instead */
    nrf?: Maybe<Scalars['Boolean']['output']>;
    nuclear_research_facility?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use iron_dome instead */
    irond?: Maybe<Scalars['Boolean']['output']>;
    iron_dome?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use vital_defense_system instead */
    vds?: Maybe<Scalars['Boolean']['output']>;
    vital_defense_system?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use central_intelligence_agency instead */
    cia?: Maybe<Scalars['Boolean']['output']>;
    central_intelligence_agency?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use center_for_civil_engineering instead */
    cfce?: Maybe<Scalars['Boolean']['output']>;
    center_for_civil_engineering?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use propaganda_bureau instead */
    propb?: Maybe<Scalars['Boolean']['output']>;
    propaganda_bureau?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use uranium_enrichment_program instead */
    uap?: Maybe<Scalars['Boolean']['output']>;
    uranium_enrichment_program?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use urban_planning instead */
    city_planning?: Maybe<Scalars['Boolean']['output']>;
    urban_planning?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use advanced_urban_planning instead */
    adv_city_planning?: Maybe<Scalars['Boolean']['output']>;
    advanced_urban_planning?: Maybe<Scalars['Boolean']['output']>;
    space_program?: Maybe<Scalars['Boolean']['output']>;
    spy_satellite?: Maybe<Scalars['Boolean']['output']>;
    moon_landing?: Maybe<Scalars['Boolean']['output']>;
    pirate_economy?: Maybe<Scalars['Boolean']['output']>;
    recycling_initiative?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use telecommunications_satellite instead */
    telecom_satellite?: Maybe<Scalars['Boolean']['output']>;
    telecommunications_satellite?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use green_technologies instead */
    green_tech?: Maybe<Scalars['Boolean']['output']>;
    green_technologies?: Maybe<Scalars['Boolean']['output']>;
    arable_land_agency?: Maybe<Scalars['Boolean']['output']>;
    clinical_research_center?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use specialized_police_training_program instead */
    specialized_police_training?: Maybe<Scalars['Boolean']['output']>;
    specialized_police_training_program?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use advanced_engineering_corps instead */
    adv_engineering_corps?: Maybe<Scalars['Boolean']['output']>;
    advanced_engineering_corps?: Maybe<Scalars['Boolean']['output']>;
    government_support_agency?: Maybe<Scalars['Boolean']['output']>;
    research_and_development_center?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use activity_center instead */
    resource_production_center?: Maybe<Scalars['Boolean']['output']>;
    metropolitan_planning?: Maybe<Scalars['Boolean']['output']>;
    military_salvage?: Maybe<Scalars['Boolean']['output']>;
    fallout_shelter?: Maybe<Scalars['Boolean']['output']>;
    activity_center?: Maybe<Scalars['Boolean']['output']>;
    bureau_of_domestic_affairs?: Maybe<Scalars['Boolean']['output']>;
    advanced_pirate_economy?: Maybe<Scalars['Boolean']['output']>;
    mars_landing?: Maybe<Scalars['Boolean']['output']>;
    surveillance_network?: Maybe<Scalars['Boolean']['output']>;
    moon_landing_date?: Maybe<Scalars['DateTimeAuto']['output']>;
    mars_landing_date?: Maybe<Scalars['DateTimeAuto']['output']>;
    wars_won?: Maybe<Scalars['Int']['output']>;
    wars_lost?: Maybe<Scalars['Int']['output']>;
    tax_id?: Maybe<Scalars['ID']['output']>;
    alliance_seniority?: Maybe<Scalars['Int']['output']>;
    baseball_team?: Maybe<BbTeam>;
    gross_national_income?: Maybe<Scalars['Float']['output']>;
    gross_domestic_product?: Maybe<Scalars['Float']['output']>;
    soldier_casualties?: Maybe<Scalars['Int']['output']>;
    soldier_kills?: Maybe<Scalars['Int']['output']>;
    tank_casualties?: Maybe<Scalars['Int']['output']>;
    tank_kills?: Maybe<Scalars['Int']['output']>;
    aircraft_casualties?: Maybe<Scalars['Int']['output']>;
    aircraft_kills?: Maybe<Scalars['Int']['output']>;
    ship_casualties?: Maybe<Scalars['Int']['output']>;
    ship_kills?: Maybe<Scalars['Int']['output']>;
    missile_casualties?: Maybe<Scalars['Int']['output']>;
    missile_kills?: Maybe<Scalars['Int']['output']>;
    nuke_casualties?: Maybe<Scalars['Int']['output']>;
    nuke_kills?: Maybe<Scalars['Int']['output']>;
    spy_casualties?: Maybe<Scalars['Int']['output']>;
    spy_kills?: Maybe<Scalars['Int']['output']>;
    spy_attacks?: Maybe<Scalars['Int']['output']>;
    money_looted?: Maybe<Scalars['Float']['output']>;
    vip?: Maybe<Scalars['Boolean']['output']>;
    commendations?: Maybe<Scalars['Int']['output']>;
    denouncements?: Maybe<Scalars['Int']['output']>;
    economic_policy?: Maybe<EconomicPolicy>;
    social_policy?: Maybe<SocialPolicy>;
    government_type?: Maybe<GovernmentType>;
    credits_redeemed_this_month?: Maybe<Scalars['Int']['output']>;
};
export type NationWarsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    attid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    defid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    active?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<NationWarsOrderByOrderByClause>>;
};
export type NationBankrecsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    stype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<NationBankrecsOrderByOrderByClause>>;
};
export type NationTradesArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    type?: InputMaybe<TradeType>;
    offer_resource?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    buy_or_sell?: InputMaybe<Scalars['String']['input']>;
    accepted?: InputMaybe<Scalars['Boolean']['input']>;
    original_trade_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<NationTradesOrderByOrderByClause>>;
};
export type NationTaxrecsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    stype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<NationTaxrecsOrderByOrderByClause>>;
};
export type NationBountiesArgs = {
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
};
export declare enum AlliancePositionEnum {
    Noalliance = "NOALLIANCE",
    Applicant = "APPLICANT",
    Member = "MEMBER",
    Officer = "OFFICER",
    Heir = "HEIR",
    Leader = "LEADER"
}
export type AlliancePosition = {
    __typename?: 'AlliancePosition';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    alliance_id?: Maybe<Scalars['ID']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    creator_id?: Maybe<Scalars['ID']['output']>;
    last_editor_id?: Maybe<Scalars['ID']['output']>;
    date_modified?: Maybe<Scalars['DateTimeAuto']['output']>;
    position_level?: Maybe<Scalars['Int']['output']>;
    leader?: Maybe<Scalars['Boolean']['output']>;
    heir?: Maybe<Scalars['Boolean']['output']>;
    officer?: Maybe<Scalars['Boolean']['output']>;
    member?: Maybe<Scalars['Boolean']['output']>;
    permissions?: Maybe<Scalars['Int']['output']>;
    view_bank?: Maybe<Scalars['Boolean']['output']>;
    withdraw_bank?: Maybe<Scalars['Boolean']['output']>;
    change_permissions?: Maybe<Scalars['Boolean']['output']>;
    see_spies?: Maybe<Scalars['Boolean']['output']>;
    see_reset_timers?: Maybe<Scalars['Boolean']['output']>;
    tax_brackets?: Maybe<Scalars['Boolean']['output']>;
    post_announcements?: Maybe<Scalars['Boolean']['output']>;
    manage_announcements?: Maybe<Scalars['Boolean']['output']>;
    accept_applicants?: Maybe<Scalars['Boolean']['output']>;
    remove_members?: Maybe<Scalars['Boolean']['output']>;
    edit_alliance_info?: Maybe<Scalars['Boolean']['output']>;
    manage_treaties?: Maybe<Scalars['Boolean']['output']>;
    manage_market_share?: Maybe<Scalars['Boolean']['output']>;
    manage_embargoes?: Maybe<Scalars['Boolean']['output']>;
    promote_self_to_leader?: Maybe<Scalars['Boolean']['output']>;
};
export type Alliance = {
    __typename?: 'Alliance';
    id?: Maybe<Scalars['ID']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    acronym?: Maybe<Scalars['String']['output']>;
    score?: Maybe<Scalars['Float']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    nations: Array<Nation>;
    average_score?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Use treaties instead */
    sent_treaties: Array<Treaty>;
    /** @deprecated Use treaties instead */
    received_treaties: Array<Treaty>;
    treaties: Array<Treaty>;
    alliance_positions: Array<AlliancePosition>;
    /** @deprecated Use accept_members instead. */
    acceptmem?: Maybe<Scalars['Boolean']['output']>;
    accept_members?: Maybe<Scalars['Boolean']['output']>;
    flag?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use forum_link instead. */
    forumlink?: Maybe<Scalars['String']['output']>;
    forum_link?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use discord_link instead. */
    irclink?: Maybe<Scalars['String']['output']>;
    discord_link?: Maybe<Scalars['String']['output']>;
    wiki_link?: Maybe<Scalars['String']['output']>;
    bankrecs?: Maybe<Array<Maybe<Bankrec>>>;
    taxrecs?: Maybe<Array<Maybe<Bankrec>>>;
    tax_brackets?: Maybe<Array<Maybe<TaxBracket>>>;
    wars: Array<War>;
    money?: Maybe<Scalars['Float']['output']>;
    coal?: Maybe<Scalars['Float']['output']>;
    oil?: Maybe<Scalars['Float']['output']>;
    uranium?: Maybe<Scalars['Float']['output']>;
    iron?: Maybe<Scalars['Float']['output']>;
    bauxite?: Maybe<Scalars['Float']['output']>;
    lead?: Maybe<Scalars['Float']['output']>;
    gasoline?: Maybe<Scalars['Float']['output']>;
    munitions?: Maybe<Scalars['Float']['output']>;
    steel?: Maybe<Scalars['Float']['output']>;
    aluminum?: Maybe<Scalars['Float']['output']>;
    food?: Maybe<Scalars['Float']['output']>;
};
export type AllianceNationsArgs = {
    min_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    max_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    alliance_position?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    color?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    min_score?: InputMaybe<Scalars['Float']['input']>;
    max_score?: InputMaybe<Scalars['Float']['input']>;
    cities?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    min_cities?: InputMaybe<Scalars['Int']['input']>;
    max_cities?: InputMaybe<Scalars['Int']['input']>;
    tax_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    vmode?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<AllianceNationsOrderByOrderByClause>>;
};
export type AllianceTreatiesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<AllianceTreatiesOrderByOrderByClause>>;
};
export type AllianceBankrecsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    stype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<AllianceBankrecsOrderByOrderByClause>>;
};
export type AllianceTaxrecsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    stype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    rid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<AllianceTaxrecsOrderByOrderByClause>>;
};
export type AllianceTax_BracketsArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    orderBy?: InputMaybe<Array<AllianceTaxBracketsOrderByOrderByClause>>;
};
export type AllianceWarsArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    attid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    defid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    active?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<AllianceWarsOrderByOrderByClause>>;
};
export type AllianceNationsOrderByOrderByClause = {
    column: AllianceNationsOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceNationsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Soldiers = "SOLDIERS",
    Tanks = "TANKS",
    Aircraft = "AIRCRAFT",
    Ships = "SHIPS",
    Missiles = "MISSILES",
    Nukes = "NUKES",
    Cities = "CITIES"
}
export declare enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
}
export type Treaty = {
    __typename?: 'Treaty';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    treaty_type?: Maybe<Scalars['String']['output']>;
    treaty_url?: Maybe<Scalars['String']['output']>;
    turns_left?: Maybe<Scalars['Int']['output']>;
    alliance1_id?: Maybe<Scalars['ID']['output']>;
    alliance1?: Maybe<Alliance>;
    alliance2_id?: Maybe<Scalars['ID']['output']>;
    alliance2?: Maybe<Alliance>;
    approved?: Maybe<Scalars['Boolean']['output']>;
};
export type AllianceTreatiesOrderByOrderByClause = {
    column: AllianceTreatiesOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceTreatiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    TurnsLeft = "TURNS_LEFT"
}
export type AllianceBankrecsOrderByOrderByClause = {
    column: AllianceBankrecsOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceBankrecsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Money = "MONEY",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Food = "FOOD"
}
export type Bankrec = {
    __typename?: 'Bankrec';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    /** @deprecated Use sender_id instead. */
    sid?: Maybe<Scalars['ID']['output']>;
    sender_id?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use sender_type instead. */
    stype?: Maybe<Scalars['Int']['output']>;
    sender_type?: Maybe<Scalars['Int']['output']>;
    sender?: Maybe<Nation>;
    /** @deprecated Use receiver_id instead. */
    rid?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use receiver_id instead. */
    recipient_id?: Maybe<Scalars['ID']['output']>;
    receiver_id?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use receiver_type instead. */
    rtype?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use receiver_type instead. */
    recipient_type?: Maybe<Scalars['Int']['output']>;
    receiver_type?: Maybe<Scalars['Int']['output']>;
    receiver?: Maybe<Nation>;
    /** @deprecated Use banker_id instead. */
    pid?: Maybe<Scalars['ID']['output']>;
    banker_id?: Maybe<Scalars['ID']['output']>;
    banker?: Maybe<Nation>;
    note?: Maybe<Scalars['String']['output']>;
    money?: Maybe<Scalars['Float']['output']>;
    coal?: Maybe<Scalars['Float']['output']>;
    oil?: Maybe<Scalars['Float']['output']>;
    uranium?: Maybe<Scalars['Float']['output']>;
    iron?: Maybe<Scalars['Float']['output']>;
    bauxite?: Maybe<Scalars['Float']['output']>;
    lead?: Maybe<Scalars['Float']['output']>;
    gasoline?: Maybe<Scalars['Float']['output']>;
    munitions?: Maybe<Scalars['Float']['output']>;
    steel?: Maybe<Scalars['Float']['output']>;
    aluminum?: Maybe<Scalars['Float']['output']>;
    food?: Maybe<Scalars['Float']['output']>;
    tax_id?: Maybe<Scalars['ID']['output']>;
};
export type AllianceTaxrecsOrderByOrderByClause = {
    column: AllianceTaxrecsOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceTaxrecsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Money = "MONEY",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Food = "FOOD"
}
export type AllianceTaxBracketsOrderByOrderByClause = {
    column: AllianceTaxBracketsOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceTaxBracketsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    DateModified = "DATE_MODIFIED",
    TaxRate = "TAX_RATE",
    ResourceRaxRate = "RESOURCE_RAX_RATE"
}
export type TaxBracket = {
    __typename?: 'TaxBracket';
    id?: Maybe<Scalars['ID']['output']>;
    alliance_id?: Maybe<Scalars['ID']['output']>;
    alliance?: Maybe<Alliance>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    date_modified?: Maybe<Scalars['DateTimeAuto']['output']>;
    last_modifier_id?: Maybe<Scalars['ID']['output']>;
    last_modifier?: Maybe<Nation>;
    tax_rate?: Maybe<Scalars['Int']['output']>;
    resource_tax_rate?: Maybe<Scalars['Int']['output']>;
    bracket_name?: Maybe<Scalars['String']['output']>;
};
export type AllianceWarsOrderByOrderByClause = {
    column: AllianceWarsOrderByColumn;
    order: SortOrder;
};
export declare enum AllianceWarsOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type War = {
    __typename?: 'War';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    war_type?: Maybe<WarType>;
    /** @deprecated Use ground_control instead. */
    groundcontrol?: Maybe<Scalars['ID']['output']>;
    ground_control?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use air_superiority instead. */
    airsuperiority?: Maybe<Scalars['ID']['output']>;
    air_superiority?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use naval_blockade instead. */
    navalblockade?: Maybe<Scalars['ID']['output']>;
    naval_blockade?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use winner_id instead. */
    winner?: Maybe<Scalars['ID']['output']>;
    winner_id?: Maybe<Scalars['ID']['output']>;
    attacks: Array<WarAttack>;
    /** @deprecated Use turns_left instead. */
    turnsleft?: Maybe<Scalars['Int']['output']>;
    turns_left?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_id instead. */
    attid?: Maybe<Scalars['ID']['output']>;
    att_id?: Maybe<Scalars['ID']['output']>;
    att_alliance_id?: Maybe<Scalars['ID']['output']>;
    att_alliance_position?: Maybe<AlliancePositionEnum>;
    attacker?: Maybe<Nation>;
    /** @deprecated Use def_id instead. */
    defid?: Maybe<Scalars['ID']['output']>;
    def_id?: Maybe<Scalars['ID']['output']>;
    def_alliance_id?: Maybe<Scalars['ID']['output']>;
    def_alliance_position?: Maybe<AlliancePositionEnum>;
    defender?: Maybe<Nation>;
    /** @deprecated Use att_points instead. */
    attpoints?: Maybe<Scalars['Int']['output']>;
    att_points?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use def_points instead. */
    defpoints?: Maybe<Scalars['Int']['output']>;
    def_points?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_peace instead. */
    attpeace?: Maybe<Scalars['Boolean']['output']>;
    att_peace?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use def_peace instead. */
    defpeace?: Maybe<Scalars['Boolean']['output']>;
    def_peace?: Maybe<Scalars['Boolean']['output']>;
    att_resistance?: Maybe<Scalars['Int']['output']>;
    def_resistance?: Maybe<Scalars['Int']['output']>;
    att_fortify?: Maybe<Scalars['Boolean']['output']>;
    def_fortify?: Maybe<Scalars['Boolean']['output']>;
    att_gas_used?: Maybe<Scalars['Float']['output']>;
    def_gas_used?: Maybe<Scalars['Float']['output']>;
    att_mun_used?: Maybe<Scalars['Float']['output']>;
    def_mun_used?: Maybe<Scalars['Float']['output']>;
    att_alum_used?: Maybe<Scalars['Float']['output']>;
    def_alum_used?: Maybe<Scalars['Float']['output']>;
    att_steel_used?: Maybe<Scalars['Float']['output']>;
    def_steel_used?: Maybe<Scalars['Float']['output']>;
    att_infra_destroyed?: Maybe<Scalars['Float']['output']>;
    def_infra_destroyed?: Maybe<Scalars['Float']['output']>;
    att_money_looted?: Maybe<Scalars['Float']['output']>;
    def_money_looted?: Maybe<Scalars['Float']['output']>;
    def_soldiers_lost?: Maybe<Scalars['Int']['output']>;
    att_soldiers_lost?: Maybe<Scalars['Int']['output']>;
    def_tanks_lost?: Maybe<Scalars['Int']['output']>;
    att_tanks_lost?: Maybe<Scalars['Int']['output']>;
    def_aircraft_lost?: Maybe<Scalars['Int']['output']>;
    att_aircraft_lost?: Maybe<Scalars['Int']['output']>;
    def_ships_lost?: Maybe<Scalars['Int']['output']>;
    att_ships_lost?: Maybe<Scalars['Int']['output']>;
    att_missiles_used?: Maybe<Scalars['Int']['output']>;
    def_missiles_used?: Maybe<Scalars['Int']['output']>;
    att_nukes_used?: Maybe<Scalars['Int']['output']>;
    def_nukes_used?: Maybe<Scalars['Int']['output']>;
    att_infra_destroyed_value?: Maybe<Scalars['Float']['output']>;
    def_infra_destroyed_value?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Use def_soldiers_lost instead */
    att_soldiers_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_soldiers_lost instead */
    def_soldiers_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use def_tanks_lost instead */
    att_tanks_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_tanks_lost instead */
    def_tanks_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use def_aircraft_lost instead */
    att_aircraft_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_aircraft_lost instead */
    def_aircraft_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use def_ships_lost instead */
    att_ships_killed?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use att_ships_lost instead */
    def_ships_killed?: Maybe<Scalars['Int']['output']>;
};
export type WarAttacksArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    war_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    orderBy?: InputMaybe<Array<WarAttacksOrderByOrderByClause>>;
};
export declare enum WarType {
    Ordinary = "ORDINARY",
    Attrition = "ATTRITION",
    Raid = "RAID"
}
export type WarAttacksOrderByOrderByClause = {
    column: WarAttacksOrderByColumn;
    order: SortOrder;
};
export declare enum WarAttacksOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type WarAttack = {
    __typename?: 'WarAttack';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    /** @deprecated Use att_id instead. */
    attid?: Maybe<Scalars['ID']['output']>;
    att_id?: Maybe<Scalars['ID']['output']>;
    attacker?: Maybe<Nation>;
    /** @deprecated Use def_id instead. */
    defid?: Maybe<Scalars['ID']['output']>;
    def_id?: Maybe<Scalars['ID']['output']>;
    defender?: Maybe<Nation>;
    type?: Maybe<AttackType>;
    /** @deprecated Use war_id instead. */
    warid?: Maybe<Scalars['ID']['output']>;
    war_id?: Maybe<Scalars['ID']['output']>;
    war?: Maybe<War>;
    victor?: Maybe<Scalars['ID']['output']>;
    success?: Maybe<Scalars['Int']['output']>;
    attcas1?: Maybe<Scalars['Int']['output']>;
    defcas1?: Maybe<Scalars['Int']['output']>;
    attcas2?: Maybe<Scalars['Int']['output']>;
    defcas2?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use city_id instead. */
    cityid?: Maybe<Scalars['ID']['output']>;
    city_id?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use infra_destroyed instead. */
    infradestroyed?: Maybe<Scalars['Float']['output']>;
    infra_destroyed?: Maybe<Scalars['Float']['output']>;
    /** @deprecated Use improvements_lost instead. */
    improvementslost?: Maybe<Scalars['Int']['output']>;
    improvements_lost?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use money_stolen instead. */
    moneystolen?: Maybe<Scalars['Float']['output']>;
    money_stolen?: Maybe<Scalars['Float']['output']>;
    loot_info?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use resistance_lost instead. */
    resistance_eliminated?: Maybe<Scalars['Int']['output']>;
    resistance_lost?: Maybe<Scalars['Int']['output']>;
    city_infra_before?: Maybe<Scalars['Float']['output']>;
    infra_destroyed_value?: Maybe<Scalars['Float']['output']>;
    att_mun_used?: Maybe<Scalars['Float']['output']>;
    def_mun_used?: Maybe<Scalars['Float']['output']>;
    att_gas_used?: Maybe<Scalars['Float']['output']>;
    def_gas_used?: Maybe<Scalars['Float']['output']>;
    aircraft_killed_by_tanks?: Maybe<Scalars['Int']['output']>;
    money_destroyed?: Maybe<Scalars['Float']['output']>;
    military_salvage_aluminum?: Maybe<Scalars['Float']['output']>;
    military_salvage_steel?: Maybe<Scalars['Float']['output']>;
    att_soldiers_used?: Maybe<Scalars['Int']['output']>;
    att_soldiers_lost?: Maybe<Scalars['Int']['output']>;
    def_soldiers_used?: Maybe<Scalars['Int']['output']>;
    def_soldiers_lost?: Maybe<Scalars['Int']['output']>;
    att_tanks_used?: Maybe<Scalars['Int']['output']>;
    att_tanks_lost?: Maybe<Scalars['Int']['output']>;
    def_tanks_used?: Maybe<Scalars['Int']['output']>;
    def_tanks_lost?: Maybe<Scalars['Int']['output']>;
    att_aircraft_used?: Maybe<Scalars['Int']['output']>;
    att_aircraft_lost?: Maybe<Scalars['Int']['output']>;
    def_aircraft_used?: Maybe<Scalars['Int']['output']>;
    def_aircraft_lost?: Maybe<Scalars['Int']['output']>;
    att_ships_used?: Maybe<Scalars['Int']['output']>;
    att_ships_lost?: Maybe<Scalars['Int']['output']>;
    def_ships_used?: Maybe<Scalars['Int']['output']>;
    def_ships_lost?: Maybe<Scalars['Int']['output']>;
    att_missiles_used?: Maybe<Scalars['Int']['output']>;
    att_missiles_lost?: Maybe<Scalars['Int']['output']>;
    def_missiles_used?: Maybe<Scalars['Int']['output']>;
    def_missiles_lost?: Maybe<Scalars['Int']['output']>;
    att_nukes_used?: Maybe<Scalars['Int']['output']>;
    att_nukes_lost?: Maybe<Scalars['Int']['output']>;
    def_nukes_used?: Maybe<Scalars['Int']['output']>;
    def_nukes_lost?: Maybe<Scalars['Int']['output']>;
    improvements_destroyed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    infra_destroyed_percentage?: Maybe<Scalars['Float']['output']>;
    cities_infra_before?: Maybe<Array<Maybe<CityInfraDamage>>>;
    money_looted?: Maybe<Scalars['Float']['output']>;
    coal_looted?: Maybe<Scalars['Int']['output']>;
    oil_looted?: Maybe<Scalars['Int']['output']>;
    uranium_looted?: Maybe<Scalars['Int']['output']>;
    iron_looted?: Maybe<Scalars['Int']['output']>;
    bauxite_looted?: Maybe<Scalars['Int']['output']>;
    lead_looted?: Maybe<Scalars['Int']['output']>;
    gasoline_looted?: Maybe<Scalars['Int']['output']>;
    munitions_looted?: Maybe<Scalars['Int']['output']>;
    steel_looted?: Maybe<Scalars['Int']['output']>;
    aluminum_looted?: Maybe<Scalars['Int']['output']>;
    food_looted?: Maybe<Scalars['Int']['output']>;
};
export declare enum AttackType {
    Airvinfra = "AIRVINFRA",
    Airvsoldiers = "AIRVSOLDIERS",
    Airvtanks = "AIRVTANKS",
    Airvmoney = "AIRVMONEY",
    Airvships = "AIRVSHIPS",
    Airvair = "AIRVAIR",
    Ground = "GROUND",
    Missile = "MISSILE",
    Missilefail = "MISSILEFAIL",
    Nuke = "NUKE",
    Nukefail = "NUKEFAIL",
    Naval = "NAVAL",
    Fortify = "FORTIFY",
    Peace = "PEACE",
    Victory = "VICTORY",
    Allianceloot = "ALLIANCELOOT"
}
export type CityInfraDamage = {
    __typename?: 'CityInfraDamage';
    id?: Maybe<Scalars['ID']['output']>;
    infrastructure?: Maybe<Scalars['Float']['output']>;
};
export declare enum WarPolicy {
    Attrition = "ATTRITION",
    Turtle = "TURTLE",
    Blitzkrieg = "BLITZKRIEG",
    Fortress = "FORTRESS",
    Moneybags = "MONEYBAGS",
    Pirate = "PIRATE",
    Tactician = "TACTICIAN",
    Guardian = "GUARDIAN",
    Covert = "COVERT",
    Arcane = "ARCANE"
}
export declare enum DomesticPolicy {
    ManifestDestiny = "MANIFEST_DESTINY",
    OpenMarkets = "OPEN_MARKETS",
    TechnologicalAdvancement = "TECHNOLOGICAL_ADVANCEMENT",
    Imperialism = "IMPERIALISM",
    Urbanization = "URBANIZATION",
    RapidExpansion = "RAPID_EXPANSION"
}
export type City = {
    __typename?: 'City';
    id?: Maybe<Scalars['ID']['output']>;
    nation_id?: Maybe<Scalars['ID']['output']>;
    nation?: Maybe<Nation>;
    name?: Maybe<Scalars['String']['output']>;
    date?: Maybe<Scalars['Date']['output']>;
    infrastructure?: Maybe<Scalars['Float']['output']>;
    land?: Maybe<Scalars['Float']['output']>;
    powered?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use oil_power instead */
    oilpower?: Maybe<Scalars['Int']['output']>;
    oil_power?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use wind_power instead */
    windpower?: Maybe<Scalars['Int']['output']>;
    wind_power?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use coal_power instead */
    coalpower?: Maybe<Scalars['Int']['output']>;
    coal_power?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use nuclear_power instead */
    nuclearpower?: Maybe<Scalars['Int']['output']>;
    nuclear_power?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use coal_mine instead */
    coalmine?: Maybe<Scalars['Int']['output']>;
    coal_mine?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use oil_well instead */
    oilwell?: Maybe<Scalars['Int']['output']>;
    oil_well?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use uranium_mine instead */
    uramine?: Maybe<Scalars['Int']['output']>;
    uranium_mine?: Maybe<Scalars['Int']['output']>;
    barracks?: Maybe<Scalars['Int']['output']>;
    farm?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use police_station instead */
    policestation?: Maybe<Scalars['Int']['output']>;
    police_station?: Maybe<Scalars['Int']['output']>;
    hospital?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use recycling_center instead */
    recyclingcenter?: Maybe<Scalars['Int']['output']>;
    recycling_center?: Maybe<Scalars['Int']['output']>;
    subway?: Maybe<Scalars['Int']['output']>;
    supermarket?: Maybe<Scalars['Int']['output']>;
    bank?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use shopping_mall instead */
    mall?: Maybe<Scalars['Int']['output']>;
    shopping_mall?: Maybe<Scalars['Int']['output']>;
    stadium?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use lead_mine instead */
    leadmine?: Maybe<Scalars['Int']['output']>;
    lead_mine?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use iron_mine instead */
    ironmine?: Maybe<Scalars['Int']['output']>;
    iron_mine?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use bauxite_mine instead */
    bauxitemine?: Maybe<Scalars['Int']['output']>;
    bauxite_mine?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use oil_refinery instead */
    gasrefinery?: Maybe<Scalars['Int']['output']>;
    oil_refinery?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use aluminum_refinery instead */
    aluminumrefinery?: Maybe<Scalars['Int']['output']>;
    aluminum_refinery?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use steel_mill instead */
    steelmill?: Maybe<Scalars['Int']['output']>;
    steel_mill?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use munitions_factory instead */
    munitionsfactory?: Maybe<Scalars['Int']['output']>;
    munitions_factory?: Maybe<Scalars['Int']['output']>;
    factory?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use hangar instead. */
    airforcebase?: Maybe<Scalars['Int']['output']>;
    hangar?: Maybe<Scalars['Int']['output']>;
    drydock?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use nuke_date instead. */
    nukedate?: Maybe<Scalars['Date']['output']>;
    nuke_date?: Maybe<Scalars['Date']['output']>;
};
export type Treasure = {
    __typename?: 'Treasure';
    name?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    continent?: Maybe<Scalars['String']['output']>;
    bonus?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use spawn_date instead. */
    spawndate?: Maybe<Scalars['Date']['output']>;
    spawn_date?: Maybe<Scalars['Date']['output']>;
    nation_id?: Maybe<Scalars['ID']['output']>;
    nation?: Maybe<Nation>;
};
export type NationWarsOrderByOrderByClause = {
    column: NationWarsOrderByColumn;
    order: SortOrder;
};
export declare enum NationWarsOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type NationBankrecsOrderByOrderByClause = {
    column: NationBankrecsOrderByColumn;
    order: SortOrder;
};
export declare enum NationBankrecsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Money = "MONEY",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Food = "FOOD"
}
export declare enum TradeType {
    Global = "GLOBAL",
    Personal = "PERSONAL",
    Alliance = "ALLIANCE"
}
export type NationTradesOrderByOrderByClause = {
    column: NationTradesOrderByColumn;
    order: SortOrder;
};
export declare enum NationTradesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    DateAccepted = "DATE_ACCEPTED",
    OfferResource = "OFFER_RESOURCE",
    OfferAmount = "OFFER_AMOUNT",
    ReturnAmount = "RETURN_AMOUNT"
}
export type Trade = {
    __typename?: 'Trade';
    id?: Maybe<Scalars['ID']['output']>;
    type?: Maybe<TradeType>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    /** @deprecated Use sender_id instead. */
    sid?: Maybe<Scalars['ID']['output']>;
    sender_id?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use receiver_id instead. */
    rid?: Maybe<Scalars['ID']['output']>;
    /** @deprecated Use receiver_id instead. */
    recipient_id?: Maybe<Scalars['ID']['output']>;
    receiver_id?: Maybe<Scalars['ID']['output']>;
    sender?: Maybe<Nation>;
    receiver?: Maybe<Nation>;
    offer_resource?: Maybe<Scalars['String']['output']>;
    offer_amount?: Maybe<Scalars['Int']['output']>;
    buy_or_sell?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use price instead */
    total?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<Scalars['Int']['output']>;
    accepted?: Maybe<Scalars['Boolean']['output']>;
    date_accepted?: Maybe<Scalars['DateTimeAuto']['output']>;
    original_trade_id?: Maybe<Scalars['ID']['output']>;
};
export type NationTaxrecsOrderByOrderByClause = {
    column: NationTaxrecsOrderByColumn;
    order: SortOrder;
};
export declare enum NationTaxrecsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Money = "MONEY",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Food = "FOOD"
}
export type Bounty = {
    __typename?: 'Bounty';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    nation_id?: Maybe<Scalars['ID']['output']>;
    nation?: Maybe<Nation>;
    amount?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<BountyType>;
};
export declare enum BountyType {
    Ordinary = "ORDINARY",
    Attrition = "ATTRITION",
    Raid = "RAID",
    Nuclear = "NUCLEAR"
}
export type BbTeam = {
    __typename?: 'BBTeam';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    nation_id?: Maybe<Scalars['ID']['output']>;
    nation?: Maybe<Nation>;
    name?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    home_jersey?: Maybe<Scalars['String']['output']>;
    away_jersey?: Maybe<Scalars['String']['output']>;
    stadium?: Maybe<Scalars['String']['output']>;
    quality?: Maybe<Scalars['Int']['output']>;
    seating?: Maybe<Scalars['Int']['output']>;
    rating?: Maybe<Scalars['Float']['output']>;
    wins?: Maybe<Scalars['Int']['output']>;
    glosses?: Maybe<Scalars['Int']['output']>;
    runs?: Maybe<Scalars['Int']['output']>;
    homers?: Maybe<Scalars['Int']['output']>;
    strikeouts?: Maybe<Scalars['Int']['output']>;
    games_played?: Maybe<Scalars['Int']['output']>;
    games?: Maybe<Array<Maybe<BbGame>>>;
    players?: Maybe<Array<Maybe<BbPlayer>>>;
};
export type BbTeamGamesArgs = {
    min_id?: InputMaybe<Scalars['Int']['input']>;
    max_id?: InputMaybe<Scalars['Int']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
    after?: InputMaybe<Scalars['DateTime']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Array<BbTeamGamesOrderByOrderByClause>>;
};
export type BbTeamGamesOrderByOrderByClause = {
    column: BbTeamGamesOrderByColumn;
    order: SortOrder;
};
export declare enum BbTeamGamesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Htscore = "HTSCORE",
    Atscore = "ATSCORE"
}
export type BbGame = {
    __typename?: 'BBGame';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    home_id?: Maybe<Scalars['ID']['output']>;
    away_id?: Maybe<Scalars['ID']['output']>;
    home_team?: Maybe<BbTeam>;
    away_team?: Maybe<BbTeam>;
    home_nation_id?: Maybe<Scalars['ID']['output']>;
    away_nation_id?: Maybe<Scalars['ID']['output']>;
    home_nation?: Maybe<Nation>;
    away_nation?: Maybe<Nation>;
    stadium_name?: Maybe<Scalars['String']['output']>;
    home_score?: Maybe<Scalars['Int']['output']>;
    away_score?: Maybe<Scalars['Int']['output']>;
    sim_text?: Maybe<Scalars['String']['output']>;
    highlights?: Maybe<Scalars['String']['output']>;
    home_revenue?: Maybe<Scalars['Float']['output']>;
    spoils?: Maybe<Scalars['Float']['output']>;
    open?: Maybe<Scalars['Int']['output']>;
    wager?: Maybe<Scalars['Float']['output']>;
};
export type BbPlayer = {
    __typename?: 'BBPlayer';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    nation_id?: Maybe<Scalars['ID']['output']>;
    nation?: Maybe<Nation>;
    team_id?: Maybe<Scalars['ID']['output']>;
    team?: Maybe<BbTeam>;
    name?: Maybe<Scalars['String']['output']>;
    age?: Maybe<Scalars['Int']['output']>;
    position?: Maybe<Scalars['String']['output']>;
    pitching?: Maybe<Scalars['Float']['output']>;
    batting?: Maybe<Scalars['Float']['output']>;
    speed?: Maybe<Scalars['Float']['output']>;
    awareness?: Maybe<Scalars['Float']['output']>;
    overall?: Maybe<Scalars['Float']['output']>;
    birthday?: Maybe<Scalars['Int']['output']>;
};
export declare enum EconomicPolicy {
    ExtremeLeft = "EXTREME_LEFT",
    FarLeft = "FAR_LEFT",
    Left = "LEFT",
    Moderate = "MODERATE",
    Right = "RIGHT",
    FarRight = "FAR_RIGHT",
    ExtremeRight = "EXTREME_RIGHT"
}
export declare enum SocialPolicy {
    Anarchist = "ANARCHIST",
    Libertarian = "LIBERTARIAN",
    Liberal = "LIBERAL",
    Moderate = "MODERATE",
    Conservative = "CONSERVATIVE",
    Authoritarian = "AUTHORITARIAN",
    Fascist = "FASCIST"
}
export declare enum GovernmentType {
    AbsoluteMonarchy = "ABSOLUTE_MONARCHY",
    Anarchy = "ANARCHY",
    Aristocracy = "ARISTOCRACY",
    BananaRepublic = "BANANA_REPUBLIC",
    CommunistDemocracy = "COMMUNIST_DEMOCRACY",
    CommunistDictatorship = "COMMUNIST_DICTATORSHIP",
    CommunistMonarchy = "COMMUNIST_MONARCHY",
    CommunistRepublic = "COMMUNIST_REPUBLIC",
    CommunistTheocracy = "COMMUNIST_THEOCRACY",
    ConstitutionalMonarchy = "CONSTITUTIONAL_MONARCHY",
    ConstitutionalRepublic = "CONSTITUTIONAL_REPUBLIC",
    Demarchy = "DEMARCHY",
    Democracy = "DEMOCRACY",
    DemocraticRepublic = "DEMOCRATIC_REPUBLIC",
    Dictatorship = "DICTATORSHIP",
    FederalRepublic = "FEDERAL_REPUBLIC",
    Monarchy = "MONARCHY",
    Noocracy = "NOOCRACY",
    Oligarchy = "OLIGARCHY",
    ParliamentaryDemocracy = "PARLIAMENTARY_DEMOCRACY",
    ParliamentaryRepublic = "PARLIAMENTARY_REPUBLIC",
    PeoplesRepublic = "PEOPLES_REPUBLIC",
    Republic = "REPUBLIC",
    SocialDemocracy = "SOCIAL_DEMOCRACY",
    SocialistDictatorship = "SOCIALIST_DICTATORSHIP",
    SocialistRepublic = "SOCIALIST_REPUBLIC",
    SocialistTheocracy = "SOCIALIST_THEOCRACY",
    Stratocracy = "STRATOCRACY",
    Technocracy = "TECHNOCRACY",
    Theocracy = "THEOCRACY",
    TheocraticDemocracy = "THEOCRATIC_DEMOCRACY",
    TheocraticDictatorship = "THEOCRATIC_DICTATORSHIP",
    TheocraticRepublic = "THEOCRATIC_REPUBLIC"
}
export type ApiKeyPermissions = {
    __typename?: 'ApiKeyPermissions';
    nation_view_resources?: Maybe<Scalars['Boolean']['output']>;
    nation_deposit_to_bank?: Maybe<Scalars['Boolean']['output']>;
    nation_military_buys?: Maybe<Scalars['Boolean']['output']>;
    nation_see_reset_timers?: Maybe<Scalars['Boolean']['output']>;
    nation_see_spies?: Maybe<Scalars['Boolean']['output']>;
    nation_view_trades?: Maybe<Scalars['Boolean']['output']>;
    nation_accept_trade?: Maybe<Scalars['Boolean']['output']>;
    nation_send_message?: Maybe<Scalars['Boolean']['output']>;
    alliance_view_bank?: Maybe<Scalars['Boolean']['output']>;
    alliance_withdraw_bank?: Maybe<Scalars['Boolean']['output']>;
    alliance_change_permissions?: Maybe<Scalars['Boolean']['output']>;
    alliance_see_spies?: Maybe<Scalars['Boolean']['output']>;
    alliance_see_reset_timers?: Maybe<Scalars['Boolean']['output']>;
    alliance_tax_brackets?: Maybe<Scalars['Boolean']['output']>;
    alliance_accept_applicants?: Maybe<Scalars['Boolean']['output']>;
    alliance_remove_members?: Maybe<Scalars['Boolean']['output']>;
    alliance_manage_treaties?: Maybe<Scalars['Boolean']['output']>;
    alliance_promote_self_to_leader?: Maybe<Scalars['Boolean']['output']>;
};
export type Color = {
    __typename?: 'Color';
    color?: Maybe<Scalars['String']['output']>;
    bloc_name?: Maybe<Scalars['String']['output']>;
    turn_bonus?: Maybe<Scalars['Int']['output']>;
};
export type GameInfo = {
    __typename?: 'GameInfo';
    game_date?: Maybe<Scalars['DateTimeAuto']['output']>;
    radiation?: Maybe<Radiation>;
};
export type Radiation = {
    __typename?: 'Radiation';
    global?: Maybe<Scalars['Float']['output']>;
    north_america?: Maybe<Scalars['Float']['output']>;
    south_america?: Maybe<Scalars['Float']['output']>;
    europe?: Maybe<Scalars['Float']['output']>;
    africa?: Maybe<Scalars['Float']['output']>;
    asia?: Maybe<Scalars['Float']['output']>;
    australia?: Maybe<Scalars['Float']['output']>;
    antarctica?: Maybe<Scalars['Float']['output']>;
};
export type TopTradeInfo = {
    __typename?: 'TopTradeInfo';
    market_index?: Maybe<Scalars['Int']['output']>;
    resources?: Maybe<Array<Maybe<TopTradeResourceInfo>>>;
};
export type TopTradeInfoResourcesArgs = {
    resource?: InputMaybe<Array<InputMaybe<Resources>>>;
};
export declare enum Resources {
    Food = "FOOD",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Lead = "LEAD",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Credit = "CREDIT"
}
export type TopTradeResourceInfo = {
    __typename?: 'TopTradeResourceInfo';
    resource?: Maybe<Scalars['String']['output']>;
    average_price?: Maybe<Scalars['Int']['output']>;
    best_buy_offer?: Maybe<Trade>;
    best_sell_offer?: Maybe<Trade>;
};
export type QueryNationResourceStatsOrderByOrderByClause = {
    column: QueryNationResourceStatsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryNationResourceStatsOrderByColumn {
    Date = "DATE",
    Money = "MONEY",
    Food = "FOOD",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Uranium = "URANIUM",
    Coal = "COAL",
    Oil = "OIL",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD"
}
export type NationResourceStat = {
    __typename?: 'NationResourceStat';
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    money?: Maybe<Scalars['String']['output']>;
    food?: Maybe<Scalars['String']['output']>;
    steel?: Maybe<Scalars['String']['output']>;
    aluminum?: Maybe<Scalars['String']['output']>;
    gasoline?: Maybe<Scalars['String']['output']>;
    munitions?: Maybe<Scalars['String']['output']>;
    uranium?: Maybe<Scalars['String']['output']>;
    coal?: Maybe<Scalars['String']['output']>;
    oil?: Maybe<Scalars['String']['output']>;
    iron?: Maybe<Scalars['String']['output']>;
    bauxite?: Maybe<Scalars['String']['output']>;
    lead?: Maybe<Scalars['String']['output']>;
};
export declare enum Continents {
    Africa = "AFRICA",
    Antarctica = "ANTARCTICA",
    Asia = "ASIA",
    Australia = "AUSTRALIA",
    Europe = "EUROPE",
    NorthAmerica = "NORTH_AMERICA",
    SouthAmerica = "SOUTH_AMERICA"
}
export type QueryNationsOrderByOrderByClause = {
    column: QueryNationsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryNationsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Soldiers = "SOLDIERS",
    SoldiersLost = "SOLDIERS_LOST",
    SoldierKills = "SOLDIER_KILLS",
    Tanks = "TANKS",
    TanksLost = "TANKS_LOST",
    TankKills = "TANK_KILLS",
    Aircraft = "AIRCRAFT",
    AircraftLost = "AIRCRAFT_LOST",
    AircraftKills = "AIRCRAFT_KILLS",
    Ships = "SHIPS",
    ShipsLost = "SHIPS_LOST",
    ShipKills = "SHIP_KILLS",
    Missiles = "MISSILES",
    MissilesLaunched = "MISSILES_LAUNCHED",
    MissilesEaten = "MISSILES_EATEN",
    Nukes = "NUKES",
    NukesLaunched = "NUKES_LAUNCHED",
    NukesEaten = "NUKES_EATEN",
    Cities = "CITIES",
    Score = "SCORE",
    Gdp = "GDP",
    Population = "POPULATION",
    ApprovalRating = "APPROVAL_RATING",
    InfraDestroyed = "INFRA_DESTROYED",
    InfraLost = "INFRA_LOST"
}
export type NationPaginator = {
    __typename?: 'NationPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Nation>;
};
export type PaginatorInfo = {
    __typename?: 'PaginatorInfo';
    count: Scalars['Int']['output'];
    currentPage: Scalars['Int']['output'];
    firstItem?: Maybe<Scalars['Int']['output']>;
    hasMorePages: Scalars['Boolean']['output'];
    lastItem?: Maybe<Scalars['Int']['output']>;
    lastPage: Scalars['Int']['output'];
    perPage: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};
export type QueryAlliancesOrderByOrderByClause = {
    column: QueryAlliancesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryAlliancesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Score = "SCORE"
}
export type AlliancePaginator = {
    __typename?: 'AlliancePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Alliance>;
};
export type TradepricePaginator = {
    __typename?: 'TradepricePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Tradeprice>;
};
export type Tradeprice = {
    __typename?: 'Tradeprice';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['Date']['output']>;
    coal?: Maybe<Scalars['Float']['output']>;
    oil?: Maybe<Scalars['Float']['output']>;
    uranium?: Maybe<Scalars['Float']['output']>;
    iron?: Maybe<Scalars['Float']['output']>;
    bauxite?: Maybe<Scalars['Float']['output']>;
    lead?: Maybe<Scalars['Float']['output']>;
    gasoline?: Maybe<Scalars['Float']['output']>;
    munitions?: Maybe<Scalars['Float']['output']>;
    steel?: Maybe<Scalars['Float']['output']>;
    aluminum?: Maybe<Scalars['Float']['output']>;
    food?: Maybe<Scalars['Float']['output']>;
    credits?: Maybe<Scalars['Float']['output']>;
};
export type QueryTradesOrderByOrderByClause = {
    column: QueryTradesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryTradesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    DateAccepted = "DATE_ACCEPTED",
    OfferResource = "OFFER_RESOURCE",
    OfferAmount = "OFFER_AMOUNT",
    ReturnAmount = "RETURN_AMOUNT"
}
export type TradePaginator = {
    __typename?: 'TradePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Trade>;
};
export type QueryWarsOrderByOrderByClause = {
    column: QueryWarsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryWarsOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type WarPaginator = {
    __typename?: 'WarPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<War>;
};
export type QueryBountiesOrderByOrderByClause = {
    column: QueryBountiesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBountiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Amount = "AMOUNT"
}
export type BountyPaginator = {
    __typename?: 'BountyPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Bounty>;
};
export type QueryWarattacksOrderByOrderByClause = {
    column: QueryWarattacksOrderByColumn;
    order: SortOrder;
};
export declare enum QueryWarattacksOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type WarAttackPaginator = {
    __typename?: 'WarAttackPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<WarAttack>;
};
export type QueryTreatiesOrderByOrderByClause = {
    column: QueryTreatiesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryTreatiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    TurnsLeft = "TURNS_LEFT"
}
export type TreatyPaginator = {
    __typename?: 'TreatyPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Treaty>;
};
export type QueryCitiesOrderByOrderByClause = {
    column: QueryCitiesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryCitiesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Infrastructure = "INFRASTRUCTURE",
    Maxinfra = "MAXINFRA",
    Land = "LAND"
}
export type CityPaginator = {
    __typename?: 'CityPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<City>;
};
export type QueryBankrecsOrderByOrderByClause = {
    column: QueryBankrecsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBankrecsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Money = "MONEY",
    Coal = "COAL",
    Oil = "OIL",
    Uranium = "URANIUM",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Food = "FOOD"
}
export type BankrecPaginator = {
    __typename?: 'BankrecPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Bankrec>;
};
export type QueryBaseballGamesOrderByOrderByClause = {
    column: QueryBaseballGamesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBaseballGamesOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Htscore = "HTSCORE",
    Atscore = "ATSCORE"
}
export type BbGamePaginator = {
    __typename?: 'BBGamePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BbGame>;
};
export type QueryBaseballTeamsOrderByOrderByClause = {
    column: QueryBaseballTeamsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBaseballTeamsOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Quality = "QUALITY",
    Seating = "SEATING",
    Rating = "RATING",
    Wins = "WINS",
    Glosses = "GLOSSES",
    Runs = "RUNS",
    Homers = "HOMERS",
    Strikeouts = "STRIKEOUTS",
    Games = "GAMES"
}
export type BbTeamPaginator = {
    __typename?: 'BBTeamPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BbTeam>;
};
export type QueryBaseballPlayersOrderByOrderByClause = {
    column: QueryBaseballPlayersOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBaseballPlayersOrderByColumn {
    Id = "ID",
    Date = "DATE",
    Age = "AGE",
    Pitching = "PITCHING",
    Batting = "BATTING",
    Speed = "SPEED",
    Awareness = "AWARENESS",
    Overall = "OVERALL"
}
export type BbPlayerPaginator = {
    __typename?: 'BBPlayerPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BbPlayer>;
};
export type QueryTreasureTradesOrderByOrderByClause = {
    column: QueryTreasureTradesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryTreasureTradesOrderByColumn {
    Id = "ID"
}
export type TreasureTradePaginator = {
    __typename?: 'TreasureTradePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TreasureTrade>;
};
export type TreasureTrade = {
    __typename?: 'TreasureTrade';
    id?: Maybe<Scalars['ID']['output']>;
    offer_date?: Maybe<Scalars['DateTimeAuto']['output']>;
    accept_date?: Maybe<Scalars['DateTimeAuto']['output']>;
    sender_id?: Maybe<Scalars['ID']['output']>;
    sender?: Maybe<Nation>;
    receiver_id?: Maybe<Scalars['ID']['output']>;
    receiver?: Maybe<Nation>;
    buying?: Maybe<Scalars['Boolean']['output']>;
    selling?: Maybe<Scalars['Boolean']['output']>;
    treasure?: Maybe<Scalars['String']['output']>;
    money?: Maybe<Scalars['Int']['output']>;
    accepted?: Maybe<Scalars['Boolean']['output']>;
    rejected?: Maybe<Scalars['Boolean']['output']>;
    seller_cancelled?: Maybe<Scalars['Boolean']['output']>;
};
export type QueryEmbargoesOrderByOrderByClause = {
    column: QueryEmbargoesOrderByColumn;
    order: SortOrder;
};
export declare enum QueryEmbargoesOrderByColumn {
    Id = "ID",
    Date = "DATE"
}
export type EmbargoPaginator = {
    __typename?: 'EmbargoPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Embargo>;
};
export type Embargo = {
    __typename?: 'Embargo';
    id?: Maybe<Scalars['ID']['output']>;
    date?: Maybe<Scalars['Date']['output']>;
    sender_id?: Maybe<Scalars['ID']['output']>;
    sender?: Maybe<Nation>;
    receiver_id?: Maybe<Scalars['ID']['output']>;
    receiver?: Maybe<Nation>;
    reason?: Maybe<Scalars['String']['output']>;
    type?: Maybe<EmbargoType>;
};
export declare enum EmbargoType {
    NationToNation = "NATION_TO_NATION",
    NationToAlliance = "NATION_TO_ALLIANCE",
    AllianceToNation = "ALLIANCE_TO_NATION",
    AllianceToAlliance = "ALLIANCE_TO_ALLIANCE"
}
export type QueryResourceStatsOrderByOrderByClause = {
    column: QueryResourceStatsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryResourceStatsOrderByColumn {
    Date = "DATE",
    Money = "MONEY",
    Food = "FOOD",
    Steel = "STEEL",
    Aluminum = "ALUMINUM",
    Gasoline = "GASOLINE",
    Munitions = "MUNITIONS",
    Uranium = "URANIUM",
    Coal = "COAL",
    Oil = "OIL",
    Iron = "IRON",
    Bauxite = "BAUXITE",
    Lead = "LEAD"
}
export type ResourceStatPaginator = {
    __typename?: 'ResourceStatPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ResourceStat>;
};
export type ResourceStat = {
    __typename?: 'ResourceStat';
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    money?: Maybe<Scalars['String']['output']>;
    food?: Maybe<Scalars['String']['output']>;
    steel?: Maybe<Scalars['String']['output']>;
    aluminum?: Maybe<Scalars['String']['output']>;
    gasoline?: Maybe<Scalars['String']['output']>;
    munitions?: Maybe<Scalars['String']['output']>;
    uranium?: Maybe<Scalars['String']['output']>;
    coal?: Maybe<Scalars['String']['output']>;
    oil?: Maybe<Scalars['String']['output']>;
    iron?: Maybe<Scalars['String']['output']>;
    bauxite?: Maybe<Scalars['String']['output']>;
    lead?: Maybe<Scalars['String']['output']>;
};
export type QueryActivityStatsOrderByOrderByClause = {
    column: QueryActivityStatsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryActivityStatsOrderByColumn {
    Date = "DATE",
    TotalNations = "TOTAL_NATIONS",
    NationsCreated = "NATIONS_CREATED",
    Active_1Day = "ACTIVE_1_DAY",
    Active_2Days = "ACTIVE_2_DAYS",
    Active_3Days = "ACTIVE_3_DAYS",
    Active_1Week = "ACTIVE_1_WEEK",
    Active_1Month = "ACTIVE_1_MONTH"
}
export type ActivityStatPaginator = {
    __typename?: 'ActivityStatPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ActivityStat>;
};
export type ActivityStat = {
    __typename?: 'ActivityStat';
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    total_nations?: Maybe<Scalars['Int']['output']>;
    nations_created?: Maybe<Scalars['Int']['output']>;
    active_1_day?: Maybe<Scalars['Int']['output']>;
    active_2_days?: Maybe<Scalars['Int']['output']>;
    active_3_days?: Maybe<Scalars['Int']['output']>;
    active_1_week?: Maybe<Scalars['Int']['output']>;
    active_1_month?: Maybe<Scalars['Int']['output']>;
};
export type QueryBannedNationsOrderByOrderByClause = {
    column: QueryBannedNationsOrderByColumn;
    order: SortOrder;
};
export declare enum QueryBannedNationsOrderByColumn {
    NationId = "NATION_ID",
    Date = "DATE"
}
export type BannedNationPaginator = {
    __typename?: 'BannedNationPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BannedNation>;
};
export type BannedNation = {
    __typename?: 'BannedNation';
    nation_id?: Maybe<Scalars['ID']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    date?: Maybe<Scalars['DateTimeAuto']['output']>;
    days_left?: Maybe<Scalars['Int']['output']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    bankDeposit: Bankrec;
    bankWithdraw: Bankrec;
    approveTreaty: Treaty;
    cancelTreaty: Treaty;
    proposeTreaty: Treaty;
    assignTaxBracket: TaxBracket;
    createTaxBracket: TaxBracket;
    deleteTaxBracket: TaxBracket;
    editTaxBracket: TaxBracket;
    acceptPersonalTrade: Trade;
    declinePersonalTrade?: Maybe<Trade>;
    assignAlliancePosition?: Maybe<AlliancePosition>;
    createAlliancePosition: AlliancePosition;
    deleteAlliancePosition: AlliancePosition;
    editAlliancePosition: AlliancePosition;
};
export type MutationBankDepositArgs = {
    money?: InputMaybe<Scalars['Float']['input']>;
    coal?: InputMaybe<Scalars['Float']['input']>;
    oil?: InputMaybe<Scalars['Float']['input']>;
    uranium?: InputMaybe<Scalars['Float']['input']>;
    iron?: InputMaybe<Scalars['Float']['input']>;
    bauxite?: InputMaybe<Scalars['Float']['input']>;
    lead?: InputMaybe<Scalars['Float']['input']>;
    gasoline?: InputMaybe<Scalars['Float']['input']>;
    munitions?: InputMaybe<Scalars['Float']['input']>;
    steel?: InputMaybe<Scalars['Float']['input']>;
    aluminum?: InputMaybe<Scalars['Float']['input']>;
    food?: InputMaybe<Scalars['Float']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
};
export type MutationBankWithdrawArgs = {
    receiver: Scalars['ID']['input'];
    receiver_type: Scalars['Int']['input'];
    money?: InputMaybe<Scalars['Float']['input']>;
    coal?: InputMaybe<Scalars['Float']['input']>;
    oil?: InputMaybe<Scalars['Float']['input']>;
    uranium?: InputMaybe<Scalars['Float']['input']>;
    iron?: InputMaybe<Scalars['Float']['input']>;
    bauxite?: InputMaybe<Scalars['Float']['input']>;
    lead?: InputMaybe<Scalars['Float']['input']>;
    gasoline?: InputMaybe<Scalars['Float']['input']>;
    munitions?: InputMaybe<Scalars['Float']['input']>;
    steel?: InputMaybe<Scalars['Float']['input']>;
    aluminum?: InputMaybe<Scalars['Float']['input']>;
    food?: InputMaybe<Scalars['Float']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
};
export type MutationApproveTreatyArgs = {
    id: Scalars['ID']['input'];
};
export type MutationCancelTreatyArgs = {
    id: Scalars['ID']['input'];
};
export type MutationProposeTreatyArgs = {
    alliance_id: Scalars['ID']['input'];
    length: Scalars['Int']['input'];
    type: Scalars['String']['input'];
    url?: InputMaybe<Scalars['String']['input']>;
};
export type MutationAssignTaxBracketArgs = {
    id: Scalars['Int']['input'];
    target_id: Scalars['Int']['input'];
};
export type MutationCreateTaxBracketArgs = {
    name: Scalars['String']['input'];
    money_tax_rate: Scalars['Int']['input'];
    resource_tax_rate: Scalars['Int']['input'];
};
export type MutationDeleteTaxBracketArgs = {
    id: Scalars['Int']['input'];
};
export type MutationEditTaxBracketArgs = {
    id: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    money_tax_rate?: InputMaybe<Scalars['Int']['input']>;
    resource_tax_rate?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationAcceptPersonalTradeArgs = {
    id: Scalars['Int']['input'];
    offer_amount?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationDeclinePersonalTradeArgs = {
    id: Scalars['Int']['input'];
};
export type MutationAssignAlliancePositionArgs = {
    id: Scalars['Int']['input'];
    default_position?: InputMaybe<DefaultAlliancePosition>;
    position_id?: InputMaybe<Scalars['Int']['input']>;
};
export type MutationCreateAlliancePositionArgs = {
    name: Scalars['String']['input'];
    level: Scalars['Int']['input'];
    view_bank?: InputMaybe<Scalars['Boolean']['input']>;
    withdraw_bank?: InputMaybe<Scalars['Boolean']['input']>;
    change_permissions?: InputMaybe<Scalars['Boolean']['input']>;
    see_spies?: InputMaybe<Scalars['Boolean']['input']>;
    see_reset_timers?: InputMaybe<Scalars['Boolean']['input']>;
    tax_brackets?: InputMaybe<Scalars['Boolean']['input']>;
    post_announcements?: InputMaybe<Scalars['Boolean']['input']>;
    manage_announcements?: InputMaybe<Scalars['Boolean']['input']>;
    accept_applicants?: InputMaybe<Scalars['Boolean']['input']>;
    remove_members?: InputMaybe<Scalars['Boolean']['input']>;
    edit_alliance_info?: InputMaybe<Scalars['Boolean']['input']>;
    manage_treaties?: InputMaybe<Scalars['Boolean']['input']>;
    manage_market_share?: InputMaybe<Scalars['Boolean']['input']>;
    manage_embargoes?: InputMaybe<Scalars['Boolean']['input']>;
    promote_self_to_leader?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationDeleteAlliancePositionArgs = {
    id: Scalars['Int']['input'];
};
export type MutationEditAlliancePositionArgs = {
    id: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    level?: InputMaybe<Scalars['Int']['input']>;
    view_bank?: InputMaybe<Scalars['Boolean']['input']>;
    withdraw_bank?: InputMaybe<Scalars['Boolean']['input']>;
    change_permissions?: InputMaybe<Scalars['Boolean']['input']>;
    see_spies?: InputMaybe<Scalars['Boolean']['input']>;
    see_reset_timers?: InputMaybe<Scalars['Boolean']['input']>;
    tax_brackets?: InputMaybe<Scalars['Boolean']['input']>;
    post_announcements?: InputMaybe<Scalars['Boolean']['input']>;
    manage_announcements?: InputMaybe<Scalars['Boolean']['input']>;
    accept_applicants?: InputMaybe<Scalars['Boolean']['input']>;
    remove_members?: InputMaybe<Scalars['Boolean']['input']>;
    edit_alliance_info?: InputMaybe<Scalars['Boolean']['input']>;
    manage_treaties?: InputMaybe<Scalars['Boolean']['input']>;
    manage_market_share?: InputMaybe<Scalars['Boolean']['input']>;
    manage_embargoes?: InputMaybe<Scalars['Boolean']['input']>;
    promote_self_to_leader?: InputMaybe<Scalars['Boolean']['input']>;
};
export declare enum DefaultAlliancePosition {
    Remove = "REMOVE",
    Applicant = "APPLICANT",
    Member = "MEMBER",
    Officer = "OFFICER",
    Heir = "HEIR",
    Leader = "LEADER"
}
export type SimplePaginatorInfo = {
    __typename?: 'SimplePaginatorInfo';
    count: Scalars['Int']['output'];
    currentPage: Scalars['Int']['output'];
    firstItem?: Maybe<Scalars['Int']['output']>;
    lastItem?: Maybe<Scalars['Int']['output']>;
    perPage: Scalars['Int']['output'];
    hasMorePages: Scalars['Boolean']['output'];
};
export type PageInfo = {
    __typename?: 'PageInfo';
    hasNextPage: Scalars['Boolean']['output'];
    hasPreviousPage: Scalars['Boolean']['output'];
    startCursor?: Maybe<Scalars['String']['output']>;
    endCursor?: Maybe<Scalars['String']['output']>;
    total: Scalars['Int']['output'];
    count: Scalars['Int']['output'];
    currentPage: Scalars['Int']['output'];
    lastPage: Scalars['Int']['output'];
};
export declare enum OrderByRelationAggregateFunction {
    Count = "COUNT"
}
export declare enum OrderByRelationWithColumnAggregateFunction {
    Avg = "AVG",
    Min = "MIN",
    Max = "MAX",
    Sum = "SUM",
    Count = "COUNT"
}
export type OrderByClause = {
    column: Scalars['String']['input'];
    order: SortOrder;
};
