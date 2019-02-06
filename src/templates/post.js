import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import rehypeReact from "rehype-react";
import Disqus from "disqus-react";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
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
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import { LoadComments } from "../components/Button/Button";
import { Icon } from "../components/Icon/Icon";
import AuthorCard from "../components/AuthorCard/AuthorCard";
import {
  calculateScroll,
  selectDummyNodeToCopy,
  textPassiveEventSupport,
} from "../helpers/helpers";
import intlMessages from "../i18n/i18n";

const PostWrapper = styled.article`
  max-width: ${theme.contain.wrapper.col8};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

const StyledPageHeader = styled.header`
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;
`;

const PostH1 = styled.h1`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};
`;

const PostInfo = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  padding: ${rem(8)} 0 ${rem(4)};

  ${mediaMin.xs`
    flex-direction: row;
    padding: ${rem(8)} 0 ${rem(8)};
  `};
`;

const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-bottom: ${rem(8)};
  margin-right: ${rem(16)};

  ${mediaMin.xs`
    margin-bottom: 0;
  `};
`;

const SocialShareWrapper = styled.div`
  display: inline-block;
`;

const StyledIntroContainer = styled.div`
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(32)};
  margin-bottom: ${rem(32)};
`;

const IntroCopy = styled(Copy)`
  &:first-of-type {
    margin-bottom: ${rem(32)};
  }
`;

const PostContent = styled.section`
  display: block;
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.xl`
    margin-bottom: ${theme.spacing.components.xl};
  `};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h3 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  h4 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-top: ${rem(64)};
      margin-bottom: ${rem(32)};
    `};
  }

  p,
  ul,
  ol {
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

export const StyledLoadComments = styled(LoadComments)`
  margin: ${rem(32)} auto;
  display: block;
`;

export const LoadCommentsIcon = styled(Icon)`
  margin-top: -${rem(3)};
  fill: ${theme.colors.gray500};
`;

export const LoadCommentsLabel = styled.span`
  display: inline-block;
`;

export const CommentsWrapper = styled.aside`
  width: 100%;
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.components.s};

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
    margin-bottom: ${theme.spacing.components.m};
  `};

  ${mediaMin.m`
    margin-bottom: ${theme.spacing.components.xl};
  `};
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "item-1": Copy,
  },
}).Compiler;

class Post extends Component {
  state = {
    copyURLMessages: {
      en: {
        default: "Copy page link",
        copied: "Page link copied!",
        error: "Couldn't copy the link",
      },
      es: {
        default: "Copiar enlace",
        copied: "Enlace copiado!",
        error: "No he podido copiar",
      },
    },
    copyCodeMessages: {
      en: {
        default: "Copy",
        copied: "Copied!",
        error: "Couldn't copy",
      },
      es: {
        default: "Copiar",
        copied: "Copiado!",
        error: "No he podido copiar",
      },
    },
    loadComments: false,
  };

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL > span");
    copyURLButton.addEventListener("click", this.copyURL);
    copyURLButton.textContent = `${
      this.state.copyURLMessages[this.props.pageContext.locale].default
    }`;

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
      copyURLButton.textContent = `${
        this.state.copyURLMessages[this.props.pageContext.locale].copied
      }`;
      setTimeout(() => {
        copyURLButton.textContent = `${
          this.state.copyURLMessages[this.props.pageContext.locale].default
        }`;
      }, 2000);
    } catch (err) {
      copyURLButton.textContent = `${
        this.state.copyURLMessages[this.props.pageContext.locale].error
      }`;
      setTimeout(() => {
        copyURLButton.textContent = `${
          this.state.copyURLMessages[this.props.pageContext.locale].default
        }`;
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
      copyLink.textContent = `${
        this.state.copyCodeMessages[this.props.pageContext.locale].default
      }`;
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
      currentCopyButton.textContent = `${
        this.state.copyCodeMessages[this.props.pageContext.locale].copied
      }`;

      // If the textContent was changed, trigger a setTimeout after 2000ms
      // and change it back to "Copy"
      if (
        currentCopyButton.textContent ===
        `${this.state.copyCodeMessages[this.props.pageContext.locale].copied}`
      ) {
        setTimeout(() => {
          currentCopyButton.textContent = `${
            this.state.copyCodeMessages[this.props.pageContext.locale].default
          }`;
        }, 2000);
      }
    } catch (err) {
      currentCopyButton.textContent = `${
        this.state.copyCodeMessages[this.props.pageContext.locale].error
      }`;
      if (
        currentCopyButton.textContent ===
        `${this.state.copyCodeMessages[this.props.pageContext.locale].error}`
      ) {
        setTimeout(() => {
          currentCopyButton.textContent = `${
            this.state.copyCodeMessages[this.props.pageContext.locale].default
          }`;
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

  loadComments = () => {
    console.log("Add commments yo");

    this.setState((prevState) => ({
      loadComments: !prevState.loadComments,
    }));
  };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const twinPost = this.props.pageContext.twinPost;
    const introCopy = postInfo.intro.split("|");
    const locale = this.props.pageContext.locale;
    const nextTitle = this.props.pageContext.nextTitle;
    const nextSlug = this.props.pageContext.nextSlug;
    const prevSlug = this.props.pageContext.prevSlug;
    const prevTitle = this.props.pageContext.prevTitle;

    let twinPostURL = "";

    if (locale === "en") {
      twinPostURL = "/es/blog/" + twinPost;
    } else if (locale === "es") {
      twinPostURL = "/blog/" + twinPost;
    }

    const disqusShortname = process.env.DISQUS_SHORTNAME;
    const disqusConfig = {
      identifier: postInfo.title,
      title: postInfo.title,
    };

    return (
      <Layout location={this.props.location} locale={locale}>
        <SEO
          locale={locale}
          postNode={postNode}
          postSEO
          currentPath={this.props.location.pathname}
        />
        <SiteHeader
          showScrollIndicator
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={this.props.location.pathname}
        />
        <Main role="main" id="main">
          <PostWrapper>
            <StyledPageHeader>
              <Tags tags={postInfo.tags} inline />
              <PostH1>{postInfo.title}</PostH1>
              <HR />
              <PostInfo>
                <PostDateReadTimeWrapper>
                  <ArticleDate date={postInfo.date} />
                  <ReadTime timeToRead={postNode.timeToRead} />
                </PostDateReadTimeWrapper>
                <SocialShareWrapper>
                  <SocialShare
                    slug={this.props.location.pathname}
                    title={postInfo.title}
                    snippet={postInfo.snippet}
                    onClick={this.copyURL}
                  />
                </SocialShareWrapper>
              </PostInfo>
              <HR />
              <StyledIntroContainer>
                {introCopy.map((paragraph) => (
                  <IntroCopy key={paragraph}>{paragraph}</IntroCopy>
                ))}
              </StyledIntroContainer>
            </StyledPageHeader>
            <PostContent>{renderAst(postNode.htmlAst)}</PostContent>
            <AuthorCard />
          </PostWrapper>

          <DummyInput
            className="js-dummyInput"
            contentEditable={true}
            readOnly={true}
            suppressContentEditableWarning={true}
          />
          <ScrollToTop />
        </Main>

        {(prevSlug || nextSlug) && (
          <SiblingPosts
            nextSlug={nextSlug}
            nextTitle={nextTitle}
            prevSlug={prevSlug}
            prevTitle={prevTitle}
          />
        )}

        <CommentsWrapper>
          {!this.state.loadComments && (
            <StyledLoadComments onClick={this.loadComments}>
              <LoadCommentsIcon aria-hidden="true">
                <use xlinkHref="#comments" />
              </LoadCommentsIcon>
              <FormattedMessage id="loadComments">
                {(txt) => <LoadCommentsLabel>{txt}</LoadCommentsLabel>}
              </FormattedMessage>
            </StyledLoadComments>
          )}
          {this.state.loadComments && (
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          )}
        </CommentsWrapper>
        <SiteFooter locale={locale} />
      </Layout>
    );
  }
}

Post.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    twinPost: PropTypes.string.isRequired,
    nextTitle: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    nextSlug: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    prevSlug: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    prevTitle: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.object,
        intro: PropTypes.string.isRequired,
        snippet: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
      }),
      timeToRead: PropTypes.number.isRequired,
      htmlAst: PropTypes.object.isRequired,
    }),
  }),
};

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
        slug
      }
    }
  }
`;
