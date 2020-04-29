using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Entities;
using Transaction = TheLazyInvestor.Core.Model.Transaction;

namespace TheLazyInvestor.Core
{
    public class CreateTransactionCommandHandler : IRequestHandler<CreateTransactionCommand, Transaction>
    {
        private readonly IMediator _mediator;
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;

        public CreateTransactionCommandHandler(IMediator mediator, ITransactionRepository transactionRepository, IMapper mapper, ILogger<CreateTransactionCommandHandler> logger)
        {
            _mediator = mediator;
            _transactionRepository = transactionRepository;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<Transaction> Handle(CreateTransactionCommand command, CancellationToken cancellationToken)
        {
            Entities.Transaction newTransaction = await _transactionRepository.CreateAsync(_mapper.Map<Entities.Transaction>(command.Transaction));
            _logger.LogDebug($"Created transaction with name {newTransaction.Ticker} identified by id {newTransaction.Id}");
            return _mapper.Map<Transaction>(newTransaction);
        }
    }
}