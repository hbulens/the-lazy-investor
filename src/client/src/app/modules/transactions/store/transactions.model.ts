export class Transaction {
  public id: number;
  public ticker: string;
  public date: Date;
  public amount: number;
  public price: number;
  public portfolioId: number;

  constructor(id?: number, ticker?: string, date?: Date, amount?: number, price?: number, portfolioId?: number) {
    this.id = id;
    this.ticker = ticker;
    this.date = date;
    this.amount = amount;
    this.price = price;
    this.portfolioId = portfolioId;
  }
}
