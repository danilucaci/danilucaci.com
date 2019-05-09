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
  padding-left: ${theme.gridSpacing.s};
  padding-right: ${theme.gridSpacing.s};

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
    padding-left: ${theme.gridSpacing.m};
    padding-right: ${theme.gridSpacing.m};

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

  ${({ padded }) =>
    padded &&
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

  ${({ spaced }) =>
    spaced &&
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

export const GridRowNested = styled.div`
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

  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const GridCol = styled.div`
  margin-left: ${theme.gridSpacing.s};
  margin-right: ${theme.gridSpacing.s};
  margin-bottom: ${theme.gutters.s};

  flex: 1 1 100%;
  max-width: 100%;

  ${mediaMin.s`  
    float: left;
    margin-left: ${theme.gridSpacing.m};
    margin-right: ${theme.gridSpacing.m};
    margin-bottom: ${theme.gutters.m};
  `};

  &:only-of-type {
    margin-bottom: 0;
  }

  ${({ xs }) =>
    xs &&
    `
      @media screen and (min-width: ${theme.breakpoints.xs}) {
        max-width: calc(${(100 / 12) * xs}% - ${theme.gutters.s});
        flex-basis: calc(${(100 / 12) * xs}% - ${theme.gutters.s});
      }
    `};

  ${({ s }) =>
    s &&
    `
      @media screen and (min-width: ${theme.breakpoints.s}) {
        max-width: calc(${(100 / 12) * s}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * s}% - ${theme.gutters.m});
      }
    `};

  ${({ m }) =>
    m &&
    `
      @media screen and (min-width: ${theme.breakpoints.m}) {
        max-width: calc(${(100 / 12) * m}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * m}% - ${theme.gutters.m});
      }
    `};

  ${({ l }) =>
    l &&
    `
      @media screen and (min-width: ${theme.breakpoints.l}) {
        max-width: calc(${(100 / 12) * l}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * l}% - ${theme.gutters.m});
      }
    `};

  ${({ xl }) =>
    xl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xl}) {
        max-width: calc(${(100 / 12) * xl}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * xl}% - ${theme.gutters.m});
      }
    `};

  ${({ xxl }) =>
    xxl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xxl}) {
        max-width: calc(${(100 / 12) * xxl}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * xxl}% - ${theme.gutters.m});
      }
    `};

  ${({ xxxl }) =>
    xxxl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xxxl}) {
        max-width: calc(${(100 / 12) * xxxl}% - ${theme.gutters.m});
        flex-basis: calc(${(100 / 12) * xxxl}% - ${theme.gutters.m});
      }
    `};
`;

export const GridColNested = styled.div`
  flex: 0 1 100%;
  max-width: 100%;

  ${mediaMin.s`
    float: left;
  `};
`;
