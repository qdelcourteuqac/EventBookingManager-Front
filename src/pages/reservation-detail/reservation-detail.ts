import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reservation } from "../../models/reservation";


@IonicPage()
@Component({
  selector: 'page-reservation-detail',
  templateUrl: 'reservation-detail.html',
})
export class ReservationDetailPage {

  reservation: Reservation;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.reservation = this.navParams.get('reservation');
  }
}
