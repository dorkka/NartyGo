import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortDetails extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h4>Szczegóły ośrodka</h4>
        <p>Miasto: {this.props.city}</p>
        <p>Ilość tras narciarskich: {this.props.piste}</p>
      </div>
    );
  }
}

ResortDetails.propTypes = {
  city: PropTypes.string.isRequired,
  piste: PropTypes.number.isRequired,
};

export default ResortDetails;
