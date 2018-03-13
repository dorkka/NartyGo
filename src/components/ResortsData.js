import React, { Component } from 'react';
import ResortBasicInfo from './ResortBasicInfo';
import ResortsListHead from './ResortsListHead';
import Pagination from './Pagination';

class ResortsData extends Component{
  constructor(){
    super();
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
      error: null
    }
  }
  
  componentDidMount(){
    this.fetchResorts();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.page !== this.state.page) {
      this.fetchResorts();
    }
  }

  fetchResorts(){
    this.setState({isLoading: true})
    fetch(`http://localhost:3001/resorts?_page=${this.state.page}&_limit=1`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data: data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false}))
  }

  handleClick = (page) => {this.setState({page},() => this.fetchResorts());}

  render(){
    const {isLoading, data, error} = this.state;
    if(error)
      return(error.message)
    if(isLoading)
      return <div>Loading in progress</div>
    if(!data.length)
      return <div>There is no data</div>
          
    return(
      <div>
        <h3>Lista Ośrodków narciarskich</h3>
        <table className="table table-striped"> 
          <ResortsListHead/>
          <tbody>
            {this.state.data.map((resort)=><ResortBasicInfo resort={resort}/>)}
          </tbody> 
        </table>
        <Pagination handleClick={this.handleClick}/>
      </div>
    )
  }
}
export default ResortsData;
