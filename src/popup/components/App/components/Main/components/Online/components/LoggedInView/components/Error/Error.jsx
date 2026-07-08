import React, { Component } from "react";
import { Paragraph, Button } from "theme";
import "./Error.css";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <Paragraph innerHTML t={chrome.i18n.getMessage("popupErrorMessage")} />
        <Button
          t={chrome.i18n.getMessage("popupErrorButtonMessage")}
          onClick={this.handeOpenOptionPageButtonClick}
        />
      </div>
    );
  }

  handeOpenOptionPageButtonClick = () => {
    chrome.tabs.create({
      url: "/options/options.html"
    });
  };
}

export default Error;
