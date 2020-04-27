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
    case TransactionActions.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case TransactionActions.UPDATE_TRANSACTION:
      const updatedRecipe = {
        ...state.transactions[action.payload.index],
        ...action.payload.newTransaction
      };

      const updatedRecipes = [...state.transactions];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        transactions: updatedRecipes
      };
    case TransactionActions.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction, index) => index !== action.payload)
      };
    default:
      return state;
  }
}
