import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { navigate } from "gatsby";

import { FormContainer, StyledForm, StyledLabel } from "./styles";

import { sendContactFormEvent } from "../../helpers/ga";
import GA_EVENTS from "../../helpers/gaEvents";
import makeContactFormValidationSchema from "../../helpers/makeContactFormValidationSchema";
import { CONSENT_VALUE, localePaths } from "../../i18n";
import { errorLoggerService } from "../../services";
import * as api from "../../api";

import LocaleContext from "../../i18n/LocaleContext";
import { CookiesContext } from "../../context/CookiesContext";

import useFirebaseAnonymousAuth from "../../hooks/useFirebaseAnonymousAuth";

import PrivacyCheckbox from "../PrivacyCheckbox";
import ContactFormErrorMessage from "../ContactFormErrorMessage";
import InlineErrorMessage from "../InlineErrorMessage";
import SubmitButton from "../SubmitButton";
import Input from "../Input";
import ToggleConsent from "./ToggleConsent";
import Ping from "./Ping";

function getSubmitButtonAriaLabel(messageSent = false, isSubmitting = false) {
  if (messageSent) {
    return "Message sent";
  }

  if (isSubmitting) {
    return "Sending message";
  }

  return "Send message";
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

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
      botField: "",
      consentAccepted: false,
    },
    validationSchema: makeContactFormValidationSchema(locale),
    onSubmit: (values, { setSubmitting }) => {
      handleContactFormSubmit(values, setSubmitting);
    },
  });

  useEffect(() => {
    if (authError) {
      setShowFormError(true);
      setFormErrorMessage("Service is currently unavailable.");
      errorLoggerService.captureMessage(authError);
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
    errorLoggerService.captureException(error);
  }

  async function sendContactData(formData, setSubmitting) {
    try {
      const response = await api.sendContactForm(formData, userToken);

      const { error: responseError } = response;

      setSubmitting(false);

      if (responseError) {
        sendContactFormEvent({
          action: GA_EVENTS.contactForm.actions.submit.name,
          label: GA_EVENTS.contactForm.actions.submit.labels.failed,
        });
        handleFormError(new Error(responseError));
      }

      if (!responseError && response.status === 201) {
        sendContactFormEvent({
          action: GA_EVENTS.contactForm.actions.submit.name,
          label: GA_EVENTS.contactForm.actions.submit.labels.success,
        });
        setMessageSent(true);
        navigate(localePaths[locale].thanks);
      }
    } catch (error) {
      sendContactFormEvent({
        action: GA_EVENTS.contactForm.actions.submit.name,
        label: GA_EVENTS.contactForm.actions.submit.labels.failed,
      });
      setSubmitting(false);
      handleFormError(error);
    }
  }

  function handleContactFormSubmit(values, setSubmitting) {
    if (messageSent) {
      // Reset the submit button label
      setMessageSent(false);
    }

    if (!userToken) {
      sendContactFormEvent({
        action: GA_EVENTS.contactForm.actions.submit.name,
        label: GA_EVENTS.contactForm.actions.submit.labels.authFailed,
      });

      setSubmitting(false);

      return;
    }

    const consentValue = values.consentAccepted
      ? CONSENT_VALUE[locale].yes
      : CONSENT_VALUE[locale].no;

    const formData = {
      email: values.email,
      fullName: values.fullName,
      message: values.message,
      dateSent: new Date().toISOString(),
      locale: locale,
      botField: values.botField,
      consentAccepted: values.consentAccepted,
      consentValue: consentValue,
    };

    sendContactData(formData, setSubmitting);
  }

  return (
    <FormContainer>
      <StyledForm
        name="contact"
        method="post"
        onSubmit={formik.handleSubmit}
        aria-label={locale === "en" ? "contact form" : "formulario de contacto"}
      >
        <ToggleConsent
          values={formik.values}
          setConsentAccepted={setConsentAccepted}
          currentConsentAccepted={consentAccepted}
        />
        <Ping touched={formik.touched} userToken={userToken} />
        <input
          type="text"
          style={{ display: "none" }}
          aria-hidden="true"
          name="botField"
        />
        <StyledLabel labelType="fullName">
          <Input
            type="text"
            name="fullName"
            autoCorrect="off"
            autoComplete="name"
            placeholderType="fullName"
            minLength="2"
            valid={formik.touched.fullName && !formik.errors.fullName}
            error={formik.touched.fullName && formik.errors.fullName}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="fullName-validation"
            aria-required="true"
            aria-invalid={
              formik.touched.fullName && formik.errors.fullName
                ? `true`
                : `false`
            }
          />
        </StyledLabel>
        {formik.touched.fullName && formik.errors.fullName && (
          <InlineErrorMessage
            aria-hidden="true"
            id="fullName-validation"
            data-testid="Fullname__ErrorMessage"
          >
            {formik.errors.fullName}
          </InlineErrorMessage>
        )}

        <StyledLabel labelType="email">
          <Input
            type="email"
            name="email"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            placeholderType="email"
            valid={formik.touched.email && !formik.errors.email}
            error={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="email-validation"
            aria-required="true"
            aria-invalid={
              formik.touched.email && formik.errors.email ? `true` : `false`
            }
          />
        </StyledLabel>
        {formik.touched.email && formik.errors.email && (
          <InlineErrorMessage
            aria-hidden="true"
            id="email-validation"
            data-testid="Email__ErrorMessage"
          >
            {formik.errors.email}
          </InlineErrorMessage>
        )}

        <StyledLabel labelType="message">
          <Input
            name="message"
            as="textarea"
            rows="6"
            placeholderType="message"
            valid={formik.touched.message && !formik.errors.message}
            error={formik.touched.message && formik.errors.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="message-validation"
            aria-required="true"
            aria-invalid={
              formik.touched.message && formik.errors.message ? `true` : `false`
            }
          />
        </StyledLabel>
        {formik.touched.message && formik.errors.message && (
          <InlineErrorMessage
            aria-hidden="true"
            id="message-validation"
            data-testid="Message__ErrorMessage"
          >
            {formik.errors.message}
          </InlineErrorMessage>
        )}

        <PrivacyCheckbox
          name="consentAccepted"
          aria-describedby="checkbox-validation"
          aria-required="true"
          value={formik.values.consentAccepted}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.consentAccepted && formik.errors.consentAccepted && (
          <InlineErrorMessage
            aria-hidden="true"
            id="checkbox-validation"
            data-testid="Checkbox__ErrorMessage"
          >
            {formik.errors.consentAccepted}
          </InlineErrorMessage>
        )}

        <SubmitButton
          disabled={
            !formik.isValid || formik.isSubmitting || authError || !userToken
          }
          showSpinner={formik.isSubmitting}
          submitted={messageSent}
          aria-label={getSubmitButtonAriaLabel(
            messageSent,
            formik.isSubmitting,
          )}
        />

        {showFormError && (
          <ContactFormErrorMessage
            errorMessage={formErrorMessage}
            clearErrorMessage={clearErrorMessage}
            shouldRenderCloseButton={!authError}
          />
        )}
      </StyledForm>
    </FormContainer>
  );
}

export default ContactForm;
