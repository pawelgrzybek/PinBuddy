import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

const Checkbox = ({ id, label, onChange, checked }) => (
  <div className="checkbox">
    <input
      className="checkbox__input"
      type="checkbox"
      id={id}
      onChange={onChange}
      checked={checked}
    />
    <label className="checkbox__label" htmlFor={id}>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
