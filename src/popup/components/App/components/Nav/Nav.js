import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateView, getInitialView } from 'redux-popup/actions/view';
import './Nav.css';

class Nav extends Component {
  componentDidMount() {
    this.props.getInitialView();
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { username, online, view } = this.props;
    const shouldShowNav = username && online;

    return shouldShowNav && (
      <>
        <a
          href="all"
          data-location="all"
          title={`${chrome.i18n.getMessage('popupBrowseAllTitle')} ${navigator.platform === 'MacIntel' ? '(⌥ + 1)' : '(alt + 1)'}`}
          className={view === 'all' ? 'nav nav--active' : 'nav'}
          onClick={this.handleNavLinkClick}
        >
          {chrome.i18n.getMessage('popupBrowseAllText')}
        </a>

        <span className="nav__spacer">‧</span>

        <a
          href="add"
          data-location="add"
          title={`${chrome.i18n.getMessage('popupAddURLTitle')} ${navigator.platform === 'MacIntel' ? '(⌥ + 2)' : '(alt + 2)'}`}
          className={view === 'add' ? 'nav nav--active' : 'nav'}
          onClick={this.handleNavLinkClick}
        >
          {chrome.i18n.getMessage('popupAddURLText')}
        </a>
      </>
    );
  }

  handleNavLinkClick = e => {
    e.preventDefault();
    this.props.updateView(e.target.dataset.location);
  }

  handleKeydown = e => {
    //  ⌥ + 1
    if (e.keyCode === 49 && e.altKey) {
      e.preventDefault();
      this.props.updateView('all');
    }
    //  ⌥ + 2
    else if (e.keyCode === 50 && e.altKey) {
      e.preventDefault();
      this.props.updateView('add');
    }
  }
}

Nav.propTypes = {
  username: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  updateView: PropTypes.func.isRequired,
  getInitialView: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
  online: state.online,
  view: state.view,
});

const mapDispatchToProps = dispatch => {
  return {
    updateView: location => dispatch(updateView(location)),
    getInitialView: () => dispatch(getInitialView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

