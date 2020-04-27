using System.Collections;
using System.Collections.Generic;

namespace TheLazyInvestor.Entities
{
    public class Portfolio
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}