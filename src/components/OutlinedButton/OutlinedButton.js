import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledOutlinedButton } from "./styles";
import { getDisplayName } from "../../helpers/helpers";

const OutlinedButton = forwardRef(({ children, ...props }, ref) => (
  <StyledOutlinedButton ref={ref} {...props}>
    {children}
  </StyledOutlinedButton>
));

OutlinedButton.displayName = getDisplayName(OutlinedButton);

OutlinedButton.propTypes = {
  children: node.isRequired,
};

export default OutlinedButton;
