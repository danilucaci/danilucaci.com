/* eslint-disable react/jsx-boolean-value */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Disqus from "disqus-react";
import { FormattedMessage } from "react-intl";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
import { HR } from "../components/HR/HR";
import { GridCol } from "../components/Grid/Grid";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import AuthorCard from "../components/AuthorCard/AuthorCard";
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import {
  handleScrollLine,
  textPassiveEventSupport,
  copyURL,
  addCopyButtonsToCodeNodes,
} from "../helpers/helpers";

import { localePaths, COPY_URL_MESSAGES } from "../i18n/i18n";
import {
  PostWrapper,
  StyledPageHeader,
  PostH1,
  PostInfo,
  PostDateReadTimeWrapper,
  SocialShareWrapper,
  StyledIntroContainer,
  IntroCopy,
  PostContent,
  DummyInput,
  CommentsWrapper,
  StyledLoadComments,
  LoadCommentsIcon,
  LoadCommentsLabel,
  BottomHR,
} from "../styles/post.styles";

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

    this.removeAnchorsFromTabIndex();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", handleScrollLine);
  }

  removeHeaderTabIndex = (arr) => {
    arr.forEach((header) => {
      header.tabIndex = -1;
    });
  };

  removeAnchorsFromTabIndex = () => {
    const h2s = Array.from(document.querySelectorAll("h2 a"));
    const h3s = Array.from(document.querySelectorAll("h3 a"));
    const h4s = Array.from(document.querySelectorAll("h4 a"));
    const h5s = Array.from(document.querySelectorAll("h5 a"));

    // Remove the headers from tab index
    this.removeHeaderTabIndex(h2s);
    this.removeHeaderTabIndex(h3s);
    this.removeHeaderTabIndex(h4s);
    this.removeHeaderTabIndex(h5s);
  };

  loadComments = () => {
    this.setState((prevState) => ({
      loadComments: !prevState.loadComments,
    }));
  };

  render() {
    const postNode = this.props.data.mdx;
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
      <ErrorBoundary>
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
          <Main role="main">
            <PostWrapper>
              <StyledPageHeader as="header">
                <GridCol>
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
                </GridCol>
              </StyledPageHeader>
              <PostContent>
                <GridCol>
                  <MDXRenderer>{postNode.body}</MDXRenderer>
                </GridCol>
              </PostContent>

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
                <FormattedMessage id="load.comments">
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
      </ErrorBoundary>
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
  }).isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      body: PropTypes.string.isRequired,
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
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

export const pageQuery = graphql`
  query BLOG_POST_QUERY($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        snippet
        intro
        category
        tags
      }
      fields {
        slug
      }
      body
    }
  }
`;
