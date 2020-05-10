using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;

namespace TheLazyInvestor.Db
{
    internal class TenantIdValueGenerator : ValueGenerator<string>
    {
        public override bool GeneratesTemporaryValues => false;
        public override string Next(EntityEntry entry) => GetTenantId(entry.Context);
        private string GetTenantId(DbContext context) => ((LazyInvestorDbContext)context).TenantId;
    }
}