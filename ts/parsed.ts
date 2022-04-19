export class ProjectBits {
  bits: number;
  constructor(bits: number) {
    this.bits = bits;
  }
  ironw = () => this.bits & 1 << 0;
  bauxitew = () => this.bits & 1 << 1;
  armss = () => this.bits & 1 << 2;
  egr = () => this.bits & 1 << 3;
  massirr = () => this.bits & 1 << 4;
  itc = () => this.bits & 1 << 5;
  mlp = () => this.bits & 1 << 6;
  nrf = () => this.bits & 1 << 7;
  irond = () => this.bits & 1 << 8;
  vds = () => this.bits & 1 << 9;
  cia = () => this.bits & 1 << 10;
  cfce = () => this.bits & 1 << 11;
  propb = () => this.bits & 1 << 12;
  uap = () => this.bits & 1 << 13;
  city_planning = () => this.bits & 1 << 14;
  adv_city_planning = () => this.bits & 1 << 15;
  space_program = () => this.bits & 1 << 16;
  spy_satellite = () => this.bits & 1 << 17;
  moon_landing = () => this.bits & 1 << 18;
  pirate_economy = () => this.bits & 1 << 19;
  recycling_initiative = () => this.bits & 1 << 20;
  telecom_satellite = () => this.bits & 1 << 21;
  green_tech = () => this.bits & 1 << 22;
  arable_land_agency = () => this.bits & 1 << 23;
  clinical_research_center = () => this.bits & 1 << 24;
  specialized_police_training = () => this.bits & 1 << 25;
  adv_engineering_corps = () => this.bits & 1 << 26;
  gsa_np = () => this.bits & 1 << 27;
  rnd_np = () => this.bits & 1 << 28;
  rpc_np = () => this.bits & 1 << 29;
}