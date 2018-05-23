import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResortWeatherInfo from '../components/resortPage/ResortWeatherInfo';
import { getCurrentWeather } from '../store/weather/selectors';
import * as actions from '../store/weather/actionCreators';

export class ResortWeather extends Component {
  componentDidMount() {
    const { cityId } = this.props;
    this.props.getWeather(cityId);
  }

  render() {
    const { isLoading, error, currentWeather } = this.props;
    if (error) { return (error.message); }
    if (isLoading) { return <div>Weather Loading in progress</div>; }
    return (
      <div className="col-md-4">
        <ResortWeatherInfo {...currentWeather} />
      </div>
    );
  }
}

ResortWeather.propTypes = {
  getWeather: PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  cityId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentWeather: getCurrentWeather(state, ownProps.cityId),
  isLoading: state.weather.isLoading,
  error: state.weather.error,
});

const mapDispatchToProps = {
  getWeather: actions.getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResortWeather);
