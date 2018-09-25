import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsAdd } from 'redux-popup/actions/posts';
import { Input, Button, Checkbox } from 'theme';
import './Form.css';

class Form extends Component {
  state ={
    title: '',
    url: '',
    description: '',
    tags: '',
    privatePost: false,
    readLater: false,
  };

  refInput = React.createRef();

  componentDidMount() {

    chrome.tabs.query({ active: true }, result => {
      const { title, url } = result[0];
      this.setState({
        title,
        url,
      });
    });

    chrome.tabs.executeScript({ code: 'window.getSelection().toString()' }, selection => {
      if (selection) {
        this.setState({
          description: selection[0],
        });
      }
    });

    chrome.storage.sync.get(['privateCheckboxByDefault', 'toReadChecboxByDefault'], result => {
      this.setState({
        privatePost: result.privateCheckboxByDefault,
        readLater: result.toReadChecboxByDefault,
      });
    });

    this.refInput.current.focus();
  }

  render() {
    return (
      <div className="form">

        <Input
          id="title"
          label="Title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />

        <Input
          id="description"
          label="Description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleInputChange}
        />

        <Input
          id="tags"
          label="Tags"
          placeholder="Tags"
          value={this.state.tags}
          onChange={this.handleInputChange}
          ref={this.refInput}
        />

        <div className="form__options">
          <div className="form__option">

            <Checkbox
              id="privatePost"
              label="private"
              checked={this.state.privatePost}
              onChange={this.handleCheckboxChange}
            />

          </div>
          <div className="form__option">

            <Checkbox
              id="readLater"
              label="read later"
              checked={this.state.readLater}
              onChange={this.handleCheckboxChange}
            />

          </div>
        </div>

        <Button
          t="Add URL"
          disabled={!this.state.title || this.state.loading}
          onClick={this.handleButtonClick}
        />

      </div>
    );
  }

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  handleCheckboxChange = e => {
    const { id, checked } = e.target;
    this.setState({
      [id]: checked,
    });
  }

  handleButtonClick = () => {
    this.setState({
      laoding: true,
    });
    this.props.postsAdd(this.state);
  }
}

Form.propTypes = {
  postsAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postsAdd: postInfo => dispatch(postsAdd(postInfo)),
});

export default connect(null, mapDispatchToProps)(Form);
