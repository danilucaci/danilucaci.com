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
import { localePaths } from "../i18n/i18n";
import { HR } from "../components/HR/HR";

const StyledThanksPage = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(24)};
  margin-bottom: ${rem(64)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(64)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(80)};
    margin-bottom: ${rem(144)};
  `};

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

const ThanksCopy = styled(Copy)`
  margin-bottom: ${rem(32)};

  ${mediaMin.m`
      max-width: 84%;
  `};
`;

const ThanksAgainCopy = styled(Copy)`
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

const Subhead = styled.p`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledHR = styled(HR)`
  display: block;
  width: 100%;
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
      max-width: 84%;
  `};
`;

const ThanksPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = localePaths[locale].thanks;

  if (locale === "en") {
    twinPostURL = localePaths["es"].thanks;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].thanks;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="thanks"
        currentPath={props.location.pathname}
      />
      <SiteHeader twinPostURL={twinPostURL} locale={locale} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <StyledThanksPage>
          <FormattedMessage id="thanksTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="thanksSubTitle">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <StyledHR />
          <FormattedMessage id="thanksCopy">
            {(txt) => <ThanksCopy>{txt}</ThanksCopy>}
          </FormattedMessage>

          <FormattedMessage id="thanksSubCopy1">
            {(txt) => (
              <ThanksCopy>
                {txt} <a href="mailto:info@danilucaci.com">info@danilucaci.com</a>
                <FormattedMessage id="thanksSubCopy2">
                  {(txt2) => <React.Fragment> {txt2}</React.Fragment>}
                </FormattedMessage>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/danilucaci">
                  @danilucaci
                </a>
              </ThanksCopy>
            )}
          </FormattedMessage>
          <FormattedMessage id="thanksSubCopy3">
            {(txt) => <ThanksAgainCopy> {txt}</ThanksAgainCopy>}
          </FormattedMessage>
          <FormattedMessage id="thanksGoHome">
            {(txt) => <LocaleLink to="/">{txt}</LocaleLink>}
          </FormattedMessage>
        </StyledThanksPage>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
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
