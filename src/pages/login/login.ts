import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {IonicPage, NavController, ToastController, ViewController} from 'ionic-angular';

import {Account} from '../../models/account';
import {AccountApiProvider} from "../../providers/account/account";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  account: Account;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public accounts: AccountApiProvider,
    public translateService: TranslateService) {

    this.account = new Account();
  }

  doLogin() {
    this.accounts.login(this.account).then(value => {
      this.toastCtrl.create({
        message: "U're logged in !",
        duration: 3000,
        position: 'top'
      }).present();
      this.closeModal();
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
