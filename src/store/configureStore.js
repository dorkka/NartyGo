import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import resorts from './resorts/reducer';

const rootReducer = combineReducers({
  resorts,
});

// const initialState = {};

export default createStore(
  rootReducer,
  composeWithDevTools(),
);
