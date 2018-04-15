import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Event } from '../../models/event';
import {EventApiProvider} from "../../providers/event/event";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  events: Event[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public eventProvider: EventApiProvider) { }

  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.events = [];
      return;
    }

    this.eventProvider.search(val).then( (response: Event[]) => {
      this.events = response;
    }, (err) => {
    });
  }

  openItem(event: Event) {
    this.navCtrl.push('EventDetailPage', {
      event: event
    });
  }

}
