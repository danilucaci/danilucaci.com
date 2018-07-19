import { injectGlobal, css } from "styled-components";

export const theme = {
  colors: {
    colorDark900: "#141C29",
    colorDark800: "#46495C",
    colorDark700: "#67676B",
    colorLight500: " #96A1B3",
    colorLight400: " #BCC7D6",
    colorLight300: " #DAE3ED",
    colorLight200: " #F0F4F7",
    colorLight100: " #FCFEFF",
    colorGray500: "#A6A9AD",
    colorGray400: "#CDCED1",
    colorGray300: "#E8E9EB",
    colorGray200: "#F5F5F5",
    colorGray100: "#FFFFFF",
    colorShadowDefault: "hsla(0, 0, 60%, 0.2)",
    colorShadowHover: "hsla(0, 2%, 40%, 0.4)",
    colorMain600: "#0946B0",
    colorMain500: "#0E54C4",
    colorMain400: "#0567F0",
    colorMain300: "#0C85F0",
    colorMain200: "#3DAEFF",
    colorMain100: "#E6F2FF",
  },
  fonts: {
    fontSystem:
      "system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    fontCode: "Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    fontBodyRegular: "OpenSans Regular",
    fontBodyBold: "OpenSans Bold",
    fontBodyItalic: "OpenSans Italic",
    fontHeaderBold: "Montserrat Bold",
  },
  fontSizes: {
    h1: "3.5rem",
    h1s: "2rem",
    h2: "2.5rem",
    h2s: "1.5rem",
    h3: "1.5rem",
    h3s: "1.25rem",
    h4: "1.125rem",
    xl: "1.5rem",
    l: "1.25rem",
    m: "1.125rem",
    s: "1rem",
    xs: "0.875rem",
  },
  lineHeights: {
    h1: "4rem",
    h1s: "2.5rem",
    h2: "3rem",
    h2s: "2rem",
    h3: "2rem",
    h3s: "1.5rem",
    h4: "1.75rem",
    m: "1.75rem",
    s: "1.5rem",
    xs: "1.25rem",
  },
};

const breakpoints = {
  xxs: 360,
  xs: 512,
  s: 608,
  m: 640,
  l: 720,
  xl: 800,
  xxl: 1008,
};

// iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

injectGlobal`
  @font-face {
  font-family: 'OpenSans Regular';
  font-style: normal;
  font-display: swap;
  /* displays text with fallback font and replaces when the font is ready */
  font-weight: 400;
  src: local('OpenSans Regular'),
  local('OpenSans-Regular'),
  local('Open Sans-Regular'),
  local('Open Sans Regular'),
  local('Open Sans'),
  url('/assets/fonts/OpenSans-Regular-subset.woff2') format('woff2'),
  url('/assets/fonts/OpenSans-Regular-subset.woff') format('woff');
}

@font-face {
  font-family: 'OpenSans Bold';
  font-style: normal;
  font-display: swap;
  /* displays text with fallback font and replaces when the font is ready */
  font-weight: 700;
  src: local('OpenSans Bold'),
  local('OpenSans-Bold'),
  local('Open Sans Bold'),
  local('Open Sans'),
  url('/assets/fonts/OpenSans-Bold-subset.woff2') format('woff2'),
  url('/assets/fonts/OpenSans-Bold-subset.woff') format('woff');
}

@font-face {
  font-family: 'OpenSans Italic';
  font-style: italic;
  font-display: swap;
  /* displays text with fallback font and replaces when the font is ready */
  font-weight: 400;
  src: local('OpenSans Italic'),
  local('OpenSans-Italic'),
  local('Open Sans Italic'),
  local('Open Sans'),
  url('/assets/fonts/OpenSans-Italic-subset.woff2') format('woff2'),
  url('/assets/fonts/OpenSans-Italic-subset.woff') format('woff');
}

@font-face {
  font-family: 'Montserrat Bold';
  font-style: normal;
  font-display: swap;
  /* displays text with fallback font and replaces when the font is ready */
  font-weight: 700;
  src: local('Montserrat Bold'),
  local('Montserrat-Bold'),
  local('Montserrat'),
  url('/assets/fonts/Montserrat-Bold-subset.woff2') format('woff2'),
  url('/assets/fonts/Montserrat-Bold-subset.woff') format('woff');
}

html {
  background-color: #F5F5F5;
  color: #46495C;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 100%;
  line-height: 1.75rem;
  
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

::selection {
  color: #ffffff;
  text-shadow: none;
  background: #0946B0;
}

@media screen and (min-device-width: 45em) {
  html {
    // Turn it back to auto to prevent desktop scalling issues
    -ms-text-size-adjust: auto;
    -moz-text-size-adjust: auto;
    -o-text-size-adjust: auto;
    -webkit-text-size-adjust: auto;
    text-size-adjust: auto;
  }
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main {
	display: block;
}


  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  a {
    background-color: transparent;
  }
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  small {
    font-size: 80%;
  }
  
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  img {
    border-style: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  details {
    display: block;
  }
  
  summary {
    display: list-item;
  }
  
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;
