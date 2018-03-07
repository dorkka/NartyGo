import React, { Component } from 'react';

class ResortsList extends Component{
  render(){
    return(
      <div>
        <table className="table table-striped"> 
          <tbody> 
              <tr> 
                  <th scope="row">{this.props.resort.id}</th> 
                  <td>{this.props.resort.name}</td> 
                  <td>{this.props.resort.city}</td> 
              </tr> 
          </tbody> 
        </table> 
      </div>
    )
  }
}
export default ResortsList;