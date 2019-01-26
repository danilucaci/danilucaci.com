import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";

const BlogWrapper = styled.div`
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const BlogHeader = styled.header`
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};
`;

const BlogInfo = styled.div`
  ${mediaMin.l``};
`;

const TagsWrapper = styled.div`
  margin-top: ${rem(16)};
`;

const BlogTitle = styled.h2`
font-size: ${theme.fontSizes.h2s};

${mediaMin.xs`
  font-size: ${theme.fontSizes.h2};
`}

line-height: ${theme.lineHeights.h2s};

${mediaMin.xs`
  line-height: ${theme.lineHeights.h2};
`}`;

const TagsTitle = styled.h4``;

class BlogPage extends Component {
  render() {
    const {
      currentPage,
      totalPagesInBlog,
      paginationPathPrefix,
      prevPath,
      nextPath,
      edges,
    } = this.props.pageContext;

    const frontMatterTags = this.props.data.allMarkdownRemark;
    let allTags = [];

    frontMatterTags.tags.forEach((tag) => {
      allTags.push(tag.fieldValue);
    });

    return (
      <Layout
        locale={this.props.pageContext.lang}
        location={this.props.location}
      >
        <SiteHeader />
        <Main role="main">
          <BlogWrapper>
            <Helmet
              title={`danilucaci.com Personal Blog - ${config.siteTitle}`}
            />
            <SEO />
            <BlogHeader>
              <BlogInfo>
                <BlogTitle as="h1">My thoughts on UX, UI and Code.</BlogTitle>
              </BlogInfo>
              <TagsWrapper>
                {/* <CollapsibleContainer
                  onClick={this.openBlogExploreTags}
                  contentVisible={this.state.blogExploreTagsOpen}
                >
                  <StyledIcon animate={this.state.blogExploreTagsOpen}>
                    <use xlinkHref="#down" />
                  </StyledIcon> */}
                <TagsTitle>Explore by tags</TagsTitle>
                {/* <BlogExploreTagsContent
                    showContent={this.state.blogExploreTagsOpen}
                  > */}
                <Tags tagsInPost={allTags} />
                {/* </BlogExploreTagsContent>
                </CollapsibleContainer> */}
              </TagsWrapper>
            </BlogHeader>
            <PostListing edges={edges} />
            {totalPagesInBlog > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPagesInBlog}
                paginationPathPrefix={paginationPathPrefix}
                prevPath={prevPath}
                nextPath={nextPath}
              />
            )}
          </BlogWrapper>
        </Main>
        <SiteFooter />
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query allTagsInBlog {
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
