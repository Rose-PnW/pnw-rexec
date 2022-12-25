import { Alliance, AllianceBankrecsArgs, AllianceNationsArgs, AllianceTaxrecsArgs, BbTeam, BbTeamGamesArgs, Nation, NationBankrecsArgs, NationWarsArgs, War, WarAttacksArgs } from "./types";
type NationChildArgs<Child> = Child extends 'wars' ? NationWarsArgs : Child extends 'bankrecs' ? NationBankrecsArgs : Child extends 'taxrecs' ? NationBankrecsArgs : never;
type AllianceChildArgs<Child> = Child extends 'nations' ? AllianceNationsArgs : Child extends 'bankrecs' ? AllianceBankrecsArgs : Child extends 'taxrecs' ? AllianceTaxrecsArgs : never;
type WarChildArgs<Child> = Child extends 'attacks' ? WarAttacksArgs : never;
type BbTeamChildArgs<Child> = Child extends 'games' ? BbTeamGamesArgs : never;
export type ChildArgs<Self, Child> = Self extends Nation ? NationChildArgs<Child> : Self extends Alliance ? AllianceChildArgs<Child> : Self extends War ? WarChildArgs<Child> : Self extends BbTeam ? BbTeamChildArgs<Child> : never;
export {};
