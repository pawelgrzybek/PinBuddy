import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticateUser } from '../../actions/auth';

class Login extends Component {
  state = {
    token: '',
    error: '',
    loading: false,
  };

  renderSubmit() {
    const regex = /^([^:]{1,})(\:)(\S{1,})/;
    const validInput = this.state.token.match(regex);

    return <button type="submit" disabled={!validInput}>Submit</button>;
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <input
          type="text"
          placeholder="username:TOKEN"
          onChange={this.onChangeUserInput}
        />
        <span style={{ fontSize: '2rem' }}>
          { this.renderSubmit() }
        </span>
        {this.state.loading ? <p>Loading…</p> : null}
      </form>
    );
  }

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    fetch(`https://api.pinboard.in/v1/user/api_token?format=json&auth_token=${this.state.token}`)
      .then(authData => authData.json())
      .then(() => {
        fetch(`https://api.pinboard.in/v1/posts/all?format=json&auth_token=${this.state.token}`)
          .then(postsData => postsData.json())
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
        this.setState(() => {
          return {
            error: 'ERROR! Something went wrong dude...',
          };
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
