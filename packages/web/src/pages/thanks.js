import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Main from "../components/Main/Main";
import LocaleLink from "../components/LocaleLink/LocaleLink";
import { localePaths } from "../i18n/i18n";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  ThanksPageRow,
  StyledH1,
  ThanksCopy,
  Subtitle,
  StyledHR,
} from "../styles/thanks.styles";

import { Col } from "../components/Grid/Grid";
import LocaleContext from "../i18n/LocaleContext";

const ThanksPage = ({ location }) => {
  const { locale } = useContext(LocaleContext);

  let twinPostURL = localePaths[locale].thanks;

  if (locale === "en") {
    twinPostURL = localePaths["es"].thanks;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].thanks;
  }

  return (
    <ErrorBoundary>
      <Layout location={location} twinPostURL={twinPostURL}>
        <SEO
          twinPostURL={twinPostURL}
          currentPage="thanks"
          currentPath={location.pathname}
        />

        <Main>
          <ThanksPageRow mb col8>
            <Col>
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
                    {txt}
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
              <FormattedMessage id="thanks.go.home">
                {(txt) => <LocaleLink to="/">{txt}</LocaleLink>}
              </FormattedMessage>
            </Col>
          </ThanksPageRow>
        </Main>
      </Layout>
    </ErrorBoundary>
  );
};

ThanksPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThanksPage;
