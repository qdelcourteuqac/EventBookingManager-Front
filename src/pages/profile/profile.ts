import {Component, OnInit} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';

import {Account} from "../../models/account";
import {AccountStorage} from "../../providers/account/account-storage";
import {FirstRunPage} from "../pages";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  account: Account;

  constructor(public app: App,
              public navCtrl: NavController,
              public accountStorage: AccountStorage) {
  }

  ngOnInit() {
    this.accountStorage.getAccount().then((result: any) => {
      this.account = result;
    });
  }

  logout() {
    this.accountStorage.logout().then(() => {
      this.app.getRootNav().setRoot(FirstRunPage);
    });
  }

}
