using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Entities;
using Portfolio = TheLazyInvestor.Core.Model.Portfolio;

namespace TheLazyInvestor.Core
{
    public class CreatePortfolioCommandHandler : IRequestHandler<CreatePortfolioCommand, Portfolio>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;


        public CreatePortfolioCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository, IMapper mapper, ILogger<CreatePortfolioCommandHandler> logger)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<Portfolio> Handle(CreatePortfolioCommand command, CancellationToken cancellationToken)
        {
            Entities.Portfolio newPortfolio = await _portfolioRepository.CreateAsync(_mapper.Map<Entities.Portfolio>(command.Portfolio));
            _logger.LogDebug($"Created portfolio with name {newPortfolio.Name} identified by id {newPortfolio.Id}");
            return _mapper.Map<Portfolio>(newPortfolio);
        }
    }
}