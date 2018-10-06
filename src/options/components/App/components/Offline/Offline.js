import React from 'react';
import { Paragraph, Quote } from 'theme';

const Offline = () => (
  <>
    <Paragraph innerHTML t={chrome.i18n.getMessage('optionsOfflineMessageOne')} />
    <Quote t={chrome.i18n.getMessage('optionsOfflineMessageQuote')} />
    <Paragraph t={chrome.i18n.getMessage('optionsOfflineMessageTwo')} />
  </>
);

export default Offline;
