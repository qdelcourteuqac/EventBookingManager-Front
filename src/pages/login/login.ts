import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';

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
    public accounts: AccountApiProvider,
    public accountStorage: AccountStorage,
    public translateService: TranslateService) {

    this.account = new Account();
  }

  doLogin() {
    this.accounts.authenticate(this.account).then((value: any) => {
      let authAccount: Account = value;
      this.accountStorage.setAccount(authAccount).then(() => {
        this.closeModal();
        this.navCtrl.setRoot(MainPage);
      });
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
