using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class DeletePortfolioCommandExceptionHandler : IRequestExceptionHandler<DeletePortfolioCommand, Portfolio>
    {
        private ILogger _logger;

        public DeletePortfolioCommandExceptionHandler(ILogger<UpdatePortfolioCommandExceptionHandler> logger)
        {
            _logger = logger;
        }

        public Task Handle(DeletePortfolioCommand request, Exception exception, RequestExceptionHandlerState<Portfolio> state, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, $"Exception occurred when removing portfolio {request?.Portfolio?.Name}");
            return Task.CompletedTask;
        }
    }
}