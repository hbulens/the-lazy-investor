import { transactionsReducer, initialState, State } from './transactions.reducer';

describe('Transactions Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = transactionsReducer(initialState, action);

      expect(result.transactions).toBe(initialState.transactions);
    });
  });
});
