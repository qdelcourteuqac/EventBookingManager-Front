import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController} from 'ionic-angular';

import {Event} from '../../models/event';
import {EventApiProvider} from "../../providers/event/event";

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage implements OnInit {

  currentEvents: Event[];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public events: EventApiProvider) {
  }

  ngOnInit() {
    this.refreshEvents();
  }

  addEvent() {
    let addModal = this.modalCtrl.create('EventCreatePage');
    addModal.present();
    addModal.onDidDismiss(item => {
      this.refreshEvents();
    });
  }

  deleteEvent(event: Event) {
    this.events.delete(event).then((res: any) => {
      this.refreshEvents();
    });
  }

  refreshEvents() {
    this.events.retrieve().then((res: any) => {
      this.currentEvents = res;
    });
  }

  openEvent(event: Event) {
    this.navCtrl.push('EventDetailPage', {
      event: event
    });
  }

}
