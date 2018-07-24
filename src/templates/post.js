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

class Post extends Component {
  render() {
    // I added String to convert the url to a string
    // Otherwise it causes the blog post build to break
    // ****************************************
    // TODO
    // Investigate why
    const slug = String(this.props.pageContext);
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;

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
    `;

    const PostContent = styled.section`
      & h1 {
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

      & h2 {
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

      & h3 {
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

      & h4 {
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

      & p {
        color: ${theme.colors.dark800};
        font-family: ${theme.fonts.bodyRegular};
        font-weight: 400;
        font-style: normal;

        font-size: ${(props) =>
          props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};

        line-height: ${(props) =>
          props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};

        & + & {
          margin-bottom: ${rem(28)};
        }
      }

      & code,
      & pre {
        font-family: ${theme.fonts.code};
        font-size: ${(props) =>
          props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};
        line-height: ${(props) =>
          props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};
      }
    `;

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
          <PostTOC />
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
        posted
      }
      headings {
        value
        depth
      }
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
