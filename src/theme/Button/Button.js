import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  type,
  disabled,
  t,
  title,
  onClick,
}) => (
  <button
    className="button"
    type={type}
    title={title}
    disabled={disabled}
    onClick={onClick}
  >
    {t}
  </button>
);

Button.propTypes = {
  t: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  title: null,
  disabled: false,
  onClick: null,
};

export default Button;
