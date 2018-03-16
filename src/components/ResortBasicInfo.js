import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortBasicInfo extends Component{
  render(){
    return(
      <tr> 
        <th scope="row">{this.props.resort.id}</th> 
        <td>{this.props.resort.name}</td> 
        <td>{this.props.resort.city}</td> 
      </tr> 
    )
  }
}

ResortBasicInfo.propTypes={
  resort: PropTypes.object,
  resort: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string
  })
}
export default ResortBasicInfo;


