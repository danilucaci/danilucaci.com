import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl, intlShape } from "react-intl";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { toUpperCamelCase } from "../../helpers/helpers";

const StyledSubmitButton = styled.input`
  background-color: ${theme.colors.main600};
  border: none;
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight};

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};

  & .fonts-loaded {
    font-family: ${theme.fonts.bodyBold};
  }

  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(24)};
  height: ${rem(48)};
  margin-top: ${rem(16)};
  width: 100%;

  white-space: nowrap;

  &:disabled {
    background-color: ${theme.colors.dark700};
    color: ${theme.colors.gray100};

    &:hover,
    &:focus {
      background-color: ${theme.colors.dark700};
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

// High 5 to: https://stackoverflow.com/questions/39630620/react-intl-how-to-use-formattedmessage-in-input-placeholder
function SubmitButton({ intl, type, ...rest }) {
  let str = toUpperCamelCase(type);

  const placeholder = intl.formatMessage({ id: `formSubmit${str}` });

  return <StyledSubmitButton type="submit" value={placeholder} {...rest} />;
}

SubmitButton.propTypes = {
  intl: intlShape.isRequired,
  type: PropTypes.string.isRequired,
};

export default injectIntl(SubmitButton);
