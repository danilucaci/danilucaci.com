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
    buttonLight: "#F0F8FF",
    gray500: "#A1A8B5",
    gray400: "#CBCED4",
    gray300: "#E6E8EB",
    gray200: "#F5F6F7",
    gray100: "#FFFFFF",
    main600: "#0946B0",
    main500: "#185DC4",
    main400: "#458FDE",
    main300: "#62B0F5",
    main200: "#9ED2FF",
    main100: "#E3F2FC",
    danger600: "#821C00",
    danger500: "#A6441B",
    danger400: "#D97543",
    danger300: "#F7BA97",
    danger200: "#F7E6D5",
    danger100: "#FAF6F2",
    success600: "#00520A",
    success500: "#0C6122",
    success400: "#55A162",
    success300: "#C7EBCA",
    success200: "#E9F5EA",
    success100: "#F5FAF6",
    scrollToTop: "#CBCED4",
  },
  shadow: {
    default:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    hover:
      "box-shadow: 0px 2px 8px -4px hsla(0,0%,40%,0.4), 0px 8px 20px -2px hsla(0,0%,70%,0.4)",
    navbar:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 4px 8px -2px hsla(0,0%,60%,0.24)",
    image:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 6px 12px -2px hsla(0,0%,60%,0.24)",
    dropdown:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    mobileCookieConsent:
      "box-shadow: 0px -2px 4px 0px hsla(0,0%,40%,0.2), 0px -6px 12px 0px hsla(0,0%,70%,0.4)",
    buttons: {
      tertiary:
        "box-shadow: 0 2px 2px 0 rgba(12,52,117,0.13), 0 2px 8px -2px rgba(16,41,82,0.27)",
      mainGhost:
        "box-shadow: 0 1px 3px 0 rgba(0,23,61,0.64), 0 3px 11px -2px rgba(16,41,82,0.33)",
      darkGhost:
        "box-shadow: 0 2px 4px 0 rgba(61,61,61,0.64), 0 3px 11px -2px rgba(82,82,82,0.33)",
      main:
        "box-shadow: 0 2px 4px 0 rgba(0,31,82,0.59), 0 6px 14px -2px rgba(0,74,153,0.33)",
      loadComments:
        "box-shadow: 0 2px 4px 0 rgba(61,61,61,0.64), 0 3px 11px -2px rgba(82,82,82,0.33)",
    },
  },
  fonts: {
    code:
      "'Roboto Mono Regular', 'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    codeItalic:
      "'Roboto Mono Italic', 'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
    bodyRegular:
      "'Open Sans Regular', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    bodyBold:
      "'Open Sans Bold', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    bodyItalic:
      "'Open Sans Italic', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    header:
      "'Montserrat Bold', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    headerRegular:
      "'Montserrat Regular', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji'",
  },
  fontSizes: {
    h1: "2.5rem",
    h1s: "2rem",
    h2: "2rem",
    h2s: "1.5rem",
    h3: "1.5rem",
    h3s: "1.25rem",
    h4: "1.125rem",
    subhead: "1.75rem",
    subheadS: "1.5rem",
    sectionHeaderXL: "1rem",
    sectionHeaderS: "0.8125rem",
    siblingPostsXL: "1.5rem",
    siblingPostsS: "1rem",
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
    subhead: "2.75rem",
    subheadS: "2.25rem",
    sectionHeaderXL: "1.5rem",
    sectionHeaderS: "1.25rem",
    siblingPostsXL: "2rem",
    siblingPostsS: "1.5rem",
    button: "1.5rem",
    m: "2rem",
    s: "1.5rem",
    xs: "1.25rem",
  },
  letterSpacing: {
    sectionHeaderXL: "1px",
    sectionHeaderS: "1px",
  },
  borderRadius: {
    buttons: "3px",
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
  },
  spacing: {
    row: {
      s: "4em",
      m: "7em",
      xl: "9em",
    },
    components: {
      s: "4em",
      m: "5em",
      xl: "7em",
    },
  },
  contain: {
    wrapper: {
      col12: "73.5em",
      col10: "61.5em",
      col8: "49.5em",
      col6: "37.5em",
    },
    inner: {
      col12: "70.5em",
      col10: "58.5em",
      col8: "46.5em",
      col6: "34.5em",
    },
  },
  iconsScale: "1.2",
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
