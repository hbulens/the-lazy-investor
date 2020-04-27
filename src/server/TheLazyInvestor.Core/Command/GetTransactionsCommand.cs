using System.Collections.Generic;
using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class GetTransactionsCommand : IRequest<IEnumerable<Transaction>>
    {
    }
}