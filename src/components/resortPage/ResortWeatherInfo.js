import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortWeatherInfo extends Component {
  render() {
    const { temperature, pressure, clouds } = this.props;
    return (
      <div className="col-md-4">
        <h4>Pogoda</h4>
        <p>Temperatura: {temperature}</p>
        <p>Ciśnienie: {pressure}</p>
        <p>Zachmurzenie: {clouds}</p>
      </div>
    );
  }
}

ResortWeatherInfo.propTypes = {
  temperature: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  clouds: PropTypes.string.isRequired,
};

export default ResortWeatherInfo;
