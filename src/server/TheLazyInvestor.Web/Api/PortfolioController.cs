using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TheLazyInvestor.Core;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Web.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PortfolioController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Portfolio>>> Get()
        {
            IEnumerable<Portfolio> result = await _mediator.Send(new GetPortfoliosCommand());
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Portfolio>> Post(Portfolio portfolio)
        {
            Portfolio result = await _mediator.Send(new CreatePortfolioCommand(portfolio));
            return Ok(result);
        }

        [HttpPut]
        public async Task<ActionResult<Portfolio>> Put(Portfolio portfolio)
        {
            Portfolio result = await _mediator.Send(new UpdatePortfolioCommand(portfolio));
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(Portfolio portfolio)
        {
            var result = await _mediator.Send(new DeletePortfolioCommand(portfolio));
            return Ok();
        }
    }
}