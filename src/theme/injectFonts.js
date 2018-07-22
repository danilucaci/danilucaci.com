import { injectGlobal, css } from "styled-components";

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
url('/static/fonts/OpenSans-Regular-subset.woff2') format('woff2'),
url('/static/fonts/OpenSans-Regular-subset.woff') format('woff');
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
url('/static/fonts/OpenSans-Bold-subset.woff2') format('woff2'),
url('/static/fonts/OpenSans-Bold-subset.woff') format('woff');
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
url('/static/fonts/OpenSans-Italic-subset.woff2') format('woff2'),
url('/static/fonts/OpenSans-Italic-subset.woff') format('woff');
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
url('/static/fonts/Montserrat-Bold-subset.woff2') format('woff2'),
url('/static/fonts/Montserrat-Bold-subset.woff') format('woff');
}`;
