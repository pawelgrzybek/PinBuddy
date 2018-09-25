import React from 'react';
import { Paragraph } from 'theme';

const Offline = () => (
  <Paragraph t={chrome.i18n.getMessage('optionsOfflineMessage')} />
);

export default Offline;
