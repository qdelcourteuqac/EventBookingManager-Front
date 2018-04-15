import {DateTime} from "ionic-angular";
import {Reservation} from "./reservation";

export class Scan {
  scanAt: DateTime;
  reservation: Reservation;
}

export class ScanResponse {
  scan: Scan;
  message: string;

  get personName() {
    if (this.scan == null) {
      return "";
    }
    return this.scan.reservation.person.name;
  }
}
