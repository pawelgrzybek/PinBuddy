import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// state = {
//   value: '',
// }

// constructor() {
//   super();

//   chrome.storage.local.get(['key'], result => {
//     this.setState({
//       value: result.key
//     });
//   });
// }

const App = props => (
  <h1>{ props.token }</h1>
);



App.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(App);
