import * as types from './types';
import resourceFetcher from '../../services/resourceFetcher';

export const setWeather = (data) => {
  const weatherTime = new Date().getTime;
  return {
    type: types.SET_WEATHER,
    payload: {
      data,
      weatherTime,
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

export const getWeather = (cityId) => (dispatch, getState) => {
  if ((getState().weather.weatherTime - (new Date().getTime)) < 7200000) {
    return;
  }
  dispatch(setIsLoading());
  resourceFetcher(`http://api.openweathermap.org/data/2.5/group?id=${cityId}&lang=pl&units=metric&APPID=07751527bfe01ed870793d6731eefdf1`)()
    .then(({ data }) => {
      dispatch(setWeather(data));
    })
    .catch(error => dispatch(setError(error)));
};
