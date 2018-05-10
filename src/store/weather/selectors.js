import moment from 'moment';

export const getCurrentWeather = (state, cityId) => {
  const weatherFromStore = state.weather.byId[cityId] || {};
  const weatherWithDefaults = {
    main: {}, weather: [{}], wind: {}, sys: {}, ...weatherFromStore,
  };
  return ({
    temperature: weatherWithDefaults.main.temp,
    temperatureMin: weatherWithDefaults.main.temp_min,
    temperatureMax: weatherWithDefaults.main.temp_max,
    pressure: weatherWithDefaults.main.pressure,
    wind: weatherWithDefaults.wind.speed,
    clouds: weatherWithDefaults.weather[0].description,
    sunrise: moment(weatherWithDefaults.sys.sunrise).format('h:mm:ss'),
    sunset: moment(weatherWithDefaults.sys.sunset).format('h:mm:ss'),
  });
};

