import React, { useState } from "react";
import { shape, oneOfType, string, object } from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO/SEO";
import Main from "../components/Main/Main";
import Layout from "../components/Layout";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import ContactCard from "../components/ContactCard/ContactCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { GridCol, GridRow } from "../components/Grid/Grid";

import {
  ArticleWrapper,
  HeaderBackground,
  PostH1,
  CaseStudyDescription,
  CaseStudyImgWrapper,
} from "../styles/caseStudy.styles";

function CaseStudy({ data, pageContext, location }) {
  const [didLoad, setDidLoad] = useState(false);

  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const pageImage = postInfo.pageImage.childImageSharp.fluid;
  const locale = pageContext.locale;
  const twinPost = pageContext.twinPost;
  const nextTitle = pageContext.nextTitle;
  const nextSlug = pageContext.nextSlug;
  const prevSlug = pageContext.prevSlug;
  const prevTitle = pageContext.prevTitle;

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/trabajos/" + twinPost;
  } else if (locale === "es") {
    twinPostURL = "/work/" + twinPost;
  }

  return (
    <ErrorBoundary>
      <Layout
        location={location}
        locale={locale}
        twinPostURL={twinPostURL}
        colorHeader
      >
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          postNode={postNode}
          postSEO
          postImage={pageImage.src}
          currentPath={location.pathname}
        />
        <Main>
          <ArticleWrapper>
            <HeaderBackground>
              <GridRow col8 as="div">
                <GridCol>
                  <PostH1>{postInfo.title}</PostH1>
                  <CaseStudyDescription>
                    {postInfo.snippet}
                  </CaseStudyDescription>
                  <CaseStudyImgWrapper didLoad={didLoad}>
                    <Img
                      title={postInfo.title}
                      alt={postInfo.snippet}
                      fluid={pageImage}
                      fadeIn
                      onLoad={() => setDidLoad(true)}
                    />
                  </CaseStudyImgWrapper>
                </GridCol>
              </GridRow>
            </HeaderBackground>
            <>
              <MDXRenderer>{postNode.body}</MDXRenderer>
            </>
          </ArticleWrapper>
        </Main>
        <ContactCard locale={locale} />
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

CaseStudy.propTypes = {
  pageContext: shape({
    locale: string.isRequired,
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
        title: string.isRequired,
        date: string.isRequired,
        pageImage: object.isRequired,
        snippet: string.isRequired,
      }),
    }),
  }).isRequired,
  location: shape({
    pathname: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

export default CaseStudy;

export const pageQuery = graphql`
  query CASE_STUDY_QUERY($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        snippet
        pageImage {
          childImageSharp {
            fluid(maxWidth: 744, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fields {
        slug
      }
      body
    }
  }
`;
