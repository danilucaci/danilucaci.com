import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import rehypeReact from "rehype-react";
import { FormattedMessage } from "react-intl";

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
import {
  calculateScroll,
  selectDummyNodeToCopy,
  textPassiveEventSupport,
} from "../helpers/helpers";

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
  padding-top: ${rem(16)};
  padding-bottom: ${rem(32)};

  ${mediaMin.s`
    padding-bottom: ${rem(40)};
  `};

  ${mediaMin.l`
    padding-top: ${rem(16)};
  `};
`;

const PostH1 = styled.h1`
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-bottom: ${rem(32)};
  `};
`;

const StyledPostIntro = styled.div`
  ${mediaMin.m`
    width: calc(((100% / 10) * 6) - ${rem(12)});
    margin-right: ${rem(12)};
    display: inline-block;
    vertical-align: top;
  `};
`;

const IntroCopy = styled(Copy)`
  &:first-of-type {
    margin-bottom: ${rem(16)};
  }
`;

const PostInfo = styled.aside`
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    padding: ${rem(16)} ${rem(16)};
    background-color: ${theme.colors.gray100};
    ${theme.shadow.default};
    float: right;
    width: calc(((100% / 10) * 4) - ${rem(12)});
    margin-left: ${rem(12)};
    display: inline-block;
    vertical-align: top;
    margin-top: 0;
    margin-bottom: 0;
  `};
`;

const PostDateReadTimeWrapper = styled.div`
  display: inline-block;

  ${mediaMin.xxxs`
    margin-right: ${rem(16)};
  `};

  ${mediaMin.m`
    margin-right: 0;
  `};
`;

const SocialShareWrapper = styled.div`
  margin-top: ${rem(8)};
  display: block;
  ${mediaMin.m`
    margin-top: ${rem(16)};
  `};
`;

const PostContent = styled.section`
  display: block;
  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.s`
    margin-bottom: ${rem(56)};
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

const PostTOC = styled.nav`
  background-color: ${theme.colors.sectionBackground};
  padding: ${rem(16)} ${rem(20)};

  & h3 {
    margin-top: 0;
    margin-bottom: ${rem(8)};
  }

  ${mediaMin.xl`
    margin-left: -${rem(96)};
    margin-right: -${rem(96)};
    padding-left: ${rem(96)};
    padding-right: ${rem(96)};
    padding-top: ${rem(32)};
    padding-bottom: ${rem(32)};
  `};
`;

const TOCEntry = styled.a`
  display: block;
  color: ${theme.colors.dark900};
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  padding: ${rem(8)} 0;

  .fonts-loaded & {
    font-family: ${theme.fonts.bodyRegular};
  }

  &:visited,
  &:link {
    color: ${theme.colors.dark900};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
    "item-1": Copy,
  },
}).Compiler;

class Post extends Component {
  state = {};

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false
    );

    this.addCopyButtonsToCodeNodes();
    this.handlePageScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
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
    selectDummyNodeToCopy(dummyNode);

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

    selectDummyNodeToCopy(dummyNode);

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

  handlePageScroll = () => {
    this.handleScrollLine();
    // this.handleTOCScroll();
  };

  handleScrollLine = () => {
    let scrollLine = document.querySelector(".js-scrollLine");
    let scrolled = calculateScroll();
    scrollLine.style.width = scrolled + "%";
  };

  // handleTOCScroll = () => {
  //   let h2s = document.querySelectorAll("h2");

  //   h2s.forEach((heading) => {
  //     let isVis = isInViewport(heading);

  //     if (isVis) {
  //       // console.log("heading: ", heading);
  //     }
  //   });
  // };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const introCopy = postInfo.intro.split("|");

    return (
      <Layout
        location={this.props.location}
        locale={this.props.pageContext.lang}
      >
        <Helmet>
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteHeader showScrollIndicator />
        <Main role="main">
          <PostWrapper>
            <StyledPostHeader>
              <PostH1>{postInfo.title}</PostH1>
              <PostInfo>
                <PostDateReadTimeWrapper>
                  <ArticleDate date={postInfo.date} />
                  <ReadTime timeToRead={postNode.timeToRead} />
                </PostDateReadTimeWrapper>
                <Tags tagsInPost={postInfo.tags} inline />
                <SocialShareWrapper>
                  <SocialShare
                    slug={slug}
                    title={postInfo.title}
                    snippet={postInfo.snippet}
                    onClick={this.copyURL}
                  />
                </SocialShareWrapper>
              </PostInfo>
              <StyledPostIntro>
                {introCopy.map((paragraph) => (
                  <IntroCopy key={paragraph}>{paragraph}</IntroCopy>
                ))}
              </StyledPostIntro>
            </StyledPostHeader>
            <PostContent>{renderAst(postNode.htmlAst)}</PostContent>
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
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        snippet
        intro
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 744) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
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
