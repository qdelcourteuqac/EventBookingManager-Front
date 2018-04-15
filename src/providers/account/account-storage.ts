import {Injectable} from "@angular/core";
import {Account} from "../../models/account";
import {Storage} from "@ionic/storage";
import {ToastController} from "ionic-angular";


@Injectable()
export class AccountStorage {

  accountKey: string = "ACCOUNT";

  constructor(public storage: Storage, public toastCtrl: ToastController) {}

  getAccount() {
    return this.storage.get(this.accountKey);
  }

  isLogged() {
    return new Promise((resolve, reject) => {
      this.getAccount().then((response: any) => {
        resolve(response != null);
      }, () => {
        reject(false);
      });
    });
  }

  setAccount(account: Account) {
    return new Promise((resolve, reject) => {
      this.storage.set(this.accountKey, account).then((result: any) => {
        this.toastCtrl.create({
          message: "U're logged in!",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(result);
      }, (err) => {
        reject(err);
      });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.storage.remove(this.accountKey).then((result: any) => {
        this.toastCtrl.create({
          message: "U're now logout!",
          duration: 3000,
          position: 'top'
        }).present();
        resolve(result);
      }, (err) => {
        reject(err);
      })
    });
  }
}
