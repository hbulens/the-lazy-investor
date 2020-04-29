using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class UpdatePortfolioCommandExceptionHandler : IRequestExceptionHandler<UpdatePortfolioCommand, Portfolio>
    {
        private ILogger _logger;

        public UpdatePortfolioCommandExceptionHandler(ILogger<UpdateTransactionCommandExceptionHandler> logger)
        {
            _logger = logger;
        }

        public Task Handle(UpdatePortfolioCommand request, Exception exception, RequestExceptionHandlerState<Portfolio> state, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, $"Exception occurred when updating portfolio {request?.Portfolio?.Name}");
            return Task.CompletedTask;
        }
    }
}