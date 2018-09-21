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
    keyword: '',
    privatePost: false,
    publicPost: false,
    untagged: false,
    unread: false,
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
          privatePost={this.state.privatePost}
          publicPost={this.state.publicPost}
          unread={this.state.unread}
          untagged={this.state.untagged}
          updateKeyword={this.updateKeyword}
          updatePrivatePost={this.updatePrivatePost}
          updatePublicPost={this.updatePublicPost}
          updateUnread={this.updateUnread}
          updateUntagged={this.updateUntagged}
        />
        <List
          posts={this.props.posts}
          privatePost={this.state.privatePost}
          publicPost={this.state.publicPost}
          unread={this.state.unread}
          untagged={this.state.untagged}
          keyword={this.state.keyword}
        />
      </div>
    ) : (
      <Paragraph t="Loading" />
    );
  }

  updatePrivatePost = () => {
    this.setState(state => {
      return {
        privatePost: !state.privatePost,
        publicPost: false,
      };
    });
  }

  updatePublicPost = () => {
    this.setState(state => {
      return {
        publicPost: !state.publicPost,
        privatePost: false,
      };
    });
  }

  updateUnread = () => {
    this.setState(state => {
      return {
        unread: !state.unread,
      };
    });
  }

  updateUntagged = () => {
    this.setState(state => {
      return {
        untagged: !state.untagged,
      };
    });
  }

  updateKeyword = e => {
    this.setState({
      keyword: e.target.value,
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
