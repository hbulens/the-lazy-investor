using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheLazyInvestor.Entities;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(LazyInvestorDbContext context) : base(context)
        {
        }

        public override async Task<IEnumerable<Transaction>> GetAllAsync()
            => await Context.Set<Transaction>().Include(x => x.Portfolio).ToListAsync();
    }
}