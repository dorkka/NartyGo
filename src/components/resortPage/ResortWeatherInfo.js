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
        <p>Temperatura: {temperature || '-'} oC</p>
        <p>Temperatura min: {temperatureMin || '-'} oC</p>
        <p>Temperatura max: {temperatureMax || '-'} oC</p>
        <p>Ciśnienie: {pressure || '-'} hPa</p>
        <p>Wiatr: {wind || '-'} m/s</p>
        <p>Zachmurzenie: {clouds || '-'}</p>
        <p>Wschód słońca: {sunrise || '-'}</p>
        <p>Zachód słońca: {sunset || '-'}</p>
      </div>
    );
  }
}

ResortWeatherInfo.propTypes = {
  temperature: PropTypes.number,
  temperatureMin: PropTypes.number,
  temperatureMax: PropTypes.number,
  pressure: PropTypes.number,
  wind: PropTypes.number,
  clouds: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
};

export default ResortWeatherInfo;
