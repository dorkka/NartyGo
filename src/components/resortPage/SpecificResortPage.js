import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResortWeatherInfo from './ResortWeatherInfo';
import ResortDetails from './ResortDetails';

class SpecificResortPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resort: {},
      resortId: 1,
      weather: {},
      piste: [],
      isLoading: false,
      error: null
    };
  }
  
  componentDidMount(){
    this.fetchResort();
  }

  fetchResort(){
    this.setState({isLoading: true})
    fetch(`http://localhost:3001/resorts/${this.state.resortId}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then((resort) => {this.setState({
          resort, 
          weather: resort.weather, 
          piste: resort.piste, 
          isLoading: false})
        })
        .catch(error => this.setState({ error, isLoading: false}))
  }
stat
  render() {
    const {resort, weather, piste, isLoading, error} = this.state;
    if(error)
      return(error.message)
    if(isLoading)
      return <div>Loading in progress</div>

    return (
      <div>
        <hr/>
        <h4>Ośrodek narciarski: {resort.name}</h4>
        <div className="row">
          <ResortDetails city={resort.city} piste={piste.length}/>
          <ResortWeatherInfo temperature={weather.temperature} pressure={weather.pressure} clouds={weather.clouds} />
        </div>
      </div>
    );
  }
}

export default SpecificResortPage;
