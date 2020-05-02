import { Action } from '@ngrx/store';

import { Portfolio } from './portfolios.model';

export const FETCH_PORTFOLIOS = '[Portfolios] Fetch Portfolios';
export const SET_PORTFOLIOS = '[Portfolios] Set Portfolios';
export const SET_PORTFOLIO = '[Portfolios] Set Portfolio';

export const ADD_PORTFOLIO = '[Portfolios] Add Portfolio';
export const ADDED_PORTFOLIO = '[Portfolios] Added Portfolio';
export const UPDATE_PORTFOLIO = '[Portfolios] Update Portfolio';
export const UPDATED_PORTFOLIO = '[Portfolios] Updated Portfolio';
export const DELETE_PORTFOLIO = '[Portfolios] Delete Portfolio';
export const DELETED_PORTFOLIO = '[Portfolios] Deleted Portfolio';

export const STORE_PORTFOLIOS = '[Portfolios] Store Portfolios';

export class SetPortfolios implements Action {
  readonly type = SET_PORTFOLIOS;

  constructor(public payload: Portfolio[]) { }
}

export class SetPortfolio implements Action {
  readonly type = SET_PORTFOLIO;

  constructor(public payload: Portfolio) { }
}

export class FetchPortfolios implements Action {
  readonly type = FETCH_PORTFOLIOS;
}

export class AddPortfolio implements Action {
  readonly type = ADD_PORTFOLIO;

  constructor(public payload: Portfolio) { }
}

export class AddedPortfolio implements Action {
  readonly type = ADDED_PORTFOLIO;

  constructor(public payload: Portfolio) { }
}

export class UpdatePortfolio implements Action {
  readonly type = UPDATE_PORTFOLIO;

  constructor(public payload: { index: number; updatedPortfolio: Portfolio }) { }
}

export class UpdatedPortfolio implements Action {
  readonly type = UPDATED_PORTFOLIO;

  constructor(public payload: Portfolio) { }
}

export class DeletePortfolio implements Action {
  readonly type = DELETE_PORTFOLIO;

  constructor(public payload: number) { }
}

export class DeletedPortfolio implements Action {
  readonly type = DELETED_PORTFOLIO;

  constructor(public payload: number) { }
}

export class StorePortfolios implements Action {
  readonly type = STORE_PORTFOLIOS;
}

export type PortfoliosActions =
  | SetPortfolios
  | SetPortfolio
  | FetchPortfolios
  | AddPortfolio
  | AddedPortfolio
  | UpdatePortfolio
  | UpdatedPortfolio
  | DeletePortfolio
  | DeletedPortfolio
  | StorePortfolios;
