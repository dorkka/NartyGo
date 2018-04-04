import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpecificResortPage from './components/resortPage/SpecificResortPage';
import TopLayout from './components/TopLayout'
import FooterLayout from './components/FooterLayout'
import ResortsData from './components/ResortsData'

ReactDOM.render(
  <Router>
    <div className="container-fluid App">
      <TopLayout />
      <Route exact path="/" component={ResortsData} />
      <Route path="/resort/:id" component={SpecificResortPage} />
      <FooterLayout />
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
