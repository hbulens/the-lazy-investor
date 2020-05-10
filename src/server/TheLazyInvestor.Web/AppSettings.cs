namespace TheLazyInvestor.Web
{
    public class Authentication
    {
        public string FacebookClientId { get; set; }
        public string FacebookClientSecret { get; set; }
        public string GoogleClientId { get; set; }
        public string GoogleClientSecret { get; set; }

    }
    public class AppSettings
    {
        public string[] AllowedOrigins { get; set; }
        public Authentication Authentication { get; set; }
    }
}