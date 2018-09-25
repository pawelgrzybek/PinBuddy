import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import All from './components/All';
import Add from './components/Add';
import Loading from './components/Loading';
import Error from './components/Error';

const LoggedInView = props => {
  return (
    <>
      {props.loading && <Loading />}
      {props.error && <Error />}
      {props.view === 'all' ? <All /> : <Add />}
    </>
  );
};

LoggedInView.propTypes = {
  view: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  view: state.view,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(LoggedInView);

