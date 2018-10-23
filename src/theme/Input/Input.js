import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = React.forwardRef(
  (
    {
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
      autoFocus,
      pattern,
      invalidMessage
    },
    ref
  ) => (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>

      <input
        className="input__input"
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
        autoFocus={autoFocus}
        pattern={pattern}
      />

      {invalidMessage && <p className="input__message">{invalidMessage}</p>}
    </div>
  )
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.string,
  autoCapitalize: PropTypes.string,
  spellCheck: PropTypes.string,
  autoFocus: PropTypes.bool,
  pattern: PropTypes.string,
  invalidMessage: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  autoComplete: null,
  autoCorrect: null,
  autoCapitalize: null,
  spellCheck: null,
  autoFocus: null,
  pattern: null,
  invalidMessage: null
};

export default Input;
