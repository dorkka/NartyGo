import React, { Component } from 'react';
import ResortsList from './ResortsList';
import ResortsListHead from './ResortsListHead';
import Pagination from './Pagination';

class ResortsData extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
      error: null
    }
  }

  componentDidMount(){
    this.setState({isLoading: true})
    fetch(`http://localhost:3000/resorts?_page=${this.state.page}`)
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

  handleClick(e) {
    this.setState({page: (Number(e.target.id))});
  }
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
            {this.state.data.map((resort)=><ResortsList resort={resort}/>)}
          </tbody> 
        </table>
        <Pagination handleClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
export default ResortsData;
