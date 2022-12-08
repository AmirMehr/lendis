export default class Price {
  constructor(
    public amount: number,
    public currency: string,
    public hint?: string
  ) {}
}
