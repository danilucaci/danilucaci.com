import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import { toUpperCamelCase } from "../../helpers/helpers";

import { StyledSubmitButton } from "./styles";

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function SubmitButton({ intl, type = "submit", ...rest }) {
  let str = toUpperCamelCase(type);

  const placeholder = intl.formatMessage({ id: `formSubmit${str}` });

  return <StyledSubmitButton type="submit" value={placeholder} {...rest} />;
}

SubmitButton.propTypes = {
  intl: intlShape.isRequired,
  type: PropTypes.string,
};

export default injectIntl(SubmitButton);
