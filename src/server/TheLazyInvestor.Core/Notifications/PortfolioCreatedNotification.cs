using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class PortfolioCreatedNotification : INotification
    {
        public PortfolioCreatedNotification(Portfolio portfolio)
        {
            Portfolio = portfolio;
        }

        public Portfolio Portfolio { get; }
    }
}