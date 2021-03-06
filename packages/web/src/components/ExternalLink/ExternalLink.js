import React from "react";
import PropTypes from "prop-types";

import { StyledExternalLink } from "./styles";

function ExternalLink({ href, children, ...props }) {
  return (
    <StyledExternalLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </StyledExternalLink>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
