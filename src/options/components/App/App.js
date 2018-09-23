import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateUsername } from '../../actions/auth';
import { checkConnection, wentOffline, wentOnline } from '../../actions/online';
import Footer from '../Footer';
import Online from '../Online';
import Offline from '../Offline';
import { Title } from 'theme';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('online', this.handleOnlineEvent);
    window.addEventListener('offline', this.handleOfflineEvent);

    this.props.checkConnection(navigator.onLine);
    this.props.updateUsername();
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineEvent);
    window.removeEventListener('offline', this.handleOfflineEvent);
  }

  render() {
    return (
      <div className="app">

        <header className="app__header">
          <Title t={chrome.i18n.getMessage('optionsTitle')} />
        </header>

        <main className="app__main">
          { this.props.online ? <Online /> : <Offline /> }
        </main>

        <footer className="app__footer">
          <Footer t={chrome.i18n.getMessage('optionsFooter')} />
        </footer>

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
  online: PropTypes.bool.isRequired,
  updateUsername: PropTypes.func.isRequired,
  checkConnection: PropTypes.func.isRequired,
  wentOnline: PropTypes.func.isRequired,
  wentOffline: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  online: state.online,
});

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: userInfo => dispatch(updateUsername(userInfo)),
    checkConnection: online => dispatch(checkConnection(online)),
    wentOffline: () => dispatch(wentOffline()),
    wentOnline: () => dispatch(wentOnline()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
