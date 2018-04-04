import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ResortBasicInfo extends Component {
  render() {
    const { resort: { id, name, city } } = this.props;
    return (
      <tr>
        <th scope="row"><Link to="resortPage/SpecificResortPage">{id}</Link></th>
        <td>{name}</td>
        <td>{city}</td>
      </tr>
    );
  }
}

ResortBasicInfo.propTypes = {
  resort: PropTypes.object,
  resort: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
  }),
};
export default ResortBasicInfo;

