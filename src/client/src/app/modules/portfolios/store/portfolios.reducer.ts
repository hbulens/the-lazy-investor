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

    case PortfolioActions.SET_PORTFOLIO:
      return state;

    case PortfolioActions.ADD_PORTFOLIO:
      return state;

    case PortfolioActions.ADDED_PORTFOLIO:
      return {
        ...state,
        portfolios: [action.payload, ...state.portfolios]
      };
    case PortfolioActions.UPDATE_PORTFOLIO:
      return state;
    case PortfolioActions.UPDATED_PORTFOLIO:
      const portfolios = [...state.portfolios];
      const updatedItemIndex = state.portfolios.findIndex(x => x.id === action.payload.id);

      if (updatedItemIndex > -1) {
        portfolios[updatedItemIndex] = action.payload;
      }

      return {
        ...state,
        portfolios
      };
    case PortfolioActions.DELETE_PORTFOLIO:
      return state;
    case PortfolioActions.DELETED_PORTFOLIO:
      return {
        ...state,
        portfolios: state.portfolios.filter(portfolio => portfolio.id !== action.payload)
      };
    default:
      return state;
  }
}
