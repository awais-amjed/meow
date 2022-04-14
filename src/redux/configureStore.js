import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import factReducer from './fact/fact';
import breedsReducer from './breeds/breedsReducer';

const rootReducer = combineReducers({
  breeds: breedsReducer,
  fact: factReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
