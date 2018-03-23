import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {IonicPage, NavController, ToastController, ViewController} from 'ionic-angular';

import {Account} from '../../models/account';
import {AccountApiProvider} from "../../providers/account/account";
import {AccountStorage} from "../../providers/account/account-storage";
import {MainPage} from "../pages";

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
    public accountStorage: AccountStorage,
    public translateService: TranslateService) {

    this.account = new Account();
  }

  doLogin() {
    this.accounts.login(this.account).then((value: any) => {
      let authAccount: Account = value;
      this.accountStorage.setAccount(authAccount).then(() => {
        this.toastCtrl.create({
          message: "U're logged in!",
          duration: 3000,
          position: 'top'
        }).present();
        this.closeModal();
        this.navCtrl.setRoot(MainPage);
      });
    },(err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
