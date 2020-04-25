import { Action, createReducer, on } from '@ngrx/store';

export interface State {
  transactions: Array<any>;
}

export const initialState: State = {
  transactions: [1, 2, 3]
};


export function transactionsReducer(state: State = initialState, action: any) {
  return {
    ...state
  };
}
