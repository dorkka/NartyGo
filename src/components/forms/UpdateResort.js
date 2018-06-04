import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResortForm from './ResortForm';

export default class UpdateResortFormPage extends Component {
  handleSubmit = values => {
    const { id } = this.props.match.params;
    fetch(`http://localhost:3001/resorts/${id}`, {
      method: 'PUT',
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

UpdateResortFormPage.propTypes = {
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.string,
  }),
};
