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
  }

  retrieve() {
    return this.api.get('event').toPromise();
  }

  delete(event: Event) {
    return this.api.delete('event/'+event.id).toPromise();
  }

}
