import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

export const BlogWrapper = styled.section`
  max-width: ${theme.layout.col8.wrapper};
  margin-left: auto;
  margin-right: auto;

  padding-right: ${theme.layout.gutter.s};
  padding-left: ${theme.layout.gutter.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.layout.gutter.s}, env(safe-area-inset-left));
      padding-right: max(${theme.layout.gutter.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.layout.gutter.m};
    padding-left: ${theme.layout.gutter.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gutter.m}, env(safe-area-inset-left));
        padding-right: max(${theme.layout.gutter.m}, env(safe-area-inset-right));
      }
    }
  `};

  margin-bottom: ${theme.spacing.row.s};
  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.m};
  `};
  ${mediaMin.l`
    margin-bottom: ${theme.spacing.row.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const BlogHeader = styled.header`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(
      280,
    )}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const BlogTitle = styled.h1`
  font-size: ${theme.font.size.display.mobile.h2};
  line-height: ${theme.font.lineHeight.display.mobile.h2};

  ${mediaMin.xs`
  font-size: ${theme.font.size.display.desktop.h2};
  line-height: ${theme.font.lineHeight.display.desktop.h2};
`}
`;

export const TagsWrapper = styled.div`
  margin-top: ${rem(16)};
`;
