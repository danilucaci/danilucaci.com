import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../../theme/theme";
import { Copy } from "../Copy/Copy";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import { DefaultLink } from "../Link/Link";

export const StyledCookieConsent = styled.aside`
  background-color: ${theme.color.background.section.lightest};
  border-top: ${rem(8)} solid ${theme.color.border.primary.enabled};
  display: none;

  padding: ${rem(16)} ${rem(16)} ${rem(24)} ${rem(16)};

  position: fixed;
  z-index: 1000;
  will-change: transform;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(120%);
  pointer-events: none;

  transition: transform ease-out 0.25s;

  ${({ showConsent }) =>
    showConsent &&
    css`
      display: block;
      transform: translateY(0);
      pointer-events: auto;
    `};

  ${({ isTransitioning }) =>
    isTransitioning &&
    css`
      display: block !important;
    `};

  ${mediaMin.xxs`
    background-color: white;
    border: 2px solid ${theme.color.border.default};
    border-radius: 4px;
    bottom: ${rem(16)};
    left: ${rem(16)};
    max-width: ${rem(340)};
    padding: ${rem(24)};
    box-shadow: ${theme.shadow.cookieConsent};
  `};
`;

export const LearnMoreLink = styled(DefaultLink)`
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s} !important;
  display: inline;
  white-space: nowrap;
`;

export const StyledCopy = styled(Copy)`
  display: inline;
  font-size: ${theme.font.size.body.s};
  line-height: ${theme.font.lineHeight.body.s} !important;
`;

export const CopyContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: ${rem(32)};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  display: block;
  width: 100%;

  margin-bottom: ${rem(8)};

  ${mediaMin.xxxs`
    margin-bottom: 0;
    width: calc(50% - ${rem(8)});
    margin-left: ${rem(8)};
    float: right;
  `};
`;

export const StyledOutlinedButton = styled(OutlinedButton)`
  display: block;
  width: 100%;

  ${mediaMin.xxxs`    
    width: calc(50% - ${rem(8)});
    margin-right: ${rem(8)};
    float: left;
  `};
`;
