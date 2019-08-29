import React from "react";
import { node } from "prop-types";

import { StyledSecondaryButton } from "./styles";

function SecondaryButton({ children, ...props }) {
  return <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>;
}

SecondaryButton.propTypes = {
  children: node.isRequired,
};

export default SecondaryButton;
