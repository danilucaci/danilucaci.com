import React, { useReducer } from "react";
import { string } from "prop-types";
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

const logGAEvent = sendGAEvent("Subscribers", "New Subscriber");

function handleFormSent(result, responseMSG, dispatch) {
  if (result.includes("success")) {
    logGAEvent();
  } else if (
    result.includes("error") &&
    responseMSG.includes("is already subscribed to")
  ) {
    dispatch({ type: "FETCH_ERROR_ALREADY", payload: "already" });
    Sentry.captureException(new Error(responseMSG));
  } else if (result.includes("error") && responseMSG.includes("many")) {
    dispatch({ type: "FETCH_ERROR_TOO_MANY" });
    Sentry.captureException(new Error(responseMSG));
  } else if (result.includes("error")) {
    dispatch({ type: "FETCH_ERROR_GENERIC", payload: responseMSG });
    Sentry.captureException(new Error(responseMSG));
  }
}

function SubscribeSuccess() {
  return (
    <>
      <StatusMessageWrapper>
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
      <StatusMessageWrapper>
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

function SubscribeCard({ locale }) {
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
                          />
                        </StyledLabel>

                        <StyledMCSubmitButton
                          disabled={!isValid || isSubmitting || isValidating}
                          isSubmitting={isSubmitting}
                        />
                      </InputsWrapper>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <InlineErrorMessage>{msg}</InlineErrorMessage>
                        )}
                      </ErrorMessage>
                      <PrivacyCheckbox
                        name="acceptsconsentcheckbox"
                        locale={locale}
                      />
                      <ErrorMessage name="acceptsconsentcheckbox">
                        {(msg) => (
                          <InlineErrorMessage>{msg}</InlineErrorMessage>
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

SubscribeCard.propTypes = {
  locale: string.isRequired,
};

export default SubscribeCard;
