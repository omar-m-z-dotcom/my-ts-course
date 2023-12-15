/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class User {
  private static _created: number = 0;
  public static get created(): number {
    return User._created;
  }
  public static set created(value: number) {
    User._created = value;
  }
  static getCount(): void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
console.log(User.created);
User.getCount();