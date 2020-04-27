using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheLazyInvestor.Entities
{
    public interface IQueryRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();
    }
}