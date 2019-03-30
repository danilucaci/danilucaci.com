import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import { toUpperCamelCase } from "../../helpers/helpers";
import { StyledInput } from "./styles";

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
