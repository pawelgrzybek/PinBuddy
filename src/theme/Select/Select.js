import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({
  id,
  label,
  onChange,
  options,
  selected,
}) => (
  <div className="select">
    <label
      className="select__label"
      htmlFor={id}
    >
      {label}
    </label>
    <select
      className="select__select"
      id={id}
      onChange={onChange}
      value={selected}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Select;
