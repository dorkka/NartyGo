import * as types from './types';

const initialState = {
  byId: {},
  list: [],
  pageCount: 1,
  isLoading: false,
  error: null,
  resortsOptions: [],
  cityOptions: [],
};

function resortsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_RESORTS: {
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload.byId,
        },
        list: action.payload.list,
        pageCount: action.payload.pageCount,
        isLoading: false,
      };
    }
    case types.SET_RESORT: {
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload.byId,
        },
        isLoading: false,
      };
    }
    case types.SET_SELECTED_OPTIONS:
    {
      return {
        ...state,
        resortsOptions: action.payload.resortsOptions,
        cityOptions: action.payload.cityOptions,
        isLoading: false,
      }
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
export default resortsReducer;
