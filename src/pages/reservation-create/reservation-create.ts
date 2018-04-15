import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import {Reservation} from "../../models/reservation";
import {ReservationApiProvider} from "../../providers/reservation/reservation";


@IonicPage()
@Component({
  selector: 'page-reservation-create',
  templateUrl: 'reservation-create.html',
})
export class ReservationCreatePage {

  reservation: Reservation;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public reservations: ReservationApiProvider,
              public viewCtrl: ViewController) {
    this.reservation = new Reservation();
    this.reservation.event = this.navParams.get('event');
  }

  createReservation() {
    this.reservations.create(this.reservation).then((res: any) => {
      this.close();
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
