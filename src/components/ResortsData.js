import React, { Component } from 'react';
import qs from 'qs';
import PropTypes from 'prop-types';
import ResortsListHead from './ResortsListHead';
import Pagination from './Pagination';
import resourceFetcher from '../services/resourceFetcher';
import ResortBasicInfo from './ResortBasicInfo';

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
    componentDidUpdate(prevProps) {
      if (prevProps.location.search !== this.props.location.search) {
        this.fetchResorts();
      }
    }

    fetchResorts() {
      this.setState({ isLoading: true });
      const { page: _page = 1 } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
      const { perPage: _limit } = this.state;
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
    const page = data.selected + 1;
    this.props.history.push(`${this.props.match.url}?page=${page}`);
  };

  render() {
    const {
      data, pageCount, isLoading, error,
    } = this.state;
    const { page = 1 } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

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
          page={page - 1}
        />
      </div>
    );
  }
}

ResortsData.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
export default ResortsData;
