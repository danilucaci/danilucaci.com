import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledOutlinedButton = styled.button`
  background-color: ${theme.color.background.outlined.enabled};
  border: ${theme.size.border.button.default}
    ${theme.color.border.outlined.enabled} solid;
  border-radius: ${theme.borderRadius.button};
  color: ${theme.color.text.button.outlined.enabled} !important;
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
    background-color: ${theme.color.background.outlined.hover};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.hover} solid;
    box-shadow: ${theme.shadow.button.outlined.hover};
  }

  &:focus {
    cursor: pointer;
    background-color: ${theme.color.background.outlined.focus};
    box-shadow: ${theme.shadow.button.outlined.focus};
    border: ${theme.size.border.button.focus}
      ${theme.color.border.outlined.focus} solid;
    outline: none;
  }

  &:active {
    cursor: pointer;
    background-color: ${theme.color.background.outlined.active};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.active} solid;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    color: ${theme.color.text.button.outlined.disabled} !important;
    cursor: pointer;
    background-color: ${theme.color.background.disabled.default};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.disabled} solid;
    outline: none;
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
