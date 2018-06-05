import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConectedResortForm } from './';

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
    return <ConectedResortForm onSubmit={this.handleSubmit} id={id} />;
  }
}

ResortFormPage.propTypes = {
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};
