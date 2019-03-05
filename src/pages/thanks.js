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
import LocaleLink from "../components/LocaleLink/LocaleLink";

const StyledThanksPage = styled.section`
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
    text-align: center;
    display: block;

    &:hover {
      background-color: transparent;
    }
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
  margin-bottom: ${rem(16)};
  text-align: center;

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const StyledCopy = styled(Copy)`
  text-align: center;
  margin-bottom: ${rem(16)};
`;

const ThanksPage = (props) => {
  let locale = props.pageContext.locale;
  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/gracias";
  } else if (locale === "es") {
    twinPostURL = "/thanks";
  }

  return (
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
      <Main role="main" id="main">
        <StyledThanksPage>
          <FormattedMessage id="thanksTitle">
            {(txt) => <StyledH1>{txt}</StyledH1>}
          </FormattedMessage>
          <FormattedMessage id="thanksSubTitle">
            {(txt) => <Subhead>{txt}</Subhead>}
          </FormattedMessage>
          <FormattedMessage id="thanksCopy">
            {(txt) => <StyledCopy to="/">{txt}</StyledCopy>}
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
  }),
};

export default ThanksPage;
