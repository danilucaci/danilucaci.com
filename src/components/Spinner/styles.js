import styled, { keyframes } from "styled-components";
import { Icon } from "../Icon/Icon";

import { theme } from "../../theme/theme";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Icon)`
  animation: ${spin} 1s infinite linear;

  fill: ${({ light }) =>
    light ? theme.color.icon.light : theme.color.icon.default};

  width: ${theme.size.icon.default};
  height: ${theme.size.icon.default};
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
`;
