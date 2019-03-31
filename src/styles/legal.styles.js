import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";

export const PageWrapper = styled.section`
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

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

  p {
    font-feature-settings: "onum";
  }
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const PostContent = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(16)};
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-top: ${rem(32)};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  h2 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};

    & + h3 {
      margin-top: ${rem(32)};
    }
  }

  h3 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4 {
    display: block;

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }
`;

export const Time = styled(Copy)`
  display: inline-block;
`;
