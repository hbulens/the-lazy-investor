import { Action, createReducer, on } from '@ngrx/store';

export interface State {

}

export const initialState: State = {

};

export function portfoliosReducer(state: State = initialState, action: any) {
  return {
    ...state
  };
}

