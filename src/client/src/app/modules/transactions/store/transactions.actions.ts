import { Action } from '@ngrx/store';

import { Transaction } from './transactions.model';

export const FETCH_TRANSACTIONS = '[Transactions] Fetch Transactions';
export const SET_TRANSACTIONS = '[Transactions] Set Transactions';
export const SET_TRANSACTION = '[Transactions] Set Transaction';

export const ADD_TRANSACTION = '[Transactions] Add Transaction';
export const UPDATE_TRANSACTION = '[Transactions] Update Transaction';
export const UPDATED_TRANSACTION = '[Transactions] Updated Transaction';
export const DELETE_TRANSACTION = '[Transactions] Delete Transaction';
export const DELETED_TRANSACTION = '[Transactions] Deleted Transaction';

export const STORE_TRANSACTIONS = '[Transactions] Store Transactions';

export class SetTransactions implements Action {
  readonly type = SET_TRANSACTIONS;

  constructor(public payload: Transaction[]) { }
}

export class SetTransaction implements Action {
  readonly type = SET_TRANSACTION;

  constructor(public payload: Transaction) { }
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

  constructor(public payload: { index: number; updatedTransaction: Transaction }) { }
}

export class UpdatedTransaction implements Action {
  readonly type = UPDATED_TRANSACTION;

  constructor(public payload: Transaction) { }
}

export class DeleteTransaction implements Action {
  readonly type = DELETE_TRANSACTION;

  constructor(public payload: number) { }
}

export class DeletedTransaction implements Action {
  readonly type = DELETED_TRANSACTION;

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
  | UpdatedTransaction
  | DeleteTransaction
  | DeletedTransaction
  | StoreTransactions
  | SetTransaction;
