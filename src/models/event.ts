import {DateTime} from "ionic-angular";
import {Reservation} from "./reservation";

export class Event {
  id: number;
  name: string;
  maxPlaces: number;
  startArt: DateTime;
  endAt: DateTime;

  reservations: Reservation[];
}
