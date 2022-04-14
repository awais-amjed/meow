import MeowFactApi from '../../api/MeowFactApi';

const FACT_FETCHED = 'FACT_FETCHED';

const fetchMeowFact = () => async (dispatch) => {
  const fact = await MeowFactApi.getMeowFact();

  dispatch({
    type: FACT_FETCHED,
    fact,
  });
};

const factReducer = (state = '', actions) => {
  switch (actions.type) {
    case FACT_FETCHED:
      return actions.fact;
    default:
      return state;
  }
};

export {
  factReducer as default,
  fetchMeowFact,
};
