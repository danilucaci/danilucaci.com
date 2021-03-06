import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledSecondaryButton = styled.button`
  background-color: ${theme.color.background.secondary.enabled};
  border: ${theme.size.border.button.default}
    ${theme.color.border.secondary.enabled} solid;
  border-radius: ${theme.borderRadius.button};
  color: ${theme.color.text.button.secondary.enabled} !important;
  display: block;

  text-align: center;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};
  font-style: normal;
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  padding: ${theme.spacing.button.default.vertical}
    ${theme.spacing.button.default.horizontal};
  height: ${theme.size.button.height.default};

  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${theme.color.background.secondary.hover};
    border: ${theme.size.border.button.default}
      ${theme.color.border.secondary.hover} solid;
    box-shadow: ${theme.shadow.button.secondary.hover};
  }

  &:focus {
    cursor: pointer;
    background-color: ${theme.color.background.secondary.focus};
    box-shadow: ${theme.shadow.button.secondary.focus};
    border: ${theme.size.border.button.focus}
      ${theme.color.border.secondary.focus} solid;
    outline: none;
  }

  &:active {
    cursor: pointer;
    background-color: ${theme.color.background.secondary.active};
    border: ${theme.size.border.button.default}
      ${theme.color.border.secondary.active} solid;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    color: ${theme.color.text.button.secondary.disabled} !important;
    cursor: pointer;
    background-color: ${theme.color.background.disabled.default};
    border: ${theme.size.border.button.default}
      ${theme.color.border.secondary.disabled} solid;
    outline: none;
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
