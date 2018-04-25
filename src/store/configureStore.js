import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import resorts from './resorts/reducer';

const rootReducer = combineReducers({
  resorts,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
