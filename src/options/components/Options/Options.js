import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../actions/auth';
import Paragraph from '../Paragraph';
import Button from '../Button';

class Options extends Component {
  render() {
    const { username } = this.props;
    return (
      <>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsWelcomeMessage', [username])} />
        <Button
          t={chrome.i18n.getMessage('optionsSignOut')}
          onClick={this.onCickLogOutButton}
        />
      </>
    );
  }

  onCickLogOutButton = () => {
    chrome.storage.local.clear(() => this.props.logOut());
  }
}

Options.propTypes = {
  username: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.auth.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
