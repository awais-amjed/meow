import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import factReducer from './fact/fact';
import breedsReducer from './breeds/breedsReducer';
import carouselReducer from './carousel/carousel';

const rootReducer = combineReducers({
  breeds: breedsReducer,
  carousel: carouselReducer,
  fact: factReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
