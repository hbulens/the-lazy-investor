namespace TheLazyInvestor.Entities
{
    public interface IRepository<T> : IQueryRepository<T>, ICommandRepository<T>
    {
    }
}