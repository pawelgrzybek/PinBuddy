import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = props => {
  const { t } = props;

  return <p className="footer" dangerouslySetInnerHTML={{ __html: t }} />;
};

Footer.propTypes = {
  t: PropTypes.string.isRequired,
};

export default Footer;
