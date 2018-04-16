import {Component, OnInit} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';

import {Account} from "../../models/account";
import {FirstRunPage} from "../pages";
import {AuthService} from "../../providers/auth/auth-service";
import {AccountApiProvider} from "../../providers/account/account";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  account: Account;

  constructor(public app: App,
              public navCtrl: NavController,
              public authService: AuthService,
              public accountProvider: AccountApiProvider) {
  }

  ngOnInit() {
    let storeAccount = this.authService.getAccount();
    this.accountProvider.retrieveById(storeAccount.id).then( (account: Account) => {
      this.account = account;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.app.getRootNav().setRoot(FirstRunPage);
    });
  }

}
