import styled from "styled-components";

import Icon from "../Icon";
import { theme, rem, mediaMin } from "../../theme";

export const StyledScrollToTop = styled.a`
  background-color: ${theme.color.background.outlined.enabled};
  border: ${theme.size.border.button.default}
    ${theme.color.border.outlined.enabled} solid;
  text-decoration: none;
  position: fixed;
  bottom: ${rem(24)};
  right: ${rem(16)};
  display: block;
  z-index: 1000;

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      right: max(${rem(16)}, env(safe-area-inset-right));
      bottom: max(${rem(24)}, env(safe-area-inset-bottom));
    }
  }

  border-radius: 50%;
  will-change: transform;

  padding: ${theme.spacing.button.default.scrollToTop.mobile};

  ${mediaMin.s`
    padding: ${theme.spacing.button.default.scrollToTop.desktop};
      
  `};

  &:hover {
    transform: scale(1.1);
    transition: transform ease 150ms;

    cursor: pointer;
    background-color: ${theme.color.background.outlined.hover};
    border: ${theme.size.border.button.default}
      ${theme.color.border.outlined.hover} solid;
    box-shadow: ${theme.shadow.button.outlined.hover};
  }

  &:focus {
    transform: scale(1.1);
    transition: transform ease 150ms;

    cursor: pointer;
    background-color: ${theme.color.background.outlined.focus};
    box-shadow: ${theme.shadow.button.outlined.focus};
    border: ${theme.size.border.button.focus}
      ${theme.color.border.outlined.focus} solid;
    outline: none;
  }

  &:active {
    transform: scale(1.1);
    transition: transform ease 150ms;

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
  }
`;

export const ScrollToTopIcon = styled(Icon)`
  width: ${theme.size.icon.scrollToTop.mobile};
  height: ${theme.size.icon.scrollToTop.mobile};

  ${mediaMin.s`
    width: ${theme.size.icon.scrollToTop.desktop};
    height: ${theme.size.icon.scrollToTop.desktop};
  `};
`;
