import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  anonymous() {
    this.navCtrl.push('SearchPage');
  }
}
