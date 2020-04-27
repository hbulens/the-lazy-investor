using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class DeleteTransactionCommand : IRequest<Transaction>
    {
        public DeleteTransactionCommand(Transaction transaction)
        {
            Transaction = transaction;
        }

        public Transaction Transaction { get; }
    }
}