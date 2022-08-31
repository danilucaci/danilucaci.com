import React, { useContext } from "react";
import { shape, object, oneOfType, string } from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/SEO";
import Main from "../components/Main";
import Layout from "../components/Layout";
import SiblingProjects from "../components/SiblingProjects";
import ContactCard from "../components/ContactCard";
import ErrorBoundary from "../components/ErrorBoundary";
import { Col, Row } from "../components/Grid";
import LocaleContext from "../i18n/LocaleContext";

import {
  ArticleWrapper,
  HeaderBackground,
  PostH1,
  CaseStudyDescription,
  CaseStudyImgWrapper,
} from "../styles/caseStudy.styles";

function CaseStudy({ data, pageContext, location }) {
  const postNode = data.mdx;
  const postInfo = postNode.frontmatter;
  const pageImage = postInfo.pageImage;
  const twinPost = pageContext.twinPost;
  const nextTitle = pageContext.nextTitle;
  const nextSlug = pageContext.nextSlug;
  const prevSlug = pageContext.prevSlug;
  const prevTitle = pageContext.prevTitle;

  const { locale } = useContext(LocaleContext);

  let twinPostURL = "";

  if (locale === "en") {
    twinPostURL = "/es/trabajos/" + twinPost;
  } else if (locale === "es") {
    twinPostURL = "/work/" + twinPost;
  }

  return (
    <ErrorBoundary>
      <Layout location={location} twinPostURL={twinPostURL} colorHeader>
        <SEO
          twinPostURL={twinPostURL}
          postNode={postNode}
          postSEO
          postImage={getSrc(pageImage)}
          currentPath={location.pathname}
        />
        <Main>
          <article>
            <HeaderBackground>
              <Row col8 as="div">
                <Col>
                  <PostH1>{postInfo.title}</PostH1>
                  <CaseStudyDescription>
                    {postInfo.snippet}
                  </CaseStudyDescription>
                  <CaseStudyImgWrapper>
                    <GatsbyImage
                      image={getImage(pageImage)}
                      title={postInfo.title}
                      alt={postInfo.snippet}
                    />
                  </CaseStudyImgWrapper>
                </Col>
              </Row>
            </HeaderBackground>
            <ArticleWrapper>
              <MDXRenderer>{postNode.body}</MDXRenderer>
            </ArticleWrapper>
          </article>
        </Main>
        {(prevSlug || nextSlug) && (
          <SiblingProjects
            nextSlug={nextSlug}
            nextTitle={nextTitle}
            prevSlug={prevSlug}
            prevTitle={prevTitle}
          />
        )}
        <ContactCard />
      </Layout>
    </ErrorBoundary>
  );
}

CaseStudy.propTypes = {
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
        snippet: string.isRequired,
        title: string.isRequired,
        date: string.isRequired,
        pageImage: shape({
          childImageSharp: object.isRequired,
        }),
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
            gatsbyImageData(width: 744, quality: 60, layout: CONSTRAINED)
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
