import styled, { createGlobalStyle } from "styled-components";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

const GlobalHTML = createGlobalStyle`
  html {
    background-color: #F5F6F7;
    color: #292C33;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 100%;
    line-height: 2; /* 32px */

    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -o-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    
    ${"" /* annoying */}
    ${"" /* scroll-behavior: smooth; */}
  }

  svg {
    position: absolute;
  }

  ::selection {
    color: #ffffff;
    text-shadow: none;
    background: #0946B0;
  }

  @media screen and (min-device-width: 45em) {
    html {
      /* Turn it back to auto to prevent desktop scalling issues */
      -ms-text-size-adjust: auto;
      -moz-text-size-adjust: auto;
      -o-text-size-adjust: auto;
      -webkit-text-size-adjust: auto;
      text-size-adjust: auto;
    }
  }

  h1 {
    color: ${theme.colors.dark900};
    font-weight: 700;
    font-style: normal;
    ${"" /* letter-spacing: ${theme.letterSpacing.h1}; */}

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-size: ${theme.fontSizes.h1s};

    ${mediaMin.xs`
      font-size: ${theme.fontSizes.h1};
    `}

    line-height: ${theme.lineHeights.h1s};

    ${mediaMin.xs`
      line-height: ${theme.lineHeights.h1};
    `}
  }
  
  h2 {
    color: ${theme.colors.dark900};
    font-weight: 700;
    font-style: normal;
    ${"" /* letter-spacing: ${theme.letterSpacing.h2}; */}

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-size: ${theme.fontSizes.h2s};

    ${mediaMin.xs`
      font-size: ${theme.fontSizes.h2};
    `}

    line-height: ${theme.lineHeights.h2s};

    ${mediaMin.xs`
      line-height: ${theme.lineHeights.h2};
    `}
  }

  h3 {
    color: ${theme.colors.dark900};
    font-weight: 700;
    font-style: normal;
    ${"" /* letter-spacing: ${theme.letterSpacing.h3}; */}

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-size: ${theme.fontSizes.h3s};

    ${mediaMin.xs`
      font-size: ${theme.fontSizes.h3};
    `}

    line-height: ${theme.lineHeights.h3s};

    ${mediaMin.xs`
      line-height: ${theme.lineHeights.h3};
    `}
  }

  h4 {
    color: ${theme.colors.dark900};
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.fontSizes.h4};
    line-height: ${theme.lineHeights.h4};
    ${"" /* letter-spacing: ${theme.letterSpacing.h4}; */}

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }
  }

  h5 {
    color: ${theme.colors.dark700};
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.fontSizes.sectionHeader};
    line-height: ${theme.lineHeights.sectionHeader};
    letter-spacing: ${theme.letterSpacing.sectionHeader};
    text-transform: uppercase;

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }
  }

  h2,
  h3,
  h4 {
    &:target {
      animation: animateAnchor 1.5s ease;
      &::before {
        content: "";
        display: block;
        height: ${rem(80)};
        margin-top: -${rem(80)};
      }
    }
  }

  .headings-anchor {
    position: relative;
    float: left;
    margin-left: -${rem(24)};
    padding-right: ${rem(4)};
    margin-top: 0;
    & > svg {
      fill: ${theme.colors.main600};
    }
  }

  @keyframes animateAnchor {
    0% {
      color: ${theme.colors.dark900};
    }
    1%,
    80% {
      color: ${theme.colors.main600};
    }
    0% {
      color: ${theme.colors.dark900};
    }
  }

  p,ul {
    color: ${theme.colors.dark800};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }
    
    font-weight: 400;
    font-style: normal;

    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }

  p:empty {
      display:none;
      margin:0;
      padding:0;
      border:0;
  }

  a {
    color: ${theme.colors.main600};
    text-decoration: underline;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
    
    a,
    &:visited,
    &:link {
      color: ${theme.colors.main600};
    }

    a:hover {
      cursor: pointer;
      background-color: ${theme.colors.gray300};
    }
  }

  pre,
  code {
    font-family: ${theme.fonts.code};
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
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
    margin-top: ${rem(8)};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

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

  .video-iphoneX--container {
    position: relative;
    display: block;
    width: 100%;

    ${mediaMin.xxs`
      width: ${rem(375)};
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
  }
`;

export default GlobalHTML;
