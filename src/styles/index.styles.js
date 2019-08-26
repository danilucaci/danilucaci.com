import styled from "styled-components";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { Copy } from "../../src/components/Copy/Copy";
import { GridRow } from "../components/Grid/Grid";

export const IndexHeader = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col10};
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
  font-size: ${theme.fontSizes.indexNameS};
  line-height: ${theme.lineHeights.indexNameS};
  letter-spacing: ${theme.letterSpacing.indexNameS};
  font-weight: 700;

  font-family: ${theme.fonts.headerFallback};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.indexName};
    line-height: ${theme.lineHeights.indexName};
    letter-spacing: ${theme.letterSpacing.indexName};
  `};
`;

export const IndexTitle = styled.h2`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};

  font-size: ${theme.fontSizes.h1s};
  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
    max-width: ${rem(840)};
  `};
`;

export const Subhead = styled.p`
  color: ${theme.colors.grey800};
  font-size: ${theme.fontSizes.indexBioS};
  line-height: ${theme.lineHeights.indexBioS};
  letter-spacing: -${theme.letterSpacing.indexBioS};

  font-family: ${theme.fonts.headerFallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerLight};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.indexBio};
    line-height: ${theme.lineHeights.indexBio};
    letter-spacing: -${theme.letterSpacing.indexBio}
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
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
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
  max-width: ${theme.contain.wrapper.col10};
`;
