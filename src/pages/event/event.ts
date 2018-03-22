import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';

import { Event } from '../../models/event';
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
              public toastCtrl: ToastController,
              public events: EventApiProvider) {
  }

  ngOnInit(): void {
    this.refreshEvents();
  }

  addEvent() {
    let addModal = this.modalCtrl.create('EventCreatePage');
    addModal.present();
    addModal.onDidDismiss(item => {
      this.refreshEvents();
    });
  }

  refreshEvents() {
    this.events.retrieve().then((res: any) => {
      this.currentEvents = res;
      this.toastCtrl.create({
        message: "Events were successfully retrieved !",
        duration: 3000,
        position: 'top'
      }).present();
    });
  }

}
