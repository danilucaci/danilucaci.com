import React from "react";
import { node } from "prop-types";

import { StyledOutlinedButton } from "./styles";

function OutlinedButton({ children, ...props }) {
  return <StyledOutlinedButton {...props}>{children}</StyledOutlinedButton>;
}

OutlinedButton.propTypes = {
  children: node.isRequired,
};

export default OutlinedButton;
