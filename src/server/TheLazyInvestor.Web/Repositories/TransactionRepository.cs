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
            => await Context.Transactions.ToListAsync();

        public async Task<Transaction> CreateAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = await Context.Transactions.AddAsync(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Transaction> UpdateAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = Context.Transactions.Update(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<Transaction> DeleteAsync(Transaction entity)
        {
            EntityEntry<Transaction> newEntity = Context.Transactions.Remove(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }
    }
}