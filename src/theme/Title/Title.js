import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = ({ t }) => <h1 className="title">{t}</h1>;

Title.propTypes = {
  t: PropTypes.string.isRequired,
};

export default Title;
