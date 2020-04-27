using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Transaction = TheLazyInvestor.Core.Model.Transaction;

namespace TheLazyInvestor.Core
{
    public class DeleteTransactionCommandHandler : IRequestHandler<DeleteTransactionCommand, Transaction>
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

        public async Task<Transaction> Handle(DeleteTransactionCommand command, CancellationToken cancellationToken)
        {
            Entities.Transaction deletedTransaction = await _transactionRepository.DeleteAsync(_mapper.Map<Entities.Transaction>(command.Transaction));
            return _mapper.Map<Transaction>(deletedTransaction);
        }
    }
}