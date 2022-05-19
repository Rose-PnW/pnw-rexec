import { Alliance, AllianceBankrecsArgs, AllianceNationsArgs, AllianceTaxrecsArgs, BbTeam, BbTeamGamesArgs, Nation, NationBankrecsArgs, NationWarsArgs, War, WarAttacksArgs } from "./types";
declare type NationChildArgs<Child> = Child extends 'wars' ? NationWarsArgs : Child extends 'bankrecs' ? NationBankrecsArgs : Child extends 'taxrecs' ? NationBankrecsArgs : never;
declare type AllianceChildArgs<Child> = Child extends 'nations' ? AllianceNationsArgs : Child extends 'bankrecs' ? AllianceBankrecsArgs : Child extends 'taxrecs' ? AllianceTaxrecsArgs : never;
declare type WarChildArgs<Child> = Child extends 'attacks' ? WarAttacksArgs : never;
declare type BbTeamChildArgs<Child> = Child extends 'games' ? BbTeamGamesArgs : never;
export declare type ChildArgs<Self, Child> = Self extends Nation ? NationChildArgs<Child> : Self extends Alliance ? AllianceChildArgs<Child> : Self extends War ? WarChildArgs<Child> : Self extends BbTeam ? BbTeamChildArgs<Child> : never;
export {};
