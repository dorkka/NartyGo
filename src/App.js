import React, { Component } from 'react';
import './App.css';
import TopLayout from './components/TopLayout'
import FooterLayout from './components/FooterLayout'
import ResortsData from './components/ResortsData'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid App">
          <TopLayout/>
            <ResortsData />
          <FooterLayout/>
        </div>
      </Router>
    );
  }
}

export default App;
