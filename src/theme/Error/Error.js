import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = props => {
  const { innerHTML, t } = props;

  return innerHTML ?
    <p className="error" dangerouslySetInnerHTML={{ __html: t }} /> :
    <p className="error">{t}</p>;
};

Error.propTypes = {
  t: PropTypes.string.isRequired,
  innerHTML: PropTypes.bool.isRequired,
};

Error.defaultProps = {
  innerHTML: false,
};

export default Error;
