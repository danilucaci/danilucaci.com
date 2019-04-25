import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";
import { GridRow } from "../../src/components/Grid/Grid";

export const Div = styled.div``;

export const ArticleWrapper = styled.article`
  & footer {
    @media screen and (max-width: ${theme.breakpoints.s}) {
      margin-left: ${theme.gutters.s};
      margin-right: ${theme.gutters.s};
      width: auto;

      @supports (padding: max(0px)) {
        & {
          margin-left: max(${theme.gutters.s}, env(safe-area-inset-left));
          margin-right: max(${theme.gutters.s}, env(safe-area-inset-right));
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.s}) and (max-width: ${theme.breakpoints
  .xxl}) {
      margin-left: ${theme.gutters.m};
      margin-right: ${theme.gutters.m};
      width: auto;

      @supports (padding: max(0px)) {
        & {
          margin-left: max(${theme.gutters.m}, env(safe-area-inset-left));
          margin-right: max(${theme.gutters.m}, env(safe-area-inset-right));
        }
      }
    }
  }
`;

export const StyledHeader = styled(GridRow)`
  max-width: ${theme.contain.wrapper.col8};
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const CaseStudyDescription = styled(Copy)`
  color: ${theme.colors.dark800};
  font-size: ${theme.fontSizes.indexBioS};
  line-height: ${theme.lineHeights.indexBioS};
  letter-spacing: ${theme.letterSpacing.indexBioS};

  font-family: ${theme.fonts.headerFallback};
  font-weight: 300;

  .fonts-loaded & {
    font-family: ${theme.fonts.headerLight};
  }

  ${mediaMin.s`
    font-size: ${theme.fontSizes.indexBioS};
    line-height: ${theme.lineHeights.indexBioS};
    letter-spacing: ${theme.letterSpacing.indexBioS};    
  `};
`;

export const TagsWrapper = styled.div`
  width: 100%;
`;

export const Tag = styled.p`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${theme.fonts.headerFallback};
  letter-spacing: ${theme.letterSpacing.sectionHeaderS};

  .fonts-loaded & {
    font-family: ${theme.fonts.headerRegular};
    letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
  }

  display: inline-block;
  margin-right: ${rem(16)};
`;

export const CaseStudyImgWrapper = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(64)};
  margin-bottom: ${rem(64)};

  ${mediaMin.xl`
    margin-top: ${rem(112)};
    margin-bottom: ${rem(112)};
  `};
`;

export const PostContent = styled.section`
  display: block;

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;

    &:first-of-type {
      margin-top: 0;
    }

    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h2 + h3 {
    margin-top: ${rem(32)};
  }

  h3 {
    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(16)};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  h5 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  p {
    margin-bottom: ${rem(32)};
  }

  /* fix for markdown nested p tags inside li tags */
  li > p + ul {
    margin-top: -${rem(32)};
  }

  li {
    margin-bottom: ${rem(4)};
  }

  ul + p {
    margin-top: ${rem(32)};
  }

  .overview {
    background-color: ${theme.colors.bgLight100};

    padding-top: ${theme.spacing.row.s};
    padding-bottom: ${theme.spacing.row.s};
    margin-bottom: ${theme.spacing.components.s};

    ${mediaMin.s`
      padding-top: ${theme.spacing.row.m};
      padding-bottom: ${theme.spacing.row.m};
      margin-bottom: ${theme.spacing.components.m};
    `};

    ${mediaMin.xl`
      padding-top: ${theme.spacing.row.xl};
      padding-bottom: ${theme.spacing.row.xl};
      margin-bottom: ${theme.spacing.components.xl};
    `};

    /* Mobile in ladscape */
    @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
      padding-top: ${rem(32)};
      padding-bottom: ${rem(64)};
    }

    & h2 {
      color: ${theme.colors.dark700};
      margin-bottom: ${rem(16)};
      font-size: ${theme.fontSizes.sectionHeaderXL};
      line-height: ${theme.lineHeights.sectionHeaderXL};
      letter-spacing: ${theme.letterSpacing.sectionHeaderXL};
      text-transform: uppercase;
    }
  }

  .overview__sideinfo {
    display: flex;
    flex-wrap: wrap;

    ${mediaMin.l`
      margin-left: auto;
    `};
  }

  .overview__sideinfo__item {
    width: 100%;
    padding-bottom: ${rem(32)};

    & h5 {
      margin-top: ${rem(8)};
    }

    &:last-of-type {
      padding-bottom: 0;
    }

    ${mediaMin.xxs`    
      float: right;
      width: calc(50% - ${rem(32)});
      flex: 1 0 calc(50% - ${rem(32)});
      padding-right: ${rem(32)};
    `};

    ${mediaMin.xxl`    
      width: calc(50% - ${rem(64)});
      flex: 1 0 calc(50% - ${rem(64)});
      padding-right: 0;
      padding-left: ${rem(64)};
    `};

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  .process {
    display: block;
    display: flex;

    max-width: ${theme.contain.wrapper.col6};

    & h2 {
      max-width: 34.5rem;
      margin-right: auto;
      margin-left: auto;
    }

    margin-top: ${theme.spacing.components.s};
    margin-bottom: calc(${theme.spacing.components.s} - ${rem(48)});

    ${mediaMin.s`
      margin-top: ${theme.spacing.components.m};
      margin-bottom: calc(${theme.spacing.components.m} - ${rem(32)});
    `};

    ${mediaMin.xl`
      margin-top: ${theme.spacing.components.xl};
      margin-bottom: calc(${theme.spacing.components.xl} - ${rem(32)});
    `};

    ${mediaMin.xxxl`
      max-width: ${theme.contain.wrapper.col12};
    `};

    /* Mobile in ladscape */
    @media screen and (min-width: 30em) and (min-height: 17em) and (max-height: 35em) and (orientation: landscape) {
      margin-top: ${rem(32)};
      margin-bottom: ${rem(64)};
    }
  }

  .process__item {
    display: inline-block;
    flex: 1 1 33%;

    vertical-align: top;
    margin-bottom: ${rem(48)};
    width: 100%;

    &:first-of-type {
      ${mediaMin.xxxl`
        margin-left: ${rem(80)};
      `};
    }

    ${mediaMin.xs`
      margin-right: ${rem(16)};
      width: calc(50% - ${rem(32)});
    `};

    ${mediaMin.xxxl`
      width: calc(20% - ${rem(48)});
      margin-right: ${rem(24)};
      margin-bottom: 0;
    `};

    & h4 {
      background-color: ${theme.colors.bgLight100};
      display: inline-block;
      padding: ${rem(4)} ${rem(16)};
      margin-top: 0;
      margin-bottom: ${rem(16)};
    }
  }

  .expand-12 {
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    ${mediaMin.xxl`
      padding-top: ${rem(16)};
    `};

    ${mediaMin.xxl`
      & .container-375 {
          margin-bottom: 0;
        }
    `};

    ${mediaMin.xxl`
      display: flex;
      justify-content: center;
      max-width: ${rem(1008)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};

    ${mediaMin.xxxl`
      display: flex;
      justify-content: center;
      max-width: ${rem(1128)};
      margin-right: -${rem(288)};
      margin-left: -${rem(288)};
    `};
  }

  .spaced {
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    ${mediaMin.l`
      margin-top: ${rem(112)};
      margin-bottom: ${rem(112)};
    `};
  }

  .info {
    margin-top: ${rem(32)};

    ${mediaMin.xxl`
      margin-top: -${rem(6)};
      display: inline-block;
      vertical-align: top;
      width: calc(50% - ${rem(48)});
    `};
  }

  .info__item > h4 {
    margin-top: 0;
  }

  .info__item:first-of-type {
    ${mediaMin.xxl`
      margin-bottom: ${rem(32)};
    `};
  }

  .screenshot {
    width: 100%;
    margin-bottom: ${rem(32)};

    & > figure {
      margin: 0;
    }

    & > p {
      /* display: none; */
      width: 100%;
    }

    & + h3 {
      margin-top: ${rem(32)};
    }

    h4 {
      margin-top: 0;
    }

    max-width: ${rem(288)};

    ${mediaMin.xxs`
      max-width: ${rem(375)};
    `};

    ${mediaMin.xxl`
      display: inline-block;
      vertical-align: top;
      flex: 1 1 auto;
    `};
  }

  .screenshot:first-of-type {
    ${mediaMin.xxl`
      margin-right: ${rem(48)};
    `};
  }

  .screenshot:nth-of-type(3) {
    ${mediaMin.xxl`
      margin-left: ${rem(48)};
    `};
  }
`;
