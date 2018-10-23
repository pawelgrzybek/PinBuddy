import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const Footer = () => (
  <p
    className="footer"
    dangerouslySetInnerHTML={{
      __html: chrome.i18n.getMessage("optionsFooter")
    }}
  />
);

export default Footer;
