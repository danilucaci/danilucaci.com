import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { HR } from "../components/HR/HR";
import ContactForm from "../components/ContactForm/ContactForm";
import SocialNav from "../components/SocialNav/SocialNav";
import { localePaths } from "../i18n/i18n";

import {
  ContactMeWrapper,
  ContactMeHeader,
  ContactFormWrapper,
  TopHR,
  StyledH1,
  Subhead,
  Description,
  AltCopy,
  StyledLink,
  SayHiWrapper,
  SayHiTitle,
  SayHiDescription,
  SocialNavWrapper,
} from "../styles/contact.styles";

const ContactPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].contact;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].contact;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="contact"
        currentPath={props.location.pathname}
      />
      <SiteHeader locale={locale} twinPostURL={twinPostURL} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <ContactMeWrapper>
          <FormattedMessage id="contactPageTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <ContactMeHeader>
            <FormattedMessage id="contactPageSubhead">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
            <FormattedMessage id="contactPageDescription">
              {(txt) => <Description>{txt}</Description>}
            </FormattedMessage>
            <FormattedMessage id="contactPageWorkInfo">
              {(txt) => (
                <AltCopy>
                  {txt}{" "}
                  <StyledLink href="mailto:info@danilucaci.com">info@danilucaci.com</StyledLink>
                </AltCopy>
              )}
            </FormattedMessage>
            <SocialNavWrapper>
              <SocialNav />
            </SocialNavWrapper>
          </ContactMeHeader>
          <ContactFormWrapper>
            <TopHR />
            <ContactForm locale={locale} />
          </ContactFormWrapper>
          <SayHiWrapper>
            <HR />
            <FormattedMessage id="contactPageOtherTitle">
              {(txt) => <SayHiTitle>{txt}</SayHiTitle>}
            </FormattedMessage>
            <FormattedMessage id="contactPageOtherDescription">
              {(txt) => (
                <SayHiDescription>
                  {txt}
                  <FormattedMessage id="contactPageOtherDescriptionLink">
                    {(txt2) => (
                      <StyledLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/danilucaci"
                      >
                        {txt2}
                      </StyledLink>
                    )}
                  </FormattedMessage>
                </SayHiDescription>
              )}
            </FormattedMessage>
          </SayHiWrapper>
        </ContactMeWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

ContactPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactPage;
