import { Injectable } from '@angular/core';

import { Reservation } from '../../models/reservation';
import { Api } from '../api/api';
import {ToastController} from "ionic-angular";
import { Event } from "../../models/event";

@Injectable()
export class ReservationApiProvider {

  endpoint: string;

  constructor(public api: Api, public toastCtrl: ToastController) {
    this.endpoint = 'reservation';
  }

  query(params?: any) {
    return this.api.get(this.endpoint, params);
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      this.api.get(this.endpoint).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Reservations were successfully retrieved !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

  retrieveByEvent(event: Event) {
    return new Promise((resolve, reject) => {
      this.api.get("event/reservations/"+event.id).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Reservations were successfully retrieved !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

  create(reservation: Reservation) {
    return new Promise((resolve, reject) => {
      this.api.post(this.endpoint, reservation).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Success! Reservation created!",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        this.toastCtrl.create({
          message: "Error : Impossible to create a reservation",
          duration: 3000,
          position: 'top'
        }).present();
        reject(err);
      });
    });
  }

  delete(reservation: Reservation) {
    return new Promise((resolve, reject) => {
      this.api.delete('reservation/'+reservation.id).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Reservation for '"+ reservation.person.firstname + " " + reservation.person.lastname +"' is successfully deleted !",
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
