import { Injectable } from '@angular/core';

import { Account } from '../../models/account';
import { Api } from '../api/api';
import {ToastController} from "ionic-angular";

@Injectable()
export class AccountApiProvider {

  constructor(public api: Api, public toastCtrl: ToastController) { }

  query(params?: any) {
    return this.api.get('account', params);
  }

  retrieve() {
    return this.api.get('account').toPromise();
  }

  login(account: Account) {
    return this.api.post('account/authenticate', {"email":account.email, "password":account.password}).toPromise();
  }

}
