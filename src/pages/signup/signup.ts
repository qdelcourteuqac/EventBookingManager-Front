import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import {AccountApiProvider} from "../../providers/account/account";
import {Account} from "../../models/account";
import {AccountStorage} from "../../providers/account/account-storage";
import {MainPage} from "../pages";


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: Account;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public accounts: AccountApiProvider,
    public accountStorage: AccountStorage,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });

    this.account = new Account();
  }

  doSignup() {
    this.account.person.email = this.account.email;
    this.accounts.create(this.account).then( (account: any) => {
      this.accountStorage.setAccount(account).then(() => {
        this.toastCtrl.create({
          message: "U're now logged!",
          duration: 3000,
          position: 'top'
        }).present();
        this.navCtrl.push(MainPage);
      });
    }, (err) => {
      this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      }).present();
    });
  }
}
