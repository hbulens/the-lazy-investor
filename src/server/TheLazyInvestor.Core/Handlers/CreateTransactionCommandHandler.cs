using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Core
{
    public class CreateTransactionCommandHandler : AsyncRequestHandler<CreateTransactionCommand>
    {
        private readonly IMediator _mediator;

        public CreateTransactionCommandHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        protected override Task Handle(CreateTransactionCommand command, CancellationToken cancellationToken)
        {
            _mediator.Publish(new TransactionCreatedNotification(new Transaction()));
            return Task.CompletedTask;
        }
    }
}