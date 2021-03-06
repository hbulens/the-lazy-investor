# The Lazy Investor

![Build develop](https://img.shields.io/circleci/build/gh/hbulens/the-lazy-investor/develop?label=Build%20develop&token=fd9380b60e11d27b81f960c64177fdf0c83967ff) ![Build master](https://img.shields.io/circleci/build/gh/hbulens/the-lazy-investor/master?label=Build%20master&token=fd9380b60e11d27b81f960c64177fdf0c83967ff)

**The Lazy Investor**  is an investment portfolio management application for the average Joe who intends to hold his assets for a long time 📈.

## About the project

With interest rates at an all-time low, putting your money on a savings account doesn't hold water any longer. Fortunately, there are many alternatives. Some may prefer an active investment strategy and will try to beat the market, where others may favor a passive strategy for whatever reason they may have.

As the name suggests, **The Lazy Investor** aims to address the second group, who are only interested in the very long term. This implies that this type of investor holds a limited amount of instruments for several years or even decades. They are not phased by sudden drops or spikes of a stock as long as there is no reason to dump it. Basically, they follow the principles of great investors like Jack Bogle, Warren Buffett or Benjamin Graham. The Lazy Investor was created for this purpose. There are no fancy stock tickers with push notifications because that would lead to an information overload and short-sighted interventions. Instead, it is an easy to use application with just enough features to have a clear overview of your portfolios.

## Screenshots

Login with social accounts:

![Login](docs/assets/the-lazy-investor-4.png)

The dashboard:

![Dashboard](docs/assets/the-lazy-investor.png)

Managing portfolios:

![Portfolios](docs/assets/the-lazy-investor-2.png)

Managing transactions:

![Transactions](docs/assets/the-lazy-investor-3.png)

## Getting Started

This application is split into two distinct areas. Unsurprisingly, there's a front-end and a back-end attached to the lazy investor.

The front-end application is a simple Angular application. We recommend to use **yarn** as the package manager.

The back-end system is a ASP.NET Core 3.x solution. It is recommended to have Visual Studio 2019 Community or higher.

To run the server, run the command `dotnet run` for the web project.
To run the client, execute the command `yarn start`.

To connect the two applications, make sure the configuration is set correctly:

appsettings.json:
``` json
{     
  "AllowedOrigins": [
    "http://localhost:4200"
  ]
}
```

environment.xxx.ts:

```typescript
export const environment = {
  api:  {
    url: "https://localhost:44350"
  }
};
```

## Running the tests

Run `dotnet test` for the server app and `yarn test` for the client app.

## Deployment

Run `dotnet publish` for the server app and `yarn build` for the client app

## Built With

The client application is built with a standard Angular 9 app, supported by libraries such as Angular Material and ngrx.

The server application is built on top of the ASP.NET Core framework. It is primarily used to serve RESTful web services. Entity Framework is used as the ORM to query and manipulate data in a PostgreSQL database. For this project, the mediator pattern is used to link web requests to the back-end services.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update the tests as appropriate.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
