import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import { StyledLabel } from "./styles";

function Label({ labelType, children, ...rest }) {
  let str = labelType.toLowerCase();

  const intl = useIntl();
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
  children: PropTypes.node.isRequired,
};

export default Label;
