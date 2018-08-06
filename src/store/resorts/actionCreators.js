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

export const getResorts = (_page, _limit) => (dispatch) => {
  dispatch(setIsLoading());
  return resourceFetcher('http://localhost:3001/resorts')({ _page, _limit })
    .then(({ data, headers }) => {
      dispatch(setResorts(data, headers, _limit));
    })
    .catch(error => dispatch(setError(error)));
};

export const getSpecificResort = (id) => (dispatch, getState) => {
  if ((getState().resorts.byId[id])) {
    return null;
  }
  dispatch(setIsLoading());
  return resourceFetcher(`http://localhost:3001/resorts/${id}`)()
    .then(({ data }) => {
      dispatch(setSpecificResort(data));
    })
    .catch(error => dispatch(setError(error)));
};

export const setSelectOptions = (data) => {
  const resortsOptions = []
  const cityOptions = []
  let label = ''
  data.forEach((element) => {
    label = `${element.name} - ${element.city}`;
    resortsOptions.push({ value: element.name, label, id: element.id })
    cityOptions.push({ value: element.city, label, id: element.id })
  })
  return {
    type: types.SET_SELECTED_OPTIONS,
    payload: {
      resortsOptions,
      cityOptions,
    }
  }
}

export const getAllResorts = () => (dispatch) => {
  resourceFetcher('http://localhost:3001/resorts')().then(({ data }) => {
    dispatch(setSelectOptions(data))
  });
}
