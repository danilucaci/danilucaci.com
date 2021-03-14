import React, { useContext } from "react";
import { shape, string } from "prop-types";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Main from "../components/Main/Main";
import LocaleLink from "../components/LocaleLink/LocaleLink";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import {
  NotFoundRow,
  StyledH1,
  Subtitle,
  StyledCopy,
  StyledHR,
} from "../styles/404.styles";
import { Col } from "../components/Grid/Grid";
import LocaleContext from "../i18n/LocaleContext";

const NotFoundPage = ({ location }) => {
  const { locale } = useContext(LocaleContext);

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/404";
  } else if (locale === "es") {
    twinPostURL = "/404";
  }

  return (
    <ErrorBoundary>
      <Layout location={location} twinPostURL={twinPostURL}>
        <SEO
          twinPostURL={twinPostURL}
          currentPage="notFound"
          currentPath={location.pathname}
        />

        <Main>
          <NotFoundRow mb col8>
            <Col>
              <FormattedMessage id="not.found.title">
                {(txt) => <StyledH1>{txt}</StyledH1>}
              </FormattedMessage>
              <FormattedMessage id="not.found.subtitle">
                {(txt) => <Subtitle>{txt}</Subtitle>}
              </FormattedMessage>
              <StyledHR />
              <FormattedMessage id="not.found.copy.1">
                {(txt) => <StyledCopy>{txt}</StyledCopy>}
              </FormattedMessage>
              <FormattedMessage id="not.found.copy.2">
                {(txt) => (
                  <StyledCopy>
                    {txt}{" "}
                    <a href="mailto:info@danilucaci.com">info@danilucaci.com</a>
                    <FormattedMessage id="not.found.copy.3">
                      {(txt2) => <span> {txt2}</span>}
                    </FormattedMessage>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/danilucaci"
                    >
                      @danilucaci
                    </a>
                  </StyledCopy>
                )}
              </FormattedMessage>
              <FormattedMessage id="thanks.go.home">
                {(txt) => <LocaleLink to="/">{txt}</LocaleLink>}
              </FormattedMessage>
            </Col>
          </NotFoundRow>
        </Main>
      </Layout>
    </ErrorBoundary>
  );
};

NotFoundPage.propTypes = {
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default NotFoundPage;