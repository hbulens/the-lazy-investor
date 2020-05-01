import { map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import { TransactionsService } from '../transactions.service';
import * as TransactionsActions from './transactions.actions';
import { AddTransaction, UpdateTransaction, DeleteTransaction } from './transactions.actions';
import { Transaction } from './transactions.model';

@Injectable()
export class TransactionsEffects {
  @Effect()
  fetchTransactions = this.actions$.pipe(
    ofType(TransactionsActions.FETCH_TRANSACTIONS),
    switchMap(() => this.service.fetch()),
    map(transactions => new TransactionsActions.SetTransactions(transactions))
  );

  @Effect()
  createTransaction = this.actions$.pipe(
    ofType(TransactionsActions.ADD_TRANSACTION),
    switchMap((action: AddTransaction) => this.service.create(action.payload)),
    map(transaction => new TransactionsActions.SetTransaction(transaction))
  );

  @Effect()
  updateTransaction = this.actions$.pipe(
    ofType(TransactionsActions.UPDATE_TRANSACTION),
    switchMap((action: UpdateTransaction) => this.service.update(action.payload.updatedTransaction)),
    map(transaction => new TransactionsActions.SetTransaction(transaction))
  );

  @Effect()
  deleteTransaction = this.actions$.pipe(
    ofType(TransactionsActions.DELETE_TRANSACTION),
    switchMap((action: DeleteTransaction) => this.service.delete(new Transaction(action.payload, '', null, null, null))),
    map(transaction => new TransactionsActions.SetTransaction(transaction))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private service: TransactionsService
  ) { }
}
