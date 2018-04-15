import { Injectable } from '@angular/core';

import { Event } from '../../models/event';
import { Api } from '../api/api';
import { ToastController } from "ionic-angular";
import { Person } from "../../models/person";

@Injectable()
export class PersonApiProvider {

  events: Event[];

  constructor(public api: Api, public toastCtrl: ToastController) { }

  query(params?: any) {
    return this.api.get('person', params);
  }

  add(person: Person) {
    return this.api.post('person', person).toPromise();
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      this.api.get('person').subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Persons were successfully retrieved !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

  delete(person: Person) {
    return new Promise((resolve, reject) => {
      this.api.delete('person/'+person.id).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Person '"+ person.firstname + " " + person.lastname +"' is successfully deleted !",
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
