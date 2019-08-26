import styled from "styled-components";
import { Link } from "gatsby";

import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { GridRow, GridCol } from "../Grid/Grid";

export const ContactCardWrapper = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};
`;

export const ContactCardInner = styled(GridCol)`
  background-color: ${theme.colors.grey900};
  padding: ${rem(24)} ${rem(16)} ${rem(32)} ${rem(16)};

  ${mediaMin.s`
    padding: ${rem(32)} ${rem(24)} ${rem(40)} ${rem(24)};
  `};

  ${mediaMin.l`
    padding: ${rem(56)} ${rem(72)} ${rem(64)} ${rem(72)};
  `};

  ${mediaMin.xxl`
    padding: ${rem(80)} ${rem(128)} ${rem(88)} ${rem(128)};
  `};
`;

export const ContactCardTitle = styled.h2`
  color: ${theme.colors.grey00};
  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h1};
    line-height: ${theme.font.lineHeight.display.desktop.h1};
  `};
`;

export const Subtitle = styled(Copy)`
  color: ${theme.colors.grey00};
  display: block;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subheadsubheadSCompact};

  ${mediaMin.s`
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.subhead};
  `};
`;

export const StyledContactButton = styled(Link)`
  background-color: ${theme.colors.secondary200};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.secondary600} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};
  font-style: normal;
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.bold};
  }

  padding: ${rem(12)} ${rem(40)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  ${mediaMin.l`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(32)};

  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.secondary100};
  }

  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.secondary100};
    box-shadow: 0 0px 1px 4px #c9b473, 0 1px 2px 4px #c9b473;
    outline: none;
  }
`;
