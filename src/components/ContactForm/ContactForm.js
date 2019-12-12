import React, { useState, useContext, useEffect } from "react";
import { string } from "prop-types";
import { useFormikContext, Formik, Field, ErrorMessage } from "formik";

import { navigate } from "gatsby";
import * as Sentry from "@sentry/browser";

import sendGAEvent from "../../helpers/sendGAEvent";
import CONTACT_FORM_VALIDATION_SCHEMA from "./ContactFormValidationSchema";

import { CONSENT_VALUE, localePaths } from "../../i18n/i18n";

import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import ContactFormErrorMessage from "../ContactFormErrorMessage/ContactFormErrorMessage";
import InlineErrorMessage from "../InlineErrorMessage/InlineErrorMessage";
import useFirebaseAnonymousAuth from "../../hooks/useFirebaseAnonymousAuth";

import SubmitButton from "../SubmitButton/SubmitButton";

import { FormContainer, StyledForm, StyledLabel, StyledInput } from "./styles";

import { GDPRContext } from "../Layout";

function logGAEvent(label = "Ok") {
  return sendGAEvent("Contact Form", "Submitted", label);
}

function ToggleConsent({ setConsentAccepted, currentConsentAccepted }) {
  const { values } = useFormikContext();

  useEffect(() => {
    if (!currentConsentAccepted && values.consentAccepted) {
      setConsentAccepted(values.consentAccepted);
    }
  }, [currentConsentAccepted, values.consentAccepted]);

  return null;
}

function ContactForm({ locale }) {
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const hasGDPRConsent = useContext(GDPRContext);
  const [consentAccepted, setConsentAccepted] = useState(false);

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
  }, [hasGDPRConsent]);

  function clearErrorMessage() {
    setShowFormError(false);
    setFormErrorMessage(null);
  }

  function handleFormError(error) {
    setFormErrorMessage(error.message);
    setShowFormError(true);
    console.error("Contact form failed with: ", error.message);
    Sentry.captureException(error);
  }

  function handleContactFormSubmit(values, setSubmitting) {
    const consentValue = values.consentAccepted
      ? CONSENT_VALUE[locale].yes
      : CONSENT_VALUE[locale].no;

    try {
      const data = JSON.stringify({
        email: values.email,
        fullname: values.fullname,
        message: values.message,
        datesent: new Date().toISOString(),
        locale: locale,
        botfield: values.botfield,
        consentAccepted: values.consentAccepted,
        consentValue: consentValue,
      });

      if (userToken) {
        fetch(process.env.GATSBY_FIREBASE_FUNCTIONS_CONTACT_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
          body: data,
        })
          .then((jsonResponse) => {
            setSubmitting(false);

            return jsonResponse.json();
          })
          .then((response) => {
            if (response.error) {
              logGAEvent("Failed");
              handleFormError(new Error(response.error));
            }

            if (!response.error && response.data && response.data === "Ok") {
              logGAEvent("Success");
              navigate(localePaths[locale].thanks);
            }
          })
          .catch((error) => {
            logGAEvent("Failed");
            setSubmitting(false);
            handleFormError(error);
          });
      } else {
        logGAEvent("Auth Failed");
        setSubmitting(false);
      }
    } catch (error) {
      logGAEvent("Failed");
      setSubmitting(false);
      handleFormError(error);
    }
  }

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: "",
          fullname: "",
          message: "",
          botfield: "",
          consentAccepted: false,
        }}
        validationSchema={CONTACT_FORM_VALIDATION_SCHEMA(locale)}
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
            <Field
              style={{ display: "none" }}
              aria-hidden="true"
              name="botfield"
            />
            <StyledLabel labelType="fullname">
              <StyledInput
                type="text"
                name="fullname"
                autoCorrect="off"
                autoComplete="name"
                placeholderType="fullname"
                minLength="2"
                valid={touched.fullname && !errors.fullname}
                error={touched.fullname && errors.fullname}
                aria-describedby="fullname-validation"
                aria-required="true"
                aria-invalid={
                  touched.fullname && errors.fullname ? `true` : `false`
                }
              />
            </StyledLabel>
            {errors.fullname && touched.fullname && (
              <InlineErrorMessage
                aria-hidden="true"
                id="fullname-validation"
                data-testid="Fullname__ErrorMessage"
              >
                {errors.fullname}
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
              locale={locale}
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
              aria-label={isSubmitting ? `Sending message` : `Send message`}
            />

            {showFormError && (
              <ContactFormErrorMessage
                errorMessage={formErrorMessage}
                clearErrorMessage={clearErrorMessage}
                shouldRenderCloseButton={!authError}
                locale={locale}
              />
            )}
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  locale: string.isRequired,
};

export default ContactForm;
