import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {AccountApiProvider} from "../../providers/account/account";
import {Account} from "../../models/account";
import {MainPage} from "../pages";
import {AuthService} from "../../providers/auth/auth-service";


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: Account;

  constructor(public navCtrl: NavController,
              public accounts: AccountApiProvider,
              public authService: AuthService) {
    this.account = new Account();
  }

  doSignup() {
    this.account.person.email = this.account.email;

    this.accounts.create(this.account).then( (account: any) => {
      this.navCtrl.push(MainPage);
    });
  }
}
