import { Injectable } from '@angular/core';

import { Event } from '../../models/event';
import { Api } from '../api/api';
import {ToastController} from "ionic-angular";

@Injectable()
export class EventApiProvider {

  events: Event[];

  constructor(public api: Api, public toastCtrl: ToastController) { }

  query(params?: any) {
    return this.api.get('event', params);
  }

  add(item: Event) {
    return this.api.post('event', item).toPromise();
      /*
      .subscribe((res: any) => {
      this.toastCtrl.create({
        message: "Event named "+item.name+" has been created !",
        duration: 3000,
        position: 'top'
      }).present();
    }, (err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      }).present();
    });
    */
  }

  retrieve() {
    return this.api.get('event').toPromise();
    /*
    subscribe((res: any) => {
      this.events = res;
      this.toastCtrl.create({
        message: "Events were successfully retrieved !",
        duration: 3000,
        position: 'top'
      }).present();
    }, (err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      }).present();
    });
    */
  }

}
