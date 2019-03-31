import styled from "styled-components";
import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";

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

export const StyledHeader = styled.header`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const CaseStudyDescription = styled(Copy)`
  font-size: ${rem(24)};
  line-height: ${rem(40)};
  margin-top: ${rem(16)};
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

export const OverviewContainer = styled.div`
  background-color: ${theme.colors.sectionBackground};
  width: 100%;

  padding-top: ${rem(48)};
  padding-bottom: ${rem(48)};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  margin: ${rem(32)} 0 ${rem(64)};

  ${mediaMin.m`    
    padding-top: ${rem(88)};
    padding-bottom: ${rem(88)};
    margin: ${rem(64)} 0 ${rem(112)};
  `};
`;

export const OverviewIntro = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  ${mediaMin.m`    
    margin-bottom: ${rem(64)};
  `};

  p:first-of-type {
    margin-bottom: ${rem(32)};
  }

  h2 {
    display: block;
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
    `};
  }
`;

export const OverviewItems = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.xl`
    max-width: ${theme.contain.inner.col10};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `};
`;

export const OverviewItem = styled.div`
  display: block;

  ${mediaMax.xxs`
      margin-left: ${rem(4)};
  `};

  ${mediaMax.xl`
      margin-bottom: ${rem(32)};
  `};

  h4 {
    margin-bottom: ${rem(16)};
  }

  ${mediaMin.xxs`
    display: inline-block;
    vertical-align: top;
    flex: 1 1 auto;
    width: calc((100% / 2) - ${rem(24)});
  `};

  ${mediaMin.xl`
    flex: 1 1 auto;
    width: calc((100% / 4) - ${rem(32)});
  `};

  & + & {
    ${mediaMin.xxs`
      margin-right: ${rem(24)};
    `};

    ${mediaMin.xl`
      margin-right: ${rem(32)};
    `};
  }
`;

export const OverviewListLink = styled.a`
  display: block;
`;

export const PostContent = styled.section`
  display: block;

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;
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

  .toc {
    background-color: ${theme.colors.sectionBackground};
    margin: ${rem(32)} -${theme.gutters.s};
    padding: ${rem(24)} ${theme.gutters.s};

    ${mediaMin.s`
      margin: ${rem(32)} -${theme.gutters.m};
      padding: ${rem(32)} ${theme.gutters.m};
    `};

    ${mediaMin.l`
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
      padding: ${rem(32)} ${rem(96)};
    `};

    p + ul {
      margin-top: -${rem(32)};
    }

    ul {
      list-style-type: none;

      & li {
        margin: ${rem(8)} 0;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    a {
      text-decoration: none;
      color: ${theme.colors.dark900};

      &:hover {
        text-decoration: underline;
      }
    }
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
    background-color: ${theme.colors.gray100};

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
    background-color: ${theme.colors.sectionBackground};
    display: block;
  }

  .fig__16-9 {
    background-color: ${theme.colors.sectionBackground};
    position: relative;
    display: block;
    max-width: 744px;
    outline: 1px solid red;
  }
`;
