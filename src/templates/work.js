import React from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import config from "../../data/SiteConfig";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
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
`;

const WorkHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

const WorkPage = (props) => {
  const {
    currentPage,
    totalPagesInWork,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edgesWork,
    lang,
  } = props.pageContext;

  const workLocaleLabels = {
    es: "/work",
    en: "/trabajos",
  };

  const paginationPageLabels = {
    es: "/page/",
    en: "/pagina/",
  };

  let changeLanguage = "";

  if (lang === "en" && currentPage > 1) {
    changeLanguage =
      "/es" + workLocaleLabels[lang] + paginationPageLabels[lang] + currentPage;
  } else if (lang === "en" && currentPage === 1) {
    changeLanguage = "/es" + workLocaleLabels[lang];
  }

  if (lang === "es" && currentPage > 1) {
    changeLanguage =
      workLocaleLabels[lang] + paginationPageLabels[lang] + currentPage;
  } else if (lang === "es" && currentPage === 1) {
    changeLanguage = workLocaleLabels[lang];
  }

  return (
    <Layout location={props.location} locale={lang}>
      <SiteHeader locale={lang} />
      <Main role="main">
        <Wrapper>
          <Helmet title={`${intlMessages[lang].meta.workMetaTitle}`} />
          <SEO />
          <WorkHeader>
            <FormattedMessage id="caseStudiesHeader">
              {(txt) => <h1>{txt}</h1>}
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
              lang={lang}
            />
          )}
        </Wrapper>
      </Main>
      <SiteFooter changeLanguage={changeLanguage} />
    </Layout>
  );
};

export default WorkPage;
