import carouselReducer, { CAROUSEL_FETCHED, RESET_CAROUSEL } from '../../redux/carousel/carousel';

describe('Testing Carousel Reducer', () => {
  test('should return initial state', () => {
    expect(carouselReducer(undefined, {})).toStrictEqual([]);
  });

  test('should return carousel passed in actions', () => {
    const previousState = [];
    const carousel = [
      'url1',
      'url2',
    ];
    const newState = carouselReducer(previousState, { type: CAROUSEL_FETCHED, carousel });

    expect(newState).toStrictEqual(carousel);
  });

  test('should return empty array', () => {
    const previousState = [
      'url1',
      'url2',
    ];
    const expectedState = [];
    const newState = carouselReducer(previousState, { type: RESET_CAROUSEL });

    expect(newState).toStrictEqual(expectedState);
  });
});
