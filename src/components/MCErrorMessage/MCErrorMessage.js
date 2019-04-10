import React from "react";
import { string } from "prop-types";

import { MC_ERRORS } from "../../i18n/i18n";
import { MessageTitle, StatusMessageWrapper, APIMessageTitle } from "./styles";

function EmailErrorMessage({ locale, MCError = "", apiMessage = "" }) {
  return (
    <StatusMessageWrapper>
      <MessageTitle>{MC_ERRORS[locale][MCError]}</MessageTitle>
      {apiMessage && <APIMessageTitle>{apiMessage}</APIMessageTitle>}
    </StatusMessageWrapper>
  );
}

export default EmailErrorMessage;

EmailErrorMessage.propTypes = {
  locale: string.isRequired,
  MCError: string,
  apiMessage: string,
};

EmailErrorMessage.defaultProps = {
  MCError: "Something went wrong",
  apiMessage: "",
};
