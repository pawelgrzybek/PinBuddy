import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticateUser } from '../../actions/auth';
import Paragraph from '../Paragraph';
import Error from '../Error';
import Input from '../Input';
import Button from '../Button';

const API = 'https://api.pinboard.in/v1/';

class Login extends Component {
  state = {
    token: '',
    error: false,
    loading: false,
  };

  static validateInput(input) {
    const regex = /^([^:]{1,})(\:)(\S{1,})/;
    return input.match(regex);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsLoginManual')} />

        {
          this.state.error ?
            <Error t={chrome.i18n.getMessage('optionsLoginError')} />
            : null
        }

        {
          this.state.loading ? (
            <Paragraph innerHTML t={chrome.i18n.getMessage('optionsLoginLoading')} />
          ) : (
            <>
              <Input
                id="token"
                label={chrome.i18n.getMessage('optionsLoginFormLabel')}
                placeholder={chrome.i18n.getMessage('optionsLoginFormPlaceholder')}
                onChange={this.onChangeUserInput}
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
    this.setState({
      loading: true,
    });

    fetch(`${API}user/api_token?auth_token=${this.state.token}`)
      .then(() => {
        fetch(`${API}posts/all?format=json&auth_token=${this.state.token}`)
          .then(data => data.json())
          .then(posts => {
            const [username, token] = this.state.token.split(':');
            chrome.storage.local.set(
              {
                username,
                token,
                posts,
                postsFetched: Date.now(),
              },
              () => {
                this.props.authenticateUser(this.state.token);
              }
            );
          });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });

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
  token: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  authenticateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.token,
    username: state.auth.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: token => {
      dispatch(authenticateUser(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
