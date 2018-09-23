import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
  const {
    id,
    label,
    onChange,
    value,
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
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
});

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
