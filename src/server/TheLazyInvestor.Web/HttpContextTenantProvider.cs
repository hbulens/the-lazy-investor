using Microsoft.AspNetCore.Http;
using TheLazyInvestor.Db;

namespace TheLazyInvestor.Web
{
    public class HttpContextTenantProvider : ITenantProvider
    {
        private readonly IHttpContextAccessor _accessor;
        public HttpContextTenantProvider(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        public string GetTenantId() 
            => _accessor.HttpContext?.User?.Identity?.Name ?? "N/A";
    }
}