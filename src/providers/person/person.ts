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

  retrieveById(id) {
    return new Promise((resolve, reject) => {
      this.api.get('person/'+id).subscribe((person: any) => {
        resolve(person);
      }, (err) => {
        reject(err);
      });
    });
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      this.api.get('person').subscribe((value: any) => {
        this.toastCtrl.create({
          message: "La liste des personne a été mise à jour !",
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
          message: "La personne '"+ person.firstname + " " + person.lastname +"' a été supprimée !",
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
