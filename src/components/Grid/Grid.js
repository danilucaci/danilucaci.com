import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../../theme/theme";

export const Row = styled.section`
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
  justify-content: flex-start;
  width: 100%;

  padding-left: ${theme.layout.gridSpacing.s};
  padding-right: ${theme.layout.gridSpacing.s};

  /* iPhone X 
  * Add the extra layout.gridSpacing used in the Grid
  * calc(env(safe-area-inset-left) + ${theme
    .layout.gridSpacing.s})
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

  ${({ col6 }) =>
    col6 &&
    css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${theme.layout.col6.wrapper};
    `};

  ${({ col8 }) =>
    col8 &&
    css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${theme.layout.col8.wrapper};
    `};

  ${({ col10 }) =>
    col10 &&
    css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${theme.layout.col10.wrapper};
    `};

  ${({ col12 }) =>
    col12 &&
    css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${theme.layout.col12.wrapper};
    `};

  ${({ padded }) =>
    padded &&
    css`
      padding-top: ${theme.spacing.row.s};
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-top: ${theme.spacing.row.m};
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-top: ${theme.spacing.row.xl};
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-top: ${rem(32)};
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ spaced }) =>
    spaced &&
    css`
      margin-top: ${theme.spacing.row.s};
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        margin-top: ${theme.spacing.row.m};
        margin-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        margin-top: ${theme.spacing.row.xl};
        margin-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-top: ${rem(32)};
        margin-bottom: ${rem(64)};
      }
    `};

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
          margin-bottom: ${theme.spacing.row.m};
        `};

      ${mediaMin.xl`
          margin-bottom: ${theme.spacing.row.xl};
        `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-bottom: ${rem(64)};
      }
    `};
`;

export const RowSpacer = styled.div`
  ${({ padded }) =>
    padded &&
    css`
      padding-top: ${theme.spacing.row.s};
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-top: ${theme.spacing.row.m};
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-top: ${theme.spacing.row.xl};
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-top: ${rem(32)};
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ spaced }) =>
    spaced &&
    css`
      margin-top: ${theme.spacing.row.s};
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        margin-top: ${theme.spacing.row.m};
        margin-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        margin-top: ${theme.spacing.row.xl};
        margin-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-top: ${rem(32)};
        margin-bottom: ${rem(64)};
      }
    `};

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        margin-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        margin-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-bottom: ${rem(64)};
      }
    `};
`;

export const RowNested = styled.div`
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

  margin-left: -${theme.layout.gridSpacing.s};
  margin-right: -${theme.layout.gridSpacing.s};

  ${mediaMin.s`
    margin-left: -${theme.layout.gridSpacing.m};
    margin-right: -${theme.layout.gridSpacing.m};
  `};

  ${({ padded }) =>
    padded &&
    css`
      padding-top: ${theme.spacing.row.s};
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-top: ${theme.spacing.row.m};
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-top: ${theme.spacing.row.xl};
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-top: ${rem(32)};
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        padding-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        padding-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        padding-bottom: ${rem(64)};
      }
    `};

  ${({ spaced }) =>
    spaced &&
    css`
      margin-top: ${theme.spacing.row.s};
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        margin-top: ${theme.spacing.row.m};
        margin-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        margin-top: ${theme.spacing.row.xl};
        margin-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-top: ${rem(32)};
        margin-bottom: ${rem(64)};
      }
    `};

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${theme.spacing.row.s};

      ${mediaMin.s`
        margin-bottom: ${theme.spacing.row.m};
      `};

      ${mediaMin.xl`
        margin-bottom: ${theme.spacing.row.xl};
      `};

      /* Mobile in ladscape */
      @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
        margin-bottom: ${rem(64)};
      }
    `};
`;

export const Col = styled.div`
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

  ${({ col }) =>
    col &&
    css`
      max-width: calc(${(100 / 12) * col}% - ${theme.layout.gutter.s});
      flex-basis: calc(${(100 / 12) * col}% - ${theme.layout.gutter.s});
    `};

  ${({ xxxs }) =>
    xxxs &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xxxs}) {
        max-width: calc(${(100 / 12) * xxxs}% - ${theme.layout.gutter.s});
        flex-basis: calc(${(100 / 12) * xxxs}% - ${theme.layout.gutter.s});
      }
    `};

  ${({ xxs }) =>
    xxs &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xxs}) {
        max-width: calc(${(100 / 12) * xxs}% - ${theme.layout.gutter.s});
        flex-basis: calc(${(100 / 12) * xxs}% - ${theme.layout.gutter.s});
      }
    `};

  ${({ xs }) =>
    xs &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xs}) {
        max-width: calc(${(100 / 12) * xs}% - ${theme.layout.gutter.s});
        flex-basis: calc(${(100 / 12) * xs}% - ${theme.layout.gutter.s});
      }
    `};

  ${({ s }) =>
    s &&
    css`
      @media screen and (min-width: ${theme.breakpoints.s}) {
        max-width: calc(${(100 / 12) * s}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * s}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ m }) =>
    m &&
    css`
      @media screen and (min-width: ${theme.breakpoints.m}) {
        max-width: calc(${(100 / 12) * m}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * m}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ l }) =>
    l &&
    css`
      @media screen and (min-width: ${theme.breakpoints.l}) {
        max-width: calc(${(100 / 12) * l}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * l}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xl }) =>
    xl &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xl}) {
        max-width: calc(${(100 / 12) * xl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xl}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xxl }) =>
    xxl &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xxl}) {
        max-width: calc(${(100 / 12) * xxl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xxl}% - ${theme.layout.gutter.m});
      }
    `};

  ${({ xxxl }) =>
    xxxl &&
    css`
      @media screen and (min-width: ${theme.breakpoints.xxxl}) {
        max-width: calc(${(100 / 12) * xxxl}% - ${theme.layout.gutter.m});
        flex-basis: calc(${(100 / 12) * xxxl}% - ${theme.layout.gutter.m});
      }
    `};
`;
