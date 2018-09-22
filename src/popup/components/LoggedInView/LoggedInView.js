import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import All from '../All';
import Add from '../Add';
import Loading from '../Loading';
import Error from '../Error';

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

