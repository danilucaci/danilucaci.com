import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import { HR } from "../../src/components/HR/HR";
import { Copy } from "../../src/components/Copy/Copy";

export const OuterWrapper = styled.section`
  margin-bottom: ${theme.spacing.row.s};

  ${mediaMin.s`
    margin-bottom: ${theme.spacing.row.m};
  `};

  ${mediaMin.m`
      margin-bottom: ${theme.spacing.row.xl};
  `};
`;

export const InnerWrapper = styled.div`
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

export const ContactWrapper = styled.div`
  margin-bottom: ${theme.spacing.row.s};
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
    margin-bottom: ${theme.spacing.row.m};
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

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.xl};
  `};
`;

export const Subhead = styled(Copy)`
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

export const StyledHR = styled(HR)`
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  ${mediaMin.m`
    margin-bottom: ${rem(64)};
  `};
`;

export const WorkHeader = styled.header`
  & h1 {
    margin-bottom: ${rem(8)};
  }
`;

export const DribbblePostsTitle = styled.h2`
  margin-bottom: ${rem(8)};

  font-size: ${theme.fontSizes.h2s};
  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
  `}

  line-height: ${theme.lineHeights.h2s};
  ${mediaMin.xs`
    line-height: ${theme.lineHeights.h2};
  `}
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
