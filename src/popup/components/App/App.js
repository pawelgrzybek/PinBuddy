import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '',
  }

  constructor() {
    super();

    chrome.storage.local.get(['key'], result => {
      this.setState({
        value: result.key
      });
    });
  }

  render() {
    return (
      <h1>{ this.state.value }</h1>
    );
  }
}

export default App;
