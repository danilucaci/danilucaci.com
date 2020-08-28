import React from "react";
import { node } from "prop-types";

import { StyledMain } from "./styles";

function Main({ children }) {
  return <StyledMain role="main">{children}</StyledMain>;
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
