import React, { useContext } from "react";
import { shape, string, number, object, arrayOf } from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import Article from "../components/Article/Article";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Col, Row } from "../components/Grid/Grid";
import { localePaths } from "../i18n/i18n";

import {
  HeaderBackground,
  BlogTitle,
  PostsRow,
  TagsTitle,
  TagsWrapper,
} from "../styles/blog.styles";
import LocaleContext from "../i18n/LocaleContext";

function BlogPage({ pageContext, location, data }) {
  const {
    currentPage,
    totalPagesInBlog,
    paginationPathPrefix,
    prevPath,
    nextPath,
    edges,
  } = pageContext;

  const { locale } = useContext(LocaleContext);

  const allTags = data.allMdx.tags.map((tag) => tag.fieldValue);
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
      <Layout location={location} twinPostURL={twinPostURL} colorHeader>
        <SEO
          twinPostURL={twinPostURL}
          currentPage="blog"
          currentPath={location.pathname}
          prevPath={prevPath}
          nextPath={nextPath}
        />

        <Main>
          <HeaderBackground>
            <Row as="div" col8 pb>
              <Col>
                <FormattedMessage id="blog.title">
                  {(txt) => <BlogTitle as="h1">{txt}</BlogTitle>}
                </FormattedMessage>
                <TagsWrapper>
                  <FormattedMessage id="blog.explore">
                    {(txt) => <TagsTitle as="h2">{txt}</TagsTitle>}
                  </FormattedMessage>
                  <Tags tagsFor="blog" tags={allTags} />
                </TagsWrapper>
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

        <ScrollToTop />
      </Layout>
    </ErrorBoundary>
  );
}

BlogPage.propTypes = {
  pageContext: shape({
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
