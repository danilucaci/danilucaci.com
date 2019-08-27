import styled from "styled-components";
import { theme, mediaMin, mediaMax, rem } from "../theme/theme";
import { HR } from "../components/HR/HR";
import { Copy } from "../components/Copy/Copy";
import { GridRow } from "../components/Grid/Grid";

export const IndexHeader = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};
  margin: 0 auto;
  padding-top: ${rem(16)};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${rem(24)};
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    padding-top: ${rem(40)};
    padding-bottom: ${theme.spacing.row.xl};
  `};
`;

export const Name = styled(Copy)`
  color: ${theme.colors.primary600};
  text-transform: uppercase;
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.subhead};
  letter-spacing: ${theme.font.letterSpacing.body.subhead};
  font-weight: 700;

  font-family: ${theme.font.family.display.fallback};

  .fonts-loaded & {
    font-family: ${theme.font.family.display.bold};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.body.subhead};
    line-height: ${theme.font.lineHeight.body.subhead};
    letter-spacing: ${theme.font.letterSpacing.body.subhead};
  `};
`;

export const IndexTitle = styled.h2`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};

  font-size: ${theme.font.size.display.mobile.h1};
  line-height: ${theme.font.lineHeight.display.mobile.h1};

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h1};
    line-height: ${theme.font.lineHeight.display.desktop.h1};
    max-width: ${rem(840)};
  `};
`;

export const Subhead = styled.p`
  color: ${theme.colors.grey800};
  font-size: ${theme.font.size.body.subhead};
  line-height: ${theme.font.lineHeight.body.m};
  letter-spacing: -${theme.font.letterSpacing.body.subhead};

  font-family: ${theme.font.family.display.fallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.font.family.display.boldLight};
  }

  ${mediaMin.s`
    font-size: ${theme.font.size.body.subhead};
    line-height: ${theme.font.lineHeight.body.m};
    letter-spacing: -${theme.font.letterSpacing.body.subhead}
    max-width: ${rem(840)};
  `};
`;

export const ServicesWrapper = styled.section`
  background-color: ${theme.colors.grey50};
  margin-bottom: ${theme.spacing.rowTop.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.rowTop.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.rowTop.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const ServicesEntry = styled.div`
  border-top: 2px solid ${theme.colors.grey300};
  display: block;

  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};

  ${mediaMin.m`  
    padding-top: ${rem(48)};
    padding-bottom: ${rem(48)};
    display: flex;
  `};

  ${mediaMin.xl`
    padding-left: ${rem(40)};
    padding-right: ${rem(144)};
    padding-top: ${rem(64)};
    padding-bottom: ${rem(64)};
  `};

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    font-size: ${theme.font.size.display.desktop.h2};
    line-height: ${theme.font.lineHeight.display.desktop.h2};
  `};
`;

export const ServiceTitle = styled.h3`
  margin-bottom: ${rem(8)};
`;

export const ServiceCopy = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

export const ServiceImage = styled.picture`
  width: ${rem(132)};
  height: ${rem(132)};

  ${mediaMax.m`
    margin-left: -${rem(8)};
    margin-bottom: ${rem(32)};
  `};

  ${mediaMin.m`
    margin-top: -${rem(4)};
    flex: 1 0 auto;
    margin-right: ${rem(32)};
  `};

  ${mediaMin.xl`
    margin-right: ${rem(64)};
  `};
`;

export const ServiceContent = styled.div`
  ${mediaMin.m`
    flex: 4 1 auto;
  `};
`;

export const Row = styled(GridRow)`
  max-width: ${theme.layout.col10.wrapper};
`;
