import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledPrimaryButton } from "./styles";
import { getDisplayName } from "../../helpers/helpers";

const PrimaryButton = forwardRef(({ children, ...props }, ref) => (
  <StyledPrimaryButton ref={ref} {...props}>
    {children}
  </StyledPrimaryButton>
));

PrimaryButton.displayName = getDisplayName(PrimaryButton);

PrimaryButton.propTypes = {
  children: node.isRequired,
};

export default PrimaryButton;
