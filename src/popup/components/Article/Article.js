import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';

const Article = props => {
  const {
    privatePost,
    unread,
    href,
    description,
    time,
    tags,
  } = props;

  const timeFormated = time.substring(0, 10).replace(/-/g, '.');
  const tagsFormated = tags.replace(/ /g, ', ');

  return (
    <a
      className={`article ${unread ? 'article--unread' : ''} ${privatePost ? 'article--private' : ''}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="article__description">{description}</div>
      <div className="article__meta">{timeFormated} {tags ? `| ${tagsFormated}` : ''} </div>
    </a>
  );
};

Article.propTypes = {
  privatePost: PropTypes.bool.isRequired,
  unread: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Article;
