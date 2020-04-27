using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommandHandler : IRequestHandler<DeletePortfolioCommand>
    {
        private readonly IMediator _mediator;

        public DeletePortfolioCommandHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<Unit> Handle(DeletePortfolioCommand request, CancellationToken cancellationToken)
        {
            return new Unit();
        }
    }
}