import React, { useEffect, useContext } from "react";
import { string, shape, oneOfType, object, arrayOf, number } from "prop-types";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Main from "../components/Main";
import SocialShare from "../components/SocialShare";
import Tags from "../components/Tags";
import HR from "../components/HR";
import { Col, Row } from "../components/Grid";
import SiblingPosts from "../components/SiblingPosts";
import ErrorBoundary from "../components/ErrorBoundary";
import ArticleInfo from "../components/ArticleInfo";
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
} from "../styles/post.styles";
import LocaleContext from "../i18n/LocaleContext";

function Post({ pageContext, data, location }) {
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
            readOnly
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
      </Layout>
    </ErrorBoundary>
  );
}

Post.propTypes = {
  pageContext: shape({
    slug: string.isRequired,
    twinPost: string.isRequired,
    nextTitle: oneOfType([string.isRequired, object.isRequired]),
    nextSlug: oneOfType([string.isRequired, object.isRequired]),
    prevSlug: oneOfType([string.isRequired, object.isRequired]),
    prevTitle: oneOfType([string.isRequired, object.isRequired]),
  }).isRequired,
  data: shape({
    mdx: shape({
      fields: shape({
        slug: string.isRequired,
      }),
      body: string.isRequired,
      frontmatter: shape({
        category: string.isRequired,
        date: string.isRequired,
        intro: string.isRequired,
        snippet: string.isRequired,
        tags: arrayOf(string).isRequired,
        title: string.isRequired,
      }),
      timeToRead: number.isRequired,
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
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
