import styled from "styled-components";
import { Field } from "formik";

import { theme, rem } from "../../theme/theme";

// https://github.com/tigt/mini-svg-data-uri
let svgToMiniDataURI = require("mini-svg-data-uri");

// let successSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#55A162\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M8.73076923,10.4615385 L11.1923077,12.9230769 L18.0769231,6.07692308 L19.1923077,7.19230769 L11.1923077,15.1923077 L7.61538462,11.6153846 L8.73076923,10.4615385 Z M18.3846154,12 L20,12 C20,14.2051392 19.2179565,16.0897358 17.6538462,17.6538462 C16.0897358,19.2179565 14.2051392,20 12,20 C9.79486077,20 7.91026423,19.2179565 6.34615385,17.6538462 C4.78204346,16.0897358 4,14.2051392 4,12 C4,9.79486077 4.78204346,7.91026423 6.34615385,6.34615385 C7.91026423,4.78204346 9.79486077,4 12,4 C13.0256462,4 14.0256362,4.20512615 15,4.61538462 L13.7692308,5.84615385 C13.2051254,5.69230692 12.6153877,5.61538462 12,5.61538462 C10.2307604,5.61538462 8.72436519,6.23717327 7.48076923,7.48076923 C6.23717327,8.72436519 5.61538462,10.2307604 5.61538462,12 C5.61538462,13.7692396 6.23717327,15.2756348 7.48076923,16.5192308 C8.72436519,17.7628267 10.2307604,18.3846154 12,18.3846154 C13.7692396,18.3846154 15.2756348,17.7628267 16.5192308,16.5192308 C17.7628267,15.2756348 18.3846154,13.7692396 18.3846154,12 Z\"/></svg>";

// let optimizedSuccessSVGDataURI = `background: url("${svgToMiniDataURI(successSVG)}")`;

let errorSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="#A6441B" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>';
let optimizedErrorSVGDataURI = `background: url("${svgToMiniDataURI(
  errorSVG,
)}")`;

export const StyledInput = styled(Field)`
  background-color: ${theme.colors.grey00};
  border: 2px solid ${theme.colors.grey400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.grey700};

  font-size: ${theme.font.size.button.default};
  line-height: ${theme.font.lineHeight.button.default};
  font-style: normal;
  font-weight: 400;

  .fonts-loaded & {
    font-family: ${theme.font.family.body.regular};
  }

  padding: ${rem(12)} ${rem(16)};
  height: ${theme.buttonHeight.xl};
  width: 100%;

  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${theme.colors.grey00};
    border: 2px solid ${theme.colors.grey400};
    border-radius: ${theme.borderRadius.buttons};
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${theme.colors.grey800};
  }

  &:focus,
  &:active {
    background: white;
    color: ${theme.colors.grey900};
    border: 2px solid ${theme.colors.grey900};
    ${theme.shadow.input.focus};
    outline: none;
  }

  /* When input is... */
  /*  1. NOT Empty */
  /*  2. NOT In Focus */
  &:not(:focus):not(:placeholder-shown) {
    color: ${theme.colors.grey800};
  }

  /* https://css-tricks.com/form-validation-ux-html-css/ */
  /*  When input is... */
  /*  1. NOT Valid */
  /*  2. NOT in Focus */
  /*  3. NOT Empty */
  &:invalid:not(:focus):not(:placeholder-shown) {
    color: ${theme.colors.danger600};
    background: ${theme.colors.danger100};
    border: 2px solid ${theme.colors.danger500};

    /* Remove the red box-shadow for firefox */
    box-shadow: none;

    padding-right: ${rem(40)};

    & ~ span {
      display: block !important;
      ${optimizedErrorSVGDataURI};
      background-size: ${rem(24)};
      background-repeat: no-repeat;
      background-position: 0px 0px;
    }
  }

  /* https://css-tricks.com/form-validation-ux-html-css/ */
  /*  When input is... */
  /*  1. NOT Empty */
  /*  2. NOT in Focus */
  /*  3. NOT Valid */
  &:invalid:focus:not(:placeholder-shown) {
    /* Remove the red box-shadow for firefox */
    /* box-shadow: none; */
    ${theme.shadow.input.focus};
  }

  /*  When input is... */
  /*  1. Default State */
  /*  2. Required */
  /*  2. Empty */
  /* Remove the red box-shadow for firefox */
  &:placeholder-shown:required {
    box-shadow: none;
  }

  &:placeholder-shown:required:focus {
    ${theme.shadow.input.focus};
  }
`;
