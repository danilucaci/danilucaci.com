import React, { Component } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Layout from "../components/Layout";
import { theme, mediaMin, mediaMax, rem } from "../theme/globalStyles";

import PostListing from "../components/PostListing/PostListing";
import { Copy } from "../components/Copy/Copy";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";

import { H3 } from "../components/Headings/Headings";
import { Icon } from "../components/Icon/Icon";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
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
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(56)};
  color: ${theme.colors.dark900};

  ${mediaMin.s`
    margin-bottom: ${rem(88)};
  `};

  z-index: 5;
`;

const BlogInfo = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-right: ${rem(12)};
    width: calc(((100% / 8) * 5) - ${rem(12)});
  `};
`;

const BlogInfoItem = styled.div`
  margin-bottom: ${rem(16)};

  ${mediaMin.s`
    margin-bottom: ${rem(40)};
  `};

  ${mediaMin.m`
    margin-bottom: ${rem(24)};
  `};
`;

const TagsWrapper = styled.div`
  ${mediaMin.l`
    display: inline-block;
    vertical-align: top;
    margin-left: ${rem(12)};
    width: calc(((100% / 8) * 3) - ${rem(12)});
  `};
`;

const StyledTitle = styled(H3)`
  ${mediaMax.s`
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  `};
`;

const CollapsibleContainer = styled.div`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.default};

  padding: ${rem(14)} ${rem(16)};
  position: relative;

  &:focus {
    outline: 1px solid red;
  }

  width: 100%;
  height: 100%;

  ${mediaMin.s`
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  `};
`;

const CollapsibleContent = styled.div`
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.1s ease-out;
  will-change: transform, opacity, position;
  transform-origin: 0% 0%;
  overflow: hidden;
  position: absolute;
  padding-top: ${rem(16)};

  ${(props) =>
    props.showContent &&
    css`
      opacity: 1;
      transform: none;
      position: static;
      overflow: visible;
    `};

  ${mediaMin.s`
    padding-top: ${rem(8)};
    opacity: 1;
    overflow: visible;
    transform: none;
    position: static;
  `};
`;

const BlogExploreTagsContent = styled(CollapsibleContent)`
  padding-top: 0;

  ${mediaMin.s`
    padding-top: 0;
  `};
`;

const StyledIcon = styled(Icon)`
  float: right;
  transition: transform 0.2s ease;
  transform: rotate(0deg);

  ${(props) =>
    props.animate &&
    css`
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    `};

  ${mediaMin.s`
    display: none;
  `};
`;

class BlogPage extends Component {
  state = {
    blogWriteAboutOpen: false,
    blogWhatElseOpen: false,
    blogExploreTagsOpen: false,
  };

  closeOthers = (from) => {
    const currState = this.state;
    let stateKeys = Object.keys(currState);
    let others = stateKeys.filter((key) => key !== `${from}`);

    others.forEach((other) => {
      if (currState[`${other}`]) {
        this.setState((prevState) => ({
          [`${other}`]: !prevState[`${other}`],
        }));
      }
    });
  };

  openBlogWriteAbout = () => {
    this.setState((prevState) => ({
      blogWriteAboutOpen: !prevState.blogWriteAboutOpen,
    }));

    this.closeOthers("blogWriteAboutOpen");
  };

  openBlogWhatElse = () => {
    this.setState((prevState) => ({
      blogWhatElseOpen: !prevState.blogWhatElseOpen,
    }));

    this.closeOthers("blogWhatElseOpen");
  };

  openBlogExploreTags = () => {
    this.setState((prevState) => ({
      blogExploreTagsOpen: !prevState.blogExploreTagsOpen,
    }));

    this.closeOthers("blogExploreTagsOpen");
  };

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
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`Blog || ${config.siteTitle}`} />
          <SEO />
          <BlogHeader>
            <BlogInfo>
              <BlogInfoItem>
                <CollapsibleContainer
                  onClick={this.openBlogWriteAbout}
                  contentVisible={this.state.blogWriteAboutOpen}
                >
                  <StyledIcon animate={this.state.blogWriteAboutOpen}>
                    <use xlinkHref="#down" />
                  </StyledIcon>
                  <StyledTitle>What I write about</StyledTitle>
                  <CollapsibleContent
                    showContent={this.state.blogWriteAboutOpen}
                  >
                    <Copy>
                      How i built this in Hugo and optimized for 100% Speed
                      Index with Google.
                    </Copy>
                  </CollapsibleContent>
                </CollapsibleContainer>
              </BlogInfoItem>
              <BlogInfoItem>
                <CollapsibleContainer
                  onClick={this.openBlogWhatElse}
                  contentVisible={this.state.blogWhatElseOpen}
                >
                  <StyledIcon animate={this.state.blogWhatElseOpen}>
                    <use xlinkHref="#down" />
                  </StyledIcon>
                  <StyledTitle>What else</StyledTitle>
                  <CollapsibleContent showContent={this.state.blogWhatElseOpen}>
                    <Copy>
                      How i built this in Hugo and optimized for 100% Speed
                      Index with Google.
                    </Copy>
                  </CollapsibleContent>
                </CollapsibleContainer>
              </BlogInfoItem>
            </BlogInfo>
            <TagsWrapper>
              <CollapsibleContainer
                onClick={this.openBlogExploreTags}
                contentVisible={this.state.blogExploreTagsOpen}
              >
                <StyledIcon animate={this.state.blogExploreTagsOpen}>
                  <use xlinkHref="#down" />
                </StyledIcon>
                <StyledTitle>Explore by tags</StyledTitle>
                <BlogExploreTagsContent
                  showContent={this.state.blogExploreTagsOpen}
                >
                  <Tags tagsInPost={allTags} />
                </BlogExploreTagsContent>
              </CollapsibleContainer>
            </TagsWrapper>
          </BlogHeader>
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

export default BlogPage;

BlogPage.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query allTagsInBlog {
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
