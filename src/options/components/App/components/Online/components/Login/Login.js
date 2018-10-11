import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userLogInAction } from 'redux-options/actions/user';
import { Paragraph, Error, Input, Button } from 'theme';
import Loading from './components/Loading';

class Login extends Component {
  state = {
    token: '',
  };

  static validateInput(input) {
    const regex = /^([^:]{1,})(:)(\S{1,})/;
    return input.match(regex);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsLoginManual')} />

        { this.props.error && <Error t={chrome.i18n.getMessage('optionsLoginError')} /> }

        {
          this.props.loading ? <Loading /> : (
            <>
              <Input
                id="token"
                label={chrome.i18n.getMessage('optionsLoginFormLabel')}
                placeholder={chrome.i18n.getMessage('optionsLoginFormPlaceholder')}
                onChange={this.onChangeUserInput}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                autoFocus
              />

              <Button
                t={chrome.i18n.getMessage('optionsLoginFormSubmit')}
                type="submit"
                disabled={!Login.validateInput(this.state.token)}
              />
            </>
          )
        }
      </form>
    );
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.userLogIn(this.state.token);
  }

  onChangeUserInput = e => {
    const { value } = e.target;
    this.setState(() => {
      return {
        token: value,
      };
    });
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  userLogIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  userLogIn: token => dispatch(userLogInAction(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
