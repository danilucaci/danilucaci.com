import React from "react";
import PropTypes from "prop-types";

import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import { MessageTitle, MessageSubtitle, StatusMessageWrapper } from "./styles";

function EmailErrorMessage({ locale, formErrorRes = {} }) {
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
