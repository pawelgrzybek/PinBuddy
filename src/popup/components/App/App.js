import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/user';
import { updateUserOptions } from '../../actions/options';
import { checkConnection, wentOffline, wentOnline } from '../../actions/online';
import { Paragraph } from 'theme';
import Logo from '../Logo';
import Nav from '../Nav';
import Main from '../Main';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('online', this.handleOnlineEvent);
    window.addEventListener('offline', this.handleOfflineEvent);

    this.props.checkConnection(navigator.onLine);

    chrome.storage.local.get(['username', 'token'], result => {
      if (result.username && result.token) {
        this.props.updateUserInfo(result);
      }
    });

    chrome.storage.sync.get([
      'privateCheckboxByDefault',
      'toReadChecboxByDefault',
      'useDescriptionMetaTag'
    ], result => {
      if (
        result.privateCheckboxByDefault &&
        result.toReadChecboxByDefault &&
        result.useDescriptionMetaTag
      ) {
        this.props.updateUserOptions(result);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineEvent);
    window.removeEventListener('offline', this.handleOfflineEvent);
  }

  renderOnline() {
    if (this.props.username && this.props.token) {
      return (
        <p>great</p>
      );
    }

    return (
      <p>need to be logged in</p>
    );

  }

  render() {

    return (
      <div className="app">

        <header className="app__header">
          <div className="app__logo">
            <Logo />
          </div>
          <nav className="app__logo">
            <Nav />
          </nav>
        </header>

        <hr />

        <main className="app__main">
          <Main />
        </main>

      </div>
    );
  }

  handleOnlineEvent = () => {
    this.props.wentOnline();
  }

  handleOfflineEvent = () => {
    this.props.wentOffline();
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  updateUserOptions: PropTypes.func.isRequired,
  checkConnection: PropTypes.func.isRequired,
  wentOnline: PropTypes.func.isRequired,
  wentOffline: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username,
    token: state.user.token,
    online: state.online,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: userInfo => dispatch(updateUserInfo(userInfo)),
    updateUserOptions: userInfo => dispatch(updateUserOptions(userInfo)),
    checkConnection: online => dispatch(checkConnection(online)),
    wentOffline: () => dispatch(wentOffline()),
    wentOnline: () => dispatch(wentOnline()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

