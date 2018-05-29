import * as selectors from '../selectors';
import { resorts } from '../../../specs/fixtures/resorts';

describe('selectors', () => {
  const state = {
    resorts: {
      byId: {
        [resorts[0].id]: resorts[0],
        [resorts[1].id]: resorts[1],
      },
      list: [1, 2],
      pageCount: 1,
      isLoading: false,
      error: null,
    },
  };
  const intialState = {
    resorts: {
      byId: {},
      list: [],
      pageCount: 1,
      isLoading: false,
      error: null,
    },
  };

  describe('getCurrentResort', () => {
    test('should return current resorts when resorts in state', () => {
      expect(selectors.getCurrentResorts(state)).toMatchSnapshot();
    });
    test('should return empty array when no resots in state', () => {
      expect(selectors.getCurrentResorts(intialState)).toEqual([]);
    });
  });

  describe('getSpecificResort', () => {
    test('should return resort when it is in state', () => {
      expect(selectors.getSpecificResort(state, 2)).toMatchSnapshot();
    });
    test('should return empty object when no resort in state', () => {
      expect(selectors.getSpecificResort(state, 6)).toEqual({ weather: {}, piste: [] });
    });
  });
});

