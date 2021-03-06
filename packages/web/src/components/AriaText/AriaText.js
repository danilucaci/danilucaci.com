import React from "react";
import { node } from "prop-types";

import { StyledAriaText } from "./styles";

function AriaText({ children, ...props }) {
  return <StyledAriaText {...props}>{children}</StyledAriaText>;
}

AriaText.propTypes = {
  children: node.isRequired,
};

export default AriaText;
