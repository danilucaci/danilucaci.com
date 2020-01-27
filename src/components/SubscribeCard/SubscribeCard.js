import React, { useReducer, useContext } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FormattedMessage } from "react-intl";
import { Formik, ErrorMessage, Form } from "formik";
import * as Sentry from "@sentry/browser";

import { CONSENT_VALUE } from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import InlineErrorMessage from "../InlineErrorMessage/InlineErrorMessage";
import { Col, Row } from "../Grid/Grid";
import Input from "../Input/Input";

import {
  SubscribeCardWrapper,
  FormContainer,
  InputsWrapper,
  StyledLabel,
  StyledMCSubmitButton,
  H2,
  CardCopy,
  StatusMessageWrapper,
  StatusMessageSubtitle,
} from "./styles";

import subscribeReducer from "./subscribeReducer";
import subscribeInitialState from "./subscribeInitialState";
import MCSchema from "./MCSchema";
import sendGAEvent from "../../helpers/sendGAEvent";
import LocaleContext from "../../i18n/LocaleContext";

function handleFormSent(result, responseMSG, dispatch) {
  if (result.includes("success")) {
    sendGAEvent("Subscribers", "Success", "New Subscriber");
  } else if (
    result.includes("error") &&
    responseMSG.includes("is already subscribed to")
  ) {
    sendGAEvent("Subscribers", "Error", "Already Subscribed");
    dispatch({ type: "FETCH_ERROR_ALREADY", payload: "already" });
    Sentry.captureException(new Error(responseMSG));
  } else if (result.includes("error") && responseMSG.includes("many")) {
    sendGAEvent("Subscribers", "Error", "Too Many Requests");
    dispatch({ type: "FETCH_ERROR_TOO_MANY" });
    Sentry.captureException(new Error(responseMSG));
  } else if (result.includes("error")) {
    sendGAEvent("Subscribers", "Error", "Generic");
    dispatch({ type: "FETCH_ERROR_GENERIC", payload: responseMSG });
    Sentry.captureException(new Error(responseMSG));
  }
}

function SubscribeSuccess() {
  return (
    <>
      <StatusMessageWrapper role="status" aria-live="polite">
        <FormattedMessage id="subscribe.card.status.success.title">
          {(txt) => <H2>{txt}</H2>}
        </FormattedMessage>
        <FormattedMessage id="subscribe.card.status.success.message">
          {(txt) => <StatusMessageSubtitle>{txt}</StatusMessageSubtitle>}
        </FormattedMessage>
      </StatusMessageWrapper>
    </>
  );
}

function SubscribeError(errorMessageType, APIErrorResponse) {
  return (
    <>
      <StatusMessageWrapper role="status" aria-live="polite">
        <FormattedMessage id="subscribe.card.status.error.title">
          {(txt) => <H2>{txt}</H2>}
        </FormattedMessage>
        <FormattedMessage
          id={`subscribe.card.status.error.${errorMessageType}`}
          defaultMessage="Something went wrong."
        >
          {(txt) => <StatusMessageSubtitle>{txt}</StatusMessageSubtitle>}
        </FormattedMessage>
        {APIErrorResponse && (
          <StatusMessageSubtitle>{APIErrorResponse}</StatusMessageSubtitle>
        )}
      </StatusMessageWrapper>
    </>
  );
}

async function handleMCSubmit(
  { email, acceptsconsentcheckbox },
  setSubmitting,
  dispatch,
  locale,
) {
  const response = await addToMailchimp(email, {
    DLPO:
      acceptsconsentcheckbox === true
        ? CONSENT_VALUE[locale].yes
        : CONSENT_VALUE[locale].no,
  }).catch((error) => {
    setSubmitting(false);
    dispatch({ type: "FETCH_ERROR" });
    Sentry.captureException(error);
  });

  setSubmitting(false);
  dispatch({ type: "FETCH_SUCCESS" });
  handleFormSent(response.result, response.msg, dispatch);
}

function SubscribeCard() {
  const { locale } = useContext(LocaleContext);

  const [
    { isMCSent, isError, errorMessageType, APIErrorResponse },
    dispatch,
  ] = useReducer(subscribeReducer, subscribeInitialState);

  return (
    <SubscribeCardWrapper>
      <Row padded as="div" col10>
        <Col>
          {!isMCSent && (
            <>
              <FormattedMessage id="subscribe.card.title">
                {(txt) => <H2>{txt}</H2>}
              </FormattedMessage>
              <FormattedMessage id="subscribe.card.subtitle">
                {(txt) => <CardCopy>{txt}</CardCopy>}
              </FormattedMessage>
              <FormContainer>
                <Formik
                  initialValues={{
                    email: "",
                    acceptsconsentcheckbox: false,
                  }}
                  validateOnMount={true}
                  validationSchema={MCSchema(locale)}
                  onSubmit={(values, { setSubmitting }) => {
                    // Don’t allow re-submitting
                    if (isMCSent === false) {
                      handleMCSubmit(values, setSubmitting, dispatch, locale);
                    }
                  }}
                >
                  {({
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting,
                    isValidating,
                    isValid,
                  }) => (
                    <Form
                      name="subscribe-form"
                      method="post"
                      onSubmit={handleSubmit}
                      aria-label={locale === "en" ? "subscribe" : "suscribir"}
                    >
                      <InputsWrapper>
                        <StyledLabel>
                          <Input
                            type="email"
                            name="email"
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="email"
                            placeholderType="email"
                            valid={touched.email && !errors.email}
                            error={touched.email && errors.email}
                            aria-describedby="email-validation"
                            aria-required="true"
                            aria-invalid={
                              touched.email && errors.email ? `true` : `false`
                            }
                            aria-label="email"
                          />
                        </StyledLabel>

                        <StyledMCSubmitButton
                          disabled={!isValid || isSubmitting || isValidating}
                          isSubmitting={isSubmitting}
                          aria-label={
                            isSubmitting ? `Sending message` : `Send message`
                          }
                        />
                      </InputsWrapper>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <InlineErrorMessage
                            aria-hidden="true"
                            id="email-validation"
                          >
                            {msg}
                          </InlineErrorMessage>
                        )}
                      </ErrorMessage>
                      <PrivacyCheckbox
                        name="acceptsconsentcheckbox"
                        aria-describedby="checkbox-validation"
                        aria-required="true"
                      />
                      <ErrorMessage name="acceptsconsentcheckbox">
                        {(msg) => (
                          <InlineErrorMessage
                            aria-hidden="true"
                            id="checkbox-validation"
                          >
                            {msg}
                          </InlineErrorMessage>
                        )}
                      </ErrorMessage>
                    </Form>
                  )}
                </Formik>
              </FormContainer>
            </>
          )}

          {!isError && isMCSent && SubscribeSuccess()}

          {isError &&
            isMCSent &&
            SubscribeError(errorMessageType, APIErrorResponse)}
        </Col>
      </Row>
    </SubscribeCardWrapper>
  );
}

export default SubscribeCard;
