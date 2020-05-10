using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheLazyInvestor.Db;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Web.Repositories
{
    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(LazyInvestorDbContext context) : base(context)
        {
        }

        public override async Task<IEnumerable<Transaction>> GetAllAsync()
            => await Context.Set<Transaction>().Include(x => x.Portfolio).ToListAsync();

        public override async Task<Transaction> GetOneAsync(Expression<Func<Transaction, bool>> filter)
            => await Context.Set<Transaction>().Where(filter).Include(x => x.Portfolio).FirstOrDefaultAsync();
    }
}