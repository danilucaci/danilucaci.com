import React, { useState } from "react";
import PropTypes from "prop-types";

import { FORM_SUBMIT_STATUS } from "../../i18n/i18n";

import {
  MessageTitle,
  MessageSubtitle,
  StatusMessageWrapper,
  MessageError,
  ShowErrorLink,
} from "./styles";

function EmailErrorMessage({ locale, formErrorRes }) {
  const [showError, setShowError] = useState(false);

  return (
    <StatusMessageWrapper>
      <MessageTitle>{FORM_SUBMIT_STATUS.errorTitle[locale]}</MessageTitle>
      <MessageSubtitle>
        {FORM_SUBMIT_STATUS.errorSubtitle[locale]}
      </MessageSubtitle>
      <ShowErrorLink
        onClick={(e) => {
          e.preventDefault();
          setShowError((prevState) => !prevState);
        }}
      >
        {showError
          ? FORM_SUBMIT_STATUS.hideError[locale]
          : FORM_SUBMIT_STATUS.showError[locale]}
      </ShowErrorLink>
      {showError && <MessageError>{formErrorRes.message}</MessageError>}
    </StatusMessageWrapper>
  );
}

export default EmailErrorMessage;

EmailErrorMessage.propTypes = {
  locale: PropTypes.string.isRequired,
  formErrorRes: PropTypes.object.isRequired,
};
