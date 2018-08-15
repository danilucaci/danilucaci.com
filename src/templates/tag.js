import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { theme, mediaMin, rem } from "../theme/globalStyles";
import config from "../../data/SiteConfig";

import PostListing from "../components/PostListing/PostListing";
import { H1, H3, H4 } from "../components/Headings/Headings";
import Tags from "../components/Tags/Tags";
import Collapsible from "../components/Collapsible/Collapsible";
import Pagination from "../components/Pagination/Pagination";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${rem(16)};

  ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
  `};
`;

const Subhead = styled(H4)`
  color: ${theme.colors.dark700};
  font-size: ${theme.fontSizes.sectionHeader};
  line-height: ${theme.lineHeights.sectionHeader};
  letter-spacing: ${theme.letterSpacing.sectionHeader};
  text-transform: uppercase;
`;

const TagHeader = styled.header`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(32)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  ${mediaMin.l`
    margin-bottom: ${rem(128)};
  `};
`;

const TagHeading = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;

  ${mediaMin.l`
    margin-right: ${rem(12)};
    width: calc(50% - ${rem(12)});
  `};
`;

const TagsWrapper = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(50% - ${rem(12)});
  `};
`;

class TagPage extends Component {
  render() {
    const {
      currentPage,
      totalPagesInBlog,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edges,
      tag,
    } = this.props.pageContext;

    const frontMatterTags = this.props.data.allMarkdownRemark;
    let allTags = [];

    frontMatterTags.tags.forEach((tag) => {
      allTags.push(tag.fieldValue);
    });

    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={config.siteTitle} />
          <SEO />
          <TagHeader>
            <TagHeading>
              <Subhead>Blog posts found for:</Subhead>
              <StyledH1>#{tag}</StyledH1>
            </TagHeading>
            <TagsWrapper>
              <Collapsible title="Other tags from the blog" removePadding>
                <Tags tagsInPost={allTags} />
              </Collapsible>
            </TagsWrapper>
          </TagHeader>
          <PostListing edges={edges} />
          {totalPagesInBlog > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPagesInBlog={totalPagesInBlog}
              paginationPathPrefix={paginationPathPrefix}
              prevPath={prevPath}
              nextPath={nextPath}
            />
          )}
        </Wrapper>
      </Layout>
    );
  }
}

export default TagPage;

TagPage.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query allTags {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { posted: { eq: true } } }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
