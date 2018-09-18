import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../actions/auth';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Checkbox from '../Checkbox';

class Options extends Component {
  state ={
    privateCheckboxByDefault: false,
    toReadChecboxByDefault: false,
    useDescriptionMetaTag: false,
  }

  componentDidMount() {
    chrome.storage.sync.get(options => {
      this.setState({
        ...options,
      });
    });
  }

  render() {
    const { username } = this.props;
    return (
      <>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsWelcomeMessage', [username])} />
        <Button
          t={chrome.i18n.getMessage('optionsSignOut')}
          onClick={this.onCickLogOutButton}
        />

        <hr />

        <Checkbox
          id="privateCheckboxByDefault"
          label={chrome.i18n.getMessage('optionsPrivateCheckboxByDefault')}
          onChange={this.handleCheckboxChange}
          checked={this.state.privateCheckboxByDefault}
        />

        <Checkbox
          id="toReadChecboxByDefault"
          label={chrome.i18n.getMessage('optionsToReadChecboxByDefault')}
          onChange={this.handleCheckboxChange}
          checked={this.state.toReadChecboxByDefault}
        />

        <Checkbox
          id="useDescriptionMetaTag"
          label={chrome.i18n.getMessage('optionsUseDescriptionMetaTag')}
          onChange={this.handleCheckboxChange}
          checked={this.state.useDescriptionMetaTag}
        />

      </>
    );
  }

  onCickLogOutButton = () => {
    chrome.storage.local.clear(() => this.props.logOut());
  }

  handleCheckboxChange = e => {
    const { id } = e.target;
    this.setState(state => {
      return {
        [id]: !state[id],
      };
    }, () => {
      chrome.storage.sync.set({ ...this.state });
    });
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
