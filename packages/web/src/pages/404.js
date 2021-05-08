import React, { useContext } from "react";
import { shape, string } from "prop-types";
import { useIntl } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Main from "../components/Main";
import LocaleLink from "../components/LocaleLink";
import ErrorBoundary from "../components/ErrorBoundary";

import {
  NotFoundRow,
  StyledH1,
  Subtitle,
  StyledCopy,
  StyledHR,
} from "../styles/404.styles";
import { Col } from "../components/Grid";
import LocaleContext from "../i18n/LocaleContext";

function NotFoundPage({ location }) {
  const { locale } = useContext(LocaleContext);
  const intl = useIntl();

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
              <StyledH1>
                {intl.formatMessage({ id: "not.found.title" })}
              </StyledH1>
              <Subtitle>
                {intl.formatMessage({ id: "not.found.subtitle" })}
              </Subtitle>
              <StyledHR />
              <StyledCopy>
                {intl.formatMessage({ id: "not.found.copy.1" })}
              </StyledCopy>

              <StyledCopy>
                {intl.formatMessage({ id: "not.found.copy.2" })}{" "}
                <a href="mailto:info@danilucaci.com">info@danilucaci.com</a>
                <span> {intl.formatMessage({ id: "not.found.copy.3" })}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/danilucaci"
                >
                  @danilucaci
                </a>
              </StyledCopy>
              <LocaleLink to="/">
                {intl.formatMessage({ id: "thanks.go.home" })}
              </LocaleLink>
            </Col>
          </NotFoundRow>
        </Main>
      </Layout>
    </ErrorBoundary>
  );
}

NotFoundPage.propTypes = {
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
