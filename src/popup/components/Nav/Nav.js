import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateView } from '../../actions/view';
import './Nav.css';

class Nav extends Component {
  componentDidMount() {
    chrome.storage.sync.get([
      'defaultView',
    ], result => {
      if (result.defaultView) {
        this.props.updateView(result.defaultView);
      }
    });
  }
  render() {
    const { username, online, view } = this.props;

    return (username && online) ? (
      <>
        <a
          href="all"
          data-location="all"
          title={chrome.i18n.getMessage('popupBrowseAllTitle')}
          className={view === 'all' ? 'nav nav--active' : 'nav'}
          onClick={this.handleNavLinkClick}
        >
          {chrome.i18n.getMessage('popupBrowseAllText')}
        </a>

        <span className="nav__spacer">‧</span>

        <a
          href="add"
          data-location="add"
          title={chrome.i18n.getMessage('popupAddURLTitle')}
          className={view === 'add' ? 'nav nav--active' : 'nav'}
          onClick={this.handleNavLinkClick}
        >
          {chrome.i18n.getMessage('popupAddURLText')}
        </a>
      </>
    ) : null;
  }

  handleNavLinkClick = e => {
    e.preventDefault();
    this.props.updateView(e.target.dataset.location);
  }
}

Nav.propTypes = {
  username: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  updateView: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username,
    online: state.online,
    view: state.view,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateView: location => dispatch(updateView(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

