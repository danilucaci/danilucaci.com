import styled from "styled-components";
import { theme, rem } from "../../theme/theme";

export const StyledSubmitButton = styled.button`
  background-color: ${theme.colors.primary600};
  border: none;
  border-radius: ${theme.borderRadius.default};
  color: ${theme.colors.grey00};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(8)} ${rem(24)};
  height: ${theme.buttonHeight.xl};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  &:disabled {
    background-color: ${theme.colors.grey700};
    color: ${theme.colors.grey100};

    &:hover,
    &:focus {
      background-color: ${theme.colors.grey700};
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.primary500};
    ${theme.shadow.button.main};
    outline: none;
  }

  ${({ showSpinner }) =>
    showSpinner &&
    `
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    `}
`;
