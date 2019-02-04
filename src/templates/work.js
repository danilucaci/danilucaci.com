import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import { theme, mediaMin, rem } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import { Copy } from "../components/Copy/Copy";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import CaseStudyListing from "../components/CaseStudyListing/CaseStudyListing";
import Pagination from "../components/Pagination/Pagination";
import intlMessages from "../i18n/i18n";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  ${mediaMin.xl`
    margin-top: ${rem(24)};
  `};
`;

const WorkHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

const Subhead = styled(Copy)`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.subheadS};
  line-height: ${theme.lineHeights.subheadS};

  ${mediaMin.s`
    font-size: ${theme.fontSizes.subhead};
    line-height: ${theme.lineHeights.subhead};
  `};
`;

const WorkPage = (props) => {
  const {
    currentPage,
    totalPagesInWork,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edgesWork,
    locale,
  } = props.pageContext;

  const workLocaleLabels = {
    es: "/work",
    en: "/trabajos",
  };

  const paginationPageLabels = {
    es: "/page/",
    en: "/pagina/",
  };

  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL =
      "/es" +
      workLocaleLabels[locale] +
      paginationPageLabels[locale] +
      currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = "/es" + workLocaleLabels[locale];
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL =
      workLocaleLabels[locale] + paginationPageLabels[locale] + currentPage;
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = workLocaleLabels[locale];
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SiteHeader
        locale={locale}
        twinPostURL={twinPostURL}
        currentPath={props.location.pathname}
      />
      <Main role="main">
        <Wrapper>
          <Helmet title={`${intlMessages[locale].meta.workMetaTitle}`} />
          <SEO />
          <WorkHeader>
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <h1>{txt}</h1>}
            </FormattedMessage>
            <FormattedMessage id="caseStudiesDescription">
              {(txt) => <Subhead>{txt}</Subhead>}
            </FormattedMessage>
          </WorkHeader>
          <CaseStudyListing edges={edgesWork} />
          {totalPagesInWork > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPagesInWork}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
              locale={locale}
            />
          )}
        </Wrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

WorkPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    nextPath: PropTypes.string,
    prevPath: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalCountWork: PropTypes.number.isRequired,
    totalPagesInWork: PropTypes.number.isRequired,
    paginationPathPrefix: PropTypes.string.isRequired,
    edgesWork: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }),
};

export default WorkPage;
