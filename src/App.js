import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import ResortsData from './components/ResortsData';
import SpecificResortPage from './components/resortPage/SpecificResortPage';
import FooterLayout from './components/FooterLayout';
import TopLayout from './components/TopLayout';

const LayoutWrapper = props => (
  <div className="container-fluid App">
    <TopLayout />
    {props.children}
    <FooterLayout />
  </div>
);
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <LayoutWrapper><ResortsData /></LayoutWrapper>} />
            <Route exact path="/resorts" render={() => <LayoutWrapper><ResortsData /></LayoutWrapper>} />
            <Route
              path="/resorts/:id"
              render={props => <LayoutWrapper><SpecificResortPage {...props} /></LayoutWrapper>}
            />
            <Route render={() => <h3>404 page not found</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
LayoutWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
