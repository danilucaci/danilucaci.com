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
}

html {
background-color: #F5F5F5;
color: #46495C;
font-family: system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
font-weight: 400;
font-style: normal;
font-size: 100%;
line-height: 1.75; /* 28px */

-ms-text-size-adjust: 100%;
-moz-text-size-adjust: 100%;
-o-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
text-size-adjust: 100%;

font-smoothing: antialiased;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
-moz-osx-font-smoothing: grayscale;
text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
overflow-x: hidden;
}

svg{
  position: absolute;
}

::selection {
color: #ffffff;
text-shadow: none;
background: #0946B0;
}

@media screen and (min-device-width: 45em) {
  html {
    /* Turn it back to auto to prevent desktop scalling issues */
    -ms-text-size-adjust: auto;
    -moz-text-size-adjust: auto;
    -o-text-size-adjust: auto;
    -webkit-text-size-adjust: auto;
    text-size-adjust: auto;
  }
}

a,
button,
input,
.tag {
  &:active,
  &:focus {
    outline: dashed 1px #0946B0;
  }
}


*,
*:after,
*:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main {
display: block;
}


hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}


pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}
[hidden] {
  display: none;
}
`;
