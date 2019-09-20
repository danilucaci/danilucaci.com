import { createGlobalStyle } from "styled-components";
import { theme, mediaMin, rem } from "./theme";

const GlobalCSS = createGlobalStyle`
  html {
    background-color: #FFFFFF;
    color: ${theme.color.text.default};
    font-family: ${theme.font.family.body.fallback};
    font-size: 16px;
    line-height: 24px;
    ${"" /* font-size: 100%; */}

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
    color: ${theme.color.text.default} !important;
    text-shadow: none;
    background: ${theme.color.background.selection.default};
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

  p {
    font-weight: 400;
    font-style: normal;

    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.m};
    
    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }
  }
  

  h1 {
    font-weight: 700;
    font-style: normal;

    font-size: ${theme.font.size.display.mobile.h1};
    line-height: ${theme.font.lineHeight.display.mobile.h1};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h1};
      line-height: ${theme.font.lineHeight.display.desktop.h1};
    `}
    
    font-family: ${theme.font.family.display.fallback};

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }
  }
  
  h2 {
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.font.size.display.mobile.h2};
    line-height: ${theme.font.lineHeight.display.mobile.h2};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h2};
      line-height: ${theme.font.lineHeight.display.desktop.h2};
    `}

    font-family: ${theme.font.family.display.fallback};

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }
  }

  h3 {
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.font.size.display.mobile.h3};
    line-height: ${theme.font.lineHeight.display.mobile.h3};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h3};
      line-height: ${theme.font.lineHeight.display.desktop.h3};
    `}

    font-family: ${theme.font.family.display.fallback};

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }
  }

  h4 {
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.font.size.display.mobile.h4};
    line-height: ${theme.font.lineHeight.display.mobile.h4};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h4};
      line-height: ${theme.font.lineHeight.display.desktop.h4};
    `}

    font-family: ${theme.font.family.display.fallback};

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }
  }

  h5 {
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.font.size.display.mobile.h5};
    line-height: ${theme.font.lineHeight.display.mobile.h5};

    ${mediaMin.xs`
      font-size: ${theme.font.size.display.desktop.h5};
      line-height: ${theme.font.lineHeight.display.desktop.h5};
    `}

    font-family: ${theme.font.family.display.fallback};

    .fonts-loaded & {
      font-family: ${theme.font.family.display.bold};
    }
  }
  
  h2,
  h3 {
    &:target {
      animation: animateAnchor 1.5s ease;

      &::before {
        content: "";
        display: block;
        height: ${rem(24)};
        margin-top: -${rem(24)};
      }

      &:hover {
        & > .headings-anchor {
          display: block;
        }
      }
    }

    &:hover {
      & > .headings-anchor {
        display: block;
      }
    }
  }

  .headings-anchor {
    display: none;
    position: relative;
    float: left;
    margin-left: -${rem(24)};
    padding-right: ${rem(4)};
    margin-top: 0;

    & > svg {
      fill: ${theme.color.text.primary};
    }
  }

  @keyframes animateAnchor {
    0% {
      color: ${theme.color.text.default};
    }
    1%,
    80% {
      color: ${theme.color.text.primary};
    }
    0% {
      color: ${theme.color.text.default};
    }
  }

  p,
  ul,
  ol {
    color: ${theme.color.text.default};
    font-weight: 400;
    font-style: normal;
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.m};
    
    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol {
    margin-left: 1em;
    list-style-position: outside;
  }

  p:empty {
    display:none;
    margin:0;
    padding:0;
    border:0;
  }

  strong, b {
    color: ${theme.color.text.default};
    font-weight: 700;
    font-style: normal;
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.m};
    
    .fonts-loaded & {
      font-family: ${theme.font.family.body.bold};
    }
  }

  em {
    color: ${theme.color.text.default};
    font-weight: 400;
    font-style: italic;
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.m};

    .fonts-loaded & {
      font-family: ${theme.font.family.body.italic};
    }
  }

  blockquote, blockquote * {
    font-family: ${theme.font.family.body.fallback};
    color: ${theme.color.text.primary};

    .fonts-loaded & {
      font-family: ${theme.font.family.body.regular};
    }
  }
  
  blockquote strong {
    font-family: ${theme.font.family.body.fallback};
    
    font-weight: 700;

    .fonts-loaded & {
      font-family: ${theme.font.family.body.bold};
    }
  }

  a {
    color: ${theme.color.text.link.primary.enabled};
    text-decoration: underline;
    font-style: normal;
    font-weight: 400;

    &:visited,
    &:link {
      color: ${theme.color.text.link.primary.enabled};
    }

    &:hover {
      background-color: ${theme.color.background.link.primary};
      color: ${theme.color.text.link.primary.hover};
      cursor: pointer;
    }

    &:active {
      background-color: ${theme.color.background.link.primary};
      color: ${theme.color.text.link.primary.active};
      cursor: pointer;
    }
  }

  pre,
  code {
    font-family: ${theme.font.family.code.regular};
    font-size: ${theme.font.size.body.m};
    line-height: ${theme.font.lineHeight.body.m};
    font-family: ${theme.font.family.code.regular};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  

  .aria-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  .external-link {
    display: inline-block;
    position: relative;
    bottom: -${rem(6)};
    height: ${rem(24)};
    width: ${rem(24)};
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath id='a' fill-rule='evenodd' fill='%230946B0' d='M16.5714286,13.2857143 L16.5714286,16.1428571 C16.5714286,17.5625 15.4196429,18.7142857 14,18.7142857 L6.57142857,18.7142857 C5.15178571,18.7142857 4,17.5625 4,16.1428571 L4,8.71428571 C4,7.29464286 5.15178571,6.14285714 6.57142857,6.14285714 L12.8571429,6.14285714 C13.0178571,6.14285714 13.1428571,6.26785714 13.1428571,6.42857143 L13.1428571,7 C13.1428571,7.16071429 13.0178571,7.28571429 12.8571429,7.28571429 L6.57142857,7.28571429 C5.78571429,7.28571429 5.14285714,7.92857143 5.14285714,8.71428571 L5.14285714,16.1428571 C5.14285714,16.9285714 5.78571429,17.5714286 6.57142857,17.5714286 L14,17.5714286 C14.7857143,17.5714286 15.4285714,16.9285714 15.4285714,16.1428571 L15.4285714,13.2857143 C15.4285714,13.125 15.5535714,13 15.7142857,13 L16.2857143,13 C16.4464286,13 16.5714286,13.125 16.5714286,13.2857143 Z M20,5.57142857 L20,10.1428571 C20,10.4553571 19.7410714,10.7142857 19.4285714,10.7142857 C19.2767857,10.7142857 19.1339286,10.6517857 19.0267857,10.5446429 L17.4553571,8.97321429 L11.6339286,14.7946429 C11.5803571,14.8482143 11.5,14.8839286 11.4285714,14.8839286 C11.3571429,14.8839286 11.2767857,14.8482143 11.2232143,14.7946429 L10.2053571,13.7767857 C10.1517857,13.7232143 10.1160714,13.6428571 10.1160714,13.5714286 C10.1160714,13.5 10.1517857,13.4196429 10.2053571,13.3660714 L16.0267857,7.54464286 L14.4553571,5.97321429 C14.3482143,5.86607143 14.2857143,5.72321429 14.2857143,5.57142857 C14.2857143,5.25892857 14.5446429,5 14.8571429,5 L19.4285714,5 C19.7410714,5 20,5.25892857 20,5.57142857 Z'/%3e%3c/svg%3e");
  }

  #gatsby-noscript {
    width: 100%;
    display: block;
    padding: ${rem(16)};
    background-color: ${theme.color.background.section.noscript};
    color: ${theme.color.text.light.primary};
    text-align: center; 
  }
`;

export default GlobalCSS;
