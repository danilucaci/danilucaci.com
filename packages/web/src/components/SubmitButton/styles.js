import styled from "styled-components";

import { rem } from "../../theme";
import PrimaryButton from "../PrimaryButton";

export const StyledSubmitButton = styled(PrimaryButton)`
  margin-top: ${rem(16)};
  width: 100%;

  ${({ showSpinner }) =>
    showSpinner &&
    `
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    `}
`;
