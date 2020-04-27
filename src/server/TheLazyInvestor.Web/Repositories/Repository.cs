using System;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public abstract class Repository<T>
    {
        protected readonly LazyInvestorDbContext _context;

        protected Repository(LazyInvestorDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
    }
}