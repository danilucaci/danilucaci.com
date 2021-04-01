import React, { useContext } from "react";
import { string, number, arrayOf, bool, shape } from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Tags from "../components/Tags";
import Article from "../components/Article";
import Pagination from "../components/Pagination";
import { Col, Row } from "../components/Grid";
import ErrorBoundary from "../components/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop";
import { localePaths } from "../i18n";

import {
  HeaderBackground,
  PostsRow,
  TagFoundWrapper,
  TagFoundTitle,
  TagsSubhead,
  OtherTagsWrapper,
} from "../styles/tag.styles";
import LocaleContext from "../i18n/LocaleContext";

const TagPage = ({ pageContext, location, data }) => {
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edges,
    tag,
  } = pageContext;

  const { locale } = useContext(LocaleContext);

  let allTags = data.allMdx.tags.map((tagItem) => tagItem.fieldValue);

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
      <Layout location={location} twinPostURL={twinPostURL} colorHeader>
        <SEO
          twinPostURL={twinPostURL}
          currentPage="tags"
          currentPath={location.pathname}
        />

        <Main>
          <HeaderBackground>
            <Row as="div" col8 pb>
              <Col>
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
                    {(txt) => <TagsSubhead as="h2">{txt}</TagsSubhead>}
                  </FormattedMessage>
                  <Tags tagsFor="blog" tags={allTags} />
                </OtherTagsWrapper>
              </Col>
            </Row>
          </HeaderBackground>
          <PostsRow
            padded
            col8
            aria-label={locale === "en" ? "Blog posts" : "Artículos del blog"}
          >
            <Col>
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
                />
              )}
            </Col>
          </PostsRow>
        </Main>
      </Layout>
      <ScrollToTop />
    </ErrorBoundary>
  );
};

TagPage.propTypes = {
  pageContext: shape({
    nextPath: string,
    prevPath: string,
    currentPage: number.isRequired,
    totalCount: number.isRequired,
    totalPagesInBlog: number.isRequired,
    paginationPathPrefix: string.isRequired,
    edges: arrayOf(
      shape({
        fields: shape({
          slug: string.isRequired,
        }),
        timeToRead: number.isRequired,
        frontmatter: shape({
          category: string.isRequired,
          locale: string.isRequired,
          date: string.isRequired,
          posted: bool.isRequired,
          snippet: string.isRequired,
          tags: arrayOf(string).isRequired,
          title: string.isRequired,
          twinPost: string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }),
  data: shape({
    allMdx: shape({
      tags: arrayOf(
        shape({
          fieldValue: string.isRequired,
          totalCount: number.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

TagPage.defaultProps = {
  pageContext: {
    nextPath: null,
    prevPath: null,
  },
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
