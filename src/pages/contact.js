import React, { useContext } from "react";
import { shape, string } from "prop-types";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import { HR } from "../components/HR/HR";
import ContactForm from "../components/ContactForm/ContactForm";
import SocialNav from "../components/SocialNav/SocialNav";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Col } from "../components/Grid/Grid";
import { localePaths } from "../i18n/i18n";
import sendGAEvent from "../helpers/sendGAEvent";

import { Copy } from "../components/Copy/Copy";
import {
  ContactPageRow,
  FormHr,
  H1,
  Info,
  StyledLink,
  SayHiWrapper,
  SayHiTitle,
  SayHiDescription,
  SocialNavWrapper,
} from "../styles/contact.styles";
import LocaleContext from "../i18n/LocaleContext";

const ContactPage = ({ location }) => {
  const { locale } = useContext(LocaleContext);

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].contact;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].contact;
  }

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        twinPostURL={twinPostURL}
        expandHeaderAndFooter
      >
        <SEO
          twinPostURL={twinPostURL}
          currentPage="contact"
          currentPath={location.pathname}
        />

        <Main>
          <ContactPageRow
            pb
            aria-label={locale === "en" ? "contact me" : "contacto"}
          >
            <Col xl={6}>
              <FormattedMessage id="contact.page.title">
                {(txt) => <H1>{txt}</H1>}
              </FormattedMessage>
              <FormattedMessage id="contact.page.info">
                {(txt) => <Info>{txt}</Info>}
              </FormattedMessage>
              <FormattedMessage id="contact.page.work.info">
                {(txt) => (
                  <Copy>
                    {txt}{" "}
                    <StyledLink
                      href={`mailto:${localePaths[locale].email}`}
                      onClick={() =>
                        sendGAEvent("Contact Page", "Contact Links", "Email")
                      }
                    >
                      {localePaths[locale].email}
                    </StyledLink>
                  </Copy>
                )}
              </FormattedMessage>
              <SayHiWrapper>
                <HR />
                <FormattedMessage id="contact.page.other.title">
                  {(txt) => <SayHiTitle>{txt}</SayHiTitle>}
                </FormattedMessage>
                <FormattedMessage id="contact.page.other.description">
                  {(txt) => (
                    <SayHiDescription>
                      {txt}
                      <FormattedMessage id="contact.page.other.description.link">
                        {(txt2) => (
                          <StyledLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/danilucaci"
                            onClick={() =>
                              sendGAEvent(
                                "Contact Page",
                                "Contact Links",
                                "Tweeter",
                              )
                            }
                          >
                            {txt2}
                          </StyledLink>
                        )}
                      </FormattedMessage>
                    </SayHiDescription>
                  )}
                </FormattedMessage>
                <SocialNavWrapper>
                  <SocialNav />
                </SocialNavWrapper>
              </SayHiWrapper>
            </Col>
            <Col xl={6}>
              <FormHr />
              <ContactForm />
            </Col>
          </ContactPageRow>
        </Main>
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
};

ContactPage.propTypes = {
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default ContactPage;
