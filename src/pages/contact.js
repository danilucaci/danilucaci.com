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
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { GridCol } from "../components/Grid/Grid";
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

const ContactPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].contact;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].contact;
  }

  return (
    <ErrorBoundary>
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
          expand
        />
        <Main role="main">
          <ContactPageRow bottomPad>
            <GridCol xl={6}>
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
                      onClick={sendGAEvent(
                        "Contact Page",
                        "Clicked Email Link",
                      )}
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
                            onClick={sendGAEvent(
                              "Contact Page",
                              "Clicked Send a Tweet Link",
                            )}
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
            </GridCol>
            <GridCol xl={6}>
              <FormHr />
              <ContactForm locale={locale} />
            </GridCol>
          </ContactPageRow>
        </Main>
        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
          expand
        />
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
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
