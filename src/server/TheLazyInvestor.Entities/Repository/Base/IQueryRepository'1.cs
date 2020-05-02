using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TheLazyInvestor.Entities
{
    public interface IQueryRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();

        Task<T> GetOneAsync(Expression<Func<T, bool>> filter);
    }
}