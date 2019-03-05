import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { graphql, StaticQuery } from "gatsby";

import { theme, mediaMin, mediaMax, rem } from "../../theme/globalStyles";
import { Input, SubmitButton, TextArea, Checkbox } from "../Input/Input";
import { Copy } from "../Copy/Copy";
import LocaleLink from "../LocaleLink/LocaleLink";
import { CONSENT_VALUE, FORM_SUBMIT_STATUS } from "../../i18n/i18n";

const FormContainer = styled.div``;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: ${rem(16)};

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledCheckboxLabel = styled.label`
  display: inline-block;
  margin-top: ${rem(16)};
`;

const StyledInput = styled(Input)`
  display: block;
  margin-top: ${rem(8)};
`;

const StyledSubmitButton = styled(SubmitButton)``;

const StyledTextArea = styled(TextArea)`
  display: block;
  margin-top: ${rem(8)};
`;

const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  margin-right: ${rem(8)};
`;

const EmailStatusMessage = styled(Copy)`
  border: 1px solid ${theme.colors.gray400};
  border-radius: ${theme.borderRadius.buttons};
  display: block;
  background-color: ${theme.colors.gray100};
  font-size: ${theme.fontSizes};
  line-height: ${theme.lineHeights};
  color: ${theme.colors.dark800};
  padding: ${rem(16)};
  margin-top: ${rem(24)};
  ${theme.shadow.dropdown}
`;

const LearnMoreLink = styled(LocaleLink)`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s} !important;
  display: inline;
  white-space: nowrap;
`;

const ContactForm = (props) => {
  let locale = props.locale;

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [dateSent, setDateSent] = useState(submitTimeStamp());
  const [botField, setBotField] = useState("");
  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = useState(false);
  const [consentCheckboxMessage, setConsentCheckboxMessage] = useState(
    CONSENT_VALUE[locale].no
  );
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
        fullname: fullName,
        message: message,
        datesent: dateSent,
        botfield: botField,
        acceptsconsentcheckbox: acceptsConsentCheckbox,
        consentcheckboxmessage: consentCheckboxMessage,
      }),
    })
      .then(() => {
        console.log(`fullname: ${fullName}`);
        console.log(`email: ${email}`);
        console.log(`message: ${message}`);
        console.log(`dateSent: ${submitTimeStamp()}`);
        console.log(`botfield: ${botField}`);
        console.log(`acceptsConsentCheckbox: ${acceptsConsentCheckbox}`);
        console.log(`consentcheckboxmessage: ${consentCheckboxMessage}`);
        setFormSubmitMessage(FORM_SUBMIT_STATUS.success[locale]);
      })
      // .then(() => navigate(form.getAttribute("action")))
      .catch((error) => setFormSubmitError(error));
  }

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
    setConsentCheckboxMessage(CONSENT_VALUE[locale].yes);
    setAllowSubmit(acceptsConsentCheckbox);
    setDateSent(submitTimeStamp());
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
      <StyledForm
        name="contact"
        method="post"
        action="/thanks/"
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
          onChange={() => setDateSent(submitTimeStamp())}
          name="datesent"
        />
        <input
          style={{ display: "none" }}
          arria-hidden="true"
          type="text"
          value={
            acceptsConsentCheckbox === true
              ? CONSENT_VALUE[locale].yes
              : CONSENT_VALUE[locale].no
          }
          name="consentcheckboxmessage"
          readOnly={true}
        />
        <StyledLabel>
          Full Name (required)
          <StyledInput
            type="text"
            value={fullName}
            name="fullname"
            autoCorrect="off"
            autoComplete="name"
            placeholder="Your name"
            onChange={(e) => setFullName(e.target.value)}
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
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Your Message (required)
          <StyledTextArea
            rows="10"
            value={message}
            name="message"
            placeholder="Your message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledCheckboxLabel>
          <StyledCheckbox
            type="checkbox"
            name="acceptsconsentcheckbox"
            onChange={handleConsentCheckbox}
            required
          />
          <StaticQuery
            query={CONTACT_FORM_QUERY}
            render={(data) => {
              let localizedDocsList = data.allMarkdownRemark.edges
                .map((edge) => ({
                  slug: edge.node.fields.slug,
                  title: edge.node.frontmatter.title,
                  locale: edge.node.frontmatter.locale,
                }))
                .filter((edge) => edge.locale === props.locale);
              return (
                <>
                  {localizedDocsList.map((localizedDoc) => (
                    <FormattedMessage
                      id="formPrivacyMore1"
                      key={localizedDoc.title}
                    >
                      {(txt1) => (
                        <>
                          {txt1}
                          <FormattedMessage id="formPrivacyMore2">
                            {(txt2) => (
                              <LearnMoreLink to={localizedDoc.slug}>
                                {txt2}
                              </LearnMoreLink>
                            )}
                          </FormattedMessage>
                        </>
                      )}
                    </FormattedMessage>
                  ))}
                </>
              );
            }}
          />
        </StyledCheckboxLabel>
        <StyledSubmitButton
          type="submit"
          value="Submit"
          disabled={!acceptsConsentCheckbox}
        />
        {formSubmitMessage && (
          <EmailStatusMessage>{formSubmitMessage}</EmailStatusMessage>
        )}
        {formSubmitError && (
          <EmailStatusMessage>{formSubmitError}</EmailStatusMessage>
        )}
      </StyledForm>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default ContactForm;

const CONTACT_FORM_QUERY = graphql`
  query CONTACT_FORM_QUERY {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: "legal" }
          forCookieConsent: { eq: true }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            locale
          }
        }
      }
    }
  }
`;
