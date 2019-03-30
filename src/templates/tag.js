import React from "react";
import PropTypes from "prop-types";
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

import { TagWrapper, TagHeader, TagTitleWrapper, TagTitle, OtherTagsWrapper } from "./styles/tag";

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

  let allTags = props.data.allMarkdownRemark.tags.map((tagItem) => tagItem.fieldValue);

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
    twinPostURL = (paginationPathPrefix + localePaths["en"].paginationName + currentPage).slice(4);
  } else if (locale === "es" && currentPage === 1) {
    twinPostURL = (localePaths["en"].siteLocalePrefix + paginationPathPrefix).slice(4);
  }

  return (
    <Layout location={props.location} locale={locale}>
      <SEO
        locale={locale}
        twinPostURL={twinPostURL}
        currentPage="tags"
        currentPath={props.location.pathname}
      />
      <SiteHeader locale={locale} twinPostURL={twinPostURL} currentPath={props.location.pathname} />
      <Main role="main" id="main">
        <TagWrapper>
          <TagHeader>
            <TagTitleWrapper>
              <h1>
                <FormattedMessage id="tagListingHeader">
                  {(txt) => <SectionHeader>{txt}</SectionHeader>}
                </FormattedMessage>
                <TagTitle>#{tag}</TagTitle>
              </h1>
            </TagTitleWrapper>
            <OtherTagsWrapper>
              <FormattedMessage id="tagListingOther">
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
        </TagWrapper>
      </Main>
      <SiteFooter locale={locale} />
    </Layout>
  );
};

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    nextPath: PropTypes.string,
    prevPath: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    totalPagesInBlog: PropTypes.number.isRequired,
    paginationPathPrefix: PropTypes.string.isRequired,
    edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default TagPage;

export const pageQuery = graphql`
  query ALL_TAGS {
    allMarkdownRemark(
      limit: 200
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
