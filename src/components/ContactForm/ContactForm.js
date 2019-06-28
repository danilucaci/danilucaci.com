import React, { useState } from "react";
import { string } from "prop-types";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { navigate } from "gatsby";
import * as Sentry from "@sentry/browser";

import sendGAEvent from "../../helpers/sendGAEvent";

import { CONSENT_VALUE, FORM_SUBMIT_STATUS, localePaths } from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import { StyledErrorCTA, StyledIcon } from "../EmailLoading/styles";
import EmailErrorMessage from "../EmailErrorMessage/EmailErrorMessage";
import { InlineStatusMessageWrapper, InlineMessageCopy } from "../EmailErrorMessage/styles";

import SubmitButton from "../SubmitButton/SubmitButton";

import {
  FormContainer,
  StyledForm,
  StyledLabel,
  InputStatusIcon,
  InputTextAreaStatusIcon,
  StyledInput,
  StyledTextArea,
} from "./styles";

function ContactForm({ locale }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorRes, setFormErrorRes] = useState({});
  const logGAEvent = sendGAEvent("Contact Page", "Submitted Form");

  // function showFormInputs({
  //   fullname, email, message, acceptsconsentcheckbox, botfield,
  // }) {
  //   console.log(`fullname: ${fullname}`);
  //   console.log(`email: ${email}`);
  //   console.log(`message: ${message}`);
  //   console.log(`botfield: ${botfield}`);
  //   console.log(`checkboxValue: ${acceptsconsentcheckbox}`);
  //   console.log(`acceptsConsentCheckbox: ${acceptsconsentcheckbox}`);
  // }

  function handleFormError(error) {
    setShowFormError(true);
    setFormErrorRes(error);
    console.error("Contact form failed with: ", error.name);
    console.error("Contact form failed with: ", error.message);
    Sentry.captureException(error);
  }

  const ContactSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, FORM_SUBMIT_STATUS.formValidation[locale].nameShort)
      .max(100, FORM_SUBMIT_STATUS.formValidation[locale].nameLong)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].nameRequired),
    email: Yup.string()
      .email(FORM_SUBMIT_STATUS.formValidation[locale].email)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].emailRequired),
    message: Yup.string()
      .min(2, FORM_SUBMIT_STATUS.formValidation[locale].messageShort)
      .max(800, FORM_SUBMIT_STATUS.formValidation[locale].messageLong)
      .required(FORM_SUBMIT_STATUS.formValidation[locale].messageRequired),
    botfield: Yup.string().max(0, "Great Success"),
    acceptsconsentcheckbox: Yup.boolean().oneOf(
      [true],
      FORM_SUBMIT_STATUS.formValidation[locale].privacyRequired,
    ),
  });

  function handleSubmit(values, setSubmitting) {
    setShowSpinner(true);
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
        consentcheckboxvalue: CONSENT_VALUE[locale].yes,
      });

      fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }).then((res) => {
        if (res.status === 200) {
          if (process.env.NODE_ENV === "development") {
            console.log(`%c Status: ${res.status}: ${res.ok}`, "color: #79E36B");
            console.log("%c Great Success!", "color: #79E36B");
          }
          // showFormInputs(values);
          setSubmitting(false);

          logGAEvent();
          navigate(localePaths[locale].thanks);
        } else if (res.status === 400) {
          handleFormError(
            new Error(
              `Contact Form Error. No data was sent to the server. Received code: ${res.status}`,
            ),
          );
        } else if (res.status === 403) {
          handleFormError(
            new Error(
              `Contact Form Error. The form request is not allowed. Received code: ${res.status}`,
            ),
          );
        } else if (res.status === 451) {
          handleFormError(
            new Error(
              `Contact Form Error. The form could not be sent for legal reasons. Received code: ${res.status}`,
            ),
          );
        } else if (res.status === 504) {
          handleFormError(
            new Error(
              `Contact Form Error. The server did not respond. Received code: ${res.status}`,
            ),
          );
        } else {
          handleFormError(
            new Error(
              `Contact Form Error. The form could not be sent. Received code: ${res.status}`,
            ),
          );
        }
      });
    } catch (error) {
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
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (showSpinner === false) {
            handleSubmit(values, setSubmitting);
          }
        }}
      >
        {({ isValid }) => (
          <StyledForm
            name="contact"
            method="post"
            action={localePaths[locale].thanks}
            data-netlify="true"
            data-netlify-honeypot="botfield"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            {/* These have to be input types, otherwise they don't show in the form atributes */}
            <input type="hidden" name="form-name" arria-hidden="true" value="contact" />
            <Field style={{ display: "none" }} arria-hidden="true" name="botfield" />
            <StyledLabel labelType="fullname">
              <StyledInput
                type="fullname"
                name="fullname"
                autoCorrect="off"
                autoComplete="name"
                placeholderType="fullname"
                minLength="2"
              />
              <InputStatusIcon arriaHidden="true" />
            </StyledLabel>
            <ErrorMessage name="fullname">
              {(errorMessage) => (
                <InlineStatusMessageWrapper>
                  <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                </InlineStatusMessageWrapper>
              )}
            </ErrorMessage>
            <StyledLabel labelType="email">
              <StyledInput
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                placeholderType="email"
              />
              <InputStatusIcon arriaHidden="true" />
            </StyledLabel>
            <ErrorMessage name="email">
              {(errorMessage) => (
                <InlineStatusMessageWrapper>
                  <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                </InlineStatusMessageWrapper>
              )}
            </ErrorMessage>
            <StyledLabel labelType="message">
              <StyledTextArea name="message" component="textarea" rows="6" minLength="2" />
              <InputTextAreaStatusIcon arriaHidden="true" />
            </StyledLabel>
            <ErrorMessage name="message">
              {(errorMessage) => (
                <InlineStatusMessageWrapper>
                  <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                </InlineStatusMessageWrapper>
              )}
            </ErrorMessage>
            <PrivacyCheckbox
              type="checkbox"
              name="acceptsconsentcheckbox"
              value={isValid === true ? CONSENT_VALUE[locale].yes : CONSENT_VALUE[locale].no}
              locale={locale}
            />
            <ErrorMessage name="acceptsconsentcheckbox">
              {(errorMessage) => (
                <InlineStatusMessageWrapper>
                  <InlineMessageCopy>{errorMessage}</InlineMessageCopy>
                </InlineStatusMessageWrapper>
              )}
            </ErrorMessage>

            {showFormError && (
              <React.Fragment>
                <StyledErrorCTA>
                  {FORM_SUBMIT_STATUS.ctaError[locale]}
                  <StyledIcon aria-hidden="true">
                    <use xlinkHref="#error" />
                  </StyledIcon>
                </StyledErrorCTA>
                <EmailErrorMessage locale={locale} formErrorRes={formErrorRes} />
              </React.Fragment>
            )}

            {!showFormError && <SubmitButton disabled={!isValid} showSpinner={showSpinner} />}
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
