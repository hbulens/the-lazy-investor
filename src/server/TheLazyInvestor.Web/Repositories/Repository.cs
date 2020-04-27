using System;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public abstract class Repository<T>
    {
        protected readonly LazyInvestorDbContext Context;

        protected Repository(LazyInvestorDbContext context)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
        }
    }
}