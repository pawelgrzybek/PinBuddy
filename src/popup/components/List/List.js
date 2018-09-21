import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';
import './List.css';

class List extends Component {
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
