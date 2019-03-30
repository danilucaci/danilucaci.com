import styled from "styled-components";
import {
  RobotoMonoRegularWoff2,
  RobotoMonoRegularWoff,
  RobotoMonoItalicWoff2,
  RobotoMonoItalicWoff,
  OpenSansRegularWoff2,
  OpenSansRegularWoff,
  OpenSansItalicWoff2,
  OpenSansItalicWoff,
  OpenSansBoldWoff2,
  OpenSansBoldWoff,
  MontserratRegularWoff2,
  MontserratRegularWoff,
  MontserratBoldWoff2,
  MontserratBoldWoff,
} from "../fonts";

export const Page = styled.div`
  /* Sticky Footer  */
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 0 auto;
  }

  @font-face {
  font-family: 'Roboto Mono Regular';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Roboto Mono Regular'), 
  url('${RobotoMonoRegularWoff2}') format('woff2'),
  url('${RobotoMonoRegularWoff}') format('woff');
}

@font-face {
  font-family: 'Roboto Mono Italic';
  font-style: italic;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Roboto Mono Italic'), 
  url('${RobotoMonoItalicWoff2}') format('woff2'),
  url('${RobotoMonoItalicWoff}') format('woff');
}

@font-face {
  font-family: 'Open Sans Regular';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Open Sans Regular'), 
  url('${OpenSansRegularWoff2}') format('woff2'),
  url('${OpenSansRegularWoff}') format('woff');
}

@font-face {
  font-family: 'Open Sans Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: local('Open Sans Bold'), 
  url('${OpenSansBoldWoff2}') format('woff2'),
  url('${OpenSansBoldWoff}') format('woff');
}

@font-face {
  font-family: 'Open Sans Italic';
  font-style: italic;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Open Sans Italic'), 
  url('${OpenSansItalicWoff2}') format('woff2'),
  url('${OpenSansItalicWoff}') format('woff');
}

@font-face {
  font-family: 'Montserrat Regular';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Montserrat Regular'), 
  url('${MontserratRegularWoff2}') format('woff2'),
  url('${MontserratRegularWoff}') format('woff');
}

@font-face {
  font-family: 'Montserrat Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: local('Montserrat Bold'), 
  url('${MontserratBoldWoff2}') format('woff2'),
  url('${MontserratBoldWoff}') format('woff');
}
`;
