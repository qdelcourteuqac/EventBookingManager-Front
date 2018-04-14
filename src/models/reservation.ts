import {DateTime} from "ionic-angular";
import {Person} from "./person";


export class Reservation {
  id: number;
  reservedAt: DateTime;
  event: number;
  person: Person;

  constructor() {
    this.person = new Person();
  }
}
