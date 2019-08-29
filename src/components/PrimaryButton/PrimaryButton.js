import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledPrimaryButton } from "./styles";

const PrimaryButton = forwardRef(({ children, ...props }, ref) => (
  <StyledPrimaryButton ref={ref} {...props}>
    {children}
  </StyledPrimaryButton>
));

PrimaryButton.propTypes = {
  children: node.isRequired,
};

export default PrimaryButton;
