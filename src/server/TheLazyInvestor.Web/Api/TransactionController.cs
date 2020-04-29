using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TheLazyInvestor.Core;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Web.Api
{
    /// <summary>
    /// Web API for retrieving and manipulating transactions.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="TransactionController"/> class.
        /// </summary>
        /// <param name="mediator"></param>
        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Gets a collection of <see cref="Transaction"/> instances
        /// </summary>
        /// <returns>A collection of <see cref="Transaction"/> instances</returns>
        [HttpGet]
        public async Task<IEnumerable<Transaction>> Get()
            => await _mediator.Send(new GetTransactionsCommand());

        /// <summary>
        /// Creates an item
        /// </summary>
        /// <param name="transaction">The record to create</param>
        /// <returns>The new item</returns>
        [HttpPost]
        public async Task<ActionResult<Transaction>> Post(Transaction transaction)
            => await _mediator.Send(new CreateTransactionCommand(transaction));

        /// <summary>
        /// Updates an item
        /// </summary>
        /// <param name="transaction">The record to update</param>
        /// <returns>The updated item</returns>
        [HttpPut]
        public async Task<ActionResult<Transaction>> Put(Transaction transaction)
            => await _mediator.Send(new UpdateTransactionCommand(transaction));

        /// <summary>
        /// Removes an item
        /// </summary>
        /// <param name="id">The record's id</param>
        /// <returns>An instance of <see cref="ActionResult"/></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _mediator.Send(new DeleteTransactionCommand(id));
            return Ok();
        }
    }
}