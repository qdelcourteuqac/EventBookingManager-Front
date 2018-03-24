import { Injectable } from '@angular/core';

import { Account } from '../../models/account';
import { Api } from '../api/api';
import {ToastController} from "ionic-angular";
import {MainPage} from "../../pages/pages";

@Injectable()
export class AccountApiProvider {

  constructor(public api: Api, public toastCtrl: ToastController) { }

  query(params?: any) {
    return this.api.get('account', params);
  }

  authenticate(account: Account) {
    let body = {"email":account.email, "password":account.password};

    return new Promise((resolve, reject) => {
      this.api.post('account/authenticate', body).subscribe((value: any) => {
        resolve(value);
      }, (err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000,
          position: 'top'
        }).present();
        reject(err);
      });
    });
  }

  retrieve() {
    return new Promise((resolve, reject) => {
      this.api.get('account').subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Accounts were successfully retrieved !",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        reject(err);
      });
    });
  }

  create(account: Account) {
    return new Promise((resolve, reject) => {
      this.api.post('account', account).subscribe((value: any) => {
        this.toastCtrl.create({
          message: "Success! Account created!",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(value);
      }, (err) => {
        this.toastCtrl.create({
          message: "Error : Impossible to create an account",
          duration: 3000,
          position: 'top'
        }).present();
        reject(err);
      });
    });
  }
}
