import React, { Component } from 'react';
import './App.css';
import TopLayout from './components/TopLayout'
import FooterLayout from './components/FooterLayout'


class App extends Component {
  render() {
    return (
      <div class="container-fluid" className="App">
        <TopLayout/>
        <FooterLayout/>
      </div>
    );
  }
}

export default App;
