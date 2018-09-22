import React from 'react';
import { Paragraph } from 'theme';
import './Loading.css';

const Loading = props => (
  <div className="loading">
    <Paragraph t={chrome.i18n.getMessage('popupLoadingMessage')} />
  </div>
);

export default Loading;
