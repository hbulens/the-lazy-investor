using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Infrastructure
{
    public class PortfolioConfiguration : IEntityTypeConfiguration<Portfolio>
    {
        public void Configure(EntityTypeBuilder<Portfolio> builder)
        {
            builder.ToTable("portfolio");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name);

            builder.HasMany(x => x.Transactions).WithOne(x => x.Portfolio).HasForeignKey(x => x.PortfolioId);
        }
    }
}