import React, { PureComponent } from 'react';
import { Paragraph, Button } from 'theme';

class LoggedOutView extends PureComponent {
  render() {
    return (
      <>
        <Paragraph
          innerHTML
          t={chrome.i18n.getMessage('popupLoggedOutViewMessage')}
        />
        <Button
          t={'Open an option page to log in'}
          onClick={this.handeOpenOptionPageButtonClick}
        />
      </>
    );
  }

  handeOpenOptionPageButtonClick = () => {
    chrome.tabs.create({
      url: '/options/options.html',
    });
  }
}

export default LoggedOutView;

