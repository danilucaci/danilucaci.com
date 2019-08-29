import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledSecondaryButton } from "./styles";

const SecondaryButton = forwardRef(({ children, ...props }, ref) => (
  <StyledSecondaryButton ref={ref} {...props}>
    {children}
  </StyledSecondaryButton>
));

SecondaryButton.propTypes = {
  children: node.isRequired,
};

export default SecondaryButton;
