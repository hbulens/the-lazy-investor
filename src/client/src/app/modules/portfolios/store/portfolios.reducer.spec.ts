import { portfoliosReducer, initialState } from './portfolios.reducer';

describe('Portfolios Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = portfoliosReducer(initialState, action);
      expect(result.portfolios).toBe(initialState.portfolios);
    });
  });
});
