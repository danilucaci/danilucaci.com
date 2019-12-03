import React, { useState } from "react";
import { string } from "prop-types";
import { Formik, Field, ErrorMessage } from "formik";

import { navigate } from "gatsby";
import * as Sentry from "@sentry/browser";

import sendGAEvent from "../../helpers/sendGAEvent";
import CONTACT_FORM_VALIDATION_SCHEMA from "./ContactFormValidationSchema";

import { CONSENT_VALUE, localePaths } from "../../i18n/i18n";

import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import ContactFormErrorMessage from "../ContactFormErrorMessage/ContactFormErrorMessage";
import InlineErrorMessage from "../InlineErrorMessage/InlineErrorMessage";

import SubmitButton from "../SubmitButton/SubmitButton";

import { FormContainer, StyledForm, StyledLabel, StyledInput } from "./styles";

function ContactForm({ locale }) {
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorRes, setFormErrorRes] = useState({});

  function logGAEvent(statusText = "", status = 200) {
    const logGA = sendGAEvent(
      "Contact Page",
      "Submitted Form",
      statusText,
      status,
    );
    logGA();
  }

  function handleFormError(error) {
    setShowFormError(true);
    setFormErrorRes(error);
    console.error("Contact form failed with: ", error.name);
    console.error("Contact form failed with: ", error.message);
    Sentry.captureException(error);
  }

  function handleContactFormSubmit(values, setSubmitting) {
    const consentcheckboxvalue = values.acceptsconsentcheckbox
      ? CONSENT_VALUE[locale].yes
      : CONSENT_VALUE[locale].no;

    try {
      const data = JSON.stringify({
        formname: "contact",
        email: values.email,
        fullname: values.fullname,
        message: values.message,
        datesent: new Date().toISOString(),
        locale,
        botfield: values.botfield,
        acceptsconsentcheckbox: values.acceptsconsentcheckbox,
        consentcheckboxvalue: consentcheckboxvalue,
      });

      fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      })
        .then((res) => {
          // Log GA event no mather what response it gets
          logGAEvent(res.statusText, res.status);

          if (res.status === 200) {
            setSubmitting(false);
          } else {
            setSubmitting(false);
            handleFormError(
              new Error(
                `Contact form error: Status Code ${res.status}: ${res.statusText}`,
              ),
            );
          }

          return res.json();
        })
        .then((res) => {
          // If the email was sent successfully
          if (res.mail_success) {
            navigate(localePaths[locale].thanks);
          }
        });
    } catch (error) {
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
          acceptsconsentcheckbox: false,
        }}
        validateOnMount={true}
        validationSchema={CONTACT_FORM_VALIDATION_SCHEMA(locale)}
        onSubmit={(values, { setSubmitting }) => {
          handleContactFormSubmit(values, setSubmitting);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid,
        }) => (
          <StyledForm name="contact" method="post" onSubmit={handleSubmit}>
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
              />
            </StyledLabel>
            {errors.fullname && touched.fullname && (
              <InlineErrorMessage testid="Fullname__ErrorMessage">
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
              />
            </StyledLabel>
            <ErrorMessage name="email">
              {(errorMessage) => (
                <InlineErrorMessage testid="Email__ErrorMessage">
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
              />
            </StyledLabel>
            <ErrorMessage name="message">
              {(errorMessage) => (
                <InlineErrorMessage testid="Message__ErrorMessage">
                  {errorMessage}
                </InlineErrorMessage>
              )}
            </ErrorMessage>

            <PrivacyCheckbox name="acceptsconsentcheckbox" locale={locale} />

            <ErrorMessage name="acceptsconsentcheckbox">
              {(errorMessage) => (
                <InlineErrorMessage testid="Checkbox__ErrorMessage">
                  {errorMessage}
                </InlineErrorMessage>
              )}
            </ErrorMessage>

            <SubmitButton
              disabled={!isValid || isSubmitting || isValidating}
              showSpinner={isSubmitting}
            />

            {showFormError && (
              <ContactFormErrorMessage
                locale={locale}
                formErrorRes={formErrorRes}
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
