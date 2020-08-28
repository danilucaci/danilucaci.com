import React from "react";
import { bool } from "prop-types";

import { StyledSpinner } from "./styles";

function Spinner({ light }) {
  return (
    <StyledSpinner aria-label="Loading..." light={light}>
      <use xlinkHref="#loading" />
    </StyledSpinner>
  );
}

Spinner.propTypes = {
  light: bool,
};

Spinner.defaultProps = {
  light: false,
};

export default Spinner;
