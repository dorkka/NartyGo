import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, FieldArray } from 'redux-form';

const NewResortForm = props => {
  const { handleSubmit } = props;

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  const renderPiste = ({ fields, meta: { error, submitFailed } }) => (
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


  return (
    <form onSubmit={handleSubmit}>
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
      <FieldArray name="piste" component={renderPiste} />
      <div>
        <button type="submit" >
          Submit
        </button>
        <button type="button" >
          Clear Values
        </button>
      </div>
    </form>
  );
};

const ResortForm = reduxForm({
  form: 'newResort',
})(NewResortForm);

NewResortForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.object
  }).isRequired,
  fields: PropTypes.array.isRequired,
};

export default ResortForm;
