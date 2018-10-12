import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import All from './components/All';
import Add from './components/Add';
import Loading from './components/Loading';
import Error from './components/Error';

export const LoggedInView = props => {
  const {
    loading,
    error,
    view,
  } = props;

  if (loading) {
    return <Loading />;
  }
  else if (error) {
    return <Error />;
  }

  return view === 'all' ? <All /> : <Add />;
};

LoggedInView.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  view: state.view,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(LoggedInView);

