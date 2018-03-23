import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Account} from "../../models/account";
import {AccountApiProvider} from "../../providers/account/account";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  account: Account;

  constructor(public navCtrl: NavController, public accounts: AccountApiProvider, public navParams: NavParams) {
  }


  ngOnInit(): void {
    //Récupérer l'utilisateur courant connecté dans le storage
  }

}
