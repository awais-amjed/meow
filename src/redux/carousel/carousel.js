import TheCatApi from '../../api/TheCatApi';

const CAROUSEL_FETCHED = 'CAROUSEL_FETCHED';
const RESET_CAROUSEL = 'RESET_CAROUSEL';

const fetchCarousel = ({ id }) => async (dispatch) => {
  const carousel = await TheCatApi.getCarouselForBreed({ breedID: id });

  dispatch({
    type: CAROUSEL_FETCHED,
    carousel,
  });
};

const resetCarousel = () => ({
  type: RESET_CAROUSEL,
});

const carouselReducer = (state = [], actions) => {
  switch (actions.type) {
    case CAROUSEL_FETCHED:
      return actions.carousel;
    case RESET_CAROUSEL:
      return [];
    default:
      return state;
  }
};

export {
  carouselReducer as default,
  fetchCarousel,
  resetCarousel,
};
