import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import ContactCard from "../components/ContactCard/ContactCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { GridCol } from "../components/Grid/Grid";

import {
  ArticleWrapper,
  StyledHeader,
  PostH1,
  CaseStudyDescription,
  CaseStudyImgWrapper,
  PostContent,
} from "../styles/caseStudy.styles";

function CaseStudy({ data, pageContext, location }) {
  const [didLoad, setDidLoad] = useState(false);

  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const image = postInfo.images[0].childImageSharp.fluid;
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
      <Layout location={location} locale={locale}>
        <SEO
          locale={locale}
          twinPostURL={twinPostURL}
          postNode={postNode}
          postSEO
          postImage={image.src}
          currentPath={location.pathname}
        />
        <SiteHeader
          twinPostURL={twinPostURL}
          locale={locale}
          currentPath={location.pathname}
        />
        <Main role="main">
          <ArticleWrapper as="article">
            <GridCol>
              <StyledHeader>
                <PostH1>{postInfo.title}</PostH1>
                <CaseStudyDescription>{postInfo.snippet}</CaseStudyDescription>
              </StyledHeader>
              <CaseStudyImgWrapper didLoad={didLoad}>
                <Img
                  title={postInfo.title}
                  alt={postInfo.snippet}
                  fluid={image}
                  fadeIn
                  onLoad={() => setDidLoad(true)}
                />
              </CaseStudyImgWrapper>
              <PostContent>
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </PostContent>
            </GridCol>
          </ArticleWrapper>
          <ScrollToTop />
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
        <SiteFooter
          locale={locale}
          twinPostURL={twinPostURL}
          currentPath={location.pathname}
        />
      </Layout>
    </ErrorBoundary>
  );
}

CaseStudy.propTypes = {
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
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        snippet: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
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
        # links {
        #   name
        #   link
        # }
        images {
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
