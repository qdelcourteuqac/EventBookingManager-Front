import {Injectable} from "@angular/core";
import {Account} from "../../models/account";
import {Storage} from "@ionic/storage";


@Injectable()
export class AccountStorage {

  accountKey: string = "ACCOUNT";

  constructor(public storage: Storage){

  }

  setAccount(account: Account) {
    return this.storage.set(this.accountKey, account);
  }

  getAccount() {
    return this.storage.get(this.accountKey);
  }

  logout() {
    return this.storage.remove(this.accountKey);
  }
}
