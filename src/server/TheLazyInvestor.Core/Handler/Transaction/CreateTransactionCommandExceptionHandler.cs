using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class CreateTransactionCommandExceptionHandler : IRequestExceptionHandler<CreateTransactionCommand, Portfolio>
    {
        private ILogger _logger;

        public CreateTransactionCommandExceptionHandler(ILogger<CreateTransactionCommandExceptionHandler> logger)
        {
            _logger = logger;
        }

        public Task Handle(CreateTransactionCommand request, Exception exception, RequestExceptionHandlerState<Portfolio> state, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, $"Exception occurred when creating portfolio {request?.Transaction?.Ticker}");
            return Task.CompletedTask;
        }
    }
}