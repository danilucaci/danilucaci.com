import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/globalStyles";

export const GridRow = styled.section`
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  display: block;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: ${theme.contain.wrapper.col12};

  margin-left: auto;
  margin-right: auto;
  padding: ${theme.gridSpacing.s};

  /* iPhone X 
  * Add the extra gridSpacing used in the Grid
  * calc(env(safe-area-inset-left) + ${theme.gridSpacing.s})
  */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(
        ${theme.gridSpacing.s},
        calc(env(safe-area-inset-left) - ${theme.gridSpacing.s})
      );
      padding-right: max(
        ${theme.gridSpacing.s},
        calc(env(safe-area-inset-right) - ${theme.gridSpacing.s})
      );
    }
  }

  ${mediaMin.s`
    padding: ${theme.gridSpacing.m};

    /* iPhone X 
    * Add the extra gridSpacing used in the Grid
    * calc(env(safe-area-inset-left) + ${theme.gridSpacing.s})
    */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gridSpacing.m}, calc(env(safe-area-inset-left) - ${
  theme.gridSpacing.m
}));
        padding-right: max(${theme.gridSpacing.m}, calc(env(safe-area-inset-right) - ${
  theme.gridSpacing.m
}));
      }
    }
  `};

  ${(props) =>
    props.padded &&
    css`
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
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-top: ${rem(32)};
        padding-bottom: ${rem(64)};
      }
    `};

  ${(props) =>
    props.spaced &&
    css`
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
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-top: ${rem(32)};
        margin-bottom: ${rem(64)};
      }
    `};
`;

export const GridCol = styled.div`
  margin: ${theme.gridSpacing.s};
  flex: 1 1 100%;
  max-width: 100%;

  ${mediaMin.s`  
    float: left;
    margin: ${theme.gridSpacing.m};

    ${(props) =>
    props.col &&
      css`
        max-width: calc(${(100 / 12) * props.col}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * props.col}% - ${theme.gutters.m});
      `};
  `};
`;
