import React, { useState, useContext } from "react";
import { string, func, bool } from "prop-types";
import { useIntl } from "react-intl";

import HR from "../HR";

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
import LocaleContext from "../../i18n/LocaleContext";

function ContactFormErrorMessage({
  errorMessage,
  clearErrorMessage,
  shouldRenderCloseButton,
}) {
  const [showError, setShowError] = useState(false);
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

  return (
    <ErrorMessageWrapper
      role="status"
      aria-live="polite"
      data-testid="contact-form-error-message"
    >
      <ErrorTitleWrapper>
        <ErrorIconWrapper>
          <ErrorIcon>
            <use xlinkHref="#info" />
          </ErrorIcon>
        </ErrorIconWrapper>
        <ErrorTitle>
          {intl.formatMessage({ id: "contact.page.error.title" })}
        </ErrorTitle>
      </ErrorTitleWrapper>
      <ErrorCopy>
        {intl.formatMessage({ id: "contact.page.error.description" })}
      </ErrorCopy>
      <HR />
      <ButtonsWrapper>
        <ShowErrorButton
          onClick={(e) => {
            e.preventDefault();
            setShowError((prevState) => !prevState);
          }}
        >
          {showError ? (
            <>{intl.formatMessage({ id: "contact.page.error.button.hide" })}</>
          ) : (
            <>{intl.formatMessage({ id: "contact.page.error.button.show" })}</>
          )}
        </ShowErrorButton>
        {shouldRenderCloseButton && (
          <CloseErrorButton
            onClick={clearErrorMessage}
            type="button"
            aria-label={
              locale === "en"
                ? "Close error message"
                : "Cerrar el mensage de error"
            }
          >
            <>
              {intl.formatMessage({
                id: "contact.page.error.button.close",
              })}
            </>
          </CloseErrorButton>
        )}
      </ButtonsWrapper>
      {showError && <ErrorDetails>{errorMessage}</ErrorDetails>}
    </ErrorMessageWrapper>
  );
}

export default ContactFormErrorMessage;

ContactFormErrorMessage.propTypes = {
  errorMessage: string.isRequired,
  clearErrorMessage: func.isRequired,
  shouldRenderCloseButton: bool.isRequired,
};
