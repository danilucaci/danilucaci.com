import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, intlShape } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { toUpperCamelCase } from "../../helpers/helpers";

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

  font-family: ${theme.fonts.bodyRegular};

  &:focus {
    color: ${theme.colors.dark800};
    border: 2px solid ${theme.colors.dark800};
    outline: none;
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
