import React, { Component } from 'react';

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
export default ResortsList;