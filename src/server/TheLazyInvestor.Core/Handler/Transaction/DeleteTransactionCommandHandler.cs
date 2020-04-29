using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class DeleteTransactionCommandHandler : IRequestHandler<DeleteTransactionCommand>
    {
        private readonly IMediator _mediator;
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;

        public DeleteTransactionCommandHandler(IMediator mediator, ITransactionRepository transactionRepository, IMapper mapper)
        {
            _mediator = mediator;
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteTransactionCommand command, CancellationToken cancellationToken)
        {
            await _transactionRepository.DeleteAsync(_mapper.Map<Entities.Transaction>(new Transaction { Id = command.TransactionId }));
            return Unit.Value;
        }
    }
} 