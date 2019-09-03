import styled from "styled-components";
import { theme, rem } from "../../theme/theme";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export const StyledMCSubmitButton = styled(PrimaryButton)`
  margin-top: ${rem(16)};
  width: 100%;

  ${({ isSubmitting }) =>
    isSubmitting &&
    `
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    `}
`;