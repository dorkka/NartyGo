import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResortWeatherInfo from './ResortWeatherInfo';
import ResortDetails from './ResortDetails';

class SpecificResortPage extends Component {
  state = {
    resort: {},
    weather: {},
    piste: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchResort();
  }

  fetchResort() {
    this.setState({ isLoading: true });
    fetch(`http://localhost:3001/resorts/${this.props.match.params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then((resort) => {
        this.setState({
          resort,
          weather: resort.weather,
          piste: resort.piste,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      resort, weather, piste, isLoading, error,
    } = this.state;
    if (error) { return (error.message); }
    if (isLoading) { return <div>Loading in progress</div>; }

    return (
      <div div className="container-fluid App">
        <hr />
        <h4>Ośrodek narciarski: {resort.name}</h4>
        <div className="row">
          <ResortDetails city={resort.city} piste={piste.length} />
          <ResortWeatherInfo
            temperature={weather.temperature}
            pressure={weather.pressure}
            clouds={weather.clouds}
          />
        </div>
      </div>
    );
  }
}

SpecificResortPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.number,
    }),
  }).isRequired,
};

export default SpecificResortPage;
