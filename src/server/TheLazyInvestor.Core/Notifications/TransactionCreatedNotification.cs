using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class TransactionCreatedNotification : INotification
    {
        public TransactionCreatedNotification(Transaction transaction)
        {
            Transaction = transaction;
        }

        public Transaction Transaction { get; }
    }
}