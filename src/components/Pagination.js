import React, { Component } from 'react';

class Pagination extends Component{
  
  render(){
    return(
      <div>
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" >&laquo;</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#" onClick = {this.props.handleClick}>1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" id='2' onClick = {this.props.handleClick}>2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#"  id='3' onClick = {this.props.handleClick}>3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" id='4' onClick = {this.props.handleClick}>4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" id='5' onClick = {this.props.handleClick}>5</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    )
  }

}
export default Pagination;