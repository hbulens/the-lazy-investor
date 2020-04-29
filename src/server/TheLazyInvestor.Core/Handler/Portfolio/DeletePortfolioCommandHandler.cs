using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Portfolio = TheLazyInvestor.Core.Model.Portfolio;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommandHandler : IRequestHandler<DeletePortfolioCommand>
    {
        private readonly IMediator _mediator;
        private readonly IPortfolioRepository _portfolioRepository;
        private readonly IMapper _mapper;

        public DeletePortfolioCommandHandler(IMediator mediator, IPortfolioRepository portfolioRepository, IMapper mapper)
        {
            _mediator = mediator;
            _portfolioRepository = portfolioRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeletePortfolioCommand command, CancellationToken cancellationToken)
        {
            await _portfolioRepository.DeleteAsync(_mapper.Map<Entities.Portfolio>(new Portfolio { Id = command.PortfolioId }));
            return Unit.Value;
        }
    }
}