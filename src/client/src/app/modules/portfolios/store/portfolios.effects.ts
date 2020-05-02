import { map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import { PortfoliosService } from '../portfolios.service';
import * as PortfoliosActions from './portfolios.actions';
import { AddPortfolio, UpdatePortfolio, DeletePortfolio } from './portfolios.actions';
import { Portfolio } from './portfolios.model';

@Injectable()
export class PortfoliosEffects {
  @Effect()
  fetchPortfolios = this.actions$.pipe(
    ofType(PortfoliosActions.FETCH_PORTFOLIOS),
    switchMap(() => this.service.fetch()),
    map(transactions => new PortfoliosActions.SetPortfolios(transactions))
  );

  @Effect()
  createPortfolio = this.actions$.pipe(
    ofType(PortfoliosActions.ADD_PORTFOLIO),
    switchMap((action: AddPortfolio) => this.service.create(action.payload)),
    map(transaction => new PortfoliosActions.AddedPortfolio(transaction))
  );

  @Effect()
  updatePortfolio = this.actions$.pipe(
    ofType(PortfoliosActions.UPDATE_PORTFOLIO),
    switchMap((action: UpdatePortfolio) => this.service.update(action.payload.updatedPortfolio)),
    map(portfolio => new PortfoliosActions.UpdatedPortfolio(portfolio))
  );

  @Effect()
  deletePortfolio = this.actions$.pipe(
    ofType(PortfoliosActions.DELETE_PORTFOLIO),
    switchMap((action: DeletePortfolio) => this.service.delete(new Portfolio(action.payload, ''))),
    map(portfolio => new PortfoliosActions.DeletedPortfolio(portfolio.id))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private service: PortfoliosService
  ) { }
}
