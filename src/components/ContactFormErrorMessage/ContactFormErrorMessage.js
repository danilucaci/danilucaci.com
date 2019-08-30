import React, { useState } from "react";
import { string, object } from "prop-types";
import { FormattedMessage } from "react-intl";

import { HR } from "../HR/HR";

import {
  ErrorTitleWrapper,
  ErrorIconWrapper,
  ErrorIcon,
  ErrorTitle,
  ErrorCopy,
  ErrorMessageWrapper,
  ErrorDetails,
  ShowErrorButton,
} from "./styles";

function ContactFormErrorMessage({ formErrorRes }) {
  const [showError, setShowError] = useState(false);

  return (
    <ErrorMessageWrapper>
      <ErrorTitleWrapper>
        <ErrorIconWrapper>
          <ErrorIcon>
            <use xlinkHref="#info" />
          </ErrorIcon>
        </ErrorIconWrapper>
        <FormattedMessage id="contact.page.error.title">
          {(txt) => <ErrorTitle>{txt}</ErrorTitle>}
        </FormattedMessage>
      </ErrorTitleWrapper>
      <FormattedMessage id="contact.page.error.description">
        {(txt) => <ErrorCopy>{txt}</ErrorCopy>}
      </FormattedMessage>
      <HR />
      <ShowErrorButton
        onClick={(e) => {
          e.preventDefault();
          setShowError((prevState) => !prevState);
        }}
      >
        {showError ? (
          <FormattedMessage id="contact.page.error.button.hide">
            {(txt) => <>{txt}</>}
          </FormattedMessage>
        ) : (
          <FormattedMessage id="contact.page.error.button.show">
            {(txt) => <>{txt}</>}
          </FormattedMessage>
        )}
      </ShowErrorButton>
      {showError && <ErrorDetails>{formErrorRes.message}</ErrorDetails>}
    </ErrorMessageWrapper>
  );
}

export default ContactFormErrorMessage;

ContactFormErrorMessage.propTypes = {
  locale: string.isRequired,
  formErrorRes: object.isRequired,
};
