import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, intlShape } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { toUpperCamelCase } from "../../helpers/helpers";

// https://github.com/tigt/mini-svg-data-uri
var svgToMiniDataURI = require("mini-svg-data-uri");

var successSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="#55A162" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8.73076923,10.4615385 L11.1923077,12.9230769 L18.0769231,6.07692308 L19.1923077,7.19230769 L11.1923077,15.1923077 L7.61538462,11.6153846 L8.73076923,10.4615385 Z M18.3846154,12 L20,12 C20,14.2051392 19.2179565,16.0897358 17.6538462,17.6538462 C16.0897358,19.2179565 14.2051392,20 12,20 C9.79486077,20 7.91026423,19.2179565 6.34615385,17.6538462 C4.78204346,16.0897358 4,14.2051392 4,12 C4,9.79486077 4.78204346,7.91026423 6.34615385,6.34615385 C7.91026423,4.78204346 9.79486077,4 12,4 C13.0256462,4 14.0256362,4.20512615 15,4.61538462 L13.7692308,5.84615385 C13.2051254,5.69230692 12.6153877,5.61538462 12,5.61538462 C10.2307604,5.61538462 8.72436519,6.23717327 7.48076923,7.48076923 C6.23717327,8.72436519 5.61538462,10.2307604 5.61538462,12 C5.61538462,13.7692396 6.23717327,15.2756348 7.48076923,16.5192308 C8.72436519,17.7628267 10.2307604,18.3846154 12,18.3846154 C13.7692396,18.3846154 15.2756348,17.7628267 16.5192308,16.5192308 C17.7628267,15.2756348 18.3846154,13.7692396 18.3846154,12 Z"/></svg>';

var optimizedSuccessSVGDataURI = `background: url("${svgToMiniDataURI(
  successSVG
)}")`;

var errorSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="#A6441B" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.2115385,9.59615385 L11.2115385,7.98076923 L12.7884615,7.98076923 L12.7884615,9.59615385 L11.2115385,9.59615385 Z M12,18.4230769 C13.1538519,18.4230769 14.2307642,18.1282081 15.2307692,17.5384615 C16.2051331,16.9743562 16.9743562,16.2051331 17.5384615,15.2307692 C18.1282081,14.2307642 18.4230769,13.1538519 18.4230769,12 C18.4230769,10.8461481 18.1282081,9.76923577 17.5384615,8.76923077 C16.9743562,7.79486692 16.2051331,7.02564385 15.2307692,6.46153846 C14.2307642,5.87179192 13.1538519,5.57692308 12,5.57692308 C10.8461481,5.57692308 9.76923577,5.87179192 8.76923077,6.46153846 C7.79486692,7.02564385 7.02564385,7.79486692 6.46153846,8.76923077 C5.87179192,9.76923577 5.57692308,10.8461481 5.57692308,12 C5.57692308,13.1538519 5.87179192,14.2307642 6.46153846,15.2307692 C7.02564385,16.2051331 7.79486692,16.9743562 8.76923077,17.5384615 C9.76923577,18.1282081 10.8461481,18.4230769 12,18.4230769 Z M12,4 C13.4615458,4 14.8140963,4.36538096 16.0576923,5.09615385 C17.2628265,5.788465 18.211535,6.73717346 18.9038462,7.94230769 C19.634619,9.18590365 20,10.5384542 20,12 C20,13.4615458 19.634619,14.8140963 18.9038462,16.0576923 C18.211535,17.2628265 17.2628265,18.211535 16.0576923,18.9038462 C14.8140963,19.634619 13.4615458,20 12,20 C10.5384542,20 9.18590365,19.634619 7.94230769,18.9038462 C6.73717346,18.1987144 5.788465,17.2435958 5.09615385,16.0384615 C4.36538096,14.7948656 4,13.4487252 4,12 C4,10.5512748 4.36538096,9.20513442 5.09615385,7.96153846 C5.80128558,6.75640423 6.75640423,5.80128558 7.96153846,5.09615385 C9.20513442,4.36538096 10.5512748,4 12,4 Z M11.2115385,16.0192308 L11.2115385,11.2115385 L12.7884615,11.2115385 L12.7884615,16.0192308 L11.2115385,16.0192308 Z"/></svg>';
var optimizedErrorSVGDataURI = `background: url("${svgToMiniDataURI(
  errorSVG
)}")`;

const StyledInput = styled.input`
  background-color: ${theme.colors.gray100};
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark700};

  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 400;

  padding: ${rem(12)} ${rem(16)};
  height: ${rem(48)};
  width: 100%;

  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 2px solid ${theme.colors.dark900};
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-text-fill-color: ${theme.colors.success600};
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  font-family: ${theme.fonts.bodyRegular};

  &:focus {
    background: white;
    color: ${theme.colors.dark900};
    border: 2px solid ${theme.colors.dark900};
    outline: none;
  }

  /*  When input is... */
  /*  1. Valid */
  /*  2. NOT Empty */
  /*  3. NOT In Focus */
  &:valid:not(:placeholder-shown) {
    color: ${theme.colors.success600};
    background-color: white !important;
    border: 2px solid ${theme.colors.success400};
    padding-right: ${rem(40)};

    & ~ span {
      display: block !important;
      ${optimizedSuccessSVGDataURI};
      background-size: ${rem(24)};
      background-repeat: no-repeat;
      background-position: 0px 0px;
    }
  }

  /*  When input is... */
  /*  1. Valid */
  /*  2. NOT Empty */
  /*  3. NOT In Focus */
  &:valid:not(:focus):not(:placeholder-shown) {
    color: ${theme.colors.success600};
    background-color: white !important;
    border: 2px solid ${theme.colors.success400};
    padding-right: ${rem(40)};

    & ~ span {
      display: block !important;
      ${optimizedSuccessSVGDataURI};
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
    box-shadow: none;
  }

  /*  When input is... */
  /*  1. Default State */
  /*  2. Required */
  /*  2. Empty */
  /* Remove the red box-shadow for firefox */
  &:placeholder-shown:required {
    box-shadow: none !important;
  }
`;

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function Input({ intl, placeholderType = "", ...rest }) {
  let str = toUpperCamelCase(placeholderType);

  const placeholder = intl.formatMessage({
    id: `formPlaceholder${str}`,
  });

  return <StyledInput placeholder={placeholder} {...rest} />;
}

Input.propTypes = {
  intl: intlShape.isRequired,
  placeholderType: PropTypes.string.isRequired,
};

export default injectIntl(Input);
