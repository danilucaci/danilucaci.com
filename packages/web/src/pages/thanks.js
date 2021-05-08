import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Main from "../components/Main";
import LocaleLink from "../components/LocaleLink";
import { localePaths } from "../i18n";
import ErrorBoundary from "../components/ErrorBoundary";

import {
  ThanksPageRow,
  StyledH1,
  ThanksCopy,
  Subtitle,
  StyledHR,
} from "../styles/thanks.styles";

import { Col } from "../components/Grid";
import LocaleContext from "../i18n/LocaleContext";

function ThanksPage({ location }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

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
              <StyledH1>{intl.formatMessage({ id: "thanks.title" })}</StyledH1>
              <Subtitle>
                {intl.formatMessage({ id: "thanks.subtitle" })}
              </Subtitle>
              <StyledHR />
              <ThanksCopy>
                {intl.formatMessage({ id: "thanks.copy" })}
              </ThanksCopy>
              <ThanksCopy>
                {intl.formatMessage({ id: "thanks.subcopy.1" })}
                <a href={`mailto:${localePaths[locale].email}`}>
                  {localePaths[locale].email}
                </a>
                {intl.formatMessage({ id: "thanks.subcopy.2" })}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/danilucaci"
                >
                  @danilucaci
                </a>
              </ThanksCopy>
              <LocaleLink to="/">
                {intl.formatMessage({ id: "thanks.go.home" })}
              </LocaleLink>
            </Col>
          </ThanksPageRow>
        </Main>
      </Layout>
    </ErrorBoundary>
  );
}

ThanksPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThanksPage;
