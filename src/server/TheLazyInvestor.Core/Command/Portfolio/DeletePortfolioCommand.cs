using MediatR;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommand : IRequest
    {
        public DeletePortfolioCommand(int portfolioId)
        {
            PortfolioId = portfolioId;
        }

        public int PortfolioId { get; }
    }
}