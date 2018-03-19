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
      pageCount: 5,
      perPage: 2,
      isLoading: false,
      error: null
    }
  }
  
  componentDidMount(){
    this.fetchResorts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchResorts();
    }
  }

  fetchResorts(){
    this.setState({isLoading: true})
    fetch(`http://localhost:3001/resorts?_page=${this.state.page}&_limit=${this.state.perPage}`)
        .then(response => {
          if (response.ok) {
            return response.json().then((data) => ({data, headers: response.headers}))
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(({data, headers}) => {
          this.setState({ data: data,  pageCount: Math.ceil(headers.get('x-total-count')/ this.state.perPage), isLoading: false })
          console.log(`page: ${this.state.page}`)
        })
        .catch(error => this.setState({ error, isLoading: false}))
  }

  handlePageClick = (data) => {
    console.log(`selected : ${data.selected}`)
    //there is +1, because 'react-paginate' has 0 as start page number,
    this.setState({page: data.selected +1})
  };

  render(){
    const {data, pageCount, isLoading, error} = this.state;
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
        <Pagination pageCount={pageCount} handlePageClick={this.handlePageClick}/>
      </div>
    )
  }
}
export default ResortsData;
