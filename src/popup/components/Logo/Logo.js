import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, Link } from 'theme';
import './Logo.css';

const Logo = props => {
  const { username, online } = props;
  return (
    <div className="logo">

      <div className="logo__title">
        <Title t={chrome.i18n.getMessage('extensionName')} />
      </div>

      {
        username && online ? (
          <div className="logo__link">
            (
            <Link
              t={username}
              url={`https://pinboard.in/u:${username}`}
              title="Visit users page"
              blank
            />
            )
          </div>
        ) : null
      }

    </div>
  );
};

Logo.propTypes = {
  username: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.user.username,
    online: state.online,
  };
};

export default connect(mapStateToProps)(Logo);

