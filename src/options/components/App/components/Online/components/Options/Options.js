import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from 'redux-options/actions/auth';
import { optionsUpdateAction, fetchOptionsAction } from 'redux-options/actions/options';
import { Paragraph, Button, Checkbox, Select } from 'theme';

const defaultViewOptions = [
  {
    value: 'all',
    text: chrome.i18n.getMessage('optionsDefaultViewAllText'),
  },
  {
    value: 'add',
    text: chrome.i18n.getMessage('optionsDefaultViewAddText'),
  },
];

class Options extends Component {
  componentDidMount() {
    this.props.fetchOptions();
  }

  render() {
    const { username } = this.props;
    const {
      defaultView,
      privateCheckboxByDefault,
      toReadChecboxByDefault,
    } = this.props.options;
    return (
      <>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsWelcomeMessage', [username])} />
        <Button
          t={chrome.i18n.getMessage('optionsSignOut')}
          onClick={this.onCickLogOutButton}
        />

        <hr />

        <Select
          id="defaultView"
          label={chrome.i18n.getMessage('optionsDefaultView')}
          onChange={this.handleSelectChange}
          options={defaultViewOptions}
          selected={defaultView}
        />

        <Checkbox
          id="privateCheckboxByDefault"
          label={chrome.i18n.getMessage('optionsPrivateCheckboxByDefault')}
          onChange={this.handleCheckboxChange}
          checked={privateCheckboxByDefault}
        />

        <Checkbox
          id="toReadChecboxByDefault"
          label={chrome.i18n.getMessage('optionsToReadChecboxByDefault')}
          onChange={this.handleCheckboxChange}
          checked={toReadChecboxByDefault}
        />
      </>
    );
  }

  onCickLogOutButton = () => {
    this.props.logOut();
  }

  handleSelectChange = e => {
    const { id, selectedIndex } = e.target;
    this.props.optionsUpdate({
      [id]: defaultViewOptions[selectedIndex].value,
    });
  }

  handleCheckboxChange = e => {
    const { id, checked } = e.target;
    this.props.optionsUpdate({
      [id]: checked,
    });
  }

}

Options.propTypes = {
  username: PropTypes.string.isRequired,
  options: PropTypes.shape({
    defaultView: PropTypes.string.isRequired,
    privateCheckboxByDefault: PropTypes.bool.isRequired,
    toReadChecboxByDefault: PropTypes.bool.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired,
  optionsUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.auth.username,
    options: state.options,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    fetchOptions: () => dispatch(fetchOptionsAction()),
    optionsUpdate: option => dispatch(optionsUpdateAction(option)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
