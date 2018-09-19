import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/user';
import { checkConnection, wentOffline, wentOnline } from '../../actions/online';
import Logo from '../Logo';
import Nav from '../Nav';
import Main from '../Main';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('online', this.handleOnlineEvent);
    window.addEventListener('offline', this.handleOfflineEvent);
    this.props.checkConnection(navigator.onLine);
    this.props.getUserInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineEvent);
    window.removeEventListener('offline', this.handleOfflineEvent);
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
  getUserInfo: PropTypes.func.isRequired,
  checkConnection: PropTypes.func.isRequired,
  wentOnline: PropTypes.func.isRequired,
  wentOffline: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
    checkConnection: online => dispatch(checkConnection(online)),
    wentOnline: () => dispatch(wentOnline()),
    wentOffline: () => dispatch(wentOffline()),
  };
};


export default connect(null, mapDispatchToProps)(App);
