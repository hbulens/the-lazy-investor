using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class GetPortfoliosCommandHandler : IRequestHandler<GetPortfoliosCommand, IEnumerable<Portfolio>>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;

        public GetPortfoliosCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
        }

        public Task<IEnumerable<Portfolio>> Handle(GetPortfoliosCommand request, CancellationToken cancellationToken)
            => _portfolioRepository.GetAllAsync();
    }
}