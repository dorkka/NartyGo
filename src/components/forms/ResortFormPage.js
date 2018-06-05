import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResortForm from './ResortForm';

export default class ResortFormPage extends Component {
  handleSubmit = values => {
    const { id } = this.props.match.params;
    let url = 'http://localhost:3001/resorts';
    let method = 'POST';
    if (id) {
      url = `${url}/${id}`;
      method = 'PUT';
    }
    fetch(url, {
      method,
      body: JSON.stringify(values),
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => response.json());
  }
  render() {
    const { id } = this.props.match.params;
    return <ResortForm onSubmit={this.handleSubmit} id={id} />;
  }
}

ResortFormPage.propTypes = {
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};
