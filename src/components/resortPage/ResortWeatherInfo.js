import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortWeatherInfo extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h4>Pogoda</h4>
        <p>Temperatura: {this.props.temperature}</p>
        <p>Ciśnienie: {this.props.pressure}</p>
        <p>Zachmurzenie: {this.props.clouds}</p>
      </div>
    );
  }
}

ResortWeatherInfo.propTypes = {
  temperature: PropTypes.string,
  pressure: PropTypes.string,
  clouds: PropTypes.string,
};

export default ResortWeatherInfo;
