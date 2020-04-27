import { Action } from '@ngrx/store';

import { Portfolio } from './portfolios.model';

export const FETCH_PORTFOLIOS = '[Portfolios] Fetch Portfolios';
export const SET_PORTFOLIOS = '[Portfolios] Set Portfolios';

export const ADD_PORTFOLIO = '[Portfolios] Add Portfolio';
export const UPDATE_PORTFOLIO = '[Portfolios] Update Portfolio';
export const DELETE_PORTFOLIO = '[Portfolios] Delete Portfolio';

export const STORE_PORTFOLIOS = '[Portfolios] Store Portfolios';

export class SetPortfolios implements Action {
  readonly type = SET_PORTFOLIOS;

  constructor(public payload: Portfolio[]) { }
}

export class FetchPortfolios implements Action {
  readonly type = FETCH_PORTFOLIOS;
}

export class AddPortfolio implements Action {
  readonly type = ADD_PORTFOLIO;

  constructor(public payload: Portfolio) { }
}

export class UpdatePortfolio implements Action {
  readonly type = UPDATE_PORTFOLIO;

  constructor(public payload: { index: number; newPortfolio: Portfolio }) { }
}

export class DeletePortfolio implements Action {
  readonly type = DELETE_PORTFOLIO;

  constructor(public payload: number) { }
}

export class StorePortfolios implements Action {
  readonly type = STORE_PORTFOLIOS;
}

export type PortfoliosActions =
  | SetPortfolios
  | FetchPortfolios
  | AddPortfolio
  | UpdatePortfolio
  | DeletePortfolio
  | StorePortfolios;
