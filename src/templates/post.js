import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import rehypeReact from "rehype-react";

import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import SocialShare from "../components/SocialShare/SocialShare";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Tags from "../components/Tags/Tags";
import ReadTime from "../components/ReadTime/ReadTime";
import ArticleDate from "../components/ArticleDate/ArticleDate";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";

const PostWrapper = styled.div`
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

const StyledPostHeader = styled.header`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    background-color: ${theme.colors.gray100};
    border-left: 8px solid ${theme.colors.main600};
    padding: ${rem(40)} ${rem(96)};
  `};
`;

const PostH1 = styled.h1`
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-bottom: 0;
  `};

  ${mediaMin.xl`
    margin-bottom: ${rem(16)};
  `};
`;

const HRTop = styled(HR)`
  display: none;

  ${mediaMin.xxl`
    display: block;
  `};
`;

const HRBottom = styled(HR)`
  display: none;

  ${mediaMin.xs`
    display: block;
  `};

  ${mediaMin.xxl`
    display: none;
  `};
`;

const PostInfo = styled.div`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    margin-top: ${rem(4)};
  `};

  ${mediaMin.xxl`
    margin-bottom: 0;
  `};
`;

const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(24)};
`;

const SocialShareWrapper = styled.aside`
  display: block;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(32)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

const PostContent = styled.section`
  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
    margin-bottom: ${rem(56)};
  `};

  ${mediaMin.xxl`
    display: block;
    vertical-align: top;
    margin-left: calc(((100% / 10) * 1) + ${rem(24)});
    width: calc((100% / 10) * 6);
  `};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
    `};
  }

  h3 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
    `};
  }

  h4 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
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
        height: ${rem(56)}; /* fixed header height*/
        margin-top: -${rem(56)}; /* negative fixed header height */
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    margin-bottom: ${rem(32)};
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

const DummyInput = styled.textarea`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    // "item-1": Item,
    // p: Copy,
  },
}).Compiler;

class Post extends Component {
  state = {};

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        },
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}

    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handleBlogPostScroll,
      supportsPassive ? { passive: true } : false
    );

    this.addCopyButtonsToCodeNodes();
    this.handleBlogPostScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleBlogPostScroll);
  }

  /****************************************************************
   * Code to handle the url copying and code snippets
   * It's all using a dummy input element which holds the content
   * Which is supposed to be copied to the clipboard
   */
  copyURL = () => {
    let dummyNode = document.querySelector(".js-dummyInput");
    const copyURLButton = document.querySelector(".js-copyURL > span");

    dummyNode.value = window.location.href;
    this.selectDummyNodeToCopy(dummyNode);

    try {
      document.execCommand("copy");
      copyURLButton.textContent = "Page link copied!";
      setTimeout(() => {
        copyURLButton.textContent = "Copy page link";
      }, 2000);
    } catch (err) {
      copyURLButton.textContent = "Couldn't copy the link";
      setTimeout(() => {
        copyURLButton.textContent = "Copy page link";
      }, 2000);
    }

    window.getSelection().removeAllRanges();
  };

  /*****************************************************************
   * Get each code hightlight made by gatsby and insert a span tag
   * to attach a click listener to trigger the code copying logic
   */
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

  /*****************************************************************
   * Get all the inserted span tags to trigger the code copying
   */
  addEventListenersToCopyButtons = () => {
    const getCopyButtons = Array.from(
      document.querySelectorAll(".js-codeCopy")
    );

    getCopyButtons.forEach((copyButton) => {
      copyButton.addEventListener("click", this.copyCode);
    });
  };

  /*****************************************************************
   * Get the textContent of the clicked inserted copy tag and
   * insert into the dummy input element to be able to use
   * execCommand("copy") as it only works on input elements
   */
  copyCode = (e) => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let currentCopyButton = e.target;

    dummyNode.value = e.target.previousElementSibling.textContent;

    this.selectDummyNodeToCopy(dummyNode);

    try {
      document.execCommand("copy");
      currentCopyButton.textContent = "Copied!";

      // If the textContent was changed, trigger a setTimeout after 2000ms
      // and change it back to "Copy"
      if (currentCopyButton.textContent === "Copied!") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2000);
      }
    } catch (err) {
      currentCopyButton.textContent = "Couldn't copy";
      if (currentCopyButton.textContent === "Couldn't copy") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2000);
      }
    }

    window.getSelection().removeAllRanges();
  };

  selectDummyNodeToCopy = (dummyNode) => {
    // For iOS
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
  };

  handleBlogPostScroll = () => {
    this.handleScrollLine();
    this.handleTOCScroll();
  };

  handleScrollLine = () => {
    let scrollLine = document.querySelector(".js-scrollLine");

    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let clientHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let docScrollHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;

    let docHeight = docScrollHeight - clientHeight;

    let scrolled = (winScroll / docHeight) * 100;
    scrollLine.style.width = scrolled + "%";
  };

  /*!
   * Determine if an element is in the viewport
   * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
   * https://vanillajstoolkit.com/helpers/isinviewport/
   * @param  {Node}    element The element
   * @return {Boolean}      Returns true if element is in the viewport
   */
  isInViewport = (element) => {
    let distance = element.getBoundingClientRect();

    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  handleTOCScroll = () => {
    let h2s = document.querySelectorAll("h2");

    h2s.forEach((heading) => {
      let isVis = this.isInViewport(heading);

      if (isVis) {
        // console.log("heading: ", heading);
      }
    });
  };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    let introCopy = postInfo.intro.split("|");

    console.log("headings", postNode.headings);

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteHeader showScrollIndicator />
        <Main role="main">
          <PostWrapper>
            <StyledPostHeader>
              <PostH1>{postInfo.title}</PostH1>
              <HRTop />
              <PostInfo>
                <PostDateReadTimeWrapper>
                  <ArticleDate date={postInfo.date} />
                  <ReadTime timeToRead={postNode.timeToRead} />
                </PostDateReadTimeWrapper>
                <Tags tagsInPost={postInfo.tags} inline />
              </PostInfo>
            </StyledPostHeader>
            <HRBottom />
            <PostContent>
              <SocialShareWrapper>
                <SocialShare
                  slug={slug}
                  title={postInfo.title}
                  snippet={postInfo.snippet}
                  onClick={this.copyURL}
                />
              </SocialShareWrapper>
              <React.Fragment>
                {introCopy.map((paragraph) => (
                  <StyledCopy key={paragraph}>{paragraph}</StyledCopy>
                ))}
              </React.Fragment>
              {renderAst(postNode.htmlAst)}
            </PostContent>
          </PostWrapper>
          <DummyInput
            className="js-dummyInput"
            contentEditable={true}
            readOnly={true}
            suppressContentEditableWarning={true}
          />
        </Main>
        <ScrollToTop />
        <SiteFooter />
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      headings(depth: h2) {
        value
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        snippet
        intro
        category
        tags
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
