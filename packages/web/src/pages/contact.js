import React, { useContext } from "react";
import { shape, string } from "prop-types";
import { useIntl } from "react-intl";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";

import SocialNav from "../components/SocialNav";
import ErrorBoundary from "../components/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop";
import { Col } from "../components/Grid";
import { localePaths } from "../i18n";
import { sendContactPageEvent, gaEvents } from "../helpers/ga";

import {
  ContactPageRow,
  H1,
  Info,
  StyledLink,
  SayHiWrapper,
  SayHiDescription,
  SocialNavWrapper,
  StyledHR,
} from "../styles/contact.styles";
import LocaleContext from "../i18n/LocaleContext";

function ContactPage({ location }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

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
            <Col xl={8}>
              <H1>{intl.formatMessage({ id: "contact.page.title" })}</H1>
              <Info>{intl.formatMessage({ id: "contact.page.info" })}</Info>

              <SayHiWrapper>
                <SayHiDescription>
                  {intl.formatMessage({
                    id: "contact.page.other.description",
                  })}
                  <StyledLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/danilucaci"
                    onClick={() =>
                      sendContactPageEvent({
                        label:
                          gaEvents.contactPage.actions.contactLinks.labels
                            .twitter,
                      })
                    }
                  >
                    {intl.formatMessage({
                      id: "contact.page.other.description.link",
                    })}
                  </StyledLink>
                </SayHiDescription>
                <StyledHR />
                <SocialNavWrapper>
                  <SocialNav />
                </SocialNavWrapper>
              </SayHiWrapper>
            </Col>
          </ContactPageRow>
        </Main>
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
}

ContactPage.propTypes = {
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default ContactPage;
