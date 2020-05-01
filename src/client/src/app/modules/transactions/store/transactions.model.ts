export class Transaction {

  constructor(
    public id: number,
    public name: string,
    public date: Date,
    public amount: number,
    public price: number) { }
}
