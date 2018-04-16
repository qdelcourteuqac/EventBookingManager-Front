import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';

import {Account} from '../../models/account';
import {AccountApiProvider} from "../../providers/account/account";
import {MainPage} from "../pages";
import {AuthService} from "../../providers/auth/auth-service";

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
    public authService: AuthService,
    public translateService: TranslateService) {
    this.account = new Account();
  }

  doLogin() {
    this.accounts.authenticate(this.account).then((response: any) => {
      this.authService.store(response.token).then(() => {
        this.viewCtrl.dismiss().then(() => {
          this.navCtrl.setRoot(MainPage);
        });
      });
    }, () => {
    });
  }

}
