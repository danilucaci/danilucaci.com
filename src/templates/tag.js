import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";
import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import intlMessages from "../i18n/i18n";
import { SectionHeader } from "../components/Headings/Headings";

const TagWrapper = styled.section`
  max-width: ${theme.contain.wrapper.col8};
  margin: 0 auto;

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

const TagHeader = styled.header`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.l`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const TagTitleWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(42% - ${rem(12)});
  `};
`;

const TagTitle = styled.span`
  color: ${theme.colors.dark900};
  display: block;

  font-weight: 700;
  font-style: normal;

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-size: ${theme.fontSizes.h2s};
  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `}
`;

const OtherTagsWrapper = styled.div`
  margin-top: ${rem(24)};

  ${mediaMin.l`
    margin-top: 0;
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(58% - ${rem(12)});
  `};
`;

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
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }),
};

export default TagPage;

export const pageQuery = graphql`
  query allTags {
    allMarkdownRemark(
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
