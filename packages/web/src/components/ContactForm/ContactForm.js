import React, { useState, useContext, useEffect } from "react";
import { useFormikContext, Formik, Field, ErrorMessage } from "formik";

import { navigate } from "gatsby";
import * as Sentry from "@sentry/browser";

import { FormContainer, StyledForm, StyledLabel, StyledInput } from "./styles";

import { sendContactFormEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import contactFormValidationSchema from "./contactFormValidationSchema";
import makePing from "./ping";

import { CONSENT_VALUE, localePaths } from "../../i18n";
import LocaleContext from "../../i18n/LocaleContext";
import { CookiesContext } from "../../context/CookiesContext";

import useFirebaseAnonymousAuth from "../../hooks/useFirebaseAnonymousAuth";

import PrivacyCheckbox from "../PrivacyCheckbox";
import ContactFormErrorMessage from "../ContactFormErrorMessage";
import InlineErrorMessage from "../InlineErrorMessage";
import SubmitButton from "../SubmitButton";

function ToggleConsent({ setConsentAccepted, currentConsentAccepted }) {
  const { values } = useFormikContext();

  useEffect(() => {
    if (!currentConsentAccepted && values.consentAccepted) {
      setConsentAccepted(values.consentAccepted);
    }
  }, [currentConsentAccepted, setConsentAccepted, values.consentAccepted]);

  return null;
}

function ping() {
  return makePing();
}

function Ping({ userToken }) {
  const { touched } = useFormikContext();
  const [pingSent, setPingSent] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (
      !pingSent &&
      userToken &&
      (touched.email ||
        touched.fullName ||
        touched.message ||
        touched.consentAccepted)
    ) {
      ping(userToken, mounted, sendContactFormEvent, setPingSent);
    }

    return () => {
      mounted = false;
    };
  }, [
    pingSent,
    userToken,
    touched.consentAccepted,
    touched.email,
    touched.fullName,
    touched.message,
  ]);

  return null;
}

function ContactForm() {
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [{ hasGDPRConsent }] = useContext(CookiesContext);
  const { locale } = useContext(LocaleContext);

  const { userToken, error: authError } = useFirebaseAnonymousAuth(
    consentAccepted,
  );

  useEffect(() => {
    if (authError) {
      setShowFormError(true);
      setFormErrorMessage("Service is currently unavailable.");
      Sentry.captureMessage(authError);
    }
  }, [authError]);

  useEffect(() => {
    if (hasGDPRConsent && !consentAccepted) {
      setConsentAccepted(true);
    }
  }, [consentAccepted, hasGDPRConsent]);

  function clearErrorMessage() {
    setShowFormError(false);
    setFormErrorMessage(null);
  }

  function handleFormError(error) {
    setFormErrorMessage(error.message);
    setShowFormError(true);
    Sentry.captureException(error);
  }

  function handleContactFormSubmit(values, setSubmitting) {
    if (messageSent) {
      // Reset the submit button label
      setMessageSent(false);
    }

    const consentValue = values.consentAccepted
      ? CONSENT_VALUE[locale].yes
      : CONSENT_VALUE[locale].no;

    try {
      const data = JSON.stringify({
        email: values.email,
        fullName: values.fullName,
        message: values.message,
        dateSent: new Date().toISOString(),
        locale: locale,
        botField: values.botField,
        consentAccepted: values.consentAccepted,
        consentValue: consentValue,
      });

      if (!userToken) {
        sendContactFormEvent({
          action: GA_EVENTS.contactForm.actions.submit.name,
          label: GA_EVENTS.contactForm.actions.submit.labels.authFailed,
        });

        setSubmitting(false);

        return;
      }

      fetch(process.env.GATSBY_FIREBASE_FUNCTIONS_CONTACT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((jsonResponse) => jsonResponse.json())
        .then((response) => {
          setSubmitting(false);

          if (response.error) {
            sendContactFormEvent({
              action: GA_EVENTS.contactForm.actions.submit.name,
              label: GA_EVENTS.contactForm.actions.submit.labels.failed,
            });
            handleFormError(new Error(response.error));
          }

          if (!response.error && response.data && response.data === "Ok") {
            sendContactFormEvent({
              action: GA_EVENTS.contactForm.actions.submit.name,
              label: GA_EVENTS.contactForm.actions.submit.labels.success,
            });
            setMessageSent(true);
            navigate(localePaths[locale].thanks);
          }
        })
        .catch((error) => {
          sendContactFormEvent({
            action: GA_EVENTS.contactForm.actions.submit.name,
            label: GA_EVENTS.contactForm.actions.submit.labels.failed,
          });
          setSubmitting(false);
          handleFormError(error);
        });
    } catch (error) {
      sendContactFormEvent({
        action: GA_EVENTS.contactForm.actions.submit.name,
        label: GA_EVENTS.contactForm.actions.submit.labels.error,
      });
      setSubmitting(false);
      handleFormError(error);
    }
  }

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          message: "",
          botField: "",
          consentAccepted: false,
        }}
        validationSchema={contactFormValidationSchema(locale)}
        onSubmit={(values, { setSubmitting }) => {
          handleContactFormSubmit(values, setSubmitting);
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting, isValid }) => (
          <StyledForm
            name="contact"
            method="post"
            onSubmit={handleSubmit}
            aria-label={
              locale === "en" ? "contact form" : "formulario de contacto"
            }
          >
            <ToggleConsent
              setConsentAccepted={setConsentAccepted}
              currentConsentAccepted={consentAccepted}
            />
            <Ping userToken={userToken} />
            <Field
              style={{ display: "none" }}
              aria-hidden="true"
              name="botField"
            />
            <StyledLabel labelType="fullName">
              <StyledInput
                type="text"
                name="fullName"
                autoCorrect="off"
                autoComplete="name"
                placeholderType="fullName"
                minLength="2"
                valid={touched.fullName && !errors.fullName}
                error={touched.fullName && errors.fullName}
                aria-describedby="fullName-validation"
                aria-required="true"
                aria-invalid={
                  touched.fullName && errors.fullName ? `true` : `false`
                }
              />
            </StyledLabel>
            {errors.fullName && touched.fullName && (
              <InlineErrorMessage
                aria-hidden="true"
                id="fullName-validation"
                data-testid="Fullname__ErrorMessage"
              >
                {errors.fullName}
              </InlineErrorMessage>
            )}

            <StyledLabel labelType="email">
              <StyledInput
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
                aria-invalid={touched.email && errors.email ? `true` : `false`}
              />
            </StyledLabel>
            <ErrorMessage name="email">
              {(errorMessage) => (
                <InlineErrorMessage
                  aria-hidden="true"
                  id="email-validation"
                  data-testid="Email__ErrorMessage"
                >
                  {errorMessage}
                </InlineErrorMessage>
              )}
            </ErrorMessage>

            <StyledLabel labelType="message">
              <StyledInput
                name="message"
                component="textarea"
                rows="6"
                minLength="2"
                placeholderType="message"
                valid={touched.message && !errors.message}
                error={touched.message && errors.message}
                aria-describedby="message-validation"
                aria-required="true"
                aria-invalid={
                  touched.message && errors.message ? `true` : `false`
                }
              />
            </StyledLabel>
            <ErrorMessage name="message">
              {(errorMessage) => (
                <InlineErrorMessage
                  aria-hidden="true"
                  id="message-validation"
                  data-testid="Message__ErrorMessage"
                >
                  {errorMessage}
                </InlineErrorMessage>
              )}
            </ErrorMessage>

            <PrivacyCheckbox
              name="consentAccepted"
              aria-describedby="checkbox-validation"
              aria-required="true"
            />

            <ErrorMessage name="consentAccepted">
              {(errorMessage) => (
                <InlineErrorMessage
                  aria-hidden="true"
                  id="checkbox-validation"
                  data-testid="Checkbox__ErrorMessage"
                >
                  {errorMessage}
                </InlineErrorMessage>
              )}
            </ErrorMessage>

            <SubmitButton
              disabled={!isValid || isSubmitting || authError || !userToken}
              showSpinner={isSubmitting}
              submitted={messageSent}
              aria-label={
                // eslint-disable-next-line no-nested-ternary
                messageSent
                  ? "Message sent"
                  : isSubmitting
                  ? `Sending message`
                  : `Send message`
              }
            />

            {showFormError && (
              <ContactFormErrorMessage
                errorMessage={formErrorMessage}
                clearErrorMessage={clearErrorMessage}
                shouldRenderCloseButton={!authError}
              />
            )}
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
}

export default ContactForm;
