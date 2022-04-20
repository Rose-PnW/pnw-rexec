export class ProjectBits {
  bits: number;
  constructor(bits: number) {
    this.bits = bits;
  }
  and = (bit: number) => (this.bits & bit) === bit;
  ironw = () => this.and(1 << 0);
  bauxitew = () => this.and(1 << 1);
  armss = () => this.and(1 << 2);
  egr = () => this.and(1 << 3);
  massirr = () => this.and(1 << 4);
  itc = () => this.and(1 << 5);
  mlp = () => this.and(1 << 6);
  nrf = () => this.and(1 << 7);
  irond = () => this.and(1 << 8);
  vds = () => this.and(1 << 9);
  cia = () => this.and(1 << 10);
  cfce = () => this.and(1 << 11);
  propb = () => this.and(1 << 12);
  uap = () => this.and(1 << 13);
  city_planning = () => this.and(1 << 14);
  adv_city_planning = () => this.and(1 << 15);
  space_program = () => this.and(1 << 16);
  spy_satellite = () => this.and(1 << 17);
  moon_landing = () => this.and(1 << 18);
  pirate_economy = () => this.and(1 << 19);
  recycling_initiative = () => this.and(1 << 20);
  telecom_satellite = () => this.and(1 << 21);
  green_tech = () => this.and(1 << 22);
  arable_land_agency = () => this.and(1 << 23);
  clinical_research_center = () => this.and(1 << 24);
  specialized_police_training = () => this.and(1 << 25);
  adv_engineering_corps = () => this.and(1 << 26);
  gsa_np = () => this.and(1 << 27);
  rnd_np = () => this.and(1 << 28);
  rpc_np = () => this.and(1 << 29);
}