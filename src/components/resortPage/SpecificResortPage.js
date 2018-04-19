import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResortWeatherInfo from './ResortWeatherInfo';
import ResortDetails from './ResortDetails';
import resourceFetcher from '../../services/resourceFetcher';
import ResortsMap from '../../components/ResortsMap';

class SpecificResortPage extends Component {
  state = {
    resort: {
      weather: {},
      piste: [],
    },
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchResort();
  }

  fetchResort() {
    this.setState({ isLoading: true });

    resourceFetcher(`resorts/${this.props.match.params.id}`)()
      .then(({ data }) => {
        this.setState({
          resort: data,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      resort: {
        name, piste, city, weather: { temperature, pressure, clouds }, coordinates,
      }, error, isLoading,
    } = this.state;
    if (error) { return (error.message); }
    if (isLoading) { return <div>Loading in progress</div>; }
    return (
      <div className="container-fluid App">
        <hr />
        <h4>Ośrodek narciarski: {name}</h4>
        <div className="row">
          <ResortDetails city={city} piste={piste.length} />
          <ResortWeatherInfo
            temperature={temperature}
            pressure={pressure}
            clouds={clouds}
          />
          <div className="col-md-4">
            <ResortsMap isMarkerShown coordinates={coordinates} />
          </div>
        </div>
      </div>
    );
  }
}

SpecificResortPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default SpecificResortPage;
