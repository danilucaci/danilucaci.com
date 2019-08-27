import styled from "styled-components";
import { theme, mediaMin, rem } from "../../theme/globalStyles";

export const StyledSiteNav = styled.nav`
  position: relative;
  padding: ${rem(12)} ${theme.layout.gutter.s} ${rem(8)}
    ${theme.layout.gutter.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.layout.gutter.s}, env(safe-area-inset-left));
      padding-right: max(${theme.layout.gutter.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${theme.layout.col10.wrapper};
    margin-left: auto;
    margin-right: auto;
    padding: ${rem(16)} ${theme.layout.gutter.m} ${rem(16)} ${
    theme.layout.gutter.m
  };

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gutter.m}, env(safe-area-inset-left));
        padding-right: max(${
          theme.layout.gutter.m
        }, env(safe-area-inset-right));
      }
    }
  `};
`;
