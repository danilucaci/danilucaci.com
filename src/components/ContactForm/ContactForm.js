import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { navigate } from "gatsby";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Input, SubmitButton, TextArea, Checkbox } from "../Input/Input";

const FormContainer = styled.div`
  max-width: ${rem(320)};
  margin-top: ${rem(32)};
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: ${rem(16)};
  width: 100%;
`;

const StyledCheckboxLabel = styled.label`
  display: inline-block;
  outline: 1px solid lightgray;
  margin-top: ${rem(16)};
  width: 100%;
`;

const StyledInput = styled(Input)`
  display: block;
  width: 100%;
  margin-top: ${rem(8)};
  padding: ${rem(12)} ${rem(8)};
`;

const StyledSubmitButton = styled(SubmitButton)``;

const StyledTextArea = styled(TextArea)`
  display: block;
  width: 100%;
  margin-top: ${rem(8)};
  padding: ${rem(12)} ${rem(8)};
`;

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};
`;

const ContactForm = (props) => {
  let locale = props.locale;

  const consentCheckboxLabel = {
    en: "I accept the privacy policy.",
    es: "Accepto la privacidad",
  };

  const consentValue = {
    en: {
      no: "I do not accept the privacy policy.",
      yes: "I accept the privacy policy.",
    },
    es: {
      no: "No accepto la privacidad.",
      yes: "Si Accepto la privacidad.",
    },
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(consentValue[locale].no);
  const [consentInputValue, setConsentInputValue] = useState();
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [formSubmitMessage, setFormSubmitMessage] = useState("");
  const [formSubmitError, setFormSubmitError] = useState("");

  function submitTimeStamp() {
    return new Date();
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
        name: name,
        message: message,
        dateSent: submitTimeStamp(),
        botfield: botField,
        consentcheckboxaccepted: acceptsConsentCheckbox,
        consentcheckboxvalue: checkboxValue,
      }),
    })
      .then(() => {
        console.log(`email: ${email}`);
        console.log(`name: ${name}`);
        console.log(`message: ${message}`);
        console.log(`date: ${submitTimeStamp()}`);
        console.log(`botfield: ${botField}`);
        console.log(`acceptsConsentCheckbox: ${acceptsConsentCheckbox}`);
        console.log(`checkboxValue: ${checkboxValue}`);
        setFormSubmitMessage("Message Sent!");
      })
      // .then(() => navigate(form.getAttribute("action")))
      .catch((error) => setFormSubmitError(error));
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setCheckboxValue(consentValue[locale].yes);
    setAllowSubmit(acceptsConsentCheckbox);
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <FormContainer>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="botfield"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <StyledInput
          type="hidden"
          name="form-name"
          arria-hidden="true"
          value="contact"
        />
        <StyledInput
          style={{ display: "none" }}
          arria-hidden="true"
          name="botfield"
          onChange={(e) => setBotField(e.target.value)}
        />
        <StyledInput
          style={{ display: "none" }}
          arria-hidden="true"
          type="text"
          value={checkboxValue}
          onChange={(e) => setGDPRInputMSG(e.target.value)}
          name="checkboxvalue"
        />
        <StyledLabel>
          Full Name (required)
          <StyledInput
            type="text"
            value={name}
            name="fullname"
            autoCorrect="off"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Your Email (required)
          <StyledInput
            type="email"
            value={email}
            name="email"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Your Message (required)
          <StyledTextArea
            rows="12"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledCheckboxLabel>
          <StyledCheckbox
            type="checkbox"
            name="consentcheckbox"
            value={checkboxValue}
            onChange={handleConsentCheckbox}
            required
          />
          {consentCheckboxLabel[locale]}
        </StyledCheckboxLabel>
        <StyledSubmitButton
          type="submit"
          value="Submit"
          disabled={!acceptsConsentCheckbox}
        />
        {formSubmitMessage && <p>{formSubmitMessage}</p>}
        {formSubmitError && <p>{formSubmitError}</p>}
      </form>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default ContactForm;
