using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Transaction = TheLazyInvestor.Core.Model.Transaction;

namespace TheLazyInvestor.Core
{
    public class UpdateTransactionCommandHandler : IRequestHandler<UpdateTransactionCommand, Transaction>
    {
        private readonly IMediator _mediator;
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;

        public UpdateTransactionCommandHandler(IMediator mediator, ITransactionRepository transactionRepository, IMapper mapper)
        {
            _mediator = mediator;
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }

        public async Task<Transaction> Handle(UpdateTransactionCommand command, CancellationToken cancellationToken)
        {
            Entities.Transaction updatedTransaction = await _transactionRepository.UpdateAsync(_mapper.Map<Entities.Transaction>(command.Transaction));
            return _mapper.Map<Transaction>(await _transactionRepository.GetOneAsync(x => x.Id == updatedTransaction.Id));
        }
    }
}