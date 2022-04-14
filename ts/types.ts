export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTimeAuto: any;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<ApiKeyDetails>;
  treasures?: Maybe<Array<Maybe<Treasure>>>;
  colors?: Maybe<Array<Maybe<Color>>>;
  game_info?: Maybe<GameInfo>;
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
};


export type QueryNationsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nation_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  leader_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alliance_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  alliance_position?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  color?: InputMaybe<Scalars['String']>;
  created_after?: InputMaybe<Scalars['DateTime']>;
  min_score?: InputMaybe<Scalars['Float']>;
  max_score?: InputMaybe<Scalars['Float']>;
  cities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_cities?: InputMaybe<Scalars['Int']>;
  max_cities?: InputMaybe<Scalars['Int']>;
  vmode?: InputMaybe<Scalars['Boolean']>;
  discord?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tax_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryNationsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAlliancesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderBy?: InputMaybe<Array<QueryAlliancesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTradepricesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTradesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TradeType>;
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  offer_resource?: InputMaybe<Scalars['String']>;
  buy_or_sell?: InputMaybe<Scalars['String']>;
  accepted?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<QueryTradesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryWarsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  days_ago?: InputMaybe<Scalars['Int']>;
  active?: InputMaybe<Scalars['Boolean']>;
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  alliance_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryWarsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBountiesArgs = {
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_amount?: InputMaybe<Scalars['Float']>;
  max_amount?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<Array<QueryBountiesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryWarattacksArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  war_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryWarattacksOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTreatiesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryTreatiesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCitiesArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryCitiesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBankrecsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  stype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryBankrecsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBaseball_GamesArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  team_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryBaseballGamesOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBaseball_TeamsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryBaseballTeamsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBaseball_PlayersArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  team_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<QueryBaseballPlayersOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ApiKeyDetails = {
  __typename?: 'ApiKeyDetails';
  nation?: Maybe<Nation>;
};

export type Nation = {
  __typename?: 'Nation';
  id?: Maybe<Scalars['ID']>;
  alliance_id?: Maybe<Scalars['ID']>;
  alliance_position?: Maybe<AlliancePositionEnum>;
  alliance_position_id?: Maybe<Scalars['ID']>;
  alliance_position_info?: Maybe<AlliancePosition>;
  alliance?: Maybe<Alliance>;
  nation_name?: Maybe<Scalars['String']>;
  leader_name?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  /** @deprecated Use war_policy instead. */
  warpolicy?: Maybe<Scalars['String']>;
  war_policy?: Maybe<WarPolicy>;
  /** @deprecated Use domestic_policy instead. */
  dompolicy?: Maybe<Scalars['String']>;
  domestic_policy?: Maybe<DomesticPolicy>;
  color?: Maybe<Scalars['String']>;
  num_cities?: Maybe<Scalars['Int']>;
  cities: Array<City>;
  score?: Maybe<Scalars['Float']>;
  update_tz?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Int']>;
  flag?: Maybe<Scalars['String']>;
  /** @deprecated Use vacation_mode_turns instead. */
  vmode?: Maybe<Scalars['Int']>;
  vacation_mode_turns?: Maybe<Scalars['Int']>;
  /** @deprecated Use beige_turns instead. */
  beigeturns?: Maybe<Scalars['Int']>;
  beige_turns?: Maybe<Scalars['Int']>;
  espionage_available?: Maybe<Scalars['Boolean']>;
  last_active?: Maybe<Scalars['DateTimeAuto']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  soldiers?: Maybe<Scalars['Int']>;
  tanks?: Maybe<Scalars['Int']>;
  aircraft?: Maybe<Scalars['Int']>;
  ships?: Maybe<Scalars['Int']>;
  missiles?: Maybe<Scalars['Int']>;
  nukes?: Maybe<Scalars['Int']>;
  spies?: Maybe<Scalars['Int']>;
  discord?: Maybe<Scalars['String']>;
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
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>;
  bounties?: Maybe<Array<Maybe<Bounty>>>;
  turns_since_last_city?: Maybe<Scalars['Int']>;
  turns_since_last_project?: Maybe<Scalars['Int']>;
  money?: Maybe<Scalars['Float']>;
  coal?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  uranium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  steel?: Maybe<Scalars['Float']>;
  aluminum?: Maybe<Scalars['Float']>;
  food?: Maybe<Scalars['Float']>;
  projects?: Maybe<Scalars['Int']>;
  project_bits?: Maybe<Scalars['Int']>;
  /** @deprecated Use iron_works instead */
  ironw?: Maybe<Scalars['Boolean']>;
  iron_works?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use bauxite_works instead */
  bauxitew?: Maybe<Scalars['Boolean']>;
  bauxite_works?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use arms_stockpile instead */
  armss?: Maybe<Scalars['Boolean']>;
  arms_stockpile?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use emergency_gasoline_reserve instead */
  egr?: Maybe<Scalars['Boolean']>;
  emergency_gasoline_reserve?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use mass_irrigation instead */
  massirr?: Maybe<Scalars['Boolean']>;
  mass_irrigation?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use international_trade_center instead */
  itc?: Maybe<Scalars['Boolean']>;
  international_trade_center?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use missile_launch_pad instead */
  mlp?: Maybe<Scalars['Boolean']>;
  missile_launch_pad?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use nuclear_research_facility instead */
  nrf?: Maybe<Scalars['Boolean']>;
  nuclear_research_facility?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use iron_dome instead */
  irond?: Maybe<Scalars['Boolean']>;
  iron_dome?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use vital_defense_system instead */
  vds?: Maybe<Scalars['Boolean']>;
  vital_defense_system?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use central_intelligence_agency instead */
  cia?: Maybe<Scalars['Boolean']>;
  central_intelligence_agency?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use center_for_civil_engineering instead */
  cfce?: Maybe<Scalars['Boolean']>;
  center_for_civil_engineering?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use propaganda_bureau instead */
  propb?: Maybe<Scalars['Boolean']>;
  propaganda_bureau?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use uranium_enrichment_program instead */
  uap?: Maybe<Scalars['Boolean']>;
  uranium_enrichment_program?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use urban_planning instead */
  city_planning?: Maybe<Scalars['Boolean']>;
  urban_planning?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use advanced_urban_planning instead */
  adv_city_planning?: Maybe<Scalars['Boolean']>;
  advanced_urban_planning?: Maybe<Scalars['Boolean']>;
  space_program?: Maybe<Scalars['Boolean']>;
  spy_satellite?: Maybe<Scalars['Boolean']>;
  moon_landing?: Maybe<Scalars['Boolean']>;
  pirate_economy?: Maybe<Scalars['Boolean']>;
  recycling_initiative?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use telecommunications_satellite instead */
  telecom_satellite?: Maybe<Scalars['Boolean']>;
  telecommunications_satellite?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use green_technologies instead */
  green_tech?: Maybe<Scalars['Boolean']>;
  green_technologies?: Maybe<Scalars['Boolean']>;
  arable_land_agency?: Maybe<Scalars['Boolean']>;
  clinical_research_center?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use specialized_police_training_program instead */
  specialized_police_training?: Maybe<Scalars['Boolean']>;
  specialized_police_training_program?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use advanced_engineering_corps instead */
  adv_engineering_corps?: Maybe<Scalars['Boolean']>;
  advanced_engineering_corps?: Maybe<Scalars['Boolean']>;
  government_support_agency?: Maybe<Scalars['Boolean']>;
  research_and_development_center?: Maybe<Scalars['Boolean']>;
  resource_production_center?: Maybe<Scalars['Boolean']>;
  wars_won?: Maybe<Scalars['Int']>;
  wars_lost?: Maybe<Scalars['Int']>;
  tax_id?: Maybe<Scalars['ID']>;
  alliance_seniority?: Maybe<Scalars['Int']>;
  baseball_teams?: Maybe<BbTeam>;
  gross_national_income?: Maybe<Scalars['Float']>;
  gross_domestic_product?: Maybe<Scalars['Float']>;
  soldier_casualties?: Maybe<Scalars['Int']>;
  soldier_kills?: Maybe<Scalars['Int']>;
  tank_casualties?: Maybe<Scalars['Int']>;
  tank_kills?: Maybe<Scalars['Int']>;
  aircraft_casualties?: Maybe<Scalars['Int']>;
  aircraft_kills?: Maybe<Scalars['Int']>;
  ship_casualties?: Maybe<Scalars['Int']>;
  ship_kills?: Maybe<Scalars['Int']>;
  missile_casualties?: Maybe<Scalars['Int']>;
  missile_kills?: Maybe<Scalars['Int']>;
  nuke_casualties?: Maybe<Scalars['Int']>;
  nuke_kills?: Maybe<Scalars['Int']>;
  spy_casualties?: Maybe<Scalars['Int']>;
  spy_kills?: Maybe<Scalars['Int']>;
  money_looted?: Maybe<Scalars['Float']>;
};


export type NationWarsArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  active?: InputMaybe<Scalars['Boolean']>;
};


export type NationBankrecsArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  stype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<NationBankrecsOrderByOrderByClause>>;
};


export type NationTaxrecsArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  stype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<NationTaxrecsOrderByOrderByClause>>;
};

export enum AlliancePositionEnum {
  Noalliance = 'NOALLIANCE',
  Applicant = 'APPLICANT',
  Member = 'MEMBER',
  Officer = 'OFFICER',
  Heir = 'HEIR',
  Leader = 'LEADER'
}

export type AlliancePosition = {
  __typename?: 'AlliancePosition';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  alliance_id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  creator_id?: Maybe<Scalars['ID']>;
  last_editor_id?: Maybe<Scalars['ID']>;
  date_modified?: Maybe<Scalars['DateTimeAuto']>;
  position_level?: Maybe<Scalars['Int']>;
  leader?: Maybe<Scalars['Boolean']>;
  heir?: Maybe<Scalars['Boolean']>;
  officer?: Maybe<Scalars['Boolean']>;
  member?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<Scalars['Int']>;
  view_bank?: Maybe<Scalars['Boolean']>;
  withdraw_bank?: Maybe<Scalars['Boolean']>;
  change_permissions?: Maybe<Scalars['Boolean']>;
  see_spies?: Maybe<Scalars['Boolean']>;
  see_reset_timers?: Maybe<Scalars['Boolean']>;
  tax_brackets?: Maybe<Scalars['Boolean']>;
  post_announcements?: Maybe<Scalars['Boolean']>;
  manage_announcements?: Maybe<Scalars['Boolean']>;
  accept_applicants?: Maybe<Scalars['Boolean']>;
  remove_members?: Maybe<Scalars['Boolean']>;
  edit_alliance_info?: Maybe<Scalars['Boolean']>;
  manage_treaties?: Maybe<Scalars['Boolean']>;
  manage_market_share?: Maybe<Scalars['Boolean']>;
  manage_embargoes?: Maybe<Scalars['Boolean']>;
  promote_self_to_leader?: Maybe<Scalars['Boolean']>;
};

export type Alliance = {
  __typename?: 'Alliance';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  acronym?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  nations: Array<Nation>;
  /** @deprecated Use treaties instead */
  sent_treaties: Array<Treaty>;
  /** @deprecated Use treaties instead */
  received_treaties: Array<Treaty>;
  treaties: Array<Treaty>;
  alliance_positions: Array<AlliancePosition>;
  /** @deprecated Use accept_members instead. */
  acceptmem?: Maybe<Scalars['Boolean']>;
  accept_members?: Maybe<Scalars['Boolean']>;
  flag?: Maybe<Scalars['String']>;
  /** @deprecated Use forum_link instead. */
  forumlink?: Maybe<Scalars['String']>;
  forum_link?: Maybe<Scalars['String']>;
  /** @deprecated Use discord_link instead. */
  irclink?: Maybe<Scalars['String']>;
  discord_link?: Maybe<Scalars['String']>;
  wiki_link?: Maybe<Scalars['String']>;
  bankrecs?: Maybe<Array<Maybe<Bankrec>>>;
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>;
  tax_brackets?: Maybe<Array<Maybe<TaxBracket>>>;
  money?: Maybe<Scalars['Float']>;
  coal?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  uranium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  steel?: Maybe<Scalars['Float']>;
  aluminum?: Maybe<Scalars['Float']>;
  food?: Maybe<Scalars['Float']>;
};


export type AllianceNationsArgs = {
  alliance_position?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_score?: InputMaybe<Scalars['Float']>;
  max_score?: InputMaybe<Scalars['Float']>;
  cities?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  min_cities?: InputMaybe<Scalars['Int']>;
  max_cities?: InputMaybe<Scalars['Int']>;
  tax_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<AllianceNationsOrderByOrderByClause>>;
};


export type AllianceBankrecsArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  stype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<AllianceBankrecsOrderByOrderByClause>>;
};


export type AllianceTaxrecsArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  stype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rtype?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rid?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<AllianceTaxrecsOrderByOrderByClause>>;
};

export type AllianceNationsOrderByOrderByClause = {
  column: AllianceNationsOrderByColumn;
  order: SortOrder;
};

export enum AllianceNationsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Soldiers = 'SOLDIERS',
  Tanks = 'TANKS',
  Aircraft = 'AIRCRAFT',
  Ships = 'SHIPS',
  Missiles = 'MISSILES',
  Nukes = 'NUKES'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Treaty = {
  __typename?: 'Treaty';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  treaty_type?: Maybe<Scalars['String']>;
  treaty_url?: Maybe<Scalars['String']>;
  turns_left?: Maybe<Scalars['Int']>;
  alliance1_id?: Maybe<Scalars['ID']>;
  alliance1?: Maybe<Alliance>;
  alliance2_id?: Maybe<Scalars['ID']>;
  alliance2?: Maybe<Alliance>;
};

export type AllianceBankrecsOrderByOrderByClause = {
  column: AllianceBankrecsOrderByColumn;
  order: SortOrder;
};

export enum AllianceBankrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
}

export type Bankrec = {
  __typename?: 'Bankrec';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  /** @deprecated Use sender_id instead. */
  sid?: Maybe<Scalars['ID']>;
  sender_id?: Maybe<Scalars['ID']>;
  /** @deprecated Use sender_type instead. */
  stype?: Maybe<Scalars['Int']>;
  sender_type?: Maybe<Scalars['Int']>;
  /** @deprecated Use recipient_id instead. */
  rid?: Maybe<Scalars['ID']>;
  recipient_id?: Maybe<Scalars['ID']>;
  /** @deprecated Use recipient_type instead. */
  rtype?: Maybe<Scalars['Int']>;
  recipient_type?: Maybe<Scalars['Int']>;
  /** @deprecated Use banker_id instead. */
  pid?: Maybe<Scalars['ID']>;
  banker_id?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  money?: Maybe<Scalars['Float']>;
  coal?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  uranium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  steel?: Maybe<Scalars['Float']>;
  aluminum?: Maybe<Scalars['Float']>;
  food?: Maybe<Scalars['Float']>;
  tax_id?: Maybe<Scalars['ID']>;
};

export type AllianceTaxrecsOrderByOrderByClause = {
  column: AllianceTaxrecsOrderByColumn;
  order: SortOrder;
};

export enum AllianceTaxrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
}

export type TaxBracket = {
  __typename?: 'TaxBracket';
  id?: Maybe<Scalars['ID']>;
  alliance_id?: Maybe<Scalars['ID']>;
  alliance?: Maybe<Alliance>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  date_modified?: Maybe<Scalars['DateTimeAuto']>;
  last_modifier_id?: Maybe<Scalars['ID']>;
  last_modifier?: Maybe<Nation>;
  tax_rate?: Maybe<Scalars['Int']>;
  resource_tax_rate?: Maybe<Scalars['Int']>;
  bracket_name?: Maybe<Scalars['String']>;
};

export enum WarPolicy {
  Attrition = 'ATTRITION',
  Turtle = 'TURTLE',
  Blitzkrieg = 'BLITZKRIEG',
  Fortress = 'FORTRESS',
  Moneybags = 'MONEYBAGS',
  Pirate = 'PIRATE',
  Tactician = 'TACTICIAN',
  Guardian = 'GUARDIAN',
  Covert = 'COVERT',
  Arcane = 'ARCANE'
}

export enum DomesticPolicy {
  ManifestDestiny = 'MANIFEST_DESTINY',
  OpenMarkets = 'OPEN_MARKETS',
  TechnologicalAdvancement = 'TECHNOLOGICAL_ADVANCEMENT',
  Imperialism = 'IMPERIALISM',
  Urbanization = 'URBANIZATION',
  RapidExpansion = 'RAPID_EXPANSION'
}

export type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['ID']>;
  nation_id?: Maybe<Scalars['ID']>;
  nation?: Maybe<Nation>;
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  infrastructure?: Maybe<Scalars['Float']>;
  land?: Maybe<Scalars['Float']>;
  powered?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use oil_power instead */
  oilpower?: Maybe<Scalars['Int']>;
  oil_power?: Maybe<Scalars['Int']>;
  /** @deprecated Use wind_power instead */
  windpower?: Maybe<Scalars['Int']>;
  wind_power?: Maybe<Scalars['Int']>;
  /** @deprecated Use coal_power instead */
  coalpower?: Maybe<Scalars['Int']>;
  coal_power?: Maybe<Scalars['Int']>;
  /** @deprecated Use nuclear_power instead */
  nuclearpower?: Maybe<Scalars['Int']>;
  nuclear_power?: Maybe<Scalars['Int']>;
  /** @deprecated Use coal_mine instead */
  coalmine?: Maybe<Scalars['Int']>;
  coal_mine?: Maybe<Scalars['Int']>;
  /** @deprecated Use oil_well instead */
  oilwell?: Maybe<Scalars['Int']>;
  oil_well?: Maybe<Scalars['Int']>;
  /** @deprecated Use uranium_mine instead */
  uramine?: Maybe<Scalars['Int']>;
  uranium_mine?: Maybe<Scalars['Int']>;
  barracks?: Maybe<Scalars['Int']>;
  farm?: Maybe<Scalars['Int']>;
  /** @deprecated Use police_station instead */
  policestation?: Maybe<Scalars['Int']>;
  police_station?: Maybe<Scalars['Int']>;
  hospital?: Maybe<Scalars['Int']>;
  /** @deprecated Use recycling_center instead */
  recyclingcenter?: Maybe<Scalars['Int']>;
  recycling_center?: Maybe<Scalars['Int']>;
  subway?: Maybe<Scalars['Int']>;
  supermarket?: Maybe<Scalars['Int']>;
  bank?: Maybe<Scalars['Int']>;
  /** @deprecated Use shopping_mall instead */
  mall?: Maybe<Scalars['Int']>;
  shopping_mall?: Maybe<Scalars['Int']>;
  stadium?: Maybe<Scalars['Int']>;
  /** @deprecated Use lead_mine instead */
  leadmine?: Maybe<Scalars['Int']>;
  lead_mine?: Maybe<Scalars['Int']>;
  /** @deprecated Use iron_mine instead */
  ironmine?: Maybe<Scalars['Int']>;
  iron_mine?: Maybe<Scalars['Int']>;
  /** @deprecated Use bauxite_mine instead */
  bauxitemine?: Maybe<Scalars['Int']>;
  bauxite_mine?: Maybe<Scalars['Int']>;
  /** @deprecated Use oil_refinery instead */
  gasrefinery?: Maybe<Scalars['Int']>;
  oil_refinery?: Maybe<Scalars['Int']>;
  /** @deprecated Use aluminum_refinery instead */
  aluminumrefinery?: Maybe<Scalars['Int']>;
  aluminum_refinery?: Maybe<Scalars['Int']>;
  /** @deprecated Use steel_mill instead */
  steelmill?: Maybe<Scalars['Int']>;
  steel_mill?: Maybe<Scalars['Int']>;
  /** @deprecated Use munitions_factory instead */
  munitionsfactory?: Maybe<Scalars['Int']>;
  munitions_factory?: Maybe<Scalars['Int']>;
  factory?: Maybe<Scalars['Int']>;
  /** @deprecated Use hangar instead. */
  airforcebase?: Maybe<Scalars['Int']>;
  hangar?: Maybe<Scalars['Int']>;
  drydock?: Maybe<Scalars['Int']>;
  /** @deprecated Use nuke_date instead. */
  nukedate?: Maybe<Scalars['Date']>;
  nuke_date?: Maybe<Scalars['Date']>;
};

export type Treasure = {
  __typename?: 'Treasure';
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['Int']>;
  /** @deprecated Use spawn_date instead. */
  spawndate?: Maybe<Scalars['Date']>;
  spawn_date?: Maybe<Scalars['Date']>;
  nation_id?: Maybe<Scalars['ID']>;
  nation?: Maybe<Nation>;
};

export type War = {
  __typename?: 'War';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  reason?: Maybe<Scalars['String']>;
  war_type?: Maybe<WarType>;
  /** @deprecated Use ground_control instead. */
  groundcontrol?: Maybe<Scalars['ID']>;
  ground_control?: Maybe<Scalars['ID']>;
  /** @deprecated Use air_superiority instead. */
  airsuperiority?: Maybe<Scalars['ID']>;
  air_superiority?: Maybe<Scalars['ID']>;
  /** @deprecated Use naval_blockade instead. */
  navalblockade?: Maybe<Scalars['ID']>;
  naval_blockade?: Maybe<Scalars['ID']>;
  /** @deprecated Use winner_id instead. */
  winner?: Maybe<Scalars['ID']>;
  winner_id?: Maybe<Scalars['ID']>;
  attacks: Array<WarAttack>;
  /** @deprecated Use turns_left instead. */
  turnsleft?: Maybe<Scalars['Int']>;
  turns_left?: Maybe<Scalars['Int']>;
  /** @deprecated Use att_id instead. */
  attid?: Maybe<Scalars['ID']>;
  att_id?: Maybe<Scalars['ID']>;
  att_alliance_id?: Maybe<Scalars['ID']>;
  attacker?: Maybe<Nation>;
  /** @deprecated Use def_id instead. */
  defid?: Maybe<Scalars['ID']>;
  def_id?: Maybe<Scalars['ID']>;
  def_alliance_id?: Maybe<Scalars['ID']>;
  defender?: Maybe<Nation>;
  /** @deprecated Use att_points instead. */
  attpoints?: Maybe<Scalars['Int']>;
  att_points?: Maybe<Scalars['Int']>;
  /** @deprecated Use def_points instead. */
  defpoints?: Maybe<Scalars['Int']>;
  def_points?: Maybe<Scalars['Int']>;
  /** @deprecated Use att_peace instead. */
  attpeace?: Maybe<Scalars['Boolean']>;
  att_peace?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use def_peace instead. */
  defpeace?: Maybe<Scalars['Boolean']>;
  def_peace?: Maybe<Scalars['Boolean']>;
  att_resistance?: Maybe<Scalars['Int']>;
  def_resistance?: Maybe<Scalars['Int']>;
  att_fortify?: Maybe<Scalars['Boolean']>;
  def_fortify?: Maybe<Scalars['Boolean']>;
  att_gas_used?: Maybe<Scalars['Float']>;
  def_gas_used?: Maybe<Scalars['Float']>;
  att_mun_used?: Maybe<Scalars['Float']>;
  def_mun_used?: Maybe<Scalars['Float']>;
  att_alum_used?: Maybe<Scalars['Int']>;
  def_alum_used?: Maybe<Scalars['Int']>;
  att_steel_used?: Maybe<Scalars['Int']>;
  def_steel_used?: Maybe<Scalars['Int']>;
  att_infra_destroyed?: Maybe<Scalars['Float']>;
  def_infra_destroyed?: Maybe<Scalars['Float']>;
  att_money_looted?: Maybe<Scalars['Float']>;
  def_money_looted?: Maybe<Scalars['Float']>;
  att_soldiers_killed?: Maybe<Scalars['Int']>;
  def_soldiers_killed?: Maybe<Scalars['Int']>;
  att_tanks_killed?: Maybe<Scalars['Int']>;
  def_tanks_killed?: Maybe<Scalars['Int']>;
  att_aircraft_killed?: Maybe<Scalars['Int']>;
  def_aircraft_killed?: Maybe<Scalars['Int']>;
  att_ships_killed?: Maybe<Scalars['Int']>;
  def_ships_killed?: Maybe<Scalars['Int']>;
  att_missiles_used?: Maybe<Scalars['Int']>;
  def_missiles_used?: Maybe<Scalars['Int']>;
  att_nukes_used?: Maybe<Scalars['Int']>;
  def_nukes_used?: Maybe<Scalars['Int']>;
  att_infra_destroyed_value?: Maybe<Scalars['Float']>;
  def_infra_destroyed_value?: Maybe<Scalars['Float']>;
};


export type WarAttacksArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  war_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  orderBy?: InputMaybe<Array<WarAttacksOrderByOrderByClause>>;
};

export enum WarType {
  Ordinary = 'ORDINARY',
  Attrition = 'ATTRITION',
  Raid = 'RAID'
}

export type WarAttacksOrderByOrderByClause = {
  column: WarAttacksOrderByColumn;
  order: SortOrder;
};

export enum WarAttacksOrderByColumn {
  Id = 'ID',
  Date = 'DATE'
}

export type WarAttack = {
  __typename?: 'WarAttack';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  /** @deprecated Use att_id instead. */
  attid?: Maybe<Scalars['ID']>;
  att_id?: Maybe<Scalars['ID']>;
  attacker?: Maybe<Nation>;
  /** @deprecated Use def_id instead. */
  defid?: Maybe<Scalars['ID']>;
  def_id?: Maybe<Scalars['ID']>;
  defender?: Maybe<Nation>;
  type?: Maybe<AttackType>;
  /** @deprecated Use war_id instead. */
  warid?: Maybe<Scalars['ID']>;
  war_id?: Maybe<Scalars['ID']>;
  war?: Maybe<War>;
  victor?: Maybe<Scalars['ID']>;
  success?: Maybe<Scalars['Int']>;
  attcas1?: Maybe<Scalars['Int']>;
  defcas1?: Maybe<Scalars['Int']>;
  attcas2?: Maybe<Scalars['Int']>;
  defcas2?: Maybe<Scalars['Int']>;
  /** @deprecated Use city_id instead. */
  cityid?: Maybe<Scalars['ID']>;
  city_id?: Maybe<Scalars['ID']>;
  /** @deprecated Use infra_destroyed instead. */
  infradestroyed?: Maybe<Scalars['Float']>;
  infra_destroyed?: Maybe<Scalars['Float']>;
  /** @deprecated Use improvements_lost instead. */
  improvementslost?: Maybe<Scalars['Int']>;
  improvements_lost?: Maybe<Scalars['Int']>;
  /** @deprecated Use money_stolen instead. */
  moneystolen?: Maybe<Scalars['Float']>;
  money_stolen?: Maybe<Scalars['Float']>;
  loot_info?: Maybe<Scalars['String']>;
  resistance_eliminated?: Maybe<Scalars['Int']>;
  city_infra_before?: Maybe<Scalars['Float']>;
  infra_destroyed_value?: Maybe<Scalars['Float']>;
  att_mun_used?: Maybe<Scalars['Float']>;
  def_mun_used?: Maybe<Scalars['Float']>;
  att_gas_used?: Maybe<Scalars['Float']>;
  def_gas_used?: Maybe<Scalars['Float']>;
  aircraft_killed_by_tanks?: Maybe<Scalars['Int']>;
};

export enum AttackType {
  Airvinfra = 'AIRVINFRA',
  Airvsoldiers = 'AIRVSOLDIERS',
  Airvtanks = 'AIRVTANKS',
  Airvmoney = 'AIRVMONEY',
  Airvships = 'AIRVSHIPS',
  Airvair = 'AIRVAIR',
  Ground = 'GROUND',
  Missile = 'MISSILE',
  Missilefail = 'MISSILEFAIL',
  Nuke = 'NUKE',
  Nukefail = 'NUKEFAIL',
  Naval = 'NAVAL',
  Fortify = 'FORTIFY',
  Peace = 'PEACE',
  Victory = 'VICTORY',
  Allianceloot = 'ALLIANCELOOT'
}

export type NationBankrecsOrderByOrderByClause = {
  column: NationBankrecsOrderByColumn;
  order: SortOrder;
};

export enum NationBankrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
}

export type NationTaxrecsOrderByOrderByClause = {
  column: NationTaxrecsOrderByColumn;
  order: SortOrder;
};

export enum NationTaxrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
}

export type Bounty = {
  __typename?: 'Bounty';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  nation_id?: Maybe<Scalars['ID']>;
  nation?: Maybe<Nation>;
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<BountyType>;
};

export enum BountyType {
  Ordinary = 'ORDINARY',
  Attrition = 'ATTRITION',
  Raid = 'RAID',
  Nuclear = 'NUCLEAR'
}

export type BbTeam = {
  __typename?: 'BBTeam';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  nation_id?: Maybe<Scalars['ID']>;
  nation?: Maybe<Nation>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  home_jersey?: Maybe<Scalars['String']>;
  away_jersey?: Maybe<Scalars['String']>;
  stadium?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  seating?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
  glosses?: Maybe<Scalars['Int']>;
  runs?: Maybe<Scalars['Int']>;
  homers?: Maybe<Scalars['Int']>;
  strikeouts?: Maybe<Scalars['Int']>;
  games_played?: Maybe<Scalars['Int']>;
  games?: Maybe<Array<Maybe<BbGame>>>;
  players?: Maybe<Array<Maybe<BbPlayer>>>;
};


export type BbTeamGamesArgs = {
  min_id?: InputMaybe<Scalars['Int']>;
  max_id?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BbTeamGamesOrderByOrderByClause>>;
};

export type BbTeamGamesOrderByOrderByClause = {
  column: BbTeamGamesOrderByColumn;
  order: SortOrder;
};

export enum BbTeamGamesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Htscore = 'HTSCORE',
  Atscore = 'ATSCORE'
}

export type BbGame = {
  __typename?: 'BBGame';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  home_id?: Maybe<Scalars['ID']>;
  away_id?: Maybe<Scalars['ID']>;
  home_team?: Maybe<BbTeam>;
  away_team?: Maybe<BbTeam>;
  home_nation_id?: Maybe<Scalars['ID']>;
  away_nation_id?: Maybe<Scalars['ID']>;
  home_nation?: Maybe<Nation>;
  away_nation?: Maybe<Nation>;
  stadium_name?: Maybe<Scalars['String']>;
  home_score?: Maybe<Scalars['Int']>;
  away_score?: Maybe<Scalars['Int']>;
  sim_text?: Maybe<Scalars['String']>;
  highlights?: Maybe<Scalars['String']>;
  home_revenue?: Maybe<Scalars['Float']>;
  spoils?: Maybe<Scalars['Float']>;
  open?: Maybe<Scalars['Int']>;
  wager?: Maybe<Scalars['Float']>;
};

export type BbPlayer = {
  __typename?: 'BBPlayer';
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  nation_id?: Maybe<Scalars['ID']>;
  nation?: Maybe<Nation>;
  team_id?: Maybe<Scalars['ID']>;
  team?: Maybe<BbTeam>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  pitching?: Maybe<Scalars['Float']>;
  batting?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  overall?: Maybe<Scalars['Float']>;
  birthday?: Maybe<Scalars['Int']>;
};

export type Color = {
  __typename?: 'Color';
  color?: Maybe<Scalars['String']>;
  bloc_name?: Maybe<Scalars['String']>;
  turn_bonus?: Maybe<Scalars['Int']>;
};

export type GameInfo = {
  __typename?: 'GameInfo';
  game_date?: Maybe<Scalars['DateTimeAuto']>;
  radiation?: Maybe<Radiation>;
};

export type Radiation = {
  __typename?: 'Radiation';
  global?: Maybe<Scalars['Float']>;
  north_america?: Maybe<Scalars['Float']>;
  south_america?: Maybe<Scalars['Float']>;
  europe?: Maybe<Scalars['Float']>;
  africa?: Maybe<Scalars['Float']>;
  asia?: Maybe<Scalars['Float']>;
  australia?: Maybe<Scalars['Float']>;
  antarctica?: Maybe<Scalars['Float']>;
};

export type QueryNationsOrderByOrderByClause = {
  column: QueryNationsOrderByColumn;
  order: SortOrder;
};

export enum QueryNationsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Soldiers = 'SOLDIERS',
  Tanks = 'TANKS',
  Aircraft = 'AIRCRAFT',
  Ships = 'SHIPS',
  Missiles = 'MISSILES',
  Nukes = 'NUKES'
}

export type NationPaginator = {
  __typename?: 'NationPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<Nation>;
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type QueryAlliancesOrderByOrderByClause = {
  column: QueryAlliancesOrderByColumn;
  order: SortOrder;
};

export enum QueryAlliancesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Score = 'SCORE'
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
  id?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['Date']>;
  coal?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  uranium?: Maybe<Scalars['Float']>;
  iron?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  steel?: Maybe<Scalars['Float']>;
  aluminum?: Maybe<Scalars['Float']>;
  food?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
};

export enum TradeType {
  Global = 'GLOBAL',
  Personal = 'PERSONAL',
  Alliance = 'ALLIANCE'
}

export type QueryTradesOrderByOrderByClause = {
  column: QueryTradesOrderByColumn;
  order: SortOrder;
};

export enum QueryTradesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  DateAccepted = 'DATE_ACCEPTED',
  OfferResource = 'OFFER_RESOURCE',
  OfferAmount = 'OFFER_AMOUNT',
  ReturnAmount = 'RETURN_AMOUNT'
}

export type TradePaginator = {
  __typename?: 'TradePaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<Trade>;
};

export type Trade = {
  __typename?: 'Trade';
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<TradeType>;
  date?: Maybe<Scalars['DateTimeAuto']>;
  /** @deprecated Use sender_id instead. */
  sid?: Maybe<Scalars['ID']>;
  sender_id?: Maybe<Scalars['ID']>;
  /** @deprecated Use recipient_id instead. */
  rid?: Maybe<Scalars['ID']>;
  recipient_id?: Maybe<Scalars['ID']>;
  sender?: Maybe<Nation>;
  receiver?: Maybe<Nation>;
  offer_resource?: Maybe<Scalars['String']>;
  offer_amount?: Maybe<Scalars['Int']>;
  buy_or_sell?: Maybe<Scalars['String']>;
  /** @deprecated Use price instead */
  total?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  accepted?: Maybe<Scalars['Boolean']>;
  date_accepted?: Maybe<Scalars['DateTimeAuto']>;
  original_trade_id?: Maybe<Scalars['ID']>;
};

export type QueryWarsOrderByOrderByClause = {
  column: QueryWarsOrderByColumn;
  order: SortOrder;
};

export enum QueryWarsOrderByColumn {
  Id = 'ID',
  Date = 'DATE'
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

export enum QueryBountiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Amount = 'AMOUNT'
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

export enum QueryWarattacksOrderByColumn {
  Id = 'ID',
  Date = 'DATE'
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

export enum QueryTreatiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  TurnsLeft = 'TURNS_LEFT'
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

export enum QueryCitiesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Infrastructure = 'INFRASTRUCTURE',
  Maxinfra = 'MAXINFRA',
  Land = 'LAND'
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

export enum QueryBankrecsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Money = 'MONEY',
  Coal = 'COAL',
  Oil = 'OIL',
  Uranium = 'URANIUM',
  Iron = 'IRON',
  Bauxite = 'BAUXITE',
  Lead = 'LEAD',
  Gasoline = 'GASOLINE',
  Munitions = 'MUNITIONS',
  Steel = 'STEEL',
  Aluminum = 'ALUMINUM',
  Food = 'FOOD'
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

export enum QueryBaseballGamesOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Htscore = 'HTSCORE',
  Atscore = 'ATSCORE'
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

export enum QueryBaseballTeamsOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Quality = 'QUALITY',
  Seating = 'SEATING',
  Rating = 'RATING',
  Wins = 'WINS',
  Glosses = 'GLOSSES',
  Runs = 'RUNS',
  Homers = 'HOMERS',
  Strikeouts = 'STRIKEOUTS',
  Games = 'GAMES'
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

export enum QueryBaseballPlayersOrderByColumn {
  Id = 'ID',
  Date = 'DATE',
  Age = 'AGE',
  Pitching = 'PITCHING',
  Batting = 'BATTING',
  Speed = 'SPEED',
  Awareness = 'AWARENESS',
  Overall = 'OVERALL'
}

export type BbPlayerPaginator = {
  __typename?: 'BBPlayerPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<BbPlayer>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bankDeposit: Bankrec;
  bankWithdraw: Bankrec;
};


export type MutationBankDepositArgs = {
  money?: InputMaybe<Scalars['Float']>;
  coal?: InputMaybe<Scalars['Float']>;
  oil?: InputMaybe<Scalars['Float']>;
  uranium?: InputMaybe<Scalars['Float']>;
  iron?: InputMaybe<Scalars['Float']>;
  bauxite?: InputMaybe<Scalars['Float']>;
  lead?: InputMaybe<Scalars['Float']>;
  gasoline?: InputMaybe<Scalars['Float']>;
  munitions?: InputMaybe<Scalars['Float']>;
  steel?: InputMaybe<Scalars['Float']>;
  aluminum?: InputMaybe<Scalars['Float']>;
  food?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
};


export type MutationBankWithdrawArgs = {
  receiver: Scalars['ID'];
  receiver_type: Scalars['Int'];
  money?: InputMaybe<Scalars['Float']>;
  coal?: InputMaybe<Scalars['Float']>;
  oil?: InputMaybe<Scalars['Float']>;
  uranium?: InputMaybe<Scalars['Float']>;
  iron?: InputMaybe<Scalars['Float']>;
  bauxite?: InputMaybe<Scalars['Float']>;
  lead?: InputMaybe<Scalars['Float']>;
  gasoline?: InputMaybe<Scalars['Float']>;
  munitions?: InputMaybe<Scalars['Float']>;
  steel?: InputMaybe<Scalars['Float']>;
  aluminum?: InputMaybe<Scalars['Float']>;
  food?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
};

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  lastItem?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
  hasMorePages: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  lastPage: Scalars['Int'];
};

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Min = 'MIN',
  Max = 'MAX',
  Sum = 'SUM',
  Count = 'COUNT'
}

export type OrderByClause = {
  column: Scalars['String'];
  order: SortOrder;
};
