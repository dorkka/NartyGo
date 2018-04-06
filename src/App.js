import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ResortsData from './components/ResortsData';
import SpecificResortPage from './components/resortPage/SpecificResortPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Switch>
            <Route exact path="/" component={ResortsData} />
            <Route exact path="/resorts" component={ResortsData} />
            <Route path="/resorts/:id" component={SpecificResortPage} />
            <Route render={() => <h3>404 page not found</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
