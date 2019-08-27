import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import { StyledInput } from "./styles";

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function Input({ intl, placeholderType = "", ...rest }) {
  let str = placeholderType.toLowerCase();

  const placeholder = intl.formatMessage({
    id: `form.placeholder.${str}`,
  });

  return <StyledInput placeholder={placeholder} {...rest} />;
}

Input.propTypes = {
  placeholderType: PropTypes.string.isRequired,
};

export default injectIntl(Input);
