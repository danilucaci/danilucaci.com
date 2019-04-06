import styled from "styled-components";
import { Link } from "gatsby";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const StyledContactCard = styled.aside`
  max-width: ${theme.contain.inner.col10};
  margin: 0 auto;
  background-color: ${theme.colors.bgDark500};
  width: 100%;

  padding: ${rem(24)} ${rem(16)} ${rem(32)} ${rem(16)};

  ${mediaMin.s`
    padding: ${rem(32)} ${rem(24)} ${rem(40)} ${rem(24)};
  `};

  ${mediaMin.l`
    padding: ${rem(56)} ${rem(72)} ${rem(64)} ${rem(72)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(80)} ${rem(104)} ${rem(88)} ${rem(104)};
  `};
`;

export const ContactCardTitle = styled.h2`
  color: ${theme.colors.light100};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
  `};
`;

export const Subtitle = styled(Copy)`
  color: ${theme.colors.light300};
  display: block;
  font-size: ${theme.fontSizes.subheadSCompact};
  line-height: ${theme.lineHeights.subheadSCompact};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
  `};
`;

export const StyledContactButton = styled(Link)`
  background-color: ${theme.colors.secondary100};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.secondary600} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  padding: ${rem(12)} ${rem(40)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  ${mediaMin.l`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(32)};

  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.secondary200};
  }
`;
