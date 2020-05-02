using System;

namespace TheLazyInvestor.Core.Model
{
    public class Transaction
    {
        public int Id { get; set; }

        public string Ticker { get; set; }

        public DateTime Date { get; set; }

        public int Amount { get; set; }

        public float Price { get; set; }

        public int PortfolioId { get; set; }

        public Portfolio Portfolio { get; set; }
    }
}