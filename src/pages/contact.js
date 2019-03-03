import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { navigate } from "gatsby";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";

const ContactMeWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col10};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(16)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
    margin-bottom: ${rem(144)};
  `};
`;

const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;

const Subhead = styled(Copy)`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledMailToButton = styled.a`
  background-color: ${theme.colors.main600};
  border-radius: ${theme.borderRadius.buttons};
  color: ${theme.colors.buttonLight} !important;
  display: block;

  text-align: center;
  text-decoration: none;
  font-size: ${theme.fontSizes.button};
  line-height: ${theme.lineHeights.button};
  font-style: normal;
  font-weight: 700;

  padding: ${rem(12)} ${rem(40)};
  height: ${rem(48)};
  width: 100%;

  ${mediaMin.xxs`  
    width: ${rem(288)};
  `};

  margin-top: ${rem(24)};

  ${mediaMin.m`  
    margin-top: ${rem(8)};
  `};

  white-space: nowrap;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyBold};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.main500};
    ${theme.shadow.buttons.main};
  }
`;

const StyledLink = styled.a`
  display: inline;
  white-space: nowrap;
`;

const FormContainer = styled.div`
  margin-top: ${rem(32)};

  label {
    display: block;
    margin-bottom: ${rem(16)};
  }

  input {
    display: block;
    padding: ${rem(8)};
    margin-bottom: ${rem(16)};
  }
`;

const SayHiContainer = styled.div`
  margin-top: ${rem(40)};

  ${mediaMin.m`  
    margin-top: ${rem(80)};
  `};

  ${mediaMin.xl`  
    margin-top: ${rem(112)};
  `};
`;

const SayHiTitle = styled.h3`
  margin-top: ${rem(24)};

  ${mediaMin.m`  
    margin-top: ${rem(32)};
  `};
`;

const SayHiDescription = styled(Copy)`
  display: inline;
`;

const ContactPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";
  let emailURL = "";

  if (locale === "en") {
    twinPostURL = "/es/contacto";
    emailURL = "mailto:hello@danilucaci.com";
  } else if (locale === "es") {
    emailURL = "mailto:hola@danilucaci.com";
    twinPostURL = "/contact";
  }

  const gdprCheckboxLabel = {
    en: "I accept the privacy policy.",
    es: "Accepto la privacidad",
  };

  const gdprConsents = {
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
  const [acceptsGDPRCheckbox, setAcceptsGDPRCheckbox] = useState(false);
  const [GDPRConsentMSG, setGDPRConsentMSG] = useState(gdprConsents[locale].no);
  const [GDPRInputMSG, setGDPRInputMSG] = useState();
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [formSubmitMessage, setFormSubmitMessage] = useState("");
  const [formSubmitError, setFormSubmitError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email}`);
    console.log(`name: ${name}`);
    console.log(`message: ${message}`);

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email: email,
        name: name,
        message: message,
        botfield: botField,
        gdprcheckbox: acceptsGDPRCheckbox,
        gdprcheckboxmessage: GDPRConsentMSG,
      }),
    })
      .then(() => {
        console.log(`email: ${email}`);
        console.log(`name: ${name}`);
        console.log(`message: ${message}`);
        console.log(`botfield: ${botField}`);
        console.log(`acceptsGDPRCheckbox: ${acceptsGDPRCheckbox}`);
        console.log(`GDPRConsentMSG: ${GDPRConsentMSG}`);
        setFormSubmitMessage("Thanks, Message Sent!");
      })
      // .then(() => navigate(form.getAttribute("action")))
      .catch((error) => setFormSubmitError(error));
  }

  function handleGDPRCheckbox(e) {
    setAcceptsGDPRCheckbox(e.target.checked);
    setGDPRConsentMSG(gdprConsents[locale].yes);
    setAllowSubmit(acceptsGDPRCheckbox);
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="contact"
        currentPath={props.location.pathname}
      />
      <SiteHeader
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={props.location.pathname}
      />
      <Main role="main" id="main">
        <ContactMeWrapper>
          <FormattedMessage id="contactPageTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="contactPageDescription">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <FormattedMessage id="contactPageWorkInfo">
            {(txt) => (
              <Copy>
                {txt}{" "}
                <FormattedMessage id="contactPageEmail">
                  {(txt) => <StyledLink href={emailURL}>{txt}</StyledLink>}
                </FormattedMessage>
              </Copy>
            )}
          </FormattedMessage>
          <FormattedMessage id="contactPageCTA">
            {(txt) => (
              <StyledMailToButton role="button" href={emailURL}>
                {txt}
              </StyledMailToButton>
            )}
          </FormattedMessage>
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
                onChange={(e) => setBotField(e.target.value)}
              />
              <input
                style={{ display: "none" }}
                arria-hidden="true"
                type="text"
                value={GDPRConsentMSG}
                onChange={(e) => setGDPRInputMSG(e.target.value)}
                name="gdprcheckboxmessage"
              />
              <label>
                Full Name (required)
                <input
                  type="text"
                  value={name}
                  name="fullname"
                  autoCorrect="off"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Your Email (required)
                <input
                  type="email"
                  value={email}
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Your Message (required)
                <textarea
                  rows="4"
                  cols="50"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="gdprcheckbox"
                  value={GDPRConsentMSG}
                  onChange={handleGDPRCheckbox}
                  required
                />
                {gdprCheckboxLabel[locale]}
              </label>
              <input
                type="submit"
                value="Submit"
                disabled={!acceptsGDPRCheckbox}
              />
              {formSubmitMessage && <p>{formSubmitMessage}</p>}
              {formSubmitError && <p>{formSubmitError}</p>}
            </form>
          </FormContainer>
          <SayHiContainer>
            <HR />
            <FormattedMessage id="contactPageOtherTitle">
              {(txt) => <SayHiTitle>{txt}</SayHiTitle>}
            </FormattedMessage>
            <FormattedMessage id="contactPageOtherDescription">
              {(txt) => (
                <SayHiDescription>
                  {txt}
                  <FormattedMessage id="contactPageOtherDescriptionLink">
                    {(txt) => (
                      <StyledLink
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/danilucaci"
                      >
                        {txt}
                      </StyledLink>
                    )}
                  </FormattedMessage>
                </SayHiDescription>
              )}
            </FormattedMessage>
          </SayHiContainer>
        </ContactMeWrapper>
      </Main>
      <SubscribeCard locale={locale} />
      <SiteFooter locale={locale} />
    </Layout>
  );
};

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }),
};

export default ContactPage;
