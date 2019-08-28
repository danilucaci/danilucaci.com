import { css } from "styled-components";

const COLORS = {
  grey900: "#1A212B",
  grey800: "#3A424D",
  grey700: "#5F6570",
  grey600: "#81878F",
  grey500: "#A3A8AD",
  grey400: "#BFC3C7",
  grey300: "#D2D5D9",
  grey200: "#E3E6E8",
  grey100: "#EDF0F2",
  grey50: "#F5F6F7",
  grey00: "#FFFFFF",
  primary900: "#021E4F",
  primary800: "#073375",
  primary700: "#123D8C",
  primary600: "#1851BB",
  primary500: "#2E6FD5",
  primary400: "#4F8FE9",
  primary300: "#7CB1F6",
  primary200: "#B1D3FD",
  primary100: "#CDE3FE",
  primary50: "#E8F3FF",
  secondary900: "#4D3B06",
  secondary800: "#91770C",
  secondary700: "#CCA508",
  secondary600: "#F0D330",
  secondary500: "#F2DA4F",
  secondary400: "#F5E06E",
  secondary300: "#F7E78D",
  secondary200: "#F9EDAC",
  secondary100: "#FBF4CB",
  secondary50: "#FEFBEA",
  danger900: "#781B00",
  danger800: "#781B00",
  danger700: "#9F2300",
  danger600: "#BF310C",
  danger500: "#D74323",
  danger400: "#E85D45",
  danger300: "#F48174",
  danger200: "#FBB2AE",
  danger100: "#FDCDCC",
  danger50: "#FFF5F5",
  success900: "#001F0A",
  success800: "#004817",
  success700: "#007322",
  success600: "#009C26",
  success500: "#0CC029",
  success400: "#2EDB38",
  success300: "#6AED61",
  success200: "#B1F7A0",
  success100: "#CFF8C1",
  success50: "#EAFAE2",
};

export const theme = {
  colors: COLORS,
  color: {
    text: {
      default: COLORS.grey900,
      subdued: COLORS.grey700,
      light: {
        white: COLORS.grey00,
        primary: COLORS.primary200,
      },
      input: {
        label: COLORS.grey900,
        placeholder: COLORS.grey700,
        value: COLORS.grey900,
        validationErrorMessage: COLORS.danger800,
      },
      button: {
        primary: {
          enabled: COLORS.primary50,
          disabled: COLORS.grey00,
        },
        secondary: {
          enabled: COLORS.secondary900,
          disabled: COLORS.grey00,
        },
        outlined: {
          enabled: COLORS.grey00,
          disabled: COLORS.grey500,
        },
      },
      link: {
        enabled: COLORS.primary600,
        hover: COLORS.primary600,
        active: COLORS.primary700,
      },
    },
    background: {
      page: COLORS.grey00,
      section: {
        lightest: COLORS.grey50,
        lighter: COLORS.grey100,
        light: COLORS.grey200,
        contactCard: COLORS.primary700,
      },
      primary: {
        enabled: COLORS.primary600,
        hover: COLORS.primary500,
        active: COLORS.primary700,
        focus: COLORS.primary700,
        disabled: COLORS.grey500,
      },
      secondary: {
        enabled: COLORS.secondary600,
        hover: COLORS.secondary500,
        active: COLORS.secondary700,
        focus: COLORS.secondary700,
        disabled: COLORS.grey500,
      },
      outlined: {
        enabled: COLORS.grey00,
        hover: COLORS.grey00,
        active: COLORS.grey50,
        focus: COLORS.grey50,
        disabled: COLORS.grey500,
      },
      link: COLORS.primary50,
      error: COLORS.danger50,
      success: COLORS.success50,
      footer: COLORS.grey50,
    },
    border: {
      primary: {
        enabled: COLORS.primary600,
        focus: COLORS.primary500,
        hover: COLORS.primary500,
        active: COLORS.primary700,
        disabled: COLORS.grey500,
      },
      secondary: {
        enabled: COLORS.secondary600,
        focus: COLORS.secondary900,
        hover: COLORS.secondary500,
        active: COLORS.secondary700,
        disabled: COLORS.grey500,
      },
      outlined: {
        enabled: COLORS.grey400,
        focus: COLORS.grey900,
        hover: COLORS.grey400,
        active: COLORS.grey400,
        disabled: COLORS.grey300,
      },
      input: {
        enabled: COLORS.grey400,
        focus: COLORS.grey900,
        disabled: COLORS.grey300,
        valid: COLORS.success600,
        error: COLORS.danger600,
      },
      checkbox: {
        enabled: COLORS.grey400,
        focus: COLORS.primary600,
        disabled: COLORS.grey300,
      },
    },
    icon: {
      default: COLORS.grey900,
      subdued: COLORS.grey700,
      disabled: COLORS.grey500,
      error: COLORS.danger800,
      success: COLORS.success600,
    },
  },
  shadow: {
    default:
      "box-shadow: 0 2px 6px 0 rgba(102,102,102,0.20), 0 8px 16px 0 rgba(179,179,179,0.15)",
    hover:
      "box-shadow: 0 2px 8px -4px rgba(102,102,102,0.40), 0 8px 20px -4px rgba(102,102,102,0.31)",
    navbar:
      "box-shadow: 0px 2px 4px -2px hsla(0,0%,40%,0.3), 0px 4px 8px -2px hsla(0,0%,60%,0.24)",
    image:
      "box-shadow: 0 1px 4px 0 rgba(0,0,0,0.20), 0 1px 2px 0 rgba(0,0,0,0.08)",
    dropdown:
      "box-shadow: 0px 2px 4px 0px hsla(0,0%,40%,0.2), 0px 6px 12px 0px hsla(0,0%,70%,0.24)",
    copyUrl:
      "box-shadow: 2px 2px 2px 0px hsla(0,0%,40%,0.2), 6px 6px 4px 0px hsla(0,0%,70%,0.24)",
    mobileCookieConsent:
      "box-shadow: 0 -6px 48px 0 rgba(255,255,255,0.60), 0 -6px 18px 0 rgba(128,128,128,0.60)",
    successMessage:
      "box-shadow: 0 2px 12px -2px rgba(133,198,255,0.40), 0 2px 8px -2px rgba(0,86,214,0.30)",
    subscribeSuccessMessage:
      "box-shadow: 0 2px 12px -2px rgba(133,198,255,0.40), 0 2px 8px -2px rgba(0,86,214,0.30)",
    subscribeErrorMessage:
      "box-shadow: 0 2px 12px -2px rgba(247,230,213,0.50), 0 2px 8px -2px rgba(166,68,27,0.50)",
    button: {
      primary: {
        hover:
          "0 1px 4px 0 rgba(17,30,82,0.47), 0 1px 16px 2px rgba(0,47,158,0.27)",
        focus: "0 0 1px 1px #4F8FE9, 0 0 0 3px #7CB1F6",
      },
      secondary: {
        hover:
          "0 1px 2px 0 rgba(230,195,0,0.60), 0 2px 6px 1px rgba(153,130,0,0.40)",
        focus: "0 0 1px 1px #FFE359, 0 0 0 3px #FFEA82",
      },
      outlined: {
        hover: "0 1px 2px 0 rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.12)",
        focus: "0 0 1px 1px #D2D5D9, 0 0 0 3px #E3E6E8",
      },
      tertiary:
        "box-shadow: 0 2px 6px 0 rgba(8,36,82,0.13), 0 2px 12px -2px rgba(12,31,61,0.27)",
      mainGhost:
        "box-shadow: 0 1px 3px 0 rgba(0,77,204,0.64), 0 3px 11px -2px rgba(0,72,189,0.33)",
      darkGhost:
        "box-shadow: 0 2px 5px 0 rgba(82,82,82,0.13), 0 2px 13px -2px rgba(61,61,61,0.27)",
      main:
        "box-shadow: 0 2px 4px 0 rgba(0,77,204,0.64), 0 6px 14px -2px rgba(0,91,189,0.33)",
      success:
        "box-shadow: 0 0px 8px -2px rgba(12,97,34,0.8), 0 2px 16px -2px rgba(85,161,98,0.48)",
      error:
        "box-shadow: 0 4px 10px 0 rgba(204,150,96,0.80), 0 2px 5px -2px rgba(166,30,0,0.60)",
      loadComments:
        "box-shadow: 0 2px 5px 0 rgba(82,82,82,0.13), 0 2px 13px -2px rgba(61,61,61,0.27)",
    },
    input: {
      focus: `0 0 2px 1px ${COLORS.grey300}, 0 0 0 3px ${COLORS.grey200}`,
      error: `0 0 2px 1px ${COLORS.danger300}, 0 0 0 3px ${COLORS.danger200}`,
      valid: `0 0 2px 1px ${COLORS.success300}, 0 0 0 3px ${COLORS.success200}`,
    },
    checkbox: {
      focus: `0 0 2px 1px ${COLORS.grey300}, 0 0 0 3px ${COLORS.grey200}`,
      error: `0 0 2px 1px ${COLORS.danger300}, 0 0 0 3px ${COLORS.danger200}`,
      valid: `0 0 2px 1px ${COLORS.success300}, 0 0 0 3px ${COLORS.success200}`,
    },
    link: {
      link: "box-shadow: 0 0 2px 1px #A1A8B5, 0 0 0 3px #CBCED4",
    },
  },
  font: {
    family: {
      display: {
        fallback: "system-ui, Georgia, 'Times New Roman', Times, serif",
        regular:
          "'Merriweather Regular', BlinkMacSystemFont, -apple-system, 'Segoe UI', Georgia, 'Times New Roman', Times, serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        bold:
          "'Merriweather Bold', BlinkMacSystemFont, -apple-system, 'Segoe UI', Georgia, 'Times New Roman', Times, serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        light:
          "'Merriweather Light', BlinkMacSystemFont, -apple-system, 'Segoe UI', Georgia, 'Times New Roman', Times, serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      },
      body: {
        fallback:
          "system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        regular:
          "'Lato', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        bold:
          "'Lato Bold', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        italic:
          "'Lato Italic', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      },
      code: {
        fallback:
          "'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
        regular:
          "'Roboto Mono Regular', 'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
        italic:
          "'Roboto Mono Italic', 'Ubuntu Mono', Consolas, Menlo, 'Liberation Mono', Courier, monospace",
      },
    },
    size: {
      display: {
        desktop: {
          h1: "2.5rem",
          h2: "2rem",
          h3: "1.5rem",
          h4: "1.125rem",
          h5: "1.125rem",
          subtitle: "1.25rem",
        },
        mobile: {
          h1: "2rem",
          h2: "1.5rem",
          h3: "1.25rem",
          h4: "1.125rem",
          h5: "1.125rem",
          subtitle: "1.125rem",
        },
      },
      body: {
        m: "1.125rem",
        s: "1rem",
        subhead: "0.875rem",
      },
      button: {
        default: "1rem",
      },
    },
    lineHeight: {
      display: {
        desktop: {
          h1: "3rem",
          h2: "2.5rem",
          h3: "2rem",
          h4: "2rem",
          h5: "2rem",
          subtitle: "2rem",
        },
        mobile: {
          h1: "2.5rem",
          h2: "2rem",
          h3: "1.5rem",
          h4: "2rem",
          h5: "2rem",
          subtitle: "2rem",
        },
      },
      body: {
        m: "2rem",
        s: "1.5rem",
        subhead: "1.25rem",
      },
      button: {
        default: "1.5rem",
      },
    },
    letterSpacing: {
      body: {
        subhead: "0.05rem",
      },
    },
  },
  borderRadius: {
    button: "3px",
    default: "3px",
  },
  size: {
    button: {
      height: {
        default: "3rem",
      },
      width: {
        default: "15rem",
      },
    },
    border: {
      button: {
        default: "2px",
        focus: "2px",
      },
      input: "1px",
      checkbox: "1px",
      components: "1px",
    },
  },
  layout: {
    gutter: {
      s: "1em",
      m: "1.5em",
    },
    gridSpacing: {
      s: "0.5em",
      m: "0.75em",
    },
    col12: {
      wrapper: "73.5em",
      inner: "70.5em",
    },
    col10: {
      wrapper: "61.5em",
      inner: "58.5em",
    },
    col8: {
      wrapper: "49.5em",
      inner: "46.5em",
    },
    col6: {
      wrapper: "37.5em",
      inner: "34.5em",
    },
  },
  spacing: {
    main: {
      top: "2.5em",
    },
    text: {
      display: {
        before: {
          s: "1.75rem",
          m: "3.5rem",
        },
        after: {
          s: "1.75rem",
          m: "1.75rem",
        },
      },
      body: "2rem",
    },
    row: {
      s: "4em",
      m: "5em",
      xl: "8em",
    },
    rowTop: {
      s: "4em",
      m: "4em",
      xl: "5.5em",
    },
    components: {
      s: "4em",
      m: "5em",
      xl: "7em",
    },
    button: {
      default: {
        vertical: "0.5rem",
        horizontal: "1rem",
      },
    },
  },
  iconsScale: "1.2",
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
    nav: "35em", //560
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
  nav: 560,
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
  {},
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
  {},
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
  {},
);

// Convert to rem a unitless value passed in
// ${rem`24`}; => 24/16 = 1.5rem
export const rem = (value) => {
  const conv = Number(value) / 16;
  return `${conv}rem`;
};