import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Checkbox } from 'theme';
import './Filters.css';

class Filters extends Component {
  state = {
    showFilters: false,
  }

  render() {
    const {
      toRead,
      privatePosts,
      updateKeyword,
      updateToRead,
      updatePrivatePosts,
    } = this.props;

    return (
      <div className="filters">
        <div className="filters__top">
          <div className="filters__input">
            <Input
              id="filter"
              label="Search"
              placeholder="Search term"
              onChange={updateKeyword}
            />
          </div>
          <div className="filters__button">
            <Button
              t="Filter"
              onClick={this.toggleFilters}
            />
          </div>
        </div>
        <div className={this.state.showFilters ? 'filters__bottom filters__bottom--active' : 'filters__bottom'}>
          <div className="all__filter">
            <Checkbox
              id="toRead"
              label="Uread"
              checked={toRead}
              onChange={updateToRead}
            />
          </div>
          <div className="all__filter">
            <Checkbox
              id="privatePosts"
              label="Private"
              checked={privatePosts}
              onChange={updatePrivatePosts}
            />
          </div>
        </div>

      </div>
    );
  }

  toggleFilters = () => {
    this.setState(state => {
      return {
        showFilters: !state.showFilters,
      };
    });
  }
}

Filters.propTypes = {
  toRead: PropTypes.bool.isRequired,
  privatePosts: PropTypes.bool.isRequired,
  updateKeyword: PropTypes.func.isRequired,
  updateToRead: PropTypes.func.isRequired,
  updatePrivatePosts: PropTypes.func.isRequired,
};

export default Filters;

