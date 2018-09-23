import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Title, Link } from 'theme';
import './Logo.css';

const Logo = props => {
  const { username, online } = props;
  const shouldDisplayUsername = username && online;
  return (
    <div className="logo">

      <div className="logo__title">
        <Title t={chrome.i18n.getMessage('extensionName')} />
      </div>

      {shouldDisplayUsername && (
        <>
          (
          <Link
            t={username}
            url={`https://pinboard.in/u:${username}`}
            title={chrome.i18n.getMessage('popupOpenYourPinboardProfile')}
            blank
          />
          )
        </>
      )}

    </div>
  );
};

Logo.propTypes = {
  username: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
  online: state.online,
});

export default connect(mapStateToProps)(Logo);

