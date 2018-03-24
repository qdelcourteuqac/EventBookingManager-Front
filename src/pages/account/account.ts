import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';

import {Account} from '../../models/account';
import {AccountApiProvider} from "../../providers/account/account";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage implements OnInit {

  currentAccounts: Account[];

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public accounts: AccountApiProvider) {
  }

  ngOnInit(): void {
    this.refreshAccounts();
  }

  loginAction() {
    let addModal = this.modalCtrl.create('LoginPage');
    addModal.present();
    addModal.onDidDismiss(() => {
      this.refreshAccounts();
    });
  }

  refreshAccounts() {
    this.accounts.retrieve().then((result: any) => {
      this.currentAccounts = result;
    });
  }

}
