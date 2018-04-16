import { Injectable } from '@angular/core';
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {Account} from "../../models/account";
import {ToastController} from "ionic-angular";

@Injectable()
export class AuthService {

  static readonly accountKey: string = "ACCOUNT";
  static readonly authorizationToken: string = "AUTHORIZATION-TOKEN";

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public toastCtrl: ToastController) {}

  getAccount(): Account {
    return JSON.parse(localStorage.getItem(AuthService.accountKey));
  }

  setAccount(account: Account) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(AuthService.accountKey, JSON.stringify(account));
      this.toastCtrl.create({
        message: "Vous êtes connecté",
        duration: 3000,
        position: 'top'
      }).present();
      resolve();
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(AuthService.authorizationToken);
      localStorage.removeItem(AuthService.accountKey);
      this.toastCtrl.create({
        message: "Vous êtes déconnecté",
        duration: 3000,
        position: 'top'
      }).present();
      resolve();
    });
  }

  public getToken(): string {
    return localStorage.getItem(AuthService.authorizationToken);
  }

  public setToken(token: string) {
    localStorage.setItem(AuthService.authorizationToken, token);
    let account: Account = this.jwtHelper.decodeToken(token);
    this.setAccount(account);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

  public store(object) {
    return new Promise((resolve, reject) => {
      this.setToken(object);
      resolve();
    });
  }

}
