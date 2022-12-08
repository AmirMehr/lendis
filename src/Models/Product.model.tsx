export default class Product {
  constructor(
    public nationalExpress: boolean,
    public national: boolean,
    public regionalExp: boolean,
    public regional: boolean,
    public suburban: boolean,
    public bus: boolean,
    public ferry: boolean,
    public subway: boolean,
    public tram: boolean,
    public taxi: boolean
  ) {}
}

export enum PRODUCT_TYPE {
  NATIONAL_EXPRESS = "nationalExpress",
  NATIONAL = "national",
  REGIONAL_EXP = "regionalExp",
  REGIONAL = "regional",
  SUBURBAN = "suburban",
  BUS = "bus",
  FERRY = "ferry",
  SUBWAY = "subway",
  TRAM = "tram",
  TAXI = "taxi",
}
