import React from "react";
import Helmet from "react-helmet";
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
import { SectionHeader } from "../components/Headings/Headings";
import intlMessages from "../i18n/i18n";

const TagWrapper = styled.div`
  max-width: ${theme.contain.blog};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledSectionHeader = styled(SectionHeader)``;

const PostsFor = styled.span`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.sectionHeader};
  line-height: ${theme.lineHeights.sectionHeader};
  letter-spacing: ${theme.letterSpacing.sectionHeader};
  text-transform: uppercase;

  display: block;
`;

const TagHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  ${mediaMin.l`
    margin-bottom: ${rem(128)};
  `};
`;

const TagTitleWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(50% - ${rem(12)});
  `};
`;

const TagTitle = styled.span`
  color: ${theme.colors.dark900};
  display: block;

  font-weight: 700;
  font-style: normal;
  letter-spacing: ${theme.letterSpacing.h2};

  .fonts-loaded & {
    font-family: ${theme.fonts.header};
  }

  font-size: ${theme.fontSizes.h2s};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
  `}

  line-height: ${theme.lineHeights.h2s};

  ${mediaMin.xs`
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
    width: calc(50% - ${rem(12)});
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
    lang,
  } = props.pageContext;

  const frontMatterTags = props.data.allMarkdownRemark;
  let allTags = [];

  frontMatterTags.tags.forEach((tag) => {
    allTags.push(tag.fieldValue);
  });

  return (
    <Layout location={props.location} locale={lang}>
      <Helmet title={`${intlMessages[lang].meta.tagListingMetaTitle}`} />
      <SEO />
      <SiteHeader />
      <Main role="main">
        <TagWrapper>
          <TagHeader>
            <TagTitleWrapper>
              <h1>
                <FormattedMessage id="tagListingHeader">
                  {(txt) => <PostsFor>{txt}</PostsFor>}
                </FormattedMessage>
                <TagTitle>#{tag}</TagTitle>
              </h1>
            </TagTitleWrapper>
            <OtherTagsWrapper>
              <FormattedMessage id="tagListingOther">
                {(txt) => <StyledSectionHeader>{txt}</StyledSectionHeader>}
              </FormattedMessage>
              <Tags tagsInPost={allTags} />
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
              lang={lang}
            />
          )}
        </TagWrapper>
      </Main>
      <SiteFooter />
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query allTags {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { posted: { eq: true }, category: { ne: "work" } }
      }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
