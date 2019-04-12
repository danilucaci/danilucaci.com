import styled from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";
import { GridRow, GridCol } from "../../src/components/Grid/Grid";

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

  margin-top: ${rem(16)};
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

  h3 {
    display: block;
    margin-top: ${rem(64)};
    margin-bottom: ${rem(32)};
  }

  h4,
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

  strong {
    color: ${theme.colors.dark800};

    font-family: ${theme.fonts.bodyBold};

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }

  blockquote {
    font-family: ${theme.fonts.headerFallback};

    .fonts-loaded & {
      font-family: ${theme.fonts.headerRegular};
    }

    & > p {
      color: ${theme.colors.main600};
      margin-bottom: 0;
    }

    strong {
      color: ${theme.colors.main600};
    }

    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    margin-right: -${theme.gutters.s};
    margin-left: -${theme.gutters.s};
    padding: ${rem(24)} ${theme.gutters.s};

    ${mediaMin.m`
      border-left: 4px solid ${theme.colors.main600};
      margin-right: -${theme.gutters.m};
      margin-left: -${theme.gutters.m};
      padding: ${rem(24)} ${theme.gutters.m};
    `};

    ${mediaMin.xl`
      margin-right: -${rem(40)};
      margin-left: -${rem(40)};
      padding: ${rem(24)} ${rem(40)};
    `};
  }

  figure img,
  figure video {
    ${theme.shadow.image} !important;
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

  .overview__copy {
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
      padding-bottom: 0;
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

  .container-8col {
    ${mediaMin.xl`
      width: ${rem(744)};
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
    `};
  }

  .screenshot-container {
    margin: ${rem(32)} 0;

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

  .diagram {
    margin: ${rem(32)} 0;

    ${mediaMin.xxl`
      max-width: ${rem(936)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};
  }

  .l-10col {
    margin: ${rem(32)} 0;

    ${mediaMin.xxl`
      max-width: ${rem(936)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};
  }

  .l-12col {
    margin: ${rem(32)} 0;

    ${mediaMin.xxl`
      max-width: ${rem(1008)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};

    ${mediaMin.xxxl`
      max-width: ${rem(1128)};
      margin-right: -${rem(288)};
      margin-left: -${rem(288)};
    `};
  }

  .info {
    margin-top: ${rem(32)};

    ${mediaMin.xxl`
      margin-top: 0;
      display: inline-block;
      vertical-align: top;
      width: calc(50% - ${rem(32)});
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
      display: none;
    }

    & + h3 {
      margin-top: ${rem(32)};
    }

    h4 {
      margin-top: 0;
    }

    ${mediaMax.xxs`
      max-width: ${rem(300)};
      margin-left: auto;
      margin-right: auto;
    `};

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
      margin-right: ${rem(32)};
    `};
  }

  .screenshot:first-of-type {
    ${mediaMin.xxl`
      margin-right: ${rem(32)};
    `};
  }

  .screenshot:nth-of-type(3) {
    ${mediaMin.xxl`
      margin-left: ${rem(32)};
    `};
  }

  figure {
    width: 100%;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};
  }

  figcaption {
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    color: ${theme.colors.dark700};
    margin-top: ${rem(16)};

    font-weight: 400;
    font-style: normal;
  }

  video {
    width: 100%;
    height: 100%;
    margin: 0px;
    vertical-align: middle;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
  }

  .video-iphoneX {
    position: relative;
    display: block;
    width: 100%;

    ${mediaMax.xxs`
      width: ${rem(300)};
      margin-left: auto;
      margin-right: auto;
    `};

    ${mediaMin.xxs`
      max-width: ${rem(375)};
    `};
  }

  .video-iphoneX--video {
    padding-bottom: 216.53333333333333%;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.bgLight200};
    display: block;
  }

  .fig__16-9 {
    background-color: ${theme.colors.bgLight200};
    position: relative;
    display: block;
    max-width: 744px;
    outline: 1px solid red;
  }
`;
