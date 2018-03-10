import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component{
  render(){
    return(
      <div>
        <ul className="pagination">
          <li className="page-item disabled">
            <button className="page-link" >&laquo;</button>
          </li>
          <li className="page-item active">
            <button className="page-link" onClick = {() => this.props.handleClick(1)}>1</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick = {() => this.props.handleClick(2)}>2</button>
          </li>
          <li className="page-item">
            <button className="page-link"  onClick = {() => this.props.handleClick(3)}>3</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick = {() => this.props.handleClick(4)}>4</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick = {() => this.props.handleClick(5)}>5</button>
          </li>
          <li className="page-item">
            <button className="page-link" >&raquo;</button>
          </li>
        </ul>
      </div>
    )
  }
}

Pagination.propTypes={
  handleClick: PropTypes.func
}
export default Pagination;
