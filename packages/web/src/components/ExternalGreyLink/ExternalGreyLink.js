import React from "react";
import PropTypes from "prop-types";

import { StyledExternalGreyLink } from "./styles";

function ExternalGreyLink({ href, children, ...props }) {
  return (
    <StyledExternalGreyLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </StyledExternalGreyLink>
  );
}

ExternalGreyLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalGreyLink;
