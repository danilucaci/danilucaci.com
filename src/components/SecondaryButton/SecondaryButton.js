import React, { forwardRef } from "react";
import { node } from "prop-types";

import { StyledSecondaryButton } from "./styles";
import { getDisplayName } from "../../helpers/helpers";

const SecondaryButton = forwardRef(({ children, ...props }, ref) => (
  <StyledSecondaryButton ref={ref} {...props}>
    {children}
  </StyledSecondaryButton>
));

SecondaryButton.displayName = getDisplayName(SecondaryButton);

SecondaryButton.propTypes = {
  children: node.isRequired,
};

export default SecondaryButton;
