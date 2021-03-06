import styled from "styled-components";

import { rem } from "../../theme";
import OutlinedButton from "../OutlinedButton";
import Icon from "../Icon";

export const StyledLoadComments = styled(OutlinedButton)`
  margin-top: ${rem(16)};

  ${({ showSpinner }) =>
    showSpinner &&
    `
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    `}
`;

export const StyledIcon = styled(Icon)`
  margin-right: ${rem(8)};
`;
