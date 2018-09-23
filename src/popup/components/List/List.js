import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';
import './List.css';

class List extends Component {
  componentDidMount() {
    addEventListener('keydown', this.handleKeyDownEvent);
  }

  componentWillUnmount() {
    removeEventListener('keydown', this.handleKeyDownEvent);
  }

  render() {
    return (
      <ul className="list">
        {
          this.props.posts
            .filter(this.filterPrivate)
            .filter(this.filterPublic)
            .filter(this.filterUnread)
            .filter(this.filterUntagged)
            .filter(this.filterkeyword)
            .map(this.renderFilteredList)
        }
      </ul>
    );
  }

  filterPrivate = post => {
    return this.props.privatePost ? post.shared === 'no' : post;
  }

  filterPublic = post => {
    return this.props.publicPost ? post.shared === 'yes' : post;
  }

  filterUnread = post => {
    if (this.props.unread) {
      return post.toread === 'yes';
    }
    return post;
  }

  filterUntagged = post => {
    return this.props.untagged ? post.tags === '' : post;
  }

  filterkeyword = post => {
    const { keyword } = this.props;
    const postsDescription = post.description.toLowerCase();
    const searchterm = keyword.toLowerCase();

    return keyword.length ? postsDescription.includes(searchterm) : post;
  }

  renderFilteredList = post => {
    const privatePost = post.shared === 'no';
    const unread = post.toread === 'yes';

    return (
      <li className="list__item" key={post.hash}>
        <Article
          privatePost={privatePost}
          unread={unread}
          href={post.href}
          description={post.description}
          time={post.time}
          tags={post.tags}
        />
      </li>
    );
  }

  handleKeyDownEvent = e => {
    const elements = [...document.querySelectorAll('.input, .article__url')];
    const currentFocus = elements.findIndex(elm => elm === document.activeElement);
    const isInsideElements = elements.includes(document.activeElement);

    if (e.keyCode === 38 && isInsideElements) {
      const previousElement = currentFocus === 0 ? elements.length - 1 : currentFocus - 1;
      elements[previousElement].focus();
    }
    else if (e.keyCode === 40 && isInsideElements) {
      const nextElement = currentFocus === elements.length - 1 ? 0 : currentFocus + 1;
      elements[nextElement].focus();
    }
  }
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  unread: PropTypes.bool.isRequired,
  untagged: PropTypes.bool.isRequired,
  privatePost: PropTypes.bool.isRequired,
  publicPost: PropTypes.bool.isRequired,
};

export default List;
