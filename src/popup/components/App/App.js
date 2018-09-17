import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    filter: '',
  }

  constructor() {
    super();

    this.filterInput = React.createRef();


    chrome.storage.local.get(['posts'], result => {
      this.setState({
        posts: result.posts
      });
    });
  }

  componentDidMount() {
    this.filterInput.current.focus();
  }

  render() {
    return (
      <div className="wrapper">
        <h1>All posts</h1>
        <input type="text" onChange={this.handleFilterInput} ref={this.filterInput} />
        <ul>
          { this.state.posts.filter(this.filterPosts, this).map(this.renderSinglePost, this) }
          {/* { this.state.posts.map(this.renderSinglePost) } */}
        </ul>
      </div>
    );
  }

  handleFilterInput = e => {
    this.setState({
      filter: e.target.value,
    });
  }

  filterPosts(post) {
    return post.description.toLowerCase().includes(this.state.filter.toLowerCase());
  }

  renderSinglePost(post) {
    return (
      <li key={post.hash}>
        <a href={post.href}>{post.description}</a>
      </li>
    );
  }
}



export default App;
