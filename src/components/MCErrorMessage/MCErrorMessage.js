import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem, mediaMin } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { MC_ERRORS } from "../../i18n/i18n";

const MessageTitle = styled(Copy)`
  color: ${theme.colors.danger600};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};

  & .fonts-loaded {
    font-family: ${theme.fonts.bodyRegular};
  }
`;

const StatusMessageWrapper = styled.div`
  background-color: ${theme.colors.gray100};
  border: ${rem(2)} solid ${theme.colors.danger500};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.danger600};

  display: block;

  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};

  padding: ${rem(16)};
  margin-top: ${rem(24)};
  white-space: pre-line;
  width: 100%;

  ${theme.shadow.subscribeErrorMessage};
`;

function EmailErrorMessage({ locale, MCError = "" }) {
  return (
    <StatusMessageWrapper>
      <MessageTitle>{MC_ERRORS[locale][MCError]}</MessageTitle>
    </StatusMessageWrapper>
  );
}

export default EmailErrorMessage;

EmailErrorMessage.propTypes = {
  locale: PropTypes.string.isRequired,
  MCError: PropTypes.string,
};
