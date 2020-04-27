using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class CreatePortfolioCommandHandler : IRequestHandler<CreatePortfolioCommand, Portfolio>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;

        public CreatePortfolioCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
        }

        public Task<Portfolio> Handle(CreatePortfolioCommand command, CancellationToken cancellationToken)
            => _portfolioRepository.CreateAsync(command.Portfolio);
    }
}