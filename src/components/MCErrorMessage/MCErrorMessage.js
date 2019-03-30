import React from "react";
import PropTypes from "prop-types";

import { MC_ERRORS } from "../../i18n/i18n";
import { MessageTitle, StatusMessageWrapper } from "./styles";

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
