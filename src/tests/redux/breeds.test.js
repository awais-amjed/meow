import breedsReducer, { BREEDS_FETCHED } from '../../redux/breeds/breedsReducer';

describe('Testing Cat Breeds Reducer', () => {
  test('should return initial state', () => {
    expect(breedsReducer(undefined, {})).toStrictEqual([]);
  });

  test('should return breeds passed in actions', () => {
    const previousState = [];
    const breeds = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing breeds fetched',
    }];
    const newState = breedsReducer(previousState, { type: BREEDS_FETCHED, breeds });

    expect(newState).toStrictEqual(breeds);
  });
});
