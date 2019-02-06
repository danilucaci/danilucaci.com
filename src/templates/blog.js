import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import intlMessages from "../i18n/i18n";
import { SectionHeader } from "../components/Headings/Headings";

const BlogWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};
  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  margin-bottom: ${theme.spacing.row.s};
  ${mediaMin.m`
    margin-bottom: ${theme.spacing.row.m};
  `};
  ${mediaMin.l`
    margin-bottom: ${theme.spacing.row.xl};
  `};
`;

const BlogHeader = styled.header`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const BlogTitle = styled.h2`
  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.xs`
  font-size: ${theme.fontSizes.h2};
  line-height: ${theme.lineHeights.h2};
`}
`;

const TagsWrapper = styled.div`
  margin-top: ${rem(16)};
`;

const BlogPage = (props) => {
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edges,
    locale,
  } = props.pageContext;

  let allTags = props.data.allMarkdownRemark.tags.map((tag) => tag.fieldValue);

  const paginationPageLabels = {
    es: "/page/",
    en: "/pagina/",
  };

  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL =
      "/es" + paginationPathPrefix + paginationPageLabels[locale] + currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = "/es" + paginationPathPrefix;
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL =
      paginationPathPrefix + paginationPageLabels[locale] + currentPage;
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = paginationPathPrefix;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SiteHeader
        twinPostURL={twinPostURL}
        locale={locale}
        currentPath={props.location.pathname}
      />
      <Main role="main" id="main">
        <BlogWrapper>
          <SEO
            locale={locale}
            currentPage="blog"
            currentPath={props.location.pathname}
          />
          <BlogHeader>
            <FormattedMessage id="blogTitle">
              {(txt) => <BlogTitle as="h1">{txt}</BlogTitle>}
            </FormattedMessage>
            <TagsWrapper>
              <FormattedMessage id="blogExplore">
                {(txt) => <SectionHeader>{txt}</SectionHeader>}
              </FormattedMessage>
              <Tags tags={allTags} />
            </TagsWrapper>
          </BlogHeader>
          <PostListing edges={edges} />
          {totalPagesInBlog > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPagesInBlog}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
              locale={locale}
            />
          )}
        </BlogWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

BlogPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    nextPath: PropTypes.string,
    prevPath: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalCountBlog: PropTypes.number.isRequired,
    totalPagesInBlog: PropTypes.number.isRequired,
    paginationPathPrefix: PropTypes.string.isRequired,
    edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }),
};

export default BlogPage;

export const pageQuery = graphql`
  query allTagsInBlog {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { posted: { eq: true }, category: { eq: "blog" } }
      }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
