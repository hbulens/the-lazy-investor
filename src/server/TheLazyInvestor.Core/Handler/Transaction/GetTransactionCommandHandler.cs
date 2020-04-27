using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using TheLazyInvestor.Entities;
using Transaction = TheLazyInvestor.Core.Model.Transaction;

namespace TheLazyInvestor.Core
{
    public class GetTransactionCommandHandler : IRequestHandler<GetTransactionsCommand, IEnumerable<Transaction>>
    {
        private readonly IMediator _mediator;
        private readonly ITransactionRepository _transactionRepository;
        private readonly IMapper _mapper;

        public GetTransactionCommandHandler(IMediator mediator, ITransactionRepository transactionRepository, IMapper mapper)
        {
            _mediator = mediator;
            _transactionRepository = transactionRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Transaction>> Handle(GetTransactionsCommand request, CancellationToken cancellationToken)
        {
            IEnumerable<Entities.Transaction> transactions = await _transactionRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<Transaction>>(transactions);
        }            
    }
}