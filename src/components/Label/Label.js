import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import { toUpperCamelCase } from "../../helpers/helpers";
import { StyledLabel } from "./styles";

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function Label({
  intl, labelType, children, ...rest
}) {
  let str = toUpperCamelCase(labelType);

  const labelValue = intl.formatMessage({ id: `formLabel${str}` });

  return (
    <StyledLabel {...rest}>
      {labelValue}
      {children}
    </StyledLabel>
  );
}

Label.propTypes = {
  intl: intlShape.isRequired,
  labelType: PropTypes.string.isRequired,
};

export default injectIntl(Label);
