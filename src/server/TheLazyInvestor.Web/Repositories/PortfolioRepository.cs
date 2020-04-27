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
            => await _context.Portfolios.ToListAsync();

        public async Task<Portfolio> CreateAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity = await _context.Portfolios.AddAsync(entity);
            return newEntity.Entity;
        }

        public async Task<Portfolio> UpdateAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity =  _context.Portfolios.Update(entity);
            await _context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Portfolio> DeleteAsync(Portfolio entity)
        {
            EntityEntry<Portfolio> newEntity = _context.Portfolios.Remove(entity);
            await _context.SaveChangesAsync();
            return newEntity.Entity;
        }
    }
}
