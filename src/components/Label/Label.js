import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, intlShape } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { toUpperCamelCase } from "../../helpers/helpers";

const StyledLabel = styled.label`
  margin-bottom: ${rem(4)};
`;

function Label({ intl, labelType, children, ...rest }) {
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
