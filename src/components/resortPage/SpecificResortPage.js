import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResortWeather from '../../shared/ResortWeather';
import ResortDetails from './ResortDetails';
import ResortsMap from '../../shared/ResortsMap';
import { getSpecificResort } from '../../store/resorts/selectors';
import * as actions from '../../store/resorts/actionCreators';

class SpecificResortPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSpecificResort(id);
  }

  render() {
    const {
      resort: {
        name, piste, city, coordinates, cityId,
      }, error, isLoading,
    } = this.props;
    if (error) { return (error.message); }
    if (isLoading || !cityId) { return <div>Loading in progress</div>; }
    return (
      <div className="container-fluid App">
        <hr />
        <h4>Ośrodek narciarski: {name}</h4>
        <div className="row">
          <ResortDetails city={city} piste={piste.length} />
          <ResortWeather cityId={cityId} />
          <div className="col-md-4">
            <ResortsMap coordinates={coordinates} zoom={10} defaultCenter={coordinates} />
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
  getSpecificResort: PropTypes.func.isRequired,
  resort: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  resort: getSpecificResort(state, ownProps.match.params.id),
  isLoading: state.resorts.isLoading,
  error: state.resorts.error,
});

const mapDispatchToProps = {
  getSpecificResort: actions.getSpecificResort,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecificResortPage);
