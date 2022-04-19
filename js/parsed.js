export class ProjectBits {
    constructor(bits) {
        this.ironw = () => this.bits & 1 << 0;
        this.bauxitew = () => this.bits & 1 << 1;
        this.armss = () => this.bits & 1 << 2;
        this.egr = () => this.bits & 1 << 3;
        this.massirr = () => this.bits & 1 << 4;
        this.itc = () => this.bits & 1 << 5;
        this.mlp = () => this.bits & 1 << 6;
        this.nrf = () => this.bits & 1 << 7;
        this.irond = () => this.bits & 1 << 8;
        this.vds = () => this.bits & 1 << 9;
        this.cia = () => this.bits & 1 << 10;
        this.cfce = () => this.bits & 1 << 11;
        this.propb = () => this.bits & 1 << 12;
        this.uap = () => this.bits & 1 << 13;
        this.city_planning = () => this.bits & 1 << 14;
        this.adv_city_planning = () => this.bits & 1 << 15;
        this.space_program = () => this.bits & 1 << 16;
        this.spy_satellite = () => this.bits & 1 << 17;
        this.moon_landing = () => this.bits & 1 << 18;
        this.pirate_economy = () => this.bits & 1 << 19;
        this.recycling_initiative = () => this.bits & 1 << 20;
        this.telecom_satellite = () => this.bits & 1 << 21;
        this.green_tech = () => this.bits & 1 << 22;
        this.arable_land_agency = () => this.bits & 1 << 23;
        this.clinical_research_center = () => this.bits & 1 << 24;
        this.specialized_police_training = () => this.bits & 1 << 25;
        this.adv_engineering_corps = () => this.bits & 1 << 26;
        this.gsa_np = () => this.bits & 1 << 27;
        this.rnd_np = () => this.bits & 1 << 28;
        this.rpc_np = () => this.bits & 1 << 29;
        this.bits = bits;
    }
}
