import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledOutlinedButton } from "./styles";

const OutlinedButton = forwardRef(({ children, ...props }, ref) => (
  <StyledOutlinedButton ref={ref} {...props}>
    {children}
  </StyledOutlinedButton>
));

OutlinedButton.propTypes = {
  children: node.isRequired,
};

export default OutlinedButton;
