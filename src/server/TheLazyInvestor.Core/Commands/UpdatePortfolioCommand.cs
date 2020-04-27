using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class UpdatePortfolioCommand : IRequest<Portfolio>
    {
        private readonly Portfolio _portfolio;

        public UpdatePortfolioCommand(Portfolio portfolio)
        {
            _portfolio = portfolio;
        }
    }
}