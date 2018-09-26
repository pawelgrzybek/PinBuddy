import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from './components/Login';
import Options from './components/Options';

const Online = ({ username }) => {
  return username ? <Options /> : <Login />;
};

Online.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Online);
