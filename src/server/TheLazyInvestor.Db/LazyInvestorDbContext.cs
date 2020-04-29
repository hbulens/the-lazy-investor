using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Infrastructure
{
    public sealed class LazyInvestorDbContext : DbContext
    {
        public LazyInvestorDbContext(DbContextOptions<LazyInvestorDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn);
            modelBuilder.ApplyConfiguration(new PortfolioConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());
        }
    }
}