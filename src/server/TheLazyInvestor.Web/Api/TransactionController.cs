using Microsoft.AspNetCore.Mvc;

namespace TheLazyInvestor.Web.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        public TransactionController()
        {
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok("All is well");
        }
    }
}