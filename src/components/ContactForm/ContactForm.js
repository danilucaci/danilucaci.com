import React, { useState } from "react";
import { string } from "prop-types";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { navigate } from "gatsby";

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
  const [dateSent, setDateSent] = useState(() => new Date());
  const [showSpinner, setShowSpinner] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorRes, setFormErrorRes] = useState({});

  // function showFormInputs({
  //   fullname, email, message, acceptsconsentcheckbox, botfield,
  // }) {
  //   console.log(`fullname: ${fullname}`);
  //   console.log(`email: ${email}`);
  //   console.log(`message: ${message}`);
  //   console.log(`dateSent: ${dateSent}`);
  //   console.log(`botfield: ${botfield}`);
  //   console.log(`checkboxValue: ${acceptsconsentcheckbox}`);
  //   console.log(`acceptsConsentCheckbox: ${acceptsconsentcheckbox}`);
  // }

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleFormError(error) {
    setShowFormError(true);
    setFormErrorRes(error);
    console.error("Contact form failed with: ", error.name);
    console.error("Contact form failed with: ", error.message);
    throw new Error(error);
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
    botfield: Yup.string().max(
      0,
      "01001010 01100001 01101011 00100000 01110011 01101001 11000100 10011001 00100000 01101101 01100001 01110011 01111010 00111111 00100000 01101101 01111001 00100000 01101110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01100100 01100001 01101110 01101001",
    ),
    acceptsconsentcheckbox: Yup.boolean().oneOf(
      [true],
      FORM_SUBMIT_STATUS.formValidation[locale].privacyRequired,
    ),
  });

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
          // setTimeout(() => {
          try {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "contact",
                email: values.email,
                fullname: values.fullName,
                message: values.message,
                datesent: dateSent,
                botfield: values.botfield,
                acceptsconsentcheckbox: values.acceptsconsentcheckbox,
              }),
            }).then(() => {
              // showFormInputs(values);
              setSubmitting(false);
              setShowSpinner(true);
              navigate(localePaths[locale].thanks);
            });
          } catch (error) {
            handleFormError(error);
          }
          // }, 400);
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
            <input
              style={{ display: "none" }}
              arria-hidden="true"
              type="text"
              value={dateSent}
              onChange={() => setDateSent(() => new Date())}
              name="datesent"
            />
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
