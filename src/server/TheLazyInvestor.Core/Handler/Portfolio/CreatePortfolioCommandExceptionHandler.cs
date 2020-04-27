using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Core
{
    public class CreatePortfolioCommandExceptionHandler : IRequestExceptionHandler<CreatePortfolioCommand, Portfolio>
    {
        private ILogger _logger;

        public CreatePortfolioCommandExceptionHandler(ILogger<CreatePortfolioCommandExceptionHandler> logger)
        {
            _logger = logger;
        }

        public Task Handle(CreatePortfolioCommand request, Exception exception, RequestExceptionHandlerState<Portfolio> state, CancellationToken cancellationToken)
        {
            _logger.LogError(exception, $"Exception occurred when creating portfolio {request?.Portfolio?.Name}");
            return Task.CompletedTask;
        }
    }
}