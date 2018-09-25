import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsAdd } from '../../../../../../../../../../actions/posts';
import { Input, Button, Checkbox } from 'theme';
import './Add.css';

class Add extends Component {
  state ={
    title: '',
    url: '',
    description: '',
    tags: '',
    privatePost: false,
    readLater: false,
    loading: false,
  };

  refInput = React.createRef();

  componentDidMount() {
    chrome.tabs.query({ active: true }, tab => {
      const { title, url } = tab[0];

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

    chrome.storage.sync.get(['privateCheckboxByDefault', 'toReadChecboxByDefault'], options => {
      this.setState({
        privatePost: options.privateCheckboxByDefault,
        readLater: options.toReadChecboxByDefault,
      });
    });

    this.refInput.current.focus();
  }

  render() {
    return (
      <div className={`add ${this.state.loading ? 'add--loading' : ''}`}>
        <Input
          id="title"
          label="Title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.updateFiled}
        />

        <Input
          id="description"
          label="Description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.updateFiled}
        />

        <Input
          id="tags"
          label="Tags"
          placeholder="Tags"
          value={this.state.tags}
          onChange={this.updateFiled}
          ref={this.refInput}
        />

        <div className="add__options">
          <div className="add__option">
            <Checkbox
              id="privatePost"
              label="private"
              checked={this.state.privatePost}
              onChange={this.handleOptionToggle}
            />
          </div>
          <div className="add__option">
            <Checkbox
              id="readLater"
              label="read later"
              checked={this.state.readLater}
              onChange={this.handleOptionToggle}
            />
          </div>
        </div>

        <Button
          t="Add URL"
          disabled={!this.state.title || this.state.loading}
          onClick={this.handleAddUrlButton}
        />
      </div>
    );
  }

  updateFiled = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  handleOptionToggle = e => {
    const { id, checked } = e.target;
    this.setState({
      [id]: checked,
    });
  }

  handleAddUrlButton = () => {
    this.setState({
      laoding: true,
    });
    this.props.postsAdd(this.state);
  }
}

Add.propTypes = {
  postsAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    postsAdd: postInfo => dispatch(postsAdd(postInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Add);
