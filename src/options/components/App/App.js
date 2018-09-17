import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../Login';
import { updateUserInfo, logOut } from '../../actions/auth';
import { checkConnection, wentOffline, wentOnline } from '../../actions/online';

class App extends Component {
  componentDidMount() {
    window.addEventListener('online', this.handleOnlineEvent);
    window.addEventListener('offline', this.handleOfflineEvent);

    this.props.checkConnection(navigator.onLine);

    chrome.storage.local.get([
      'username',
      'token',
    ], result => {
      const { username, token } = result;
      if (username && token) {
        chrome.storage.local.set(
          {
            accountValidated: Date.now(),
          },
          () => {
            this.props.updateUserInfo(result);
          }
        );
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineEvent);
    window.removeEventListener('offline', this.handleOfflineEvent);
  }

  render() {
    // console.log('props: ', this.props);

    return !this.props.online ?
      <p>You have to be connected</p> :
      this.renderOnline();
  }

  handleOnlineEvent = () => {
    this.props.wentOnline();
  }

  handleOfflineEvent = () => {
    this.props.wentOffline();
  }

  renderOnline() {
    const { username } = this.props;

    return username ? (
      <>
        <p>Hi {username}</p>
        <button onClick={this.onCickLogOutButton}>Log out</button>
      </>
    ) : <Login />;
  }

  onCickLogOutButton = () => {
    chrome.storage.local.clear(() => this.props.logOut());
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  checkConnection: PropTypes.func.isRequired,
  wentOnline: PropTypes.func.isRequired,
  wentOffline: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.auth.username,
    token: state.auth.token,
    online: state.online,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: userInfo => dispatch(updateUserInfo(userInfo)),
    logOut: () => dispatch(logOut()),
    checkConnection: online => dispatch(checkConnection(online)),
    wentOffline: () => dispatch(wentOffline()),
    wentOnline: () => dispatch(wentOnline()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
