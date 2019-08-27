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

  max-width: ${theme.layout.col12.wrapper};

  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.layout.gridSpacing.s};
  padding-right: ${theme.layout.gridSpacing.s};

  /* iPhone X 
  * Add the extra layout.gridSpacing used in the Grid
  * calc(env(safe-area-inset-left) + ${theme.layout.gridSpacing.s})
  */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(
        ${theme.layout.gridSpacing.s},
        calc(env(safe-area-inset-left) - ${theme.layout.gridSpacing.s})
      );
      padding-right: max(
        ${theme.layout.gridSpacing.s},
        calc(env(safe-area-inset-right) - ${theme.layout.gridSpacing.s})
      );
    }
  }

  ${mediaMin.s`
    padding-left: ${theme.layout.gridSpacing.m};
    padding-right: ${theme.layout.gridSpacing.m};

    /* iPhone X 
    * Add the extra layout.gridSpacing used in the Grid
    * calc(env(safe-area-inset-left) + ${theme.layout.gridSpacing.s})
    */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.layout.gridSpacing.m}, calc(env(safe-area-inset-left) - ${theme.layout.gridSpacing.m}));
        padding-right: max(${theme.layout.gridSpacing.m}, calc(env(safe-area-inset-right) - ${theme.layout.gridSpacing.m}));
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
  margin-left: ${theme.layout.gridSpacing.s};
  margin-right: ${theme.layout.gridSpacing.s};
  margin-bottom: ${theme.layout.gutter.s};

  flex: 1 1 100%;
  max-width: 100%;

  ${mediaMin.s`  
    float: left;
    margin-left: ${theme.layout.gridSpacing.m};
    margin-right: ${theme.layout.gridSpacing.m};
    margin-bottom: ${theme.layout.gutter.m};
  `};

  &:only-of-type {
    margin-bottom: 0;
  }

  ${({ xs }) =>
    xs &&
    `
      @media screen and (min-width: ${theme.breakpoints.xs}) {
        max-width: calc(${(100 / 12) * xs}% - ${theme.layout.gutter.s});
        flex-basis: calc(${(100 / 12) * xs}% - ${theme.layout.gutter.s});
      }
    `};

  ${({ s }) =>
    s &&
    `
      @media screen and (min-width: ${theme.breakpoints.s}) {
        max-width: calc(${(100 / 12) * s}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * s}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ m }) =>
    m &&
    `
      @media screen and (min-width: ${theme.breakpoints.m}) {
        max-width: calc(${(100 / 12) * m}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * m}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ l }) =>
    l &&
    `
      @media screen and (min-width: ${theme.breakpoints.l}) {
        max-width: calc(${(100 / 12) * l}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * l}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xl }) =>
    xl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xl}) {
        max-width: calc(${(100 / 12) * xl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xl}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xxl }) =>
    xxl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xxl}) {
        max-width: calc(${(100 / 12) * xxl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xxl}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xxxl }) =>
    xxxl &&
    `
      @media screen and (min-width: ${theme.breakpoints.xxxl}) {
        max-width: calc(${(100 / 12) * xxxl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xxxl}% - ${theme.layout.gutter.m});
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
