using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class DeleteTransactionCommand : IRequest
    {
        public DeleteTransactionCommand(int transactionId)
        {
            TransactionId = transactionId;
        }

        public int TransactionId { get; }
    }
}