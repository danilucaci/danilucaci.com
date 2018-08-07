import { injectGlobal } from "styled-components";

injectGlobal`
  html {
    background-color: #F5F5F5;
    color: #46495C;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 100%;
    line-height: 1.75; /* 28px */

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
    overflow-x: hidden;
  }

  svg{
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
`;
