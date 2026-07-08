import React, { Component } from "react";
import PropTypes from "prop-types";

import { Input, Button, Checkbox } from "theme";
import "./Filters.css";

class Filters extends Component {
  state = {
    showFilters: false
  };

  render() {
    const {
      privatePost,
      publicPost,
      unread,
      untagged,
      updateKeyword,
      updatePrivatePost,
      updatePublicPost,
      updateUnread,
      updateUntagged
    } = this.props;

    return (
      <div className="filters">
        <div className="filters__top">
          <div className="filters__input">
            <Input
              id="filter"
              label={chrome.i18n.getMessage("popupFiltersSearchLabel")}
              placeholder={chrome.i18n.getMessage(
                "popupFiltersSearchPlaceholder"
              )}
              onChange={updateKeyword}
              autoFocus
            />
          </div>
          <div className="filters__button">
            <Button
              t={chrome.i18n.getMessage("popupFiltersFilterButton")}
              onClick={this.toggleFilters}
            />
          </div>
        </div>
        <div
          className={
            this.state.showFilters
              ? "filters__bottom filters__bottom--active"
              : "filters__bottom"
          }
        >
          <div className="filters__option">
            <Checkbox
              id="privatePost"
              label={chrome.i18n.getMessage("popupFiltersCheckboxPrivate")}
              checked={privatePost}
              onChange={updatePrivatePost}
            />
          </div>
          <div className="filters__option">
            <Checkbox
              id="publicPost"
              label={chrome.i18n.getMessage("popupFiltersCheckboxPublic")}
              checked={publicPost}
              onChange={updatePublicPost}
            />
          </div>
          <div className="filters__option">
            <Checkbox
              id="unread"
              label={chrome.i18n.getMessage("popupFiltersCheckboxUnread")}
              checked={unread}
              onChange={updateUnread}
            />
          </div>
          <div className="filters__option">
            <Checkbox
              id="untagged"
              label={chrome.i18n.getMessage("popupFiltersCheckboxUntagged")}
              checked={untagged}
              onChange={updateUntagged}
            />
          </div>
        </div>
      </div>
    );
  }

  toggleFilters = () => {
    this.setState(state => {
      return {
        showFilters: !state.showFilters
      };
    });
  };
}

Filters.propTypes = {
  privatePost: PropTypes.bool.isRequired,
  publicPost: PropTypes.bool.isRequired,
  unread: PropTypes.bool.isRequired,
  untagged: PropTypes.bool.isRequired,
  updateKeyword: PropTypes.func.isRequired,
  updatePrivatePost: PropTypes.func.isRequired,
  updatePublicPost: PropTypes.func.isRequired,
  updateUnread: PropTypes.func.isRequired,
  updateUntagged: PropTypes.func.isRequired
};

export default Filters;
