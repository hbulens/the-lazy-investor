using System;
using Microsoft.EntityFrameworkCore;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Infrastructure
{
    public class LazyInvestorDbContext : DbContext
    {
        public LazyInvestorDbContext(DbContextOptions<LazyInvestorDbContext> options) : base(options)
        {

        }

        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PortfolioConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());
        }
    }
}
