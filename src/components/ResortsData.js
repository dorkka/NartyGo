import React, { Component } from 'react';
import qs from 'qs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import ResortsListHead from './ResortsListHead';
import Pagination from '../shared/Pagination';
import ResortBasicInfo from './ResortBasicInfo';
import ResortsMap from '../shared/ResortsMap';
import * as actions from '../store/resorts/actionCreators';
import { getCurrentResorts } from '../store/resorts/selectors';

export class ResortsData extends Component {
  perPage = 4;

  componentDidMount() {
    this.fetchResorts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchResorts();
    }
  }

  fetchResorts() {
    const { page = '1' } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    this.props.getResorts(page, this.perPage);
  }

  handlePageClick = (data) => {
    const page = data.selected + 1;
    this.props.history.push(`${this.props.match.url}?page=${page}`);
  };
  render() {
    const {
      resorts, pageCount, isLoading, error,
    } = this.props;
    const { page = '1' } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

    if (error) { return (error.message); }
    if (isLoading) { return <div>Loading in progress</div>; }
    if (isEmpty(resorts)) { return <div>There is no data</div>; }

    return (
      <div>
        <h2>Lista Ośrodków narciarskich</h2>
        <div className="row">
          <div className="col-5">
            <table className="table table-striped">
              <ResortsListHead />
              <tbody>
                {resorts.map(resort => <ResortBasicInfo resort={resort} />)}
              </tbody>
            </table>
            <Pagination
              pageCount={pageCount}
              handlePageClick={this.handlePageClick}
              page={page - 1}
            />
          </div>
          <div className="col-7">
            <ResortsMap
              zoom={5.7}
              defaultCenter={{ lat: 52.068, lng: 19.4797 }}
              isResorts
              markersPositions={resorts.map(resort => resort.coordinates)}
            />
          </div>
        </div>
      </div>
    );
  }
}

ResortsData.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  resorts: PropTypes.array.isRequired,
  getResorts: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  resorts: getCurrentResorts(state),
  pageCount: state.resorts.pageCount,
  isLoading: state.resorts.isLoading,
  error: state.resorts.error,
});

const mapDispatchToProps = {
  getResorts: actions.getResorts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResortsData);

