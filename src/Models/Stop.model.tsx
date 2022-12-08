import Location from "./Location.model";
import Product from "./Product.model";

export default class Stop {
  constructor(
    public readonly id: string,
    public name: string,
    public location?: Location,
    public products?: Product
  ) {}
}
