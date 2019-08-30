import React from "react";
import { string } from "prop-types";

import { MC_ERRORS } from "../../i18n/i18n";
import { MessageTitle, StatusMessageWrapper, APIMessageTitle } from "./styles";

function MCErrorMessage({ locale, MCError = "", apiMessage = "" }) {
  return (
    <StatusMessageWrapper>
      <MessageTitle>{MC_ERRORS[locale][MCError]}</MessageTitle>
      {apiMessage && <APIMessageTitle>{apiMessage}</APIMessageTitle>}
    </StatusMessageWrapper>
  );
}

export default MCErrorMessage;

MCErrorMessage.propTypes = {
  locale: string.isRequired,
  MCError: string,
  apiMessage: string,
};

MCErrorMessage.defaultProps = {
  MCError: "Something went wrong",
  apiMessage: "",
};
