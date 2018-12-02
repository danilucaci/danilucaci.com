import { css } from "styled-components";

export const theme = {
  colors: {
    dark900: "#292C33",
    dark800: "#4B4C52",
    dark700: "#67676B",
    pageBackground: "#F5F6F7",
    sectionBackground: "#E6E8EB",
    light500: "#96A1B3",
    light400: "#BCC7D6",
    light300: "#DAE3ED",
    light200: "#F0F4F7",
    light100: "#FCFEFF",
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
    scrollToTop: "#cdced1e0",
    transparent: "rgba(255,255,255, 0.96)",
    social: {
      twitter: "#1DA1F2",
      facebook: "#4A67AD",
      codepen: "#212121",
      github: "#24292E",
      linkedin: "#0077B5",
      gplus: "#DB4437",
      dribbble: "#EA4C89",
      instagram: "#DF54C1",
    },
  },
  shadow: {
    default:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    hover:
      "box-shadow: 0px 2px 8px -4px hsla(0,0%,40%,0.4), 0px 8px 20px -4px hsla(0,0%,40%,0.4)",
    navbar:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 4px 8px -2px hsla(0,0%,60%,0.24)",
    image:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 6px 12px -2px hsla(0,0%,60%,0.24)",
  },
  fonts: {
    code:
      "'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    bodyRegular: "OpenSans Regular",
    bodyBold: "OpenSans Bold",
    bodyItalic: "OpenSans Italic",
    header: "Montserrat Bold",
  },
  fontSizes: {
    h1: "3rem",
    h1s: "2rem",
    h2: "2.5rem",
    h2s: "1.5rem",
    h3: "1.5rem",
    h3s: "1.25rem",
    h4: "1.125rem",
    subhead: "1.5rem",
    subheadS: "1.25rem",
    sectionHeader: "1rem",
    button: "1rem",
    xl: "1.5rem",
    l: "1.25rem",
    m: "1.125rem",
    s: "1rem",
    xs: "0.875rem",
  },
  lineHeights: {
    h1: "3.5rem",
    h1s: "2.5rem",
    h2: "3rem",
    h2s: "2rem",
    h3: "2rem",
    h3s: "1.5rem",
    h4: "2rem",
    subhead: "2.5rem",
    subheadS: "2rem",
    sectionHeader: "1.5rem",
    button: "1.5rem",
    m: "2rem",
    s: "1.5rem",
    xs: "1.25rem",
  },
  letterSpacing: {
    h1: "0.015rem",
    h2: "0rem",
    h3: "0.02rem",
    h4: "0rem",
    h5: "0.02rem",
    m: "-0.02rem",
    s: "-0.02rem",
    xs: "0rem",
    sectionHeader: "0.03rem",
    socialHeader: "-0.02rem",
    subhead: "0.015rem",
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
      m: "1.5em",
      xl: "2em",
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
    post: "34.5em",
  },
  logoWidth: "6em",
  logoHeight: "3em",
  navBarHeight: "3.5em",
  showScrollBars: `/* Show the scrollbar and scroll */
                  /* On webkit */
                  &::-webkit-scrollbar {
                    display: block;
                  }

                  /* For Edge */
                  -ms-overflow-style: scrollbar;`,
  hideScrollBars: `/* Hide the scrollbar and still scroll */
                  /* On webkit */
                  &::-webkit-scrollbar {
                    display: none;
                  }

                  /* For Edge */
                  -ms-overflow-style: -ms-autohiding-scrollbar;
                  -ms-overflow-style: none;`,
  mailToLink: "mailto:hello@danilucaci.com?body=Hi%20Dani%2C%0A",
  breakpoints: {
    xxxs: "22.5em", //360
    xxs: "26.5em", //424
    xs: "32em", //512
    s: "38em", //608
    m: "40em", //640
    l: "45em", //720
    xl: "50em", //800
    xxl: "63em", //1008
  },
};

const breakpoints = {
  xxxs: 360,
  xxs: 424,
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
