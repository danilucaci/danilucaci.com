import React from "react";

import { StyledSpinner } from "./styles";

function Spinner({ dark }) {
  return (
    <StyledSpinner aria-label="Loading..." dark={dark}>
      <use xlinkHref="#loading" />
    </StyledSpinner>
  );
}

export default Spinner;
