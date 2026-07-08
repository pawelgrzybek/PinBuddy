import React from "react";
import { Paragraph, Quote } from "theme";

const Offline = () => (
  <>
    <Paragraph innerHTML t={chrome.i18n.getMessage("popupOfflineMessageOne")} />
    <Quote t={chrome.i18n.getMessage("popupOfflineMessageQuote")} />
    <Paragraph t={chrome.i18n.getMessage("popupOfflineMessageTwo")} />
  </>
);

export default Offline;
