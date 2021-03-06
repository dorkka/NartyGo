import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <Link className="nav-link" to="/resorts/new">Wprowadź ośrodek</Link>
            </ul>
          </div>
        </nav>
        <div className="jumbotron">
          <h1 className="display-4">Witamy w serwisie NartyGo</h1>
          <p className="lead">NartyGo to najlepszy serwis narciarski z najaktualniejszymi informacjami o ośrodkach narciarskich i warunkach na trasach!</p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p>Temperatura: </p>
            <p>Zachmurzenie: </p>
          </div>
          <div className="col-md-2">
            <p>Sprawdź aktualną pogodę </p>
            <p><button type="button" className="btn btn-warning">Sprawdź</button></p>
          </div>
          <div className="col-md-7">
            <p>Wyszukaj ośrodek</p>
            <input type="text" />
            <p><button type="button" className="btn btn-warning">Szukaj</button></p>
          </div>
        </div>
      </div>
    );
  }
}

export default TopLayout;

