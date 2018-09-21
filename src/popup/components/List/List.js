import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './List.css';

class List extends Component {
  render() {
    return (
      <ul className="list">
        {
          this.props.posts
            .filter(this.filterToRead)
            .filter(this.filterPublic)
            .filter(this.filterkeyWord)
            .map(this.renderFilteredList)
        }
      </ul>
    );
  }

  filterToRead = post => {
    if (this.props.toRead) {
      return post.toread === 'yes';
    }
    return post;
  }

  filterPublic = post => {
    return this.props.privatePosts ? post.shared !== 'yes' : post;
  }

  filterkeyWord = post => {
    const { keyWord } = this.props;
    const postsDescription = post.description.toLowerCase();
    const searchterm = keyWord.toLowerCase();

    return keyWord.length ? postsDescription.includes(searchterm) : post;
  }

  renderFilteredList = post => {
    const privatePosts = post.shared === 'no';
    const toread = post.toread === 'yes';

    return (
      <li className="list__item" key={post.hash}>
        <a
          className={`list__url ${toread ? 'list__url--toread' : ''} ${privatePosts ? 'list__url--private' : ''}`}
          href={post.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="list__linkdescription">{post.description}</div>
          <div className="list__linkmeta">{post.time}</div>
          {/* <strong>{post.toread === 'yes' ? 'to read' : ''}</strong>  */}
        </a>
      </li>
    );
  }
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  keyWord: PropTypes.string.isRequired,
  toRead: PropTypes.bool.isRequired,
  privatePosts: PropTypes.bool.isRequired,
};

export default List;
