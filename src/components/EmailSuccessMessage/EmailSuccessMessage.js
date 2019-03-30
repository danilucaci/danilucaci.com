import React from "react";
import PropTypes from "prop-types";

import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import { MessageTitle, MessageSubtitle, StatusMessageWrapper } from "./styles";

function EmailSuccessMessage(props) {
  const locale = props.locale;

  return (
    <StatusMessageWrapper>
      <MessageTitle>{FORM_SUBMIT_STATUS.successTitle[locale]}</MessageTitle>
      <MessageSubtitle>{FORM_SUBMIT_STATUS.successSubtitle[locale]}</MessageSubtitle>
    </StatusMessageWrapper>
  );
}

export default EmailSuccessMessage;

EmailSuccessMessage.propTypes = {
  locale: PropTypes.string.isRequired,
};
