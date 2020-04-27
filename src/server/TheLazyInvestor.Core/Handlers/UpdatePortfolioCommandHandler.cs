using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class UpdatePortfolioCommandHandler : IRequestHandler<CreatePortfolioCommand, Portfolio>
    {
        private readonly IMediator _mediator;

        public UpdatePortfolioCommandHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public Task<Portfolio> Handle(CreatePortfolioCommand command, CancellationToken cancellationToken)
        {
            return Task.FromResult(new Portfolio());
        }
    }
}