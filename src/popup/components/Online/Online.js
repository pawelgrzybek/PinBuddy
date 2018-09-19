import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import All from '../All';
import Add from '../Add';

const Online = props => {
  const { view } = props;

  return view === 'all' ? <All /> : <Add />;
};

Online.propTypes = {
  view: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    view: state.view,
  };
};

export default connect(mapStateToProps)(Online);

