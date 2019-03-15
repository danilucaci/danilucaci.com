import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../Icon/Icon";

import { theme, rem } from "../../theme/globalStyles";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Icon)`
  animation: ${spin} 1s infinite linear;
  fill: ${(props) => (props.dark ? theme.colors.gray500 : theme.colors.main100)};
  width: ${rem(24)};
  height: ${rem(24)};
  margin-left: auto;
  margin-right: auto;
`;

function Spinner({ dark }) {
  return (
    <StyledSpinner aria-label="Loading..." dark={dark}>
      <use xlinkHref="#loading" />
    </StyledSpinner>
  );
}

export default Spinner;
