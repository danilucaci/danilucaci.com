import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { TertiaryButton, PrimaryButtonSmall } from "../Button/Button";
import { DefaultLink } from "../Link/Link";

export const StyledCookieConsent = styled.aside`
  background-color: ${theme.colors.grey00};
  border-top: ${rem(8)} solid ${theme.colors.primary600};
  display: none;

  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};
  ${theme.shadow.mobileCookieConsent};

  position: fixed;
  z-index: 1000;
  will-change: transform;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(120%);
  pointer-events: none;

  transition: transform ease-out 0.3s;

  ${(props) =>
    props.showConsent &&
    `
      display: block;
      transform: translateY(0);
      pointer-events: auto;
    `};

  ${(props) =>
    props.isTransitioning &&
    `
      display: block !important;
    `};

  ${mediaMin.xxs`
    border: 2px solid ${theme.colors.grey300};
    border-radius: 4px;
    bottom: ${rem(16)};
    left: ${rem(16)};
    max-width: ${rem(340)};
    padding: ${rem(24)};
    ${theme.shadow.dropdown};
  `};
`;

export const LearnMoreLink = styled(DefaultLink)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
  display: inline;
  white-space: nowrap;
`;

export const StyledCopy = styled(Copy)`
  display: inline;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
`;

export const CopyContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: ${rem(24)};

  ${mediaMin.m`
    margin-top: ${rem(32)};  
  `};
`;

export const StyledPrimaryButton = styled(PrimaryButtonSmall)`
  display: block;
  width: calc(50% - ${rem(8)});
  margin-left: ${rem(8)};
  float: right;
`;

export const StyledGhostButton = styled(TertiaryButton)`
  display: block;
  width: calc(50% - ${rem(8)});
  margin-right: ${rem(8)};
  float: left;
`;
