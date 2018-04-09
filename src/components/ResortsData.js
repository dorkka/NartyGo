import React, { Component } from 'react';
import ResortBasicInfo from './ResortBasicInfo';
import ResortsListHead from './ResortsListHead';
import Pagination from './Pagination';
import resourceFetcher from '../services/resourceFetcher';

class ResortsData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      pageCount: 1,
      perPage: 3,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchResorts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchResorts();
    }
  }

  fetchResorts() {
    this.setState({ isLoading: true });
    const { page: _page, perPage: _limit } = this.state;
    resourceFetcher('resorts')({ _page, _limit })
      .then(({ data, headers }) => {
        this.setState({
          data,
          pageCount: Math.ceil(headers.get('x-total-count') / this.state.perPage),
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handlePageClick = (data) => {
    this.setState({ page: data.selected + 1 });
  };

  render() {
    const {
      data, pageCount, page, isLoading, error,
    } = this.state;
    if (error) { return (error.message); }
    if (isLoading) { return <div>Loading in progress</div>; }
    if (!data.length) { return <div>There is no data</div>; }

    return (
      <div>
        <h2>Lista Ośrodków narciarskich</h2>
        <table className="table table-striped">
          <ResortsListHead />
          <tbody>
            {this.state.data.map(resort => <ResortBasicInfo resort={resort} />)}
          </tbody>
        </table>
        <Pagination
          pageCount={pageCount}
          handlePageClick={this.handlePageClick}
          initialPage={page - 1}
        />
      </div>
    );
  }
}
export default ResortsData;
