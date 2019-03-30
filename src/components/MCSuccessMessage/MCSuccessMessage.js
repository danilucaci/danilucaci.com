import React from "react";
import PropTypes from "prop-types";

import { MC_SUCCESS } from "../../i18n/i18n";

import { StatusMessageWrapper, MessageTitle, MessageSubtitle } from "./styles";

function MCSuccessMessage(props) {
  const locale = props.locale;

  return (
    <StatusMessageWrapper>
      <MessageTitle>{MC_SUCCESS[locale].title}</MessageTitle>
      <MessageSubtitle>{MC_SUCCESS[locale].message}</MessageSubtitle>
    </StatusMessageWrapper>
  );
}

export default MCSuccessMessage;

MCSuccessMessage.propTypes = {
  locale: PropTypes.string.isRequired,
};
