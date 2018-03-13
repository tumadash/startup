import {Ship} from "./ship";
import {Port} from "./port";
export class Voyage {
  amountOfFuel: number;
  info: string;
  id: number;
  routePoints: Port[];
  ship: Ship;
  shipId: number;
  fromId: number;
  toId: number;
  name: string;


}
