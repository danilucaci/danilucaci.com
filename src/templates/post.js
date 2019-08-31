/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Disqus from "disqus-react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SocialShare from "../components/SocialShare/SocialShare";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Tags from "../components/Tags/Tags";
import { HR } from "../components/HR/HR";
import { GridCol } from "../components/Grid/Grid";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import { copyURL, addCopyButtonsToCodeNodes } from "../helpers/helpers";

import { localePaths, COPY_URL_MESSAGES } from "../i18n/i18n";
import {
  PostWrapper,
  PageHeaderRow,
  PostH1,
  PostInfo,
  PostDateReadTimeWrapper,
  SocialShareWrapper,
  IntroContainer,
  IntroCopy,
  PostContentRow,
  DummyInput,
  CommentsRow,
  StyledLoadComments,
} from "../styles/post.styles";

function Post({ pageContext, data, location }) {
  const [loadComments, setLoadComments] = useState(false);

  useEffect(() => {
    const copyURLButton = document.querySelector(".js-copyURL > span");
    copyURLButton.addEventListener("click", copyURL);
    copyURLButton.textContent = `${COPY_URL_MESSAGES[pageContext.locale].default}`;

    addCopyButtonsToCodeNodes(pageContext.locale);

    removeAnchorsFromTabIndex();

    function removeAnchorsFromTabIndex() {
      const h2s = Array.from(document.querySelectorAll("h2 a"));
      const h3s = Array.from(document.querySelectorAll("h3 a"));
      const h4s = Array.from(document.querySelectorAll("h4 a"));
      const h5s = Array.from(document.querySelectorAll("h5 a"));

      // Remove the headers from tab index
      removeHeaderTabIndex(h2s);
      removeHeaderTabIndex(h3s);
      removeHeaderTabIndex(h4s);
      removeHeaderTabIndex(h5s);
    }

    return () => {
      copyURLButton.removeEventListener("click", copyURL);
    };
  }, []);

  function removeHeaderTabIndex(arr) {
    arr.forEach((header) => header.removeAttribute("tabindex"));
  }

  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const twinPost = pageContext.twinPost;
  const introCopy = postInfo.intro.split("|");
  const locale = pageContext.locale;
  const nextTitle = pageContext.nextTitle;
  const nextSlug = pageContext.nextSlug;
  const prevSlug = pageContext.prevSlug;
  const prevTitle = pageContext.prevTitle;

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = localePaths["es"].blog + "/" + twinPost;
  } else if (locale === "es") {
    twinPostURL = localePaths["en"].blog + "/" + twinPost;
  }

  const disqusShortname = process.env.GATSBY_DISQUS_SHORTNAME;
  const disqusConfig = {
    url: location.href,
    identifier: postInfo.title,
    title: postInfo.title,
  };

  return (
    <ErrorBoundary>
      <Layout location={location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          postNode={postNode}
          postSEO
          currentPath={location.pathname}
        />
        <SiteHeader
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={location.pathname}
        />
        <Main role="main">
          <PostWrapper>
            <PageHeaderRow as="header">
              <GridCol>
                <Tags tags={postInfo.tags} inline />
                <PostH1>{postInfo.title}</PostH1>
                <HR />
                <PostInfo>
                  <PostDateReadTimeWrapper>
                    <ArticleInfo
                      date={postInfo.date}
                      timeToRead={postNode.timeToRead}
                    />
                  </PostDateReadTimeWrapper>
                  <SocialShareWrapper>
                    <SocialShare
                      slug={location.pathname}
                      title={postInfo.title}
                      snippet={postInfo.snippet}
                      onClick={copyURL}
                    />
                  </SocialShareWrapper>
                </PostInfo>
                <HR />
                <IntroContainer>
                  {introCopy.map((paragraph) => (
                    <IntroCopy key={paragraph}>{paragraph}</IntroCopy>
                  ))}
                </IntroContainer>
              </GridCol>
            </PageHeaderRow>
            <PostContentRow bottomPad>
              <GridCol>
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </GridCol>
            </PostContentRow>
          </PostWrapper>

          <DummyInput
            className="js-dummyInput"
            contentEditable="true"
            readOnly={true}
            aria-hidden="true"
            suppressContentEditableWarning="true"
          />
        </Main>

        {(prevSlug || nextSlug) && (
          <SiblingPosts
            nextSlug={nextSlug}
            nextTitle={nextTitle}
            prevSlug={prevSlug}
            prevTitle={prevTitle}
          />
        )}

        <CommentsRow as="aside" bottomPad>
          <GridCol>
            {!loadComments && (
              <StyledLoadComments onClick={() => setLoadComments(true)} />
            )}
            {loadComments && (
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            )}
          </GridCol>
        </CommentsRow>

        <SubscribeCard locale={locale} />

        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={location.pathname}
        />
        <ScrollToTop />
      </Layout>
    </ErrorBoundary>
  );
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
