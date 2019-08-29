import React from "react";
import { node } from "prop-types";

import { StyledPrimaryButton } from "./styles";

function PrimaryButton({ children, ...props }) {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
}

PrimaryButton.propTypes = {
  children: node.isRequired,
};

export default PrimaryButton;
