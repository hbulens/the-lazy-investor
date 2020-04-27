using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommand : IRequest<Portfolio>, IRequest
    {
        private readonly Portfolio _portfolio;

        public DeletePortfolioCommand(Portfolio portfolio)
        {
            _portfolio = portfolio;
        }

        public Portfolio Portfolio => _portfolio;
    }
}