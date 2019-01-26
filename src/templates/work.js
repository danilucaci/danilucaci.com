import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import config from "../../data/SiteConfig";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import CaseStudyListing from "../components/CaseStudyListing/CaseStudyListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";

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

  return (
    <Layout location={props.location} locale={lang}>
      <SiteHeader />
      <Main role="main">
        <Wrapper>
          <Helmet title={`Work || ${config.siteTitle}`} />
          <SEO />
          <WorkHeader>
            <h1>Case Studies</h1>
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
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;
