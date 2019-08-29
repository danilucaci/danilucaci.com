import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledPrimaryButton = styled.button`
  background-color: ${theme.color.background.primary.enabled};
  border: ${theme.size.border.button.default}
    ${theme.color.border.primary.enabled} solid;
  border-radius: ${theme.borderRadius.button};
  color: ${theme.color.text.button.primary.enabled} !important;
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
    background-color: ${theme.color.background.primary.hover};
    border: ${theme.size.border.button.default}
      ${theme.color.border.primary.hover} solid;
    box-shadow: ${theme.shadow.button.primary.hover};
  }

  &:focus {
    cursor: pointer;
    background-color: ${theme.color.background.primary.focus};
    box-shadow: ${theme.shadow.button.primary.focus};
    border: ${theme.size.border.button.focus}
      ${theme.color.border.primary.focus} solid;
    outline: none;
  }

  &:active {
    cursor: pointer;
    background-color: ${theme.color.background.primary.active};
    border: ${theme.size.border.button.default}
      ${theme.color.border.primary.active} solid;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    color: ${theme.color.text.button.primary.disabled} !important;
    cursor: pointer;
    background-color: ${theme.color.background.disabled.default};
    border: ${theme.size.border.button.default}
      ${theme.color.border.primary.disabled} solid;
    outline: none;
    box-shadow: none;
  }
`;
