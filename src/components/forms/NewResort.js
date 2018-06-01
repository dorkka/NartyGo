import React, { Component } from 'react';
import ResortForm from './ResortForm';

export default class ResortFormPage extends Component {
  handleSubmit = values => {
    fetch('http://localhost:3001/resorts', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => response.json());
  }
  render() {
    return <ResortForm onSubmit={this.handleSubmit} />;
  }
}
