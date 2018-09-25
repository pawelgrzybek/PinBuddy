import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsDelete } from 'redux-popup/actions/posts';
import './Article.css';

class Article extends Component {
  state={
    deleteActive: false,
    deleteConfirmed: false,
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
      <article className={`article ${privatePost ? 'article--private' : ''} ${this.state.deleteConfirmed ? 'article--deleting' : ''}`}>
        <a
          className={`article__url ${unread ? 'article__url--unread' : ''}`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {description}
        </a>
        <div className="article__meta">
          <div className="article__info">{timeFormated}</div>
          {tags ? <div className="article__info article__info--tags">{tagsFormated}</div> : ''}
          <div className="article__info">
            {this.state.deleteActive && (
              <>
                <span className="article__info--cancel" onClick={this.handleCancelClick}>{chrome.i18n.getMessage('popupArticleButtonCancel')}</span>
                <span className="article__info--separator">/</span>
              </>
            )}
            {!this.state.deleteConfirmed && (
              <span className="article__info--delete" onClick={this.handleDeleteClick}>{chrome.i18n.getMessage('popupArticleButtonDelete')}</span>
            )}
          </div>
        </div>
      </article>
    );
  }

  handleDeleteClick = () => {
    if (this.state.deleteActive) {
      this.setState({
        deleteConfirmed: true,
      });
      this.props.postsDelete(this.props.href);
    }

    this.setState(state => {
      return {
        deleteActive: !state.deleteActive,
      };
    });
  }

  handleCancelClick = () => {
    this.setState(state => {
      return {
        deleteActive: !state.deleteActive,
      };
    });
  }
}

Article.propTypes = {
  privatePost: PropTypes.bool.isRequired,
  unread: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  postsDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    postsDelete: href => dispatch(postsDelete(href)),
  };
};

export default connect(null, mapDispatchToProps)(Article);
