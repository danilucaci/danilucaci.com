import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import config from "../../data/SiteConfig";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";

import Layout from "../components/Layout";
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
  max-width: ${theme.contain.Category};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

class WorkPage extends Component {
  render() {
    const {
      currentPage,
      totalPagesInWork,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edgesWork,
    } = this.props.pageContext;

    return (
      <Layout location={this.props.location}>
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
              totalPagesInWork={totalPagesInWork}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
            />
          )}
        </Wrapper>
      </Layout>
    );
  }
}

export default WorkPage;
