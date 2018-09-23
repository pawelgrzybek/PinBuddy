import React, { Component } from 'react';
import './Add.css';
import { Input, Button } from 'theme';

class Add extends Component {
  state ={

  };

  render() {
    return (
      <div className="add">
        <Input
          id="title"
          label="Title"
          placeholder="Title"
          onChange={e => console.log(e)}
        />

        <Input
          id="description"
          label="Description"
          placeholder="Description"
          onChange={e => console.log(e)}
        />

        <Input
          id="tags"
          label="Tags"
          placeholder="Tags"
          onChange={e => console.log(e)}
        />

        <Button
          t="Add URL"
        />
      </div>
    );
  }
}

export default Add;

