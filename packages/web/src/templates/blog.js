import React, { useContext } from "react";
import { shape, string, number, arrayOf, bool } from "prop-types";
import { graphql } from "gatsby";
import { useIntl } from "react-intl";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Tags from "../components/Tags";
import Pagination from "../components/Pagination";
import Article from "../components/Article";
import ErrorBoundary from "../components/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop";
import { Col, Row } from "../components/Grid";
import { localePaths } from "../i18n";

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

  const intl = useIntl();

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
                <BlogTitle as="h1">
                  {intl.formatMessage({ id: "blog.title" })}
                </BlogTitle>
                <TagsWrapper>
                  <TagsTitle as="h2">
                    {intl.formatMessage({ id: "blog.explore" })}
                  </TagsTitle>
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
    locale: string.isRequired,
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
    }).isRequired,
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

BlogPage.defaultProps = {
  pageContext: {
    nextPath: null,
    prevPath: null,
  },
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
