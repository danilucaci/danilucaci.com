import { css } from "styled-components";

export const theme = {
  colors: {
    dark900: "#141C29",
    dark800: "#46495C",
    dark700: "#67676B",
    light500: " #96A1B3",
    light400: " #BCC7D6",
    light300: " #DAE3ED",
    light200: " #F0F4F7",
    light100: " #FCFEFF",
    gray500: "#A6A9AD",
    gray400: "#CDCED1",
    gray300: "#E8E9EB",
    gray200: "#F5F5F5",
    gray100: "#FFFFFF",
    main600: "#0946B0",
    main500: "#0E54C4",
    main400: "#0567F0",
    main300: "#0C85F0",
    main200: "#3DAEFF",
    main100: "#E6F2FF",
    transparent: "rgba(255,255,255, 0.96)",
  },
  shadow: {
    default: "box-shadow: 0px 2px 8px 0px hsla(0, 0%, 60%, 0.2)",
    hover:
      "box-shadow: 0px 2px 6px -4px hsla(0, 2%, 40%, 0.4), 0px 6px 28px -4px hsla(0, 2%, 40%, 0.4)",
  },
  fonts: {
    system:
      "system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    code: "Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    bodyRegular: "OpenSans Regular",
    bodyBold: "OpenSans Bold",
    bodyItalic: "OpenSans Italic",
    header: "Montserrat Bold",
  },
  fontSizes: {
    h1: "3.5rem",
    h1s: "2rem",
    h2: "2.5rem",
    h2s: "1.5rem",
    h3: "1.5rem",
    h3s: "1.25rem",
    h4: "1.125rem",
    subhead: "1.5rem",
    subheads: "1.25rem",
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
    subhead: "2.5rem",
    subheads: "2rem",
    m: "1.75rem",
    s: "1.5rem",
    xs: "1.25rem",
  },
  gutters: {
    s: "1em",
    m: "1.5em",
  },
  headingSpacing: {
    before: {
      s: "1.75rem",
      m: "3.5rem",
    },
    after: {
      s: "1.75rem",
      m: "1.75rem",
    },
  },
  mainMargins: {
    top: {
      s: "1em",
      m: "4.5em",
      xl: "4.5em",
    },
    bottom: {
      s: "2rem",
      m: "3.5rem",
      xl: "3.5rem",
    },
  },
  contain: {
    page: "73.5em",
    content: "61.5em",
    blog: "46.5em",
  },
  logoWidth: "6.5625em",
  logoHeight: "3em",
  breakpoints: {
    xxs: "22.5em", //360
    xs: "32em", //512
    s: "38em", //608
    m: "40em", //640
    l: "45em", //720
    xl: "50em", //800
    xxl: "63em", //1008
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
export const breakpoint = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media screen and (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

// iterate through the sizes and create a media template
export const mediaMin = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media screen and (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

// iterate through the sizes and create a media template
export const mediaMax = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media screen and (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

// Convert to rem a unitless value passed in
// ${rem`24`}; => 24/16 = 1.5rem
export const rem = (value) => {
  const conv = Number(value) / 16;
  return `${conv}rem`;
};
