import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import LocaleLink from "../components/LocaleLink/LocaleLink";

import { StyledNotFound, StyledH1, Subhead, StyledCopy, StyledHR } from "./styles/404";

const NotFoundPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/404";
  } else if (locale === "es") {
    twinPostURL = "/404";
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="notFound"
        currentPath={props.location.pathname}
      />
      <SiteHeader twinPostURL={twinPostURL} locale={locale} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <StyledNotFound>
          <FormattedMessage id="noutFoundTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="noutFoundSubTitle">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <StyledHR />
          <FormattedMessage id="noutFoundSubCopy1">
            {(txt) => <StyledCopy>{txt}</StyledCopy>}
          </FormattedMessage>
          <FormattedMessage id="noutFoundSubCopy2">
            {(txt) => (
              <StyledCopy>
                {txt} <a href="mailto:info@danilucaci.com">info@danilucaci.com</a>
                <FormattedMessage id="noutFoundSubCopy3">
                  {(txt2) => <span> {txt2}</span>}
                </FormattedMessage>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/danilucaci">
                  @danilucaci
                </a>
              </StyledCopy>
            )}
          </FormattedMessage>
          <FormattedMessage id="thanksGoHome">
            {(txt) => <LocaleLink to="/">{txt}</LocaleLink>}
          </FormattedMessage>
        </StyledNotFound>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
