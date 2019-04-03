import styled from "styled-components";
import {
  RobotoMonoRegularWoff2,
  RobotoMonoRegularWoff,
  RobotoMonoItalicWoff2,
  RobotoMonoItalicWoff,
  LatoRegularWoff2,
  LatoRegularWoff,
  LatoItalicWoff2,
  LatoItalicWoff,
  LatoBoldWoff2,
  LatoBoldWoff,
  MerriweatherRegularWoff2,
  MerriweatherRegularWoff,
  MerriweatherLightWoff2,
  MerriweatherLightWoff,
  MerriweatherBoldWoff2,
  MerriweatherBoldWoff,
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
  font-family: 'Lato';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Lato'), 
  url('${LatoRegularWoff2}') format('woff2'),
  url('${LatoRegularWoff}') format('woff');
}

@font-face {
  font-family: 'Lato Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: local('Lato Bold'), 
  url('${LatoBoldWoff2}') format('woff2'),
  url('${LatoBoldWoff}') format('woff');
}

@font-face {
  font-family: 'Lato Italic';
  font-style: italic;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Lato Italic'), 
  url('${LatoItalicWoff2}') format('woff2'),
  url('${LatoItalicWoff}') format('woff');
}

@font-face {
  font-family: 'Merriweather Regular';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Merriweather Regular'), 
  url('${MerriweatherRegularWoff2}') format('woff2'),
  url('${MerriweatherRegularWoff}') format('woff');
}

@font-face {
  font-family: 'Merriweather Light';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: local('Merriweather Light'), 
  url('${MerriweatherLightWoff2}') format('woff2'),
  url('${MerriweatherLightWoff}') format('woff');
}

@font-face {
  font-family: 'Merriweather Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: local('Merriweather Bold'), 
  url('${MerriweatherBoldWoff2}') format('woff2'),
  url('${MerriweatherBoldWoff}') format('woff');
}
`;
