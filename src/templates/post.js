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
  max-width: ${theme.contain.content};

  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.s};
    padding-right: ${theme.gutters.s};
`};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h1 {
    color: ${theme.colors.dark900};
    display: block;
    font-family: ${theme.fonts.system};

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

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
    display: block;
    font-family: ${theme.fonts.system};

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

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
    display: block;
    font-family: ${theme.fonts.system};

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

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
    display: block;
    font-family: ${theme.fonts.system};

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

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

  & h2,
  & h3,
  & h2 a,
  & h3 a {
    &:target {
      &:before {
        content: "";
        display: block;
        height: 56px; /* fixed header height*/
        margin-top: -56px; /* negative fixed header height */
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    color: ${theme.colors.dark800};
    font-family: ${theme.fonts.system};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

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
  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
    cursor: pointer;
  }

  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};

  max-width: ${theme.contain.post};
`;

class Post extends Component {
  state = {
    tooltipMessage: "Click to copy link",
  };

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);
  }

  componentDidUpdate() {
    let currentMessage = this.state.tooltipMessage;

    if (currentMessage === "Page link copied!") {
      setTimeout(() => {
        this.setState({ tooltipMessage: "Click to copy link" });
      }, 2000);
    }
  }

  copyURL = () => {
    const dummyNode = document.createElement("input");
    const postURL = window.location.href;

    document.body.appendChild(dummyNode);
    dummyNode.value = postURL;

    dummyNode.select(dummyNode);

    try {
      // Now that we've selected the anchor text, execute the copy command
      let copy = document.execCommand("copy");
      document.body.removeChild(dummyNode);
      this.setState({ tooltipMessage: "Page link copied!" });
    } catch (err) {
      document.body.removeChild(dummyNode);
      this.setState({ tooltipMessage: "Couldn't copy the URL" });
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
  };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} || ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Wrapper>
          <PostHeader
            title={postInfo.title}
            intro={postInfo.intro}
            slug={slug}
            date={postInfo.date}
            timeToRead={postNode.timeToRead}
            tagsInPost={postInfo.tags}
            onClick={this.copyURL}
            tooltipMessage={this.state.tooltipMessage}
          />
          <PostContent>
            <PostTOC tableOfContents={postNode.tableOfContents} />
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
