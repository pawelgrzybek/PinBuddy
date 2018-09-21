import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = props => {
  const { t, url, title, blank } = props;
  return (
    <a
      href={url}
      title={title}
      target={blank ? '_blank' : '_self'}
      rel={blank ? 'noopener noreferrer' : ''}
      className="link"
    >
      {t}
    </a>
  );
};

Link.propTypes = {
  t: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blank: PropTypes.bool,
};

Link.defaultProps = {
  blank: false,
};

export default Link;
