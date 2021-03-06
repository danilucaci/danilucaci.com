import React from "react";
import { node, string } from "prop-types";

import { StyledSecondaryLinkButton } from "./styles";

function SecondaryLinkButton({ children, to, ...rest }) {
  return (
    <StyledSecondaryLinkButton role="button" to={to} {...rest}>
      {children}
    </StyledSecondaryLinkButton>
  );
}

SecondaryLinkButton.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
};

export default SecondaryLinkButton;
