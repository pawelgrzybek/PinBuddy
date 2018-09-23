import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticateUser } from '../../actions/auth';
import { Paragraph, Error, Input, Button } from 'theme';

const API = 'https://api.pinboard.in/v1/';

class Login extends Component {
  state = {
    token: '',
    error: false,
    loading: false,
  };

  static validateInput(input) {
    const regex = /^([^:]{1,})(:)(\S{1,})/;
    return input.match(regex);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Paragraph innerHTML t={chrome.i18n.getMessage('optionsLoginManual')} />

        { this.state.error && <Error t={chrome.i18n.getMessage('optionsLoginError')} /> }

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
      error: false,
    });

    fetch(`${API}user/api_token?format=json&auth_token=${this.state.token}`)
      .then(dataAuth => dataAuth.json())
      .then(() => {
        const now = Date.now();
        const [username, token] = this.state.token.split(':');
        chrome.storage.local.set(
          {
            username,
            token,
          },
          () => {
            this.props.authenticateUser(this.state.token);
          }
        );

        fetch(`${API}posts/all?format=json&auth_token=${this.state.token}`)
          .then(dataPosts => dataPosts.json())
          .then(posts => {
            chrome.storage.local.set(
              {
                posts,
                postsFetched: now,
              }
            );
          });

        fetch(`${API}tags/get?format=json&auth_token=${this.state.token}`)
          .then(dataTags => dataTags.json())
          .then(tags => {
            const listOfTags = Object.keys(tags);

            chrome.storage.local.set(
              {
                tags: listOfTags,
                tagsFetched: now,
              }
            );
          });

      })
      .catch(() => {
        this.setState({
          error: true,
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
