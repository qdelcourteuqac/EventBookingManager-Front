import {Person} from "./person";

export class Account {
  id: number;
  email: string;
  password: string;
  person: Person;

  constructor(){
    this.person = new Person();
  }
}
