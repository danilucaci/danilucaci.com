/* eslint-disable react/jsx-boolean-value */
import React, { Component } from "react";
import PropTypes from "prop-types";
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
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import {
  handleScrollLine,
  textPassiveEventSupport,
  copyURL,
  addCopyButtonsToCodeNodes,
} from "../helpers/helpers";

import { localePaths, COPY_URL_MESSAGES } from "../i18n/i18n";

const PostWrapper = styled.article`
  max-width: ${theme.contain.wrapper.col10};
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

  .gatsby-resp-image-figure {
    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    ${mediaMin.xxl`
      max-width: ${rem(936)};
      margin-right: -${rem(192)};
      margin-left: -${rem(192)};
    `};
  }

  figure img,
  figure video {
    ${theme.shadow.image} !important;
  }

  figcaption {
    margin-top: ${rem(12)};
  }

  .js-codeCopy {
    background-color: ${theme.colors.gray100};
    display: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.xs};

    font-family: ${theme.fonts.bodyRegular};

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

  & .toc {
    background-color: ${theme.colors.sectionBackground};
    padding: ${rem(24)} ${rem(16)};

    & p {
      margin-bottom: 0;
    }

    & ul {
      margin-bottom: 0;
      list-style-type: none;
      margin-left: 0;
    }

    & h3 {
      margin-top: 0;
      margin-bottom: ${rem(8)};
    }

    margin-left: -${rem(16)};
    margin-right: -${rem(16)};

    ${mediaMin.m`
      margin-left: -${rem(24)};
      margin-right: -${rem(24)};
      padding-left: ${rem(24)};
      padding-right: ${rem(24)};
    `};

    ${mediaMin.l`
      margin-left: -${rem(64)};
      margin-right: -${rem(64)};
      padding-left: ${rem(64)};
      padding-right: ${rem(64)};
      padding-top: ${rem(48)};
      padding-bottom: ${rem(48)};
    `};

    & a {
      display: block;
      color: ${theme.colors.dark900};
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      padding: ${rem(8)} 0;

      font-family: ${theme.fonts.bodyRegular};

      &:visited,
      &:link {
        color: ${theme.colors.dark900};
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: transparent;
      }
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

const StyledLoadComments = styled(LoadComments)`
  margin: ${rem(32)} auto;
  display: block;
`;

const LoadCommentsIcon = styled(Icon)`
  margin-top: -${rem(3)};
  fill: ${theme.colors.gray500};
`;

const LoadCommentsLabel = styled.span`
  display: inline-block;
`;

const CommentsWrapper = styled.aside`
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

const BottomHR = styled(HR)`
  margin-bottom: ${theme.spacing.components.s};

  ${mediaMin.s`
  margin-bottom: ${theme.spacing.components.m};
`};

  ${mediaMin.m`
  margin-bottom: ${theme.spacing.components.xl};
`};
`;

// eslint-disable
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "item-1": Copy,
  },
}).Compiler;

class Post extends Component {
  state = {
    loadComments: false,
  };

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL > span");
    copyURLButton.addEventListener("click", copyURL);
    copyURLButton.textContent = `${COPY_URL_MESSAGES[this.props.pageContext.locale].default}`;

    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    const supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      handleScrollLine,
      supportsPassive ? { passive: true } : false,
    );

    addCopyButtonsToCodeNodes(this.props.pageContext.locale);
    handleScrollLine();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", handleScrollLine);
  }

  loadComments = () => {
    this.setState((prevState) => ({
      loadComments: !prevState.loadComments,
    }));
  };

  render() {
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
      twinPostURL = localePaths["es"].blog + "/" + twinPost;
    } else if (locale === "es") {
      twinPostURL = localePaths["en"].blog + "/" + twinPost;
    }

    const disqusShortname = process.env.GATSBY_DISQUS_SHORTNAME;
    const disqusConfig = {
      url: this.props.location.href,
      identifier: postInfo.title,
      title: postInfo.title,
    };

    return (
      <Layout location={this.props.location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
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
                    onClick={copyURL}
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

            <BottomHR />

            <AuthorCard />
            <SubscribeCard locale={locale} />
          </PostWrapper>

          <DummyInput
            className="js-dummyInput"
            contentEditable="true"
            readOnly={true}
            aria-hidden="true"
            suppressContentEditableWarning="true"
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
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
    nextTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
    nextSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
    prevSlug: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
    prevTitle: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired]),
  }).isRequired,
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
  }).isRequired,
};

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
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
