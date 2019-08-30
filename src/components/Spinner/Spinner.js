import React from "react";

import { StyledSpinner } from "./styles";

function Spinner({ light }) {
  return (
    <StyledSpinner aria-label="Loading..." light={light}>
      <use xlinkHref="#loading" />
    </StyledSpinner>
  );
}

export default Spinner;
