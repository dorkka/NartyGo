import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

class Pagination extends Component{
  render(){
    return(
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakClassName="page-item"
                     pageCount={this.props.pageCount}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.props.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"}
                     pageClassName="page-item"
                     previousClassName="page-item"
                     nextClassName="page-item"
                     pageLinkClassName="page-link"
                     previousLinkClassName="page-link"
                     nextLinkClassName="page-link"/>
    )
  }
}

Pagination.propTypes={
  handlePageClick: PropTypes.func,
  pageCount: PropTypes.number
}
export default Pagination;
