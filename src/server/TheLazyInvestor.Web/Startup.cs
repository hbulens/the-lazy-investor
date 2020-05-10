using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using TheLazyInvestor.Core;
using TheLazyInvestor.Entities;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web
{
    /// <summary>
    /// 
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// 
        /// </summary>
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<AppSettings>(Configuration);
            AppSettings appSettings = (AppSettings)Configuration.Get(typeof(AppSettings));

            services.AddControllers();
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("Client application",
                    configurePolicy => configurePolicy
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins(appSettings.AllowedOrigins)
                        .AllowCredentials());
            });

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<LazyInvestorDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthentication(options =>
            {
                options.DefaultSignOutScheme = IdentityConstants.ApplicationScheme;
            })
                .AddGoogle("Google", options =>
            {
                options.CallbackPath = new PathString("/google-callback");
                options.ClientId = appSettings.Authentication.GoogleClientId;
                options.ClientSecret = appSettings.Authentication.GoogleClientSecret;
            }).AddFacebook("Facebook", options =>
            {
                options.CallbackPath = new PathString("/facebook-callback");
                options.ClientId = appSettings.Authentication.FacebookClientId;
                options.ClientSecret = appSettings.Authentication.FacebookClientSecret;
            });

            services.AddDbContext<LazyInvestorDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("LazyInvestorContext")));
            services.AddAutoMapper(typeof(Startup));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "The Lazy Investor API",
                    Description = "The APIs to manage your portfolio",
                    Contact = new OpenApiContact
                    {
                        Name = "Hendrik Bulens",
                        Email = string.Empty,
                        Url = new Uri("https://github.com/hbulens"),
                    },
                    License = new OpenApiLicense
                    {
                        Name = "MIT",
                        Url = new Uri("https://opensource.org/licenses/MIT"),
                    }
                });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            services.AddMediatR(typeof(CreatePortfolioCommand));

            services.Scan(scan => scan
                .FromAssemblyOf<Startup>()
                .AddClasses(classes => classes.AssignableTo(typeof(IRepository<>)))
                .AsImplementedInterfaces()
                .WithTransientLifetime());
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="appSettings"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IOptions<AppSettings> appSettings)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "The Lazy Investor API V1");
            });

            app.UseCors("Client application");
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireAuthorization();
            });
        }
    }
}