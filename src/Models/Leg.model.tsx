import Line from "./Line.model";
import Stop from "./Stop.model";

export default class Leg {
  constructor(
    public origin: Stop,
    public destination: Stop,
    public departure: string,
    public plannedDeparture: string,
    public departureDelay: string, // nullable
    public arrival: string,
    public plannedArrival: string,
    public arrivalDelay: string, // nullable
    public reachable: string,
    public tripId: string,
    public line: Line,
    public direction: string,
    public arrivalPlatform: string,
    public plannedArrivalPlatform: string,
    public arrivalPrognosisType: string,
    public departurePlatform: string,
    public plannedDeparturePlatform: string,
    public departurePrognosisType: string
  ) {}
}
