using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class UpdatePortfolioCommand : IRequest<Portfolio>
    {
        public UpdatePortfolioCommand(Portfolio portfolio)
        {
            Portfolio = portfolio;
        }

        public Portfolio Portfolio { get; }
    }
}