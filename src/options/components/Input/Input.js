import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = props => {
  const { id,
    label,
    onChange,
    placeholder,
    type,
  } = props;

  return (
    <>
      <label
        className="label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="input"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
