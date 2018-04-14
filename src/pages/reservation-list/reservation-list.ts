import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import {Reservation} from "../../models/reservation";
import {Event} from "../../models/event";
import {ReservationApiProvider} from "../../providers/reservation/reservation";


@IonicPage()
@Component({
  selector: 'page-reservation-list',
  templateUrl: 'reservation-list.html',
})
export class ReservationListPage {

  event: Event;
  reservationsList: Reservation[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public reservations: ReservationApiProvider) {
    this.event = this.navParams.get('event');
    this.reservationsList = this.event.reservations;
  }

  addReservation() {
    let addModal = this.modalCtrl.create('ReservationCreatePage', {
      event: this.event
    });
    addModal.present();
    addModal.onDidDismiss(item => {
      this.refreshReservations();
    });
  }

  deleteReservation(reservation: Reservation) {
    this.refreshReservations();
  }

  refreshReservations() {
    /*
    this.reservations.retrieve().then((res: any) => {
      this.reservationsList = res;
    });
    */
  }

}
