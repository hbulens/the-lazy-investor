
export interface State {
  portfolios: Array<any>;
}

export const initialState: State = {
  portfolios: [1, 2, 3]
};

export function portfoliosReducer(state: State = initialState, action: any) {
  return {
    ...state
  };
}

