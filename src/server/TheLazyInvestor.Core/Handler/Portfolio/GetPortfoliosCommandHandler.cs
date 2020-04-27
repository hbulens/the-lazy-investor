using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Portfolio = TheLazyInvestor.Core.Model.Portfolio;

namespace TheLazyInvestor.Core
{
    public class GetPortfoliosCommandHandler : IRequestHandler<GetPortfoliosCommand, IEnumerable<Portfolio>>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly IMapper _mapper;

        public GetPortfoliosCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository, IMapper mapper)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Portfolio>> Handle(GetPortfoliosCommand request, CancellationToken cancellationToken)
        {
            IEnumerable<Entities.Portfolio> portfolios = await _portfolioRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<Portfolio>>(portfolios);
        }            
    }
}