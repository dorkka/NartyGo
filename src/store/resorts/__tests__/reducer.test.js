import resortsReducer from '../reducer';
import * as types from '../types';
import { resorts } from '../../../specs/fixtures/resorts';

describe('resortsReducer', () => {
  const initialState = {
    byId: {},
    list: [],
    pageCount: 1,
    isLoading: false,
    error: null,
  };

  test('should return inital state when resortsReducer is called with default params', () => {
    expect(resortsReducer(undefined, {})).toEqual(initialState);
  });

  // using snapshot
  test('should return appropriate state when action type is SET_RESORTS', () => {
    const byId = {
      [resorts[0].id]: resorts[0],
      [resorts[1].id]: resorts[1],
    };
    const action = {
      type: types.SET_RESORTS,
      payload: {
        pageCount: 5,
        list: [1, 2],
        byId,
      },
    };
    expect(resortsReducer(initialState, action)).toMatchSnapshot();
  });

  // using toEqual();
  test('should return appropriate state when action type is SET_RESORT', () => {
    const byId = {
      [resorts[0].id]: resorts[0],
    };
    const action = {
      type: types.SET_RESORT,
      payload: {
        byId,
      },
    };
    const newState = {
      byId,
      list: [],
      pageCount: 1,
      isLoading: false,
      error: null,
    };
    expect(resortsReducer(initialState, action)).toEqual(newState);
  });

  test('should return appropriate state when action type is SET_ERROR', () => {
    expect(resortsReducer(initialState, { type: types.SET_ERROR, error: { mesage: 'test error' } })).toMatchSnapshot();
  });

  test('should return state with truthy isLoading when action type is IS_LOADING', () => {
    expect(resortsReducer(initialState, { type: types.IS_LOADING })).toMatchSnapshot();
  });
});
