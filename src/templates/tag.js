import React from "react";
import { string, number, arrayOf, object, shape } from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import Tags from "../components/Tags/Tags";
import Article from "../components/Article/Article";
import Pagination from "../components/Pagination/Pagination";
import { GridCol, GridRow } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { localePaths } from "../i18n/i18n";

import {
  PageBackground,
  PostsBackground,
  PostsRow,
  TagFoundWrapper,
  TagFoundTitle,
  TagsSubhead,
  OtherTagsWrapper,
} from "../styles/tag.styles";

const TagPage = (props) => {
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edges,
    tag,
    locale,
  } = props.pageContext;

  let allTags = props.data.allMdx.tags.map((tagItem) => tagItem.fieldValue);

  let twinPostURL = "";

  if (locale === "en" && currentPage > 1) {
    twinPostURL =
      localePaths["es"].siteLocalePrefix +
      paginationPathPrefix +
      localePaths["es"].paginationName +
      currentPage;
  } else if (locale === "en" && currentPage === 1) {
    twinPostURL = localePaths["es"].siteLocalePrefix + paginationPathPrefix;
  }

  if (locale === "es" && currentPage > 1) {
    twinPostURL = (
      paginationPathPrefix +
      localePaths["en"].paginationName +
      currentPage
    ).slice(4);
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = (
      localePaths["en"].siteLocalePrefix + paginationPathPrefix
    ).slice(4);
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
          currentPage="tags"
          currentPath={props.location.pathname}
        />
        <PageBackground>
          <SiteHeader
            locale={locale}
            twinPostURL={twinPostURL}
            currentPath={props.location.pathname}
          />
          <Main role="main">
            <GridRow as="header" col8 bottomPad>
              <GridCol>
                <TagFoundWrapper>
                  <h1>
                    <FormattedMessage id="tag.listing.header">
                      {(txt) => <TagsSubhead as="span">{txt}</TagsSubhead>}
                    </FormattedMessage>
                    <TagFoundTitle>#{tag}</TagFoundTitle>
                  </h1>
                </TagFoundWrapper>
                <OtherTagsWrapper>
                  <FormattedMessage id="tag.listing.other">
                    {(txt) => <TagsSubhead>{txt}</TagsSubhead>}
                  </FormattedMessage>
                  <Tags tags={allTags} />
                </OtherTagsWrapper>
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
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
};

TagPage.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
    nextPath: string,
    prevPath: string,
    currentPage: number.isRequired,
    totalCount: number.isRequired,
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

export default TagPage;

export const pageQuery = graphql`
  query ALL_TAGS {
    allMdx(
      limit: 200
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
