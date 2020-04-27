using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Portfolio = TheLazyInvestor.Core.Model.Portfolio;

namespace TheLazyInvestor.Core
{
    public class UpdatePortfolioCommandHandler : IRequestHandler<UpdatePortfolioCommand, Portfolio>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly IMapper _mapper;

        public UpdatePortfolioCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository, IMapper mapper)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
            _mapper = mapper;
        }

        public async Task<Portfolio> Handle(UpdatePortfolioCommand command, CancellationToken cancellationToken)
        {
            Entities.Portfolio newPortfolio = await _portfolioRepository.UpdateAsync(_mapper.Map<Entities.Portfolio>(command.Portfolio));
            return _mapper.Map<Portfolio>(newPortfolio);
        }
    }
}