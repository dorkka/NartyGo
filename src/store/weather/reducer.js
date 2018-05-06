import * as types from './types';

const initialState = {
  currentWeather: {},
  isLoading: false,
  error: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_WEATHER: {
      return {
        ...state,
        currentWeather: { ...action.payload.data },
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
