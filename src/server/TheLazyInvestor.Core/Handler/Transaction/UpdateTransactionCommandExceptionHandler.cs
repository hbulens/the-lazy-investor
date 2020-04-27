using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class UpdateTransactionCommandExceptionHandler : IRequestExceptionHandler<UpdateTransactionCommand, Transaction>
    {
        private ILogger _logger;

        public UpdateTransactionCommandExceptionHandler(ILogger<UpdateTransactionCommandExceptionHandler> logger)
        {
            _logger = logger;
        }

        public Task Handle(UpdateTransactionCommand request, Exception exception, RequestExceptionHandlerState<Transaction> state, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, $"Exception occurred when updating transaction {request?.Transaction?.Ticker}");
            return Task.CompletedTask;
        }
    }
}