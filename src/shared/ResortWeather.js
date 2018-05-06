import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResortWeatherInfo from '../components/resortPage/ResortWeatherInfo';
import * as actions from '../store/weather/actionCreators';

class ResortWeather extends Component {
  componentDidMount() {
    const { cityId } = this.props;
    this.props.getWeather(cityId);
  }

  render() {
    const { isLoading, error, currentWeather: { list: [{ visibility}] } } = this.props;
    if (error) { return (error.message); }
    if (isLoading) { return <div>Loading in progress</div>; }
    return (
      <div className="col-md-4">
        <ResortWeatherInfo />
      </div>
    );
  }
}

ResortWeather.propTypes = {
  getWeather: PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  cityId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentWeather: state.weather.currentWeather,
  isLoading: state.weather.isLoading,
  error: state.weather.error,
});

const mapDispatchToProps = {
  getWeather: actions.getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResortWeather);
