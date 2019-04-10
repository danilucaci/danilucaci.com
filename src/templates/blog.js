import React from "react";
import { shape, string, number, object, arrayOf } from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import { SectionHeader } from "../components/Headings/Headings";

import { localePaths } from "../i18n/i18n";

import { BlogWrapper, BlogHeader, BlogTitle, TagsWrapper } from "../styles/blog.styles";

function BlogPage(props) {
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edges,
    locale,
  } = props.pageContext;

  const allTags = props.data.allMarkdownRemark.tags.map((tag) => tag.fieldValue);
  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL = localePaths["es"].blog + localePaths["es"].paginationName + currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = localePaths["es"].blog;
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL = localePaths["en"].blog + localePaths["en"].paginationName + currentPage;
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = localePaths["en"].blog;
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="blog"
        currentPath={props.location.pathname}
        prevPath={prevPath}
        nextPath={nextPath}
      />
      <SiteHeader twinPostURL={twinPostURL} locale={locale} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <BlogWrapper>
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
}

BlogPage.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
    nextPath: string,
    prevPath: string,
    currentPage: number.isRequired,
    totalCountBlog: number.isRequired,
    totalPagesInBlog: number.isRequired,
    paginationPathPrefix: string.isRequired,
    edges: arrayOf(object).isRequired,
  }).isRequired,
  data: shape({
    allMarkdownRemark: shape({
      tags: arrayOf(object).isRequired,
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  query ALL_TAGS_IN_BLOG {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { posted: { eq: true }, category: { eq: "blog" } } }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
