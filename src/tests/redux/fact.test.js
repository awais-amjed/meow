import factReducer, { FACT_FETCHED } from '../../redux/fact/fact';

describe('Testing Fact Reducer', () => {
  test('should return initial state', () => {
    expect(factReducer(undefined, {})).toStrictEqual('');
  });

  test('should return fact passed in actions', () => {
    const previousState = '';
    const fact = 'Test fact';
    const newState = factReducer(previousState, { type: FACT_FETCHED, fact });

    expect(newState).toStrictEqual(fact);
  });
});
