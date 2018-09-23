import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from '../Login';
import Options from '../Options';

const Online = ({ username }) => {
  return username ? <Options /> : <Login />;
};

Online.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: state.auth.username,
});

export default connect(mapStateToProps)(Online);
