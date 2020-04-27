using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TheLazyInvestor.Entities;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public class PortfolioRepository : Repository<Transaction>, IPortfolioRepository
    {
        public PortfolioRepository(LazyInvestorDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Portfolio>> GetAllAsync()
            => await Context.Portfolios.ToListAsync();

        public async Task<Portfolio> CreateAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity = await Context.Portfolios.AddAsync(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Portfolio> UpdateAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity =  Context.Portfolios.Update(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Portfolio> DeleteAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity = Context.Portfolios.Remove(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }
    }
}
