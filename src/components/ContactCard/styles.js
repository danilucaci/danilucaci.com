import styled from "styled-components";
import { Link } from "gatsby";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";

export const StyledContactCard = styled.aside`
  max-width: ${theme.contain.inner.col10};
  margin: 0 auto;
  border-top: ${rem(8)} solid ${theme.colors.main600};
  background-color: ${theme.colors.bgLight100};
  width: 100%;

  padding: ${rem(32)} ${rem(24)} ${rem(32)} ${rem(24)};

  ${mediaMin.s`
    padding: ${rem(40)} ${rem(32)} ${rem(40)} ${rem(32)};
  `};

  ${mediaMin.l`
    padding: ${rem(56)} ${rem(80)} ${rem(48)} ${rem(80)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(72)} ${rem(104)} ${rem(72)} ${rem(112)};
  `};
`;

export const StyledH2 = styled.h2`
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const Subtitle = styled(Copy)`
  color: ${theme.colors.dark700};
  display: block;
  font-size: ${theme.fontSizes.subheadSCompact};
  line-height: ${theme.lineHeights.subheadSCompact};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
  `};
`;

export const Info = styled(Copy)`
  display: block;
`;

export const StyledContactButton = styled(Link)`
  background-color: ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight} !important;
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
  height: ${rem(48)};
  width: 100%;

  ${mediaMin.l`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(32)};

  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;
