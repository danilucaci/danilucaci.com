import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { Copy } from "../../src/components/Copy/Copy";

export const IndexHeader = styled.header`
  max-width: ${theme.contain.wrapper.col10};
  margin: 0 auto;
  padding-top: ${rem(24)};
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
    
    padding-top: ${rem(64)};
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
    padding-top: ${rem(88)};
    padding-bottom: ${theme.spacing.row.xl};
  `};
`;

export const Name = styled(Copy)`
  color: ${theme.colors.main600};
  text-transform: uppercase;
  font-size: ${theme.fontSizes.indexNameS};
  line-height: ${theme.lineHeights.indexNameS};
  letter-spacing: ${rem(0.4)};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.indexName};
    line-height: ${theme.lineHeights.indexName};
  `};
`;

export const IndexTitle = styled.h2`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  font-size: ${theme.fontSizes.h1s};
  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
  `};
`;

export const Subhead = styled(Copy)`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
    max-width: ${rem(744)};
  `};
`;

export const Row = styled.section`
  margin: ${theme.spacing.row.s} 0;

  ${mediaMin.s`
    margin: ${theme.spacing.row.m} 0;
  `};

  ${mediaMin.xl`
    margin: ${theme.spacing.row.xl} 0;
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

export const StyledHR = styled(HR)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(64)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(32)};
  }
`;

export const ServicesTitle = styled.h2`
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const ServicesH4 = styled.h4`
  ${mediaMin.s`
    margin-bottom: ${rem(8)};
  `};
`;

export const ServicesEntry = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;
  margin-top: ${rem(32)};

  ${mediaMin.xs`  
    width: calc(50% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};
  `};

  ${mediaMin.l`
    width: calc(33% - ${theme.gutters.m});
    margin-right: ${theme.gutters.m};
  `};
`;

export const CaseStudiesTitle = styled.h2`
  margin-bottom: ${rem(16)};
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.m`
    margin-bottom: 0;
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

export const CaseStudiesCopy = styled(Copy)`
  margin-bottom: ${rem(24)};

  ${mediaMin.m`
    margin-bottom: ${rem(32)};
  `};
`;

export const DribbblePostsTitle = styled.h2`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};
`;

export const DribbbleSubhead = styled(Copy)`
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
      margin-bottom: ${rem(48)};
  `};
`;
