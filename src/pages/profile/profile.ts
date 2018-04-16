import {Component, OnInit} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';

import {Account} from "../../models/account";
import {FirstRunPage} from "../pages";
import {AuthService} from "../../providers/auth/auth-service";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  account: Account;

  constructor(public app: App,
              public navCtrl: NavController,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.account = this.authService.getAccount();
  }

  logout() {
    this.authService.logout().then(() => {
      this.app.getRootNav().setRoot(FirstRunPage);
    });
  }

}
