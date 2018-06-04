import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ResortsData from './components/ResortsData';
import SpecificResortPage from './components/resortPage/SpecificResortPage';
import FooterLayout from './layout/FooterLayout';
import TopLayout from './layout/TopLayout';
import NewResortFormPage from './components/forms/NewResort';
import UpdateResortFormPage from './components/forms/UpdateResort';

const LayoutWrapper = props => (
  <div className="container-fluid App">
    <TopLayout />
    <Switch>
      <Route path={`${props.match.url}/new`} component={NewResortFormPage} />
      <Route path={`${props.match.url}/:id/edit`} component={UpdateResortFormPage} />
      <Route path={`${props.match.url}/:id`} component={SpecificResortPage} />
      <Route path={`${props.match.url}/`} component={ResortsData} />
      <Route path="/" component={ResortsData} />
    </Switch>
    <FooterLayout />
  </div>
);

LayoutWrapper.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default LayoutWrapper;
