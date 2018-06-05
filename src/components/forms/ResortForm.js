import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { getSpecificResort } from '../../store/resorts/selectors';
import * as actions from '../../store/resorts/actionCreators';
import RenderPiste from './RenderPiste';
import RenderField from './RenderField';

class NewResortForm extends Component {
  componentDidMount() {
    const { getResort, id } = this.props;
    if (id) {
      getResort(id);
    }
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="id"
          type="text"
          component={RenderField}
          label="id"
          disabled
        />
        <Field
          name="name"
          type="text"
          component={RenderField}
          label="Nazwa ośrodka"
        />
        <Field
          name="city"
          type="text"
          component={RenderField}
          label="Miasto"
        />
        <Field
          name="cityId"
          type="text"
          component={RenderField}
          label="cityId"
        />
        <p>Współrzędne geograficzne</p>
        <Field
          name="coordinates.lat"
          type="text"
          component={RenderField}
          label="szerokość"
        />
        <Field
          name="coordinates.lng"
          type="text"
          component={RenderField}
          label="długość"
        />
        <FieldArray name="piste" component={RenderPiste} />
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Prześlij
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Wyczyść formularz
          </button>
        </div>
      </form>
    );
  }
}

const ResortForm = reduxForm({
  form: 'newResort',
  enableReinitialize: true,
})(NewResortForm);

const ConectedResortForm = connect(
  (state, ownProps) => ({
    initialValues: getSpecificResort(state, ownProps.id),
  }),
  { getResort: actions.getSpecificResort },
)(ResortForm);

NewResortForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  getResort: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default ConectedResortForm;
