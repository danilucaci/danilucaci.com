import styled from "styled-components";
import { theme, mediaMin } from "../../theme/globalStyles";

export const StyledSiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: ${theme.layout.col10.wrapper};
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
`;
