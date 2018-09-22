import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../Loading';

import All from '../All';
import Add from '../Add';

const LoggedInView = props => {
  return (
    <>
      {props.loading && <Loading />}
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
});

export default connect(mapStateToProps)(LoggedInView);

