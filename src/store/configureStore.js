import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import resorts from './resorts/reducer';
import weather from './weather/reducer';

const rootReducer = combineReducers({
  resorts,
  weather,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
