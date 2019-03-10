import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { theme, rem } from "../../theme/globalStyles";
import Label from "../Label/Label";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import TextArea from "../TextArea/TextArea";

import { CONSENT_VALUE, INPUT_EMAIL_ERROR } from "../../i18n/i18n";
import PrivacyCheckbox from "../PrivacyCheckbox/PrivacyCheckbox";
import EmailLoading from "../EmailLoading/EmailLoading";

const FormContainer = styled.div``;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-top: ${rem(16)};
  position: relative;

  &:first-of-type {
    margin-top: 0;
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const InputStatusIcon = styled.span`
  display: none;
  position: absolute;
  right: ${rem(12)};
  top: ${rem(44)};
  width: ${rem(24)};
  height: ${rem(24)};
`;

const InputTextAreaStatusIcon = styled.span`
  display: block;
  position: absolute;
  right: ${rem(12)};
  top: ${rem(40)};
  width: ${rem(24)};
  height: ${rem(24)};
`;

const StyledInput = styled(Input)`
  display: block;
  margin-top: ${rem(8)};
`;

const StyledTextArea = styled(TextArea)`
  display: block;
  margin-top: ${rem(8)};
`;

function ContactForm(props) {
  let locale = props.locale;

  let thanksURL;

  if (locale === "en") {
    thanksURL = "/es/gracias";
  } else if (locale === "es") {
    thanksURL = "/thanks";
  }

  function mailSentTimeStamp() {
    return new Date();
  }

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [dateSent, setDateSent] = useState(mailSentTimeStamp());
  const [botField, setBotField] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [showFormSent, setShowFormSent] = useState(false);
  const [showFormLoading, setShowFormLoading] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [formErrorRes, setFormErrorRes] = useState({});

  function showFormInputs() {
    console.log(`fullname: ${fullName}`);
    console.log(`email: ${email}`);
    console.log(`message: ${message}`);
    console.log(`dateSent: ${mailSentTimeStamp()}`);
    console.log(`botfield: ${botField}`);
    console.log(`acceptsConsentCheckbox: ${acceptsConsentCheckbox}`);
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email: email,
        fullname: fullName,
        message: message,
        datesent: dateSent,
        botfield: botField,
        acceptsconsentcheckbox: acceptsConsentCheckbox,
        consentcheckboxmessage: CONSENT_VALUE[locale].yes,
      }),
    })
      .then(() => {
        // showFormInputs();
        setShowFormSent(true);
        setShowFormLoading(true);
        handleFormSent();
      })
      .catch((error) => handleFormError(error));
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setDateSent(mailSentTimeStamp());
  }

  function handleFormSent() {
    // let timer = setTimeout(() => {
    setShowFormLoading(false);
    setShowFormSuccess(true);

    // clearTimeout(timer);
    // }, 1000);
  }

  function handleFormError(error) {
    let timer = setTimeout(() => {
      setShowFormLoading(false);
      setShowFormError(true);
      setFormErrorRes(error);

      clearTimeout(timer);
    }, 4000);
  }

  return (
    <FormContainer>
      <StyledForm
        name="contact"
        method="post"
        action={thanksURL}
        data-netlify="true"
        data-netlify-honeypot="botfield"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        {/* These have to be input types, otherwise they don't show in the form atributes */}
        <input
          type="hidden"
          name="form-name"
          arria-hidden="true"
          value="contact"
        />
        <input
          style={{ display: "none" }}
          arria-hidden="true"
          name="botfield"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
        <input
          style={{ display: "none" }}
          arria-hidden="true"
          type="text"
          value={dateSent}
          onChange={() => setDateSent(mailSentTimeStamp())}
          name="datesent"
        />
        <input
          style={{ display: "none" }}
          arria-hidden="true"
          type="text"
          value={CONSENT_VALUE[locale].yes}
          name="consentcheckboxmessage"
          readOnly={true}
        />
        <StyledLabel labelType="full name">
          <StyledInput
            type="text"
            value={fullName}
            name="fullname"
            placeholderType="full name"
            autoCorrect="off"
            autoComplete="name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <InputStatusIcon arriaHidden="true" />
        </StyledLabel>
        <StyledLabel labelType="email">
          {/* https://css-tricks.com/form-validation-part-1-constraint-validation-html/ */}
          <StyledInput
            type="email"
            value={email}
            name="email"
            placeholderType="email"
            title={INPUT_EMAIL_ERROR[locale]}
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputStatusIcon arriaHidden="true" />
        </StyledLabel>
        <StyledLabel labelType="message">
          <StyledTextArea
            rows="8"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <InputTextAreaStatusIcon arriaHidden="true" />
        </StyledLabel>
        <PrivacyCheckbox
          type="checkbox"
          name="acceptsconsentcheckbox"
          onChange={handleConsentCheckbox}
          locale={locale}
          required
        />

        {showFormSent && (
          <EmailLoading
            showFormLoading={showFormLoading}
            showFormSuccess={showFormSuccess}
            showFormError={showFormError}
            formErrorRes={formErrorRes}
            locale={locale}
          />
        )}

        {!showFormSent && <SubmitButton />}
      </StyledForm>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default ContactForm;
