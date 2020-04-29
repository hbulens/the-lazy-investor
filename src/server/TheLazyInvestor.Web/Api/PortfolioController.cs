using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TheLazyInvestor.Core;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Web.Api
{
    /// <summary>
    /// Web API for retrieving and manipulating portfolios.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="TransactionController"/> class.
        /// </summary>
        /// <param name="mediator"></param>
        public PortfolioController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Gets a collection of <see cref="Portfolio"/> instances
        /// </summary>
        /// <returns>A collection of <see cref="Portfolio"/> instances</returns>
        [HttpGet]
        public async Task<IEnumerable<Portfolio>> Get()
            => await _mediator.Send(new GetPortfoliosCommand());

        /// <summary>
        /// Creates an item
        /// </summary>
        /// <param name="portfolio">The record to create</param>
        /// <returns>The new item</returns>
        [HttpPost]
        public async Task<ActionResult<Portfolio>> Post(Portfolio portfolio)
            => await _mediator.Send(new CreatePortfolioCommand(portfolio));

        /// <summary>
        /// Updates an item
        /// </summary>
        /// <param name="portfolio">The record to update</param>
        /// <returns>The updated item</returns>
        [HttpPut]
        public async Task<ActionResult<Portfolio>> Put(Portfolio portfolio)
            => await _mediator.Send(new UpdatePortfolioCommand(portfolio));

        /// <summary>
        /// Removes an item
        /// </summary>
        /// <param name="id">The record's id</param>
        /// <returns>An instance of <see cref="ActionResult"/></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _mediator.Send(new DeletePortfolioCommand(id));
            return Ok();
        }
    }
}