import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TopLayout from './components/TopLayout';
import FooterLayout from './components/FooterLayout';
import ResortsData from './components/ResortsData';
import SpecificResortPage from './components/resortPage/SpecificResortPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid App">
          <TopLayout />
          <Route exact path="/" component={ResortsData} />
          <Route exact path="/resorts" component={ResortsData} />
          <Route path="/resorts/:id" component={SpecificResortPage} />
          <FooterLayout />
        </div>
      </Router>
    );
  }
}

export default App;
