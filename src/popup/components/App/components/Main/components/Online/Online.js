import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoggedInView from './components/LoggedInView';
import LoggedOutView from './components/LoggedOutView';

const Online = props => {
  const { username, token } = props;
  const userSignedIn = username && token;

  return userSignedIn ? <LoggedInView /> : <LoggedOutView />;
};

Online.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
  token: state.user.token,
});

export default connect(mapStateToProps)(Online);

