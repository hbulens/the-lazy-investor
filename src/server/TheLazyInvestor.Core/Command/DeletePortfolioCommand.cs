using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommand : IRequest<Portfolio>, IRequest
    {
        public DeletePortfolioCommand(Portfolio portfolio)
        {
            Portfolio = portfolio;
        }

        public Portfolio Portfolio { get; }
    }
}