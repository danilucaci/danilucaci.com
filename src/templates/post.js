/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Disqus from "disqus-react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import SocialShare from "../components/SocialShare/SocialShare";
import Tags from "../components/Tags/Tags";
import { HR } from "../components/HR/HR";
import { Col, Row } from "../components/Grid/Grid";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
// import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import { copyURL, addCopyButtonsToCodeNodes } from "../helpers/helpers";

import { localePaths } from "../i18n/i18n";
import {
  PostWrapper,
  PostH1,
  PostInfo,
  PostDateReadTimeWrapper,
  SocialShareWrapper,
  IntroContainer,
  IntroCopy,
  PostContentRow,
  TextareaClipboard,
  CommentsRow,
  StyledLoadComments,
} from "../styles/post.styles";
import LocaleContext from "../i18n/LocaleContext";

function Post({ pageContext, data, location }) {
  const [loadComments, setLoadComments] = useState(false);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    addCopyButtonsToCodeNodes(locale);
  }, [locale]);

  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const twinPost = pageContext.twinPost;
  const introCopy = postInfo.intro.split("|");
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
      <Layout location={location} twinPostURL={twinPostURL}>
        <SEO
          twinPostURL={twinPostURL}
          postNode={postNode}
          postSEO
          currentPath={location.pathname}
        />
        <Main>
          <PostWrapper>
            <Row as="header" col10>
              <Col>
                <Tags tagsFor="post" tags={postInfo.tags} inline />
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
                      onClick={() => copyURL(locale)}
                    />
                  </SocialShareWrapper>
                </PostInfo>
                <HR />
                <IntroContainer>
                  {introCopy.map((paragraph) => (
                    <IntroCopy key={paragraph}>{paragraph}</IntroCopy>
                  ))}
                </IntroContainer>
              </Col>
            </Row>
            <PostContentRow pb col8>
              <Col>
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </Col>
            </PostContentRow>
          </PostWrapper>

          <TextareaClipboard
            className="js-textarea-clipboard"
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

        <CommentsRow as="aside" col10 pb>
          <Col>
            {!loadComments && (
              <StyledLoadComments onClick={() => setLoadComments(true)} />
            )}
            {loadComments && (
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            )}
          </Col>
        </CommentsRow>

        {/* <SubscribeCard /> */}
      </Layout>
    </ErrorBoundary>
  );
}

Post.propTypes = {
  pageContext: PropTypes.shape({
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
