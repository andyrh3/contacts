export class Contact {

  name: string;
  street: string;
  email: string;
  phone: string;
  age: number;

  constructor(data: any) {
    this.name = data.name || '';
    this.street = data.street || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.age = data.age || '';
  }

}
