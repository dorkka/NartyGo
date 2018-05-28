import fetchMock from 'fetch-mock';
import * as actionCreators from '../actionCreators';
import { resorts } from '../../../specs/fixtures/resorts';

describe('getResorts', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should call setIsLoading when dispatch was called first time', () => {
    const dispatch = jest.fn();
    actionCreators.getResorts('1', 4)(dispatch);
    expect(dispatch.mock.calls[0]).toMatchSnapshot();
  });

  test('should call setResorts when all data is fetched', () => {
    fetchMock.getOnce(/\/resorts/, {
      body: resorts,
      headers: { 'x-total-count': '3' },
    });
    const dispatch = jest.fn();
    actionCreators.getResorts('1', 4)(dispatch).then(() => {
      expect(dispatch.mock.calls[1]).toMatchSnapshot();
    });
  });

  test('should call setError when resourceFetcher was called and no data was fetched', () => {
    fetchMock.getOnce(/\/resorts/, { status: '404' });
    const dispatch = jest.fn();
    actionCreators.getResorts('1', 4)(dispatch).then(() => {
      expect(dispatch.mock.calls[1]).toMatchSnapshot();
    });
  });

  // testing various options for learning porpose
  test('should call dispatch when resourceFetcher was called', () => {
    fetchMock.getOnce(/\/resorts/, {
      body: resorts,
      headers: { 'x-total-count': '3' },
    });
    const dispatch = jest.fn();
    actionCreators.getResorts('1', 4)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});

describe('getSpecificResort', () => {
  const getState = () => ({ resorts: { byId: { 1: {} } } });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should return if resort is already in state', () => {
    const dispatch = jest.fn();
    actionCreators.getSpecificResort(1)(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });

  test('should call setIsLoading when dispatch was called first time', () => {
    fetchMock.getOnce(/\/resorts\/2/, {
      body: resorts[1],
    });
    const dispatch = jest.fn();
    actionCreators.getSpecificResort(2)(dispatch, getState).then(() => {
      expect(dispatch.mock.calls[0]).toMatchSnapshot();
    });
  });

  test('should call setSpecificResort if resort is not in state and data is fetched', () => {
    fetchMock.getOnce(/\/resorts\/2/, {
      body: resorts[1],
    });
    const dispatch = jest.fn();
    actionCreators.getSpecificResort(2)(dispatch, getState).then(() => {
      expect(dispatch.mock.calls[1]).toMatchSnapshot();
    });
  });

  test('should call setError when resourceFetcher was called and no data was fetched', () => {
    fetchMock.getOnce(/\/resorts\/2/, { status: '404' });
    const dispatch = jest.fn();
    actionCreators.getSpecificResort(2)(dispatch, getState).then(() => {
      expect(dispatch.mock.calls[1]).toMatchSnapshot();
    });
  });
});
