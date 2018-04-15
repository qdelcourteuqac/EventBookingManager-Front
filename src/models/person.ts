export class Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  birthdate: any;

  get name() {
    return this.firstname + " " + this.lastname;
  }
}
