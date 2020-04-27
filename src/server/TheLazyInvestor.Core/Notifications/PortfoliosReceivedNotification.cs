using System.Collections.Generic;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class PortfoliosReceivedNotification : INotification
    {
        public PortfoliosReceivedNotification(IEnumerable<Portfolio> portfolios)
        {
            Portfolios = portfolios;
        }

        public IEnumerable<Portfolio> Portfolios { get; }
    }
}