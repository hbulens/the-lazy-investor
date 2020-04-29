import { map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as TransactionsActions from './transactions.actions';
import { Transaction } from './transactions.model';

@Injectable()
export class TransactionsEffects {

  @Effect()
  fetchTransactions = this.actions$.pipe(
    ofType(TransactionsActions.FETCH_TRANSACTIONS),
    switchMap(() => this.http.get<Transaction[]>('https://jsonplaceholder.typicode.com/users')),
    map(transactions => new TransactionsActions.SetTransactions(transactions))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}
