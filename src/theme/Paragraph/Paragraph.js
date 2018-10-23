import React from "react";
import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({ innerHTML, t }) => {
  return innerHTML ? (
    <p className="paragraph" dangerouslySetInnerHTML={{ __html: t }} />
  ) : (
    <p className="paragraph">{t}</p>
  );
};

Paragraph.propTypes = {
  t: PropTypes.string.isRequired,
  innerHTML: PropTypes.bool
};

Paragraph.defaultProps = {
  innerHTML: false
};

export default Paragraph;
