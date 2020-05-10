using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Db
{
    public sealed class LazyInvestorDbContext : IdentityDbContext
    {
        private readonly ITenantProvider _tenantProvider;
        internal string TenantId => _tenantProvider.GetTenantId();

        public LazyInvestorDbContext(DbContextOptions<LazyInvestorDbContext> options, ITenantProvider tenantProvider) : base(options)
        {
            Database.EnsureCreated();
            _tenantProvider = tenantProvider;
        }


        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn);
            modelBuilder.ApplyConfiguration(new PortfolioConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());

            modelBuilder.Entity<Transaction>().Property(x => x.TenantId).HasValueGenerator<TenantIdValueGenerator>();
            modelBuilder.Entity<Transaction>().HasQueryFilter(x => x.TenantId == TenantId);

            modelBuilder.Entity<Portfolio>().HasQueryFilter(x => x.TenantId == TenantId);
            modelBuilder.Entity<Portfolio>().Property(x => x.TenantId).HasValueGenerator<TenantIdValueGenerator>();
        }
    }
}