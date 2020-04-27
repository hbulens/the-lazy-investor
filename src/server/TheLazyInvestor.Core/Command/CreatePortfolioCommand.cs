using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class CreatePortfolioCommand : IRequest<Portfolio>
    {
        public CreatePortfolioCommand(Portfolio portfolio)
        {
            Portfolio = portfolio;
        }

        public Portfolio Portfolio { get; }
    }
}