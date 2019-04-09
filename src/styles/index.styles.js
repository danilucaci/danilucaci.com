import styled from "styled-components";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { Copy } from "../../src/components/Copy/Copy";

export const IndexHeader = styled.header`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;
  padding-top: ${rem(16)};
  padding-bottom: ${theme.spacing.row.s};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
    
    padding-top: ${rem(24)};
    padding-bottom: ${theme.spacing.row.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  ${mediaMin.xl`
    padding-top: ${rem(48)};
    padding-bottom: ${theme.spacing.row.xl};
  `};
`;

export const Name = styled(Copy)`
  color: ${theme.colors.main600};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.indexNameS};
  line-height: ${theme.lineHeights.indexNameS};
  letter-spacing: ${theme.letterSpacing.indexNameS};
  font-weight: 700;

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
  color: ${theme.colors.dark800};
  font-size: ${theme.fontSizes.indexBio};
  line-height: ${theme.lineHeights.indexBio};
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
  background-color: ${theme.colors.bgLight100};

  padding-top: ${theme.spacing.rowTop.s};
  padding-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    padding-top: ${theme.spacing.rowTop.m};
    padding-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    padding-top: ${theme.spacing.rowTop.xl};
    padding-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: ${rem(64)};
    margin-bottom: ${rem(80)};
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

export const StyledHR = styled(HR)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(88)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(32)};
  }
`;

export const Row = styled.section`
  margin-top: ${theme.spacing.rowTop.s};
  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-top: ${theme.spacing.rowTop.m};
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.xl`
    margin-top: ${theme.spacing.rowTop.xl};
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: ${rem(64)};
    margin-bottom: ${rem(80)};
  }
`;

export const RowContents = styled.div`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};
`;

export const CaseStudiesTitle = styled.h2`
  margin-bottom: ${rem(8)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const CaseStudiesSubhead = styled(Copy)`
  color: ${theme.colors.dark800};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  margin-bottom: ${rem(32)};

  font-family: ${theme.fonts.headerFallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerLight};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

export const DribbblePostsTitle = styled.h2`
  margin-bottom: ${rem(8)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const DribbbleSubhead = styled(Copy)`
  color: ${theme.colors.dark800};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  margin-bottom: ${rem(32)};

  font-family: ${theme.fonts.headerFallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerLight};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;
