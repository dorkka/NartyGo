import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResortsList extends Component{
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

ResortsList.PropTypes={
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}
export default ResortsList;


