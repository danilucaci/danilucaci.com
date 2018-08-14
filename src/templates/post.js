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
        height: ${rem(48)}; /* fixed header height*/
        margin-top: -${rem(48)}; /* negative fixed header height */

        ${mediaMin.s`
          height: ${rem(56)}; /* fixed header height*/
          margin-top: -${rem(56)}; /* negative fixed header height */
        `};
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    color: ${theme.colors.dark800};

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

  pre,
  code {
    font-family: ${theme.fonts.code};
    font-size: ${(props) =>
      props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};
    line-height: ${(props) =>
      props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};
  }

  .js-codeCopy {
    background-color: ${theme.colors.gray100};
    display: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.xs};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

    position: absolute;
    top: ${rem(12)};
    right: ${rem(12)};
    padding: ${rem(8)} ${rem(16)};
  }

  .gatsby-highlight {
    position: relative;

    &:hover .js-codeCopy {
      display: block;
    }
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

const DummyInput = styled.input`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

class Post extends Component {
  state = {
    tooltipMessage: "Copy page link",
    tooltipOpen: false,
    hasScrolled: false,
    lastScrollPos: 0,
    showReadingNav: false,
  };

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    this.addCopyButtonsToCodeNodes();

    addEventListener("scroll", this.scrollListener);

    setInterval(() => {
      var didScroll = this.state.hasScrolled;
      let showReadingNav = this.state.showReadingNav;
      // console.log(`showReadingNav: ${showReadingNav}`);

      if (didScroll) {
        this.hasScrolled();
        this.setState({ hasScrolled: false });
      }
    }, 800);
  }

  componentDidUpdate() {
    let tooltipMessage = this.state.tooltipMessage;

    if (tooltipMessage === "Page link copied!") {
      setTimeout(() => {
        this.setState({ tooltipMessage: "Copy page link" });
        this.setState({ tooltipOpen: false });
      }, 2500);
    }
  }

  scrollListener = () => {
    this.setState({ hasScrolled: true });
  };

  hasScrolled = () => {
    let currentScrollPos = window.pageYOffset;
    let oldScrollPos = this.state.lastScrollPos;
    let sufficientScrollDiff = oldScrollPos - 60;

    if (currentScrollPos > 500) {
      if (currentScrollPos < sufficientScrollDiff) {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: false });
      } else {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: true });
      }
    }
  };

  copyURL = () => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let postURL = window.location.href;

    dummyNode.value = postURL;

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let range = document.createRange();
      range.selectNodeContents(dummyNode);

      let select = window.getSelection();
      select.removeAllRanges();
      select.addRange(range);
      dummyNode.setSelectionRange(0, 999999);
      dummyNode.blur();
    } else {
      dummyNode.select();
      dummyNode.blur();
    }

    try {
      document.execCommand("copy");
      this.setState({ tooltipMessage: "Page link copied!" });
      this.setState({ tooltipOpen: true });
    } catch (err) {
      this.setState({ tooltipMessage: "Couldn't copy the link" });
    }

    window.getSelection().removeAllRanges();
  };

  addCopyButtonsToCodeNodes = () => {
    const getCodeNodes = Array.from(
      document.querySelectorAll(".gatsby-highlight")
    );

    getCodeNodes.forEach((codeNode) => {
      const copyLink = document.createElement("span");
      copyLink.textContent = "Copy";
      copyLink.className = "js-codeCopy";
      codeNode.appendChild(copyLink);
    });

    this.addEventListenersToCopyButtons();
  };

  addEventListenersToCopyButtons = () => {
    const getCopyButtons = Array.from(
      document.querySelectorAll(".js-codeCopy")
    );

    getCopyButtons.forEach((copyButton) => {
      copyButton.addEventListener("click", this.copyCode);
    });
  };

  copyCode = (e) => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let currentCopyButton = e.target;

    const codeToCopy = e.target.previousElementSibling.textContent;
    dummyNode.value = codeToCopy;

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let range = document.createRange();
      range.selectNodeContents(dummyNode);

      let select = window.getSelection();
      select.removeAllRanges();
      select.addRange(range);
      dummyNode.setSelectionRange(0, 999999);
      dummyNode.blur();
    } else {
      dummyNode.select();
      dummyNode.blur();
    }

    try {
      document.execCommand("copy");
      currentCopyButton.textContent = "Copied!";

      if (currentCopyButton.textContent === "Copied!") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2500);
      }
    } catch (err) {
      currentCopyButton.textContent = "Couldn't copy";
      if (currentCopyButton.textContent === "Couldn't copy") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2500);
      }
    }

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
            tooltipOpen={this.state.tooltipOpen}
            showReadingNav={this.state.showReadingNav}
          />
          <PostContent>
            <DummyInput
              className="js-dummyInput"
              contentEditable="true"
              readOnly="true"
            />
            <PostTOC tableOfContents={postNode.tableOfContents} />
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </PostContent>
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
        date(formatString: "DD MMMM YYYY")
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
