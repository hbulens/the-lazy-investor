using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class CreatePortfolioCommand : IRequest<Portfolio>
    {
        private readonly Portfolio _portfolio;

        public CreatePortfolioCommand(Portfolio portfolio)
        {
            _portfolio = portfolio;
        }

        public Portfolio Portfolio => _portfolio;
    }
}