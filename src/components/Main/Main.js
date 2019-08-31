import React from "react";

import { StyledMain } from "./styles";

function Main({ children }) {
  return <StyledMain role="main">{children}</StyledMain>;
}

export default Main;
