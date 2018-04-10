import React from 'react';
import PropTypes from 'prop-types';
import ResortsData from './components/ResortsData';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import SpecificResortPage from './components/resortPage/SpecificResortPage';
import FooterLayout from './components/FooterLayout';
import TopLayout from './components/TopLayout';

const LayoutWrapper = props => (
  <div className="container-fluid App">
    <TopLayout />
    <Switch>
      <Route path="/" component={ResortsData} />
      <Route exact path={`${props.match.url}/`} component={ResortsData} />
      <Route path={`${props.match.url}/:id`} component={SpecificResortPage} />
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
