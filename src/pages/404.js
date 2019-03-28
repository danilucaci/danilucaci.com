import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { Copy } from "../components/Copy/Copy";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import LocaleLink from "../components/LocaleLink/LocaleLink";
import { HR } from "../components/HR/HR";

const StyledNotFound = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(64)};

  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  /* iPhone X */
  @supports (padding: max(0px)) {
    & {
      padding-left: max(${theme.gutters.s}, env(safe-area-inset-left));
      padding-right: max(${theme.gutters.s}, env(safe-area-inset-right));
    }
  }

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};

    /* iPhone X */
    @supports (padding: max(0px)) {
      & {
        padding-left: max(${theme.gutters.m}, env(safe-area-inset-left));
        padding-right: max(${theme.gutters.m}, env(safe-area-inset-right));
      }
    }
  `};

  ${mediaMin.m`
    margin-top: ${rem(40)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(80)};
    margin-bottom: ${rem(144)};
  `};

  /* Mobile in ladscape */
  @media screen and (min-width: ${rem(480)}) and (min-height: ${rem(280)}) and (max-height: ${rem(560)}) and (orientation: landscape) {
    margin-top: ${rem(24)};
    margin-bottom: ${rem(64)};
  }

  & a {
    display: inline;
    white-space: nowrap;
  }
`;

const StyledH1 = styled.h1`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;

const Subhead = styled.p`
  font-size: ${theme.fontSizes.subheadSCompact};
  line-height: ${theme.lineHeights.subheadSCompact};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subheadCompact};
    line-height: ${theme.lineHeights.subheadCompact};
    max-width: 90%;
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(16)};
`;

const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};
`;

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
