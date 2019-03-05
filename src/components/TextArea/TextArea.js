import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, intlShape } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";

const StyledTextArea = styled.textarea`
  background-color: ${theme.colors.gray100};
  border: 2px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.dark700};

  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 400;

  padding: ${rem(16)};
  width: 100%;

  font-family: ${theme.fonts.bodyRegular};

  &:focus {
    color: ${theme.colors.dark800};
    border: 2px solid ${theme.colors.dark800};
    outline: none;
  }
`;

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function TextArea({ intl, ...rest }) {
  const placeholder = intl.formatMessage({
    id: `formPlaceholderMessage`,
  });

  return <StyledTextArea placeholder={placeholder} {...rest} />;
}

TextArea.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(TextArea);
