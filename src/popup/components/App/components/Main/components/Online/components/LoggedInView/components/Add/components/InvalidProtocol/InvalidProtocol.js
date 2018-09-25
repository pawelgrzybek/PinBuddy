import React, { PureComponent } from 'react';
import { Paragraph, Button } from 'theme';
import './InvalidProtocol.css';

class InvalidProtocol extends PureComponent {
  render() {
    return (
      <div className="invalid-protocol">
        <Paragraph innerHTML t={chrome.i18n.getMessage('popupInvalidProtocolParagraph')} />
        <Button
          t={chrome.i18n.getMessage('popupInvalidProtocolButton')}
          onClick={this.handeOpenOptionPageButtonClick}
        />
      </div>
    );
  }

  handeOpenOptionPageButtonClick = () => {
    chrome.tabs.create({
      url: 'https://pinboard.in/api/#entity_url',
    });
  }
}

export default InvalidProtocol;
