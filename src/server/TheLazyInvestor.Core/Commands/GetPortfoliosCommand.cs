using System.Collections.Generic;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class GetPortfoliosCommand : IRequest<IEnumerable<Portfolio>>
    {
    }
}