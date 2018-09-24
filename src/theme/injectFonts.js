import { createGlobalStyle } from "styled-components";

import {
  OpenSansRegularWoff2,
  OpenSansRegularWoff,
  OpenSansItalicWoff2,
  OpenSansItalicWoff,
  OpenSansBoldWoff2,
  OpenSansBoldWoff,
  MontserratBoldWoff2,
  MontserratBoldWoff,
} from "../fonts";

const GlobalFontFace = createGlobalStyle`
@font-face {
  font-family: 'OpenSans Regular';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: 
  /* local('OpenSans Regular'),
  local('OpenSans-Regular'),
  local('Open Sans-Regular'),
  local('Open Sans Regular'),
  local('Open Sans'), */
  url('${OpenSansRegularWoff2}') format('woff2'),
  url('${OpenSansRegularWoff}') format('woff');
}

@font-face {
  font-family: 'OpenSans Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: 
  /* local('OpenSans Bold'),
  local('OpenSans-Bold'),
  local('Open Sans Bold'),
  local('Open Sans'), */
  url('${OpenSansBoldWoff2}') format('woff2'),
  url('${OpenSansBoldWoff}') format('woff');
}

@font-face {
  font-family: 'OpenSans Italic';
  font-style: italic;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 400;
  src: 
  /* local('OpenSans Italic'),
  local('OpenSans-Italic'),
  local('Open Sans Italic'),
  local('Open Sans'), */
  url('${OpenSansItalicWoff2}') format('woff2'),
  url('${OpenSansItalicWoff}') format('woff');
}

@font-face {
  font-family: 'Montserrat Bold';
  font-style: normal;
  /* displays text with fallback font and replaces when the font is ready */
  font-display: swap;
  font-weight: 700;
  src: 
  /* local('Montserrat Bold'),
  local('Montserrat-Bold'),
  local('Montserrat'), */
  url('${MontserratBoldWoff2}') format('woff2'),
  url('${MontserratBoldWoff}') format('woff');
}`;
