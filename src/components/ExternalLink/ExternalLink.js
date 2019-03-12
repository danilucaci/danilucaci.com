import React from "react";
import PropTypes from "prop-types";

import { EXTERNAL_LINK } from "../../i18n/i18n";

function ExternalLink(props) {
  const locale = props.locale;
  const href = props.href;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {props.children}
      <span className="sr-only">{EXTERNAL_LINK[locale].srOnly}</span>
      <span aria-hidden="true" className="external-link" />
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ExternalLink;
