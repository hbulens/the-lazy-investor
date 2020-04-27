using System.Threading.Tasks;

namespace TheLazyInvestor.Entities
{
    public interface ICommandRepository<T>
    {
        Task<T> CreateAsync(T entity);

        Task<T> UpdateAsync(T entity);

        Task<T> DeleteAsync(T entity);
    }
}