import * as types from './types';

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

