import styled from "styled-components";
import { theme, rem } from "../../theme/globalStyles";

export const StyledSubmitButton = styled.input`
  background-color: ${theme.colors.main600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(24)};
  height: ${theme.buttonHeight.xl};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  &:disabled {
    background-color: ${theme.colors.dark700};
    color: ${theme.colors.grey100};

    &:hover,
    &:focus {
      background-color: ${theme.colors.dark700};
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;
