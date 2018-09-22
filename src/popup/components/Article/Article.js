import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Article.css';

class Article extends Component {
  state={

  }

  render() {
    const {
      privatePost,
      unread,
      href,
      description,
      time,
      tags,
    } = this.props;

    const timeFormated = time.substring(0, 10).replace(/-/g, '.');
    const tagsFormated = tags.split(' ').map(tag => `#${tag}`).join(' ');

    return (
      <article className={`artile ${privatePost ? 'article--private' : ''}`}>
        <a
          className={`article__url ${unread ? 'article__url--unread' : ''}`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {description}
        </a>
        <div className="article__meta">
          <span className="article__info">{timeFormated}</span>
          {tags ? <span className="article__info article__info--tags">{tagsFormated}</span> : ''}
          <span className="article__info article__info--edit">Edit</span>
          <span className="article__info article__info--delete article__info--mouseover">Delete</span>
        </div>
      </article>
    );
  }
}


Article.propTypes = {
  privatePost: PropTypes.bool.isRequired,
  unread: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Article;
