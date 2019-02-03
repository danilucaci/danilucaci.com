import { css } from "styled-components";

export const theme = {
  colors: {
    dark900: "#121C26",
    dark800: "#3A4554",
    dark700: "#5A616B",
    pageBackground: "#F5F6F7",
    sectionBackground: "#E6E8EB",
    pageDark500: "#0F2030",
    light200: "#99ABBF",
    light100: "#D8E1EB",
    gray500: "#A1A8B5",
    gray400: "#CBCED4",
    gray300: "#E6E8EB",
    gray200: "#F5F6F7",
    gray100: "#FFFFFF",
    main600: "#0946B0",
    main500: "#2C6DD4",
    main400: "#458FDE",
    main300: "#62B0F5",
    main200: "#9ED2FF",
    main100: "#E3F2FC",
    scrollToTop: "#E6E8EB",
  },
  shadow: {
    default:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    hover:
      "box-shadow: 0px 2px 8px -4px hsla(0,0%,40%,0.4), 0px 8px 20px -4px hsla(0,0%,70%,0.4)",
    navbar:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 4px 8px -2px hsla(0,0%,60%,0.24)",
    image:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 6px 12px -2px hsla(0,0%,60%,0.24)",
    dropdown:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    mobileCookieConsent:
      "box-shadow: 0px -2px 4px 0px hsla(0,0%,40%,0.2), 0px -6px 12px 0px hsla(0,0%,70%,0.4)",
  },
  fonts: {
    code:
      "'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    codeLoaded: "Roboto Mono Regular",
    codeLoadedItalic: "Roboto Mono Italic",
    bodyRegular: "Open Sans Regular",
    bodyBold: "Open Sans Bold",
    bodyItalic: "Open Sans Italic",
    header: "Montserrat Bold",
    headerRegular: "Montserrat Regular",
  },
  fontSizes: {
    h1: "2.5rem",
    h1s: "2rem",
    h2: "2rem",
    h2s: "1.5rem",
    h3: "1.5rem",
    h3s: "1.25rem",
    h4: "1.125rem",
    subhead: "1.5rem",
    subheadS: "1.25rem",
    sectionHeaderXL: "1rem",
    sectionHeaderS: "0.8125rem",
    button: "1rem",
    xl: "1.5rem",
    l: "1.25rem",
    m: "1.125rem",
    s: "1rem",
    xs: "0.875rem",
  },
  lineHeights: {
    h1: "3rem",
    h1s: "2.5rem",
    h2: "2.5rem",
    h2s: "2rem",
    h3: "2rem",
    h3s: "1.5rem",
    h4: "2rem",
    subhead: "2.5rem",
    subheadS: "2rem",
    sectionHeaderXL: "1.5rem",
    sectionHeaderS: "1.25rem",
    button: "1.5rem",
    m: "2rem",
    s: "1.5rem",
    xs: "1.25rem",
  },
  letterSpacing: {
    sectionHeaderXL: "1px",
    sectionHeaderS: "1px",
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
    xxxl: "75em", //1200
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
  xxxl: 1200,
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
