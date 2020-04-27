using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TheLazyInvestor.Core;
using TheLazyInvestor.Core.Model;

namespace TheLazyInvestor.Web.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transaction>>> Get()
        {
            IEnumerable<Transaction> result = await _mediator.Send(new GetTransactionsCommand());
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<Transaction>> Post(Transaction transaction)
        {
            Transaction result = await _mediator.Send(new CreateTransactionCommand(transaction));
            return Ok(result);
        }

        [HttpPut]
        public async Task<ActionResult<Transaction>> Put(Transaction transaction)
        {
            Transaction result = await _mediator.Send(new UpdateTransactionCommand(transaction));
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(Transaction transaction)
        {
            object result = await _mediator.Send(new DeleteTransactionCommand(transaction));
            return Ok();
        }
    }
}