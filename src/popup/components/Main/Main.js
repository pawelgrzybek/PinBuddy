import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Offline from '../Offline';
import Online from '../Online';

const Main = props => {
  return props.online ? <Online /> : <Offline />;
};

Main.propTypes = {
  online: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    online: state.online,
  };
};

export default connect(mapStateToProps)(Main);

