export class Transaction {
  public name: string;
  public date: Date;
  public amount: number;
  public price: number;

  constructor(name: string, date: Date, amount: number, price: number) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.price = price;
  }
}
