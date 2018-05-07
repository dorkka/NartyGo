import * as types from './types';

const initialState = {
  byId: {},
  weatherTime: 0,
  isLoading: false,
  error: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_WEATHER: {
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload.byId,
        },
        weatherTime: action.meta.weatherTime,
        isLoading: false,
      };
    }
    case types.SET_ERROR: {
      return { ...state, error: action.error };
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
