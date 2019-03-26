import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import { Copy } from "../Copy/Copy";
import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

const MessageTitle = styled(Copy)`
  color: ${theme.colors.dark800};
  display: block;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.s};
  font-weight: 700;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }
`;

const MessageSubtitle = styled(Copy)`
  color: ${theme.colors.dark800};
  display: block;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
`;

const StatusMessageWrapper = styled.div`
  border: ${rem(2)} solid ${theme.colors.dark900};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.dark900};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.default};
  white-space: pre-line;
`;

function EmailErrorMessage({ locale, formErrorRes = {} }) {
  console.log(formErrorRes);

  return (
    <StatusMessageWrapper>
      <MessageTitle>{FORM_SUBMIT_STATUS.errorTitle[locale]}</MessageTitle>
      <MessageSubtitle>{FORM_SUBMIT_STATUS.errorSubtitle[locale]}</MessageSubtitle>
    </StatusMessageWrapper>
  );
}

export default EmailErrorMessage;

EmailErrorMessage.propTypes = {
  locale: PropTypes.string.isRequired,
  formErrorRes: PropTypes.object,
};
