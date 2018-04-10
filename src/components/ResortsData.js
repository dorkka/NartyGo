import React, { Component } from 'react';
import ResortBasicInfo from './ResortBasicInfo';
import ResortsListHead from './ResortsListHead';
import Pagination from './Pagination';
import resourceFetcher from '../services/resourceFetcher';

class ResortsData extends Component {
    state = {
      data: [],
      pageCount: 1,
      perPage: 3,
      isLoading: false,
      error: null,
    };

    componentDidMount() {
      this.fetchResorts();
    }

    fetchResorts() {
      this.setState({ isLoading: true });
      const { page = 1 } = this.props.match.params;
      const { perPage: _limit } = this.state;
      resourceFetcher('resorts')({ page, _limit })
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

    this.props.page = data.selected + 1;
    const url = `${this.props.match.url}/page=${page}`;
    this.fetchResorts();
  };

  render() {
    const {
      data, pageCount, isLoading, error,
    } = this.state;
    const { page = 1 } = this.props.match.params;

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
