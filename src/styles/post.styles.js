import styled from "styled-components";
import { theme, rem, mediaMin } from "../theme/globalStyles";
import { Copy } from "../../src/components/Copy/Copy";
import { LoadComments } from "../../src/components/Button/Button";
import { Icon } from "../../src/components/Icon/Icon";
import { HR } from "../../src/components/HR/HR";

export const PostWrapper = styled.article`
  max-width: ${theme.contain.wrapper.col10};
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

export const StyledPageHeader = styled.header`
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;
`;

export const PostH1 = styled.h1`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};
`;

export const PostInfo = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  padding: ${rem(8)} 0 ${rem(4)};

  ${mediaMin.xs`
    flex-direction: row;
    padding: ${rem(8)} 0 ${rem(8)};
  `};
`;

export const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-bottom: ${rem(8)};
  margin-right: ${rem(16)};

  ${mediaMin.xs`
    margin-bottom: 0;
  `};
`;

export const SocialShareWrapper = styled.div`
  display: inline-block;
`;

export const StyledIntroContainer = styled.div`
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

export const IntroCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const PostContent = styled.section`
  display: block;
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h3 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem(32)};
  }

  .gatsby-resp-image-figure {
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    ${mediaMin.xxl`
      max-width: ${rem(936)};
      margin-right: -${rem(192)};
      margin-left: -${rem(192)};
    `};
  }

  figure {
    /* width: 100%; */
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};
  }

  figure img,
  figure video {
    ${theme.shadow.image} !important;
  }

  figcaption {
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
    color: ${theme.colors.dark700};
    margin-top: ${rem(12)};

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

  .video-wrapper {
    position: relative;
    display: block;

    ${mediaMin.xxl`
      max-width: ${rem(936)};
      margin-right: -${rem(192)};
      margin-left: -${rem(192)};
    `};
  }

  .video__inner {
    padding-bottom: 65.94594595%;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.sectionBackground};
    display: block;
  }

  .video__inner--1920x1200 {
    padding-bottom: 62.5%;
  }

  .video__inner--contact-post {
    padding-bottom: 65.97186034%;
  }

  .js-codeCopy {
    background-color: ${theme.colors.gray100};
    display: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.xs};

    font-family: ${theme.fonts.bodyRegular};

    position: absolute;
    top: ${rem(12)};
    right: ${rem(12)};
    padding: ${rem(8)} ${rem(16)};
  }

  .gatsby-highlight {
    position: relative;

    &:hover .js-codeCopy {
      display: block;
    }
  }

  & .toc {
    background-color: ${theme.colors.sectionBackground};
    padding: ${rem(24)} ${rem(16)};

    margin-top: ${rem(64)};
    margin-bottom: ${rem(64)};

    & p {
      margin-bottom: 0;
    }

    & ul {
      margin-bottom: 0;
      list-style-type: none;
      margin-left: 0;
    }

    & h3 {
      margin-top: 0;
      margin-bottom: ${rem(8)};
    }

    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.m`
      margin-left: -${rem(24)};
      margin-right: -${rem(24)};
      padding-left: ${rem(24)};
      padding-right: ${rem(24)};
    `};

    ${mediaMin.l`
      margin-left: -${rem(64)};
      margin-right: -${rem(64)};
      padding-left: ${rem(64)};
      padding-right: ${rem(64)};
      padding-top: ${rem(48)};
      padding-bottom: ${rem(48)};
    `};

    & a {
      display: block;
      color: ${theme.colors.dark900};
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      padding: ${rem(8)} 0;

      font-family: ${theme.fonts.bodyRegular};

      &:visited,
      &:link {
        color: ${theme.colors.dark900};
      }

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  }
`;

export const DummyInput = styled.textarea`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

export const StyledLoadComments = styled(LoadComments)`
  margin: ${rem(32)} auto;
  display: block;
`;

export const LoadCommentsIcon = styled(Icon)`
  margin-top: -${rem(3)};
  fill: ${theme.colors.gray500};
`;

export const LoadCommentsLabel = styled.span`
  display: inline-block;
`;

export const CommentsWrapper = styled.aside`
  width: 100%;
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.components.s};

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

    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;

export const BottomHR = styled(HR)`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
  margin-bottom: ${theme.spacing.components.m};
`};

  ${mediaMin.m`
  margin-bottom: ${theme.spacing.components.xl};
`};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-bottom: ${rem(64)};
  }
`;
