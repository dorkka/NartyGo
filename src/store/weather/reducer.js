import * as types from './types';

const initialState = {
  currentWeather: {},
  weatherTime: 0,
  isLoading: false,
  error: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_WEATHER: {
      return {
        ...state,
        currentWeather: { ...action.payload.data },
        weatherTime: action.payload.weatherTime,
        isLoading: false,
      };
    }
    case types.SET_ERROR: {
      return { ...state, error: action.payload.error };
    }
    case types.IS_LOADING: {
      return { ...state, isLoading: true };
    }
    default: {
      return state;
    }
  }
}
export default weatherReducer;
