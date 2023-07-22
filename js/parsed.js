export class ProjectBits {
    constructor(bits) {
        this.and = (bit) => {
            bit = BigInt(bit);
            return (this.bits & bit) === bit;
        };
        this.ironw = () => this.and(1 << 0);
        this.bauxitew = () => this.and(1 << 1);
        this.armss = () => this.and(1 << 2);
        this.egr = () => this.and(1 << 3);
        this.massirr = () => this.and(1 << 4);
        this.itc = () => this.and(1 << 5);
        this.mlp = () => this.and(1 << 6);
        this.nrf = () => this.and(1 << 7);
        this.irond = () => this.and(1 << 8);
        this.vds = () => this.and(1 << 9);
        this.cia = () => this.and(1 << 10);
        this.cfce = () => this.and(1 << 11);
        this.propb = () => this.and(1 << 12);
        this.uap = () => this.and(1 << 13);
        this.city_planning = () => this.and(1 << 14);
        this.adv_city_planning = () => this.and(1 << 15);
        this.space_program = () => this.and(1 << 16);
        this.spy_satellite = () => this.and(1 << 17);
        this.moon_landing = () => this.and(1 << 18);
        this.pirate_economy = () => this.and(1 << 19);
        this.recycling_initiative = () => this.and(1 << 20);
        this.telecom_satellite = () => this.and(1 << 21);
        this.green_tech = () => this.and(1 << 22);
        this.arable_land_agency = () => this.and(1 << 23);
        this.clinical_research_center = () => this.and(1 << 24);
        this.specialized_police_training = () => this.and(1 << 25);
        this.adv_engineering_corps = () => this.and(1 << 26);
        this.gsa_np = () => this.and(1 << 27);
        this.rnd_np = () => this.and(1 << 28);
        this.rpc_np = () => this.and(1 << 29);
        this.bits = BigInt(bits);
    }
}
