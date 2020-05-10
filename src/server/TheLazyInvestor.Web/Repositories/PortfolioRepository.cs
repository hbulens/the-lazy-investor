using TheLazyInvestor.Db;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Web.Repositories
{
    public class PortfolioRepository : Repository<Portfolio>, IPortfolioRepository
    {
        public PortfolioRepository(LazyInvestorDbContext context) : base(context)
        {
        }
    }
}