import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = React.forwardRef(({
  id,
  label,
  onChange,
  value,
  placeholder,
  type,
  autoComplete,
  autoCorrect,
  autoCapitalize,
  spellCheck,
}, ref) => (
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
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
    />
  </>
));

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.string,
  autoCapitalize: PropTypes.string,
  spellCheck: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  autoComplete: 'on',
  autoCorrect: 'on',
  autoCapitalize: 'on',
  spellCheck: 'on',
};

export default Input;
