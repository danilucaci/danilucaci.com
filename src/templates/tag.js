import React from "react";
import { string, number, arrayOf, object, shape } from "prop-types";
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
import { GridCol } from "../components/Grid/Grid";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import useLightBackground from "../hooks/useLightBackground";

import { localePaths } from "../i18n/i18n";

import {
  TagWrapper,
  TagHeader,
  TagTitleWrapper,
  TagTitle,
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

  useLightBackground();

  return (
    <ErrorBoundary>
      <Layout location={props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          currentPage="tags"
          currentPath={props.location.pathname}
        />
        <SiteHeader
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={props.location.pathname}
        />
        <Main role="main">
          <TagWrapper>
            <GridCol>
              <TagHeader>
                <TagTitleWrapper>
                  <h1>
                    <FormattedMessage id="tag.listing.header">
                      {(txt) => <SectionHeader>{txt}</SectionHeader>}
                    </FormattedMessage>
                    <TagTitle>#{tag}</TagTitle>
                  </h1>
                </TagTitleWrapper>
                <OtherTagsWrapper>
                  <FormattedMessage id="tag.listing.other">
                    {(txt) => <SectionHeader>{txt}</SectionHeader>}
                  </FormattedMessage>
                  <Tags tags={allTags} />
                </OtherTagsWrapper>
              </TagHeader>
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
            </GridCol>
          </TagWrapper>
        </Main>
        <SiteFooter locale={locale} />
      </Layout>
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
