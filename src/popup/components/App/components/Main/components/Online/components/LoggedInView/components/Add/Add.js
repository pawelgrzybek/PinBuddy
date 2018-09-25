import React, { Component } from 'react';

import Form from './components/Form';
import InvalidProtocol from './components/InvalidProtocol';

class Add extends Component {
  state ={
    ready: null,
    validProtocol: null,
  };

  componentDidMount() {
    chrome.tabs.query({ active: true }, result => {
      const { url } = result[0];
      const protocol = url.match(/^[^:]+/)[0];
      const validProtocolsList = ['http', 'https', 'javascript', 'mailto', 'ftp', 'file'];
      const validProtocol = validProtocolsList.includes(protocol);

      this.setState({
        ready: true,
        validProtocol,
      });
    });
  }

  render() {
    const { ready, validProtocol } = this.state;
    const shouldDisplayForm = ready && validProtocol;

    return shouldDisplayForm ? <Form /> : <InvalidProtocol />;
  }
}

export default Add;
