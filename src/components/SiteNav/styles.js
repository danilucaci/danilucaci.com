import styled from "styled-components";
import { theme, mediaMin } from "../../theme/globalStyles";

export const StyledSiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X 
   * Add the extra gridSpacing used in the Grid
   * calc(env(safe-area-inset-left) + ${theme.gridSpacing.s})
   */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(
        ${theme.gutters.s},
        calc(env(safe-area-inset-left) + ${theme.gridSpacing.s})
      );
      padding-right: max(
        ${theme.gutters.s},
        calc(env(safe-area-inset-left) + ${theme.gridSpacing.s})
      );
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, calc(env(safe-area-inset-left) + ${
  theme.gridSpacing.m
}));
        padding-right: max(${theme.gutters.m}, calc(env(safe-area-inset-left) + ${
  theme.gridSpacing.m
}));
      }
    }
  `};
`;
