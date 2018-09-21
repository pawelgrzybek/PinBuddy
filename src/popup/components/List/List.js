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
            .filter(this.filterkeyword)
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
    return this.props.priv ? post.shared !== 'yes' : post;
  }

  filterkeyword = post => {
    const { keyword } = this.props;
    const postsDescription = post.description.toLowerCase();
    const searchterm = keyword.toLowerCase();

    return keyword.length ? postsDescription.includes(searchterm) : post;
  }

  renderFilteredList = post => {
    const priv = post.shared === 'no';
    const toread = post.toread === 'yes';

    return (
      <li className="list__item" key={post.hash}>
        <a
          className={`list__url ${toread ? 'list__url--toread' : ''} ${priv ? 'list__url--private' : ''}`}
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
  keyword: PropTypes.string.isRequired,
  toRead: PropTypes.bool.isRequired,
  priv: PropTypes.bool.isRequired,
};

export default List;
