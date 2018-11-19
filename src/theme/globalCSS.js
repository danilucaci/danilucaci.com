import styled, { createGlobalStyle } from "styled-components";
import { theme, mediaMin } from "../theme/globalStyles";

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
    scroll-behavior: smooth;
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
    letter-spacing: ${theme.letterSpacing.h1};

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
    letter-spacing: ${theme.letterSpacing.h2};

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
    letter-spacing: ${theme.letterSpacing.h3};

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
    letter-spacing: ${theme.letterSpacing.h4};

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }
  }

  p {
    color: ${theme.colors.dark800};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }
    
    font-weight: 400;
    font-style: normal;

    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }

  a {
    color: ${theme.colors.main600};
    text-decoration: underline;
    
    a,
    &:visited,
    &:link {
      color: ${theme.colors.main600};
    }

    a:hover {
      cursor: pointer;
      background-color: ${theme.colors.main100};
    }
  }

  pre,
  code {
    font-family: ${theme.fonts.code};
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }
`;

export default GlobalHTML;
