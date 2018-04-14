import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Event } from '../../models/event';
import {Reservation} from "../../models/reservation";

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  event: Event;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event') || new Event();
  }

  openReservationList(event: Event) {
    this.navCtrl.push('ReservationListPage', {
      event: event
    });
  }
}
