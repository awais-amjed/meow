import TheCatApi from '../../api/TheCatApi';

const BREEDS_FETCHED = 'BREEDS_FETCHED';
const CAROUSEL_FETCHED = 'CAROUSEL_FETCHED';

const fetchBreeds = () => async (dispatch) => {
  const breeds = await TheCatApi.getAllBreeds();

  if (breeds) {
    dispatch({
      type: BREEDS_FETCHED,
      breeds,
    });
  } else {
    // TODO Handle Error
  }
};

const fetchCarousel = ({ id }) => async (dispatch) => {
  const carousel = await TheCatApi.getCarouselForBreed({ breedID: id });

  if (carousel) {
    dispatch({
      type: CAROUSEL_FETCHED,
      id,
      carousel,
    });
  } else {
    // TODO Handle Error
  }
};

const breeds = (state = [], actions) => {
  switch (actions.type) {
    case BREEDS_FETCHED:
      return actions.breeds;
    case CAROUSEL_FETCHED:
      return state.map((breed) => {
        if (breed.id === actions.id) {
          return {
            ...breed,
            carousel: actions.carousel,
          };
        }
        return breed;
      });
    default:
      return state;
  }
};

export {
  breeds as default,
  fetchBreeds,
  fetchCarousel,
};
