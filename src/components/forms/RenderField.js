import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({
  input, label, type, meta: { touched, error }, disabled,
}) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input id={input.name} {...input} disabled={disabled} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.object,
  type: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.object,
  }),
  disabled: PropTypes.bool,
};

export default renderField;
