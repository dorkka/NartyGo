import * as types from './types';
import resourceFetcher from '../../services/resourceFetcher';

export const setResorts = (data, headers, perPage) => {
  const pageCount = Math.ceil(headers.get('x-total-count') / perPage);
  const list = [];
  const byId = {};
  data.forEach(element => {
    list.push(element.id);
    byId[element.id] = element;
  });
  return {
    type: types.SET_RESORTS,
    payload: {
      pageCount,
      list,
      byId,
    },
  };
};

export const setError = (error) => ({
  type: types.SET_ERROR,
  error,
});

export const setIsLoading = () => ({
  type: types.IS_LOADING,
});

export const setSpecificResort = data => {
  const byId = { [data.id]: data };
  return {
    type: types.SET_RESORT,
    payload: {
      byId,
    },
  };
};

export const getSpecificResort = (id) => (dispatch, getState) => {
  if (getState().resorts.byId[id]) {
    return;
  }
  dispatch(setIsLoading());
  resourceFetcher(`resorts/${id}`)()
    .then(({ data }) => {
      dispatch(setSpecificResort(data));
    })
    .catch(error => dispatch(setError(error)));
};

