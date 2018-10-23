import React from "react";
import PropTypes from "prop-types";

import "./Quote.css";

const Quote = ({ t }) => <blockquote className="quote">{t}</blockquote>;

Quote.propTypes = {
  t: PropTypes.string.isRequired
};

export default Quote;
