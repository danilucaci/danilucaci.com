import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import LocaleLink from "../components/LocaleLink/LocaleLink";
import { localePaths } from "../i18n/i18n";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  StyledThanksPage,
  StyledH1,
  ThanksCopy,
  ThanksAgainCopy,
  Subtitle,
  StyledHR,
} from "../styles/thanks.styles";

import { GridCol } from "../components/Grid/Grid";

const ThanksPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = localePaths[locale].thanks;

  if (locale === "en") {
    twinPostURL = localePaths["es"].thanks;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].thanks;
  }

  return (
    <ErrorBoundary>
      <Layout location={props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="thanks"
          currentPath={props.location.pathname}
        />
        <SiteHeader
          twinPostURL={twinPostURL}
          locale={locale}
          currentPath={props.location.pathname}
        />
        <Main role="main">
          <StyledThanksPage padded>
            <GridCol>
              <FormattedMessage id="thanks.title">
                {(txt) => <StyledH1>{txt}</StyledH1>}
              </FormattedMessage>
              <FormattedMessage id="thanks.subtitle">
                {(txt) => <Subtitle>{txt}</Subtitle>}
              </FormattedMessage>
              <StyledHR />
              <FormattedMessage id="thanks.copy">
                {(txt) => <ThanksCopy>{txt}</ThanksCopy>}
              </FormattedMessage>

              <FormattedMessage id="thanks.subcopy.1">
                {(txt) => (
                  <ThanksCopy>
                    {txt}{" "}
                    <a href={`mailto:${localePaths[locale].email}`}>
                      {localePaths[locale].email}
                    </a>
                    <FormattedMessage id="thanks.subcopy.2">
                      {(txt2) => <> {txt2}</>}
                    </FormattedMessage>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/danilucaci"
                    >
                      @danilucaci
                    </a>
                  </ThanksCopy>
                )}
              </FormattedMessage>
              <FormattedMessage id="thanks.subcopy.3">
                {(txt) => <ThanksAgainCopy> {txt}</ThanksAgainCopy>}
              </FormattedMessage>
              <FormattedMessage id="thanks.go.home">
                {(txt) => <LocaleLink to="/">{txt}</LocaleLink>}
              </FormattedMessage>
            </GridCol>
          </StyledThanksPage>
        </Main>
        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
        />
      </Layout>
    </ErrorBoundary>
  );
};

ThanksPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThanksPage;
