import React, { useState } from "react";
import { string, func, bool } from "prop-types";
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
  CloseErrorButton,
  ButtonsWrapper,
} from "./styles";

function ContactFormErrorMessage({
  locale = "en",
  errorMessage,
  clearErrorMessage,
  shouldRenderCloseButton,
}) {
  const [showError, setShowError] = useState(false);

  return (
    <ErrorMessageWrapper role="status" aria-live="polite">
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
      <ButtonsWrapper>
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
        {shouldRenderCloseButton && (
          <CloseErrorButton
            onClick={clearErrorMessage}
            aria-label={
              locale === "en"
                ? "Close error message"
                : "Cerrar el mensage de error"
            }
          >
            <FormattedMessage id="contact.page.error.button.close">
              {(txt) => <>{txt}</>}
            </FormattedMessage>
          </CloseErrorButton>
        )}
      </ButtonsWrapper>
      {showError && <ErrorDetails>{errorMessage}</ErrorDetails>}
    </ErrorMessageWrapper>
  );
}

export default ContactFormErrorMessage;

ContactFormErrorMessage.propTypes = {
  locale: string.isRequired,
  errorMessage: string.isRequired,
  clearErrorMessage: func.isRequired,
  shouldRenderCloseButton: bool.isRequired,
};
