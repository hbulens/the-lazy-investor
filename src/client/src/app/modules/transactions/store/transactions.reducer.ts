import * as TransactionActions from './transactions.actions';
import { Transaction } from './transactions.model';

export interface State {
  transactions: Array<Transaction>;
}

export const initialState: State = {
  transactions: []
};

export function transactionsReducer(state: State = initialState, action: TransactionActions.TransactionsActions) {
  switch (action.type) {
    case TransactionActions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: [...action.payload]
      };
    case TransactionActions.SET_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case TransactionActions.UPDATED_TRANSACTION:
      const transactions = [...state.transactions];
      const updatedItemIndex = state.transactions.findIndex(x => x.id === action.payload.id);

      if (updatedItemIndex > -1) {
        transactions[updatedItemIndex] = action.payload;
      }

      return {
        ...state,
        transactions
      };
    case TransactionActions.DELETED_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    default:
      return state;
  }
}
