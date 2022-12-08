import Leg from "./Leg.model";
import Price from "./Price.model";

export default class Journey {
  constructor(
    public legs: Leg[],
    public refreshToken: string,
    public price: Price
  ) {}
}
