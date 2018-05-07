
export const getCurrentWeather = (state, cityId) => {
  const weather = state.weather.byId[cityId];
  if (!weather) {
    return ({});
  }

  return ({
    temperature: weather.main.temp,
    temperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
    pressure: weather.main.pressure,
    wind: weather.wind.speed,
    clouds: weather.weather[0].description,
    sunrise: weather.sys.sunrise,
    sunset: weather.sys.sunset,
  } || {
    main: {}, weather: [], wind: {}, sys: {},
  });
};

