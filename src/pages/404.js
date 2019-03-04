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
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

const StyledNotFound = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(64)};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.m`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-top: ${rem(40)};
    margin-bottom: ${rem(80)};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(56)};
    margin-bottom: ${rem(144)};
  `};

  & a {
    display: inline;
    white-space: nowrap;
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
  }
`;

const StyledH1 = styled.h1`
  display: block;
  text-align: center;
  width: 100%;
  margin-bottom: ${rem(16)};
`;

const Subhead = styled.p`
  font-size: ${theme.fontSizes.subheads};
  line-height: ${theme.lineHeights.subheads};
  margin-bottom: ${rem(32)};
  text-align: center;

  ${mediaMin.s`
  font-size: ${theme.fontSizes.subhead};
  line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledCopy = styled(Copy)`
  text-align: center;
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
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
      <SiteHeader
        twinPostURL={twinPostURL}
        locale={locale}
        currentPath={props.location.pathname}
      />
      <Main role="main" id="main">
        <StyledNotFound>
          <FormattedMessage id="noutFoundTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="noutFoundSubTitle">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <FormattedMessage id="noutFoundSubCopy1">
            {(txt) => <StyledCopy>{txt}</StyledCopy>}
          </FormattedMessage>
          <FormattedMessage id="noutFoundSubCopy2">
            {(txt) => (
              <StyledCopy>
                {txt}{" "}
                <a href="mailto:info@danilucaci.com">info@danilucaci.com</a>
                <FormattedMessage id="noutFoundSubCopy3">
                  {(txt) => <span> {txt}</span>}
                </FormattedMessage>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/danilucaci"
                >
                  @danilucaci
                </a>
              </StyledCopy>
            )}
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
  }),
};

export default NotFoundPage;
