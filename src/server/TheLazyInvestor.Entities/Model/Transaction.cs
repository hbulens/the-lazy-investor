using System;

namespace TheLazyInvestor.Entities
{
    public class Transaction : Entity
    {
        public int Id { get; set; }

        public string Ticker { get; set; }

        public DateTime Date { get; set; }

        public int Amount { get; set; }

        public float Price { get; set; }

        public int PortfolioId { get; set; }

        public virtual Portfolio Portfolio { get; set; }
    }
}