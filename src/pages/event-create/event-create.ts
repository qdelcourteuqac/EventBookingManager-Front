import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController, ViewController} from 'ionic-angular';
import {EventApiProvider} from "../../providers/event/event";

import {Event} from '../../models/event';


@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  event: Event;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public events: EventApiProvider) {
    this.event = new Event();
  }

  createEvent() {
    this.events.add(this.event).then((res: any) => {
      this.toastCtrl.create({
        message: "Event named " + this.event.name + " has been created !",
        duration: 3000,
        position: 'top'
      }).present();
      this.close();
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
