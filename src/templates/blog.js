import React from "react";
import { shape, string, number, object, arrayOf } from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import Article from "../components/Article/Article";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { GridCol, GridRow } from "../components/Grid/Grid";
import { localePaths } from "../i18n/i18n";

import {
  PageBackground,
  BlogTitle,
  PostsBackground,
  PostsRow,
  TagsTitle,
  TagsWrapper,
} from "../styles/blog.styles";

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

  const allTags = props.data.allMdx.tags.map((tag) => tag.fieldValue);
  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL =
      localePaths["es"].blog + localePaths["es"].paginationName + currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = localePaths["es"].blog;
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL =
      localePaths["en"].blog + localePaths["en"].paginationName + currentPage;
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = localePaths["en"].blog;
  }

  const postsList = edges.map((edge) => ({
    slug: edge.fields.slug,
    tags: edge.frontmatter.tags,
    title: edge.frontmatter.title,
    date: edge.frontmatter.date,
    timeToRead: edge.timeToRead,
  }));

  return (
    <ErrorBoundary>
      <Layout location={props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="blog"
          currentPath={props.location.pathname}
          prevPath={prevPath}
          nextPath={nextPath}
        />
        <PageBackground>
          <SiteHeader
            twinPostURL={twinPostURL}
            locale={locale}
            currentPath={props.location.pathname}
          />
          <Main role="main">
            <GridRow as="header" col8 bottomPad>
              <GridCol>
                <FormattedMessage id="blog.title">
                  {(txt) => <BlogTitle as="h1">{txt}</BlogTitle>}
                </FormattedMessage>
                <TagsWrapper>
                  <FormattedMessage id="blog.explore">
                    {(txt) => <TagsTitle>{txt}</TagsTitle>}
                  </FormattedMessage>
                  <Tags tags={allTags} />
                </TagsWrapper>
              </GridCol>
            </GridRow>
            <PostsBackground>
              <PostsRow as="div" padded col8>
                <GridCol>
                  {postsList.map((post) => (
                    <Article
                      key={post.title}
                      slug={post.slug}
                      tags={post.tags}
                      title={post.title}
                      date={post.date}
                      timeToRead={post.timeToRead}
                    />
                  ))}
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
                </GridCol>
              </PostsRow>
            </PostsBackground>
          </Main>
        </PageBackground>

        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
        />
        <ScrollToTop />
      </Layout>
    </ErrorBoundary>
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
    allMdx: shape({
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
    allMdx(
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
