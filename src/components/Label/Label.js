import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import { StyledLabel } from "./styles";

function Label({ intl, labelType, children, ...rest }) {
  let str = labelType.toLowerCase();

  const labelValue = intl.formatMessage({ id: `form.label.${str}` });

  return (
    <StyledLabel {...rest}>
      {labelValue}
      {children}
    </StyledLabel>
  );
}

Label.propTypes = {
  labelType: PropTypes.string.isRequired,
};

export default injectIntl(Label);
