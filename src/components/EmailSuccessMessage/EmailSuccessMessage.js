import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

const MessageTitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  & .fonts-loaded {
    font-family: ${theme.fonts.bodyBold};
  }
`;

const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.main600};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

const StatusMessageWrapper = styled.div`
  border: ${rem(2)} solid ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.main600};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.subscribeSuccessMessage};
  white-space: pre-line;
`;

function EmailSuccessMessage(props) {
  const locale = props.locale;

  return (
    <StatusMessageWrapper>
      <MessageTitle>{FORM_SUBMIT_STATUS.successTitle[locale]}</MessageTitle>
      <MessageSubtitle>
        {FORM_SUBMIT_STATUS.successSubtitle[locale]}
      </MessageSubtitle>
    </StatusMessageWrapper>
  );
}

export default EmailSuccessMessage;

EmailSuccessMessage.propTypes = {
  locale: PropTypes.string.isRequired,
};
