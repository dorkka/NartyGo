import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortWeatherInfo extends Component {
  render() {
    const {
      temperature, temperatureMin, temperatureMax, pressure, wind, clouds, sunrise, sunset,
    } = this.props;
    return (
      <div >
        <h4>Pogoda</h4>
        <p>Temperatura: {temperature} oC</p>
        <p>Temperatura min: {temperatureMin} oC</p>
        <p>Temperatura min: {temperatureMax} oC</p>
        <p>Ciśnienie: {pressure} hPa</p>
        <p>Wiatr: {wind} m/s</p>
        <p>Zachmurzenie: {clouds}</p>
        <p>Wschód słońca: {sunrise}</p>
        <p>Zachód słońca: {sunset}</p>
      </div>
    );
  }
}

ResortWeatherInfo.propTypes = {
  temperature: PropTypes.string.isRequired,
  temperatureMin: PropTypes.string.isRequired,
  temperatureMax: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  clouds: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};

export default ResortWeatherInfo;
