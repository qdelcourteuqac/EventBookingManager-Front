import { Injectable } from '@angular/core';

import { Event } from '../../models/event';
import { Api } from '../api/api';
import {ToastController} from "ionic-angular";

@Injectable()
export class EventApiProvider {

  events: Event[];

  constructor(public api: Api, public toastCtrl: ToastController) { }

  query(params?: any) {
    return this.api.get('event', params).toPromise();
  }

  add(item: Event) {
    return this.api.post('event', item).toPromise();
  }

  search(name: string) {
    let parameters = {
      name: name
    };

    return new Promise( ((resolve, reject) => {
      this.api.get('event/search', parameters).subscribe( (response: any) => {
        resolve(response);
      }, (err) =>  {
        reject(err);
      });
    }));
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      this.api.get('event').subscribe((value: any) => {
        this.toastCtrl.create({
          message: "La liste des évènements a été mise à jour !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

  delete(event: Event) {
    return new Promise((resolve, reject) => {
      this.api.delete('event/'+event.id).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "L'évènement '"+ event.name +"' a été supprimé !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

}
