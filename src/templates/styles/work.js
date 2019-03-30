import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";
import { HR } from "../../components/HR/HR";
import { Copy } from "../../components/Copy/Copy";

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
  color: ${theme.colors.dark900};

  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-bottom: ${rem(48)};
  `};
`;

export const DribbblePostsTitle = styled.h2`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(8)};

  font-size: ${theme.fontSizes.h1s};
  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h1};
  `}

  line-height: ${theme.lineHeights.h1s};

  ${mediaMin.xs`
    line-height: ${theme.lineHeights.h1};
  `}
`;

export const DribbbleSubhead = styled(Copy)`
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
      margin-bottom: ${rem(48)};
  `};
`;
