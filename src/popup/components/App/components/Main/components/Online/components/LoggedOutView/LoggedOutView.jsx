import React, { PureComponent } from "react";
import { Paragraph, Button } from "theme";

class LoggedOutView extends PureComponent {
  render() {
    return (
      <div>
        <Paragraph
          innerHTML
          t={chrome.i18n.getMessage("popupLoggedOutViewMessage")}
        />

        <Button
          t={chrome.i18n.getMessage("popupLoggedOutViewButtonMessage")}
          onClick={this.handeOpenOptionPageButtonClick}
        />
      </div>
    );
  }

  handeOpenOptionPageButtonClick = () =>
    chrome.tabs.create({
      url: "/options/options.html"
    });
}

export default LoggedOutView;
