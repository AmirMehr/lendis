import Operator from "./Operator.model";

export default class Line {
  constructor(
    public readonly id: string,
    public fahrtNr: string,
    public name: string,
    public isPublic: boolean,
    public adminCode: string,
    public productName: string,
    public mode: string,
    public product: string,
    public additionalName: string,
    public operator?: Operator
  ) {}
}
