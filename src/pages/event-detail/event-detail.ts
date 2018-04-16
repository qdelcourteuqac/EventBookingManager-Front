import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform} from 'ionic-angular';

import {Event} from '../../models/event';
import {AuthService} from "../../providers/auth/auth-service";

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage implements OnInit {
  event: Event;

  isLogged: boolean;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public platform: Platform,
              public navParams: NavParams,
              public authService: AuthService) {
    this.event = navParams.get('event') || new Event();
  }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated()
  }

  openReservationList(event: Event) {
    this.navCtrl.push('ReservationListPage', {
      event: event
    });
  }

  openScanner(event: Event) {
    this.navCtrl.push('ScannerPage', {
      event: event
    })
  }
}
