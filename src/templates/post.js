import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../theme/globalStyles";

import Layout from "../components/Layout";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import PostHeader from "../components/PostHeader/PostHeader";
import PostTOC from "../components/PostTOC/PostTOC";
import PostFooter from "../components/PostFooter/PostFooter";

const Wrapper = styled.div`
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.s`
  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};
`};

  ul li,
  ul li p {
    list-style-type: none;
    font-family: ${theme.fonts.bodyBold};
    font-weight: 700;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
    margin-bottom: 0;
  }

  ul ul li {
    list-style-type: none;
    font-family: ${theme.fonts.bodyRegular};
    font-weight: 400;
    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }

  ul ul {
    margin-left: ${rem(16)};
  }

  li a {
    display: block;
    padding: ${rem(16)};
    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.s`
      padding: ${rem(16)} ${rem(24)};
      margin-left: -${rem(24)};
      margin-right: -${rem(24)};
    `};
  }

  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.main100};
    cursor: pointer;
  }

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h1 {
    color: ${theme.colors.dark900};
    font-family: ${theme.fonts.header};
    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h1s};
    line-height: ${theme.lineHeights.h1s};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h2 {
    color: ${theme.colors.dark900};
    font-family: ${theme.fonts.header};
    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h2s};
    line-height: ${theme.lineHeights.h2s};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h3 {
    color: ${theme.colors.dark900};
    font-family: ${theme.fonts.header};
    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h3s};
    line-height: ${theme.lineHeights.h3s};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h3};
    line-height: ${theme.lineHeights.h3};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h4 {
    color: ${theme.colors.dark900};
    font-family: ${theme.fonts.header};
    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h4s};
    line-height: ${theme.lineHeights.h4};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h4};
    margin-bottom: ${rem(28)};
    margin-top: ${rem(56)};
  `};
  }

  p {
    color: ${theme.colors.dark800};
    font-family: ${theme.fonts.bodyRegular};
    font-weight: 400;
    font-style: normal;

    font-size: ${(props) =>
      props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};

    line-height: ${(props) =>
      props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};

    margin-bottom: ${rem(28)};
  }

  code,
  pre {
    font-family: ${theme.fonts.code};
    font-size: ${(props) =>
      props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};
    line-height: ${(props) =>
      props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};
  }
`;

const PostContent = styled.section`
  margin-left: auto;
  margin-right: auto;

  max-width: ${theme.contain.blog};
`;

class Post extends Component {
  render() {
    const slug = String(this.props.pageContext);
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;

    if (!postInfo.id) {
      postInfo.id = slug;
    }
    if (!postInfo.category_id) {
      postInfo.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Wrapper>
          <PostHeader
            title={postInfo.title}
            intro={postInfo.intro}
            date={postNode.date}
            timeToRead={postNode.timeToRead}
            tagsInPost={postInfo.tags}
          />
          <PostTOC tableOfContents={postNode.tableOfContents} />
          <PostContent>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </PostContent>
          <PostFooter />
        </Wrapper>
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        snippet
        intro
        category
        tags
      }
      tableOfContents
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
