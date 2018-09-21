import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Filters from '../Filters';
import List from '../List';
import './All.css';
import { Paragraph } from 'theme';

class All extends Component {
  state = {
    keyWord: '',
    toRead: false,
    privatePosts: false,
  }

  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.getPosts();
    }
  }

  render() {
    return this.props.posts.length ? (
      <div className="all">
        <Filters
          toRead={this.state.toRead}
          privatePosts={this.state.privatePosts}
          updateKeyWord={this.updateKeyWord}
          updateToRead={this.updateToRead}
          updatePrivatePosts={this.updatePrivatePosts}
        />
        <List
          posts={this.props.posts}
          keyWord={this.state.keyWord}
          toRead={this.state.toRead}
          privatePosts={this.state.privatePosts}
        />
      </div>
    ) : (
      <Paragraph t="Loading" />
    );
  }

  updateKeyWord = e => {
    this.setState({
      keyWord: e.target.value,
    });
  }

  updateToRead = e => {
    this.setState(state => {
      return {
        toRead: !state.toRead,
      };
    });
  }

  updatePrivatePosts = e => {
    this.setState(state => {
      return {
        privatePosts: !state.privatePosts,
      };
    });
  }
}

All.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
