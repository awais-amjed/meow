import TheCatApi from '../../api/TheCatApi';

const BREEDS_FETCHED = 'BREEDS_FETCHED';

const fetchBreeds = () => async (dispatch) => {
  const breeds = await TheCatApi.getAllBreeds();

  dispatch({
    type: BREEDS_FETCHED,
    breeds,
  });
};

const breedsReducer = (state = [], actions) => {
  switch (actions.type) {
    case BREEDS_FETCHED:
      return actions.breeds;
    default:
      return state;
  }
};

export {
  breedsReducer as default,
  fetchBreeds,
};
