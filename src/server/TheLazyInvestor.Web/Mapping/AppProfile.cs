using AutoMapper;
using TheLazyInvestor.Entities;

namespace TheLazyInvestor.Web
{
    public class AppProfile : Profile
    {
        public AppProfile()
        {
            CreateMap<Portfolio, Core.Model.Portfolio>().ReverseMap();
            CreateMap<Transaction, Core.Model.Transaction>().ReverseMap().ForMember(x => x.Portfolio, y => y.Ignore());
        }
    }
}