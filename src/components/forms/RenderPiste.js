import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import RenderField from './RenderField';

const RenderPiste = ({ fields, meta: { error, submitFailed } }) => (
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
          component={RenderField}
          label="id"
        />
        <Field
          name={`piste[${index}].number`}
          type="text"
          component={RenderField}
          label="numer"
        />
        <Field
          name={`piste[${index}].name`}
          type="text"
          component={RenderField}
          label="nazwa"
        />
      </li>
    ))}
  </ul>
);

RenderPiste.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.object,
  }),
  fields: PropTypes.array,
};

export default RenderPiste;
