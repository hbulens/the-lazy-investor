import { map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as PortfoliosActions from './portfolios.actions';
import { Portfolio } from './portfolios.model';

@Injectable()
export class PortfoliosEffects {

  @Effect()
  fetchPortfolios = this.actions$.pipe(
    ofType(PortfoliosActions.FETCH_PORTFOLIOS),
    switchMap(() => this.http.get<Portfolio[]>('https://jsonplaceholder.typicode.com/users')),
    map(transactions => new PortfoliosActions.SetPortfolios(transactions))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}
