import { css } from "styled-components";

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
  maxPageWidth: 100,
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
export const mediaMin = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
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
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
