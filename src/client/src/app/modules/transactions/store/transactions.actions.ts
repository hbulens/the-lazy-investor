import { Action } from '@ngrx/store';

import { Transaction } from './transactions.model';

export const FETCH_TRANSACTIONS = '[Transactions] Fetch Transactions';
export const SET_TRANSACTIONS = '[Transactions] Set Transactions';

export const ADD_TRANSACTION = '[Transactions] Add Transaction';
export const UPDATE_TRANSACTION = '[Transactions] Update Transaction';
export const DELETE_TRANSACTION = '[Transactions] Delete Transaction';

export const STORE_TRANSACTIONS = '[Transactions] Store Transactions';

export class SetTransactions implements Action {
  readonly type = SET_TRANSACTIONS;

  constructor(public payload: Transaction[]) { }
}

export class FetchTransactions implements Action {
  readonly type = FETCH_TRANSACTIONS;
}

export class AddTransaction implements Action {
  readonly type = ADD_TRANSACTION;

  constructor(public payload: Transaction) { }
}

export class UpdateTransaction implements Action {
  readonly type = UPDATE_TRANSACTION;

  constructor(public payload: { index: number; newTransaction: Transaction }) { }
}

export class DeleteTransaction implements Action {
  readonly type = DELETE_TRANSACTION;

  constructor(public payload: number) { }
}

export class StoreTransactions implements Action {
  readonly type = STORE_TRANSACTIONS;
}

export type TransactionsActions =
  | SetTransactions
  | FetchTransactions
  | AddTransaction
  | UpdateTransaction
  | DeleteTransaction
  | StoreTransactions;
