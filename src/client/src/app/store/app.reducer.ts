import { ActionReducerMap } from '@ngrx/store';
import * as fromPortfolios from '../modules/portfolios/store/portfolios.reducer';
import * as fromTransactions from '../modules/transactions/store/transactions.reducer';

export const appFeatureKey = 'app';

export interface AppState {
  portfolios: fromPortfolios.State;
  transactions: fromTransactions.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  portfolios: fromPortfolios.portfoliosReducer,
  transactions: fromTransactions.transactionsReducer,
};
