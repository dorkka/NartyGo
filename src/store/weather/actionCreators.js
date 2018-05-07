import * as types from './types';
import resourceFetcher from '../../services/resourceFetcher';

export const setWeather = (data) => {
  const weatherTime = new Date().getTime;
  const {
    weather, main, wind, id, name, sys,
  } = data.list[0];
  const byId = {
    [id]: {
      weather, main, wind, id, name, sys,
    },
  };
  return {
    type: types.SET_WEATHER,
    payload: {
      byId,
    },
    meta: { weatherTime },
  };
};
export const setError = (error) => ({
  type: types.SET_ERROR,
  error,
});

export const setIsLoading = () => ({
  type: types.IS_LOADING,
});

export const getWeather = (cityId) => (dispatch) => {
  dispatch(setIsLoading());
  resourceFetcher('http://api.openweathermap.org/data/2.5/group')({
    id: cityId, lang: 'pl', units: 'metric', APPID: '07751527bfe01ed870793d6731eefdf1',
  })
    .then(({ data }) => {
      dispatch(setWeather(data));
    })
    .catch(error => dispatch(setError(error)));
};
