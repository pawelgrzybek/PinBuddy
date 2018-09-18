import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.css';

const Title = props => <h1 className="title">{props.t}</h1>;

Title.propTypes = {
  t: PropTypes.string.isRequired,
};

export default Title;
