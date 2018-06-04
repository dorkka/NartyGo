import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { getSpecificResort } from '../../store/resorts/selectors';
import * as actions from '../../store/resorts/actionCreators';

class NewResortForm extends Component {
  componentDidMount() {
    const { getResort, id } = this.props;
    if (id) {
      getResort(id);
    }
  }

  renderField = ({
    input, label, type, meta: { touched, error },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  renderPiste = ({ fields, meta: { error, submitFailed } }) => {
    const { renderField } = this;
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>
            Dodaj trasę
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((piste, index) => (
          <li key={index}>
            <button type="button" onClick={() => fields.remove(index)}>
              Usuń trasę
            </button>
            <h4>Trasa id{index + 1}</h4>
            <Field
              name={`piste[${index}].id`}
              type="text"
              component={renderField}
              label="id"
            />
            <Field
              name={`piste[${index}].number`}
              type="text"
              component={renderField}
              label="numer"
            />
            <Field
              name={`piste[${index}].name`}
              type="text"
              component={renderField}
              label="nazwa"
            />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    const { renderField } = this;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="id"
          type="text"
          component={renderField}
          label="id"
          disabled
        />
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Nazwa ośrodka"
        />
        <Field
          name="city"
          type="text"
          component={renderField}
          label="Miasto"
        />
        <Field
          name="cityId"
          type="text"
          component={renderField}
          label="cityId"
        />
        <p>Współrzędne geograficzne</p>
        <Field
          name="coordinates.lat"
          type="text"
          component={renderField}
          label="szerokość"
        />
        <Field
          name="coordinates.lng"
          type="text"
          component={renderField}
          label="długość"
        />
        <FieldArray name="piste" component={this.renderPiste} />
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
  input: PropTypes.object,
  label: PropTypes.object,
  type: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.object,
  }),
  fields: PropTypes.array,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  getResort: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default ConectedResortForm;
