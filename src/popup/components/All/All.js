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
    toRead: false,
    priv: false,
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
          priv={this.state.priv}
          updateKeyword={this.updateKeyword}
          updateToRead={this.updateToRead}
          updatePriv={this.updatePriv}
        />
        <List
          posts={this.props.posts}
          keyword={this.state.keyword}
          toRead={this.state.toRead}
          priv={this.state.priv}
        />
      </div>
    ) : (
      <Paragraph t="Loading" />
    );
  }

  updateKeyword = e => {
    this.setState({
      keyword: e.target.value,
    });
  }

  updateToRead = e => {
    this.setState(state => {
      return {
        toRead: !state.toRead,
      };
    });
  }

  updatePriv = e => {
    this.setState(state => {
      return {
        priv: !state.priv,
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
