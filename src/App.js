import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutWrapper from './LayoutWrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LayoutWrapper} />
            <Route path="/resorts" component={LayoutWrapper} />
            <Route render={() => <h3>404 page not found</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
