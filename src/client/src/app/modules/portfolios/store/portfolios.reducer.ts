import * as PortfolioActions from './portfolios.actions';
import { Portfolio } from './portfolios.model';

export interface State {
  portfolios: Array<Portfolio>;
}

export const initialState: State = {
  portfolios: []
};

export function portfoliosReducer(state: State = initialState, action: PortfolioActions.PortfoliosActions) {
  switch (action.type) {
    case PortfolioActions.SET_PORTFOLIOS:
      return {
        ...state,
        portfolios: [...action.payload]
      };
    case PortfolioActions.ADD_PORTFOLIO:
      return {
        ...state,
        portfolios: [...state.portfolios, action.payload]
      };
    case PortfolioActions.UPDATE_PORTFOLIO:
      const updatedPortfolio = {
        ...state.portfolios[action.payload.index],
        ...action.payload.newPortfolio
      };

      const updatedPortfolios = [...state.portfolios];
      updatedPortfolios[action.payload.index] = updatedPortfolio;

      return {
        ...state,
        portfolios: updatedPortfolios
      };
    case PortfolioActions.DELETE_PORTFOLIO:
      return {
        ...state,
        portfolios: state.portfolios.filter((portfolio, index) => index !== action.payload)
      };
    default:
      return state;
  }
}
