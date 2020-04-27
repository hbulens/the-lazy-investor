using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TheLazyInvestor.Entities;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(LazyInvestorDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Transaction>> GetAllAsync()
            => await _context.Transactions.ToListAsync();

        public async Task<Transaction> CreateAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = await _context.Transactions.AddAsync(entity);
            return newEntity.Entity;
        }

        public async Task<Transaction> UpdateAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = _context.Transactions.Update(entity);
            await _context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Transaction> DeleteAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = _context.Transactions.Remove(entity);
            await _context.SaveChangesAsync();
            return newEntity.Entity;
        }
    }
}