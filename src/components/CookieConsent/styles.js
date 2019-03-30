import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { DarkGhostButton, PrimaryButton } from "../Button/Button";
import { DefaultLink } from "../Link/Link";

export const StyledCookieConsent = styled.aside`
  background-color: ${theme.colors.gray100};
  border-top: ${rem(8)} solid ${theme.colors.main600};
  display: ${(props) => (props.showConsent ? "block" : "none")};

  padding: ${rem(16)} ${rem(24)} ${rem(24)};
  position: fixed;
  z-index: 10;
  will-change: transform;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  ${theme.shadow.mobileCookieConsent};

  ${mediaMin.s`
    border: 2px solid ${theme.colors.gray400};
    border-radius: 4px;
    bottom: ${rem(16)};
    left: ${rem(16)};
    max-width: ${rem(340)};
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
    margin-top: ${rem(40)};  
  `};
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  display: block;
`;

export const StyledGhostButton = styled(DarkGhostButton)`
  display: block;
  width: 100%;
  margin-top: ${rem(8)};
`;
