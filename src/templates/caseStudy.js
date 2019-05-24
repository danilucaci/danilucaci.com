import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-mdx";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import AuthorCard from "../components/AuthorCard/AuthorCard";
import ContactCard from "../components/ContactCard/ContactCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";

import {
  ArticleWrapper,
  StyledHeader,
  PostH1,
  TagsWrapper,
  Tag,
  CaseStudyDescription,
  CaseStudyImgWrapper,
  PostContent,
} from "../styles/caseStudy.styles";

class CaseStudy extends Component {
  state = {
    didLoad: false,
  };

  componentDidMount() {
    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    const supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false,
    );

    this.handlePageScroll();
    // this.removeAnchorsFromTabIndex();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
  }

  handlePageScroll = () => {
    this.handleScrollLine();
  };

  // removeHeaderTabIndex = (arr) => {
  //   arr.forEach((header) => {
  //     header.tabIndex = -1;
  //   });
  // };

  // removeAnchorsFromTabIndex = () => {
  //   const h2s = Array.from(document.querySelectorAll("h2 a"));
  //   const h3s = Array.from(document.querySelectorAll("h3 a"));
  //   const h4s = Array.from(document.querySelectorAll("h4 a"));
  //   const h5s = Array.from(document.querySelectorAll("h5 a"));

  //   // Remove the headers from tab index
  //   this.removeHeaderTabIndex(h2s);
  //   this.removeHeaderTabIndex(h3s);
  //   this.removeHeaderTabIndex(h4s);
  //   this.removeHeaderTabIndex(h5s);
  // };

  handleScrollLine = () => {
    const scrollLine = document.querySelector(".js-scrollLine");
    const scrolled = calculateScroll();
    scrollLine.style.width = scrolled + "%";
  };

  render() {
    const postNode = this.props.data.mdx;
    const postInfo = postNode.frontmatter;
    const image = postInfo.images[0].childImageSharp.fluid;
    const locale = this.props.pageContext.locale;
    const twinPost = this.props.pageContext.twinPost;
    const nextTitle = this.props.pageContext.nextTitle;
    const nextSlug = this.props.pageContext.nextSlug;
    const prevSlug = this.props.pageContext.prevSlug;
    const prevTitle = this.props.pageContext.prevTitle;

    let twinPostURL = "";

    if (locale === "en") {
      twinPostURL = "/es/trabajos/" + twinPost;
    } else if (locale === "es") {
      twinPostURL = "/work/" + twinPost;
    }

    return (
      <ErrorBoundary>
        <Layout location={this.props.location} locale={locale}>
          <SEO
            locale={locale}
            twinPostURL={twinPostURL}
            postNode={postNode}
            postSEO
            postImage={image.src}
            currentPath={this.props.location.pathname}
          />
          <SiteHeader
            twinPostURL={twinPostURL}
            showScrollIndicator
            locale={locale}
            currentPath={this.props.location.pathname}
          />
          <Main role="main" id="main">
            <ArticleWrapper>
              <StyledHeader>
                <TagsWrapper>
                  {postInfo.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagsWrapper>
                <PostH1>{postInfo.title}</PostH1>
                <CaseStudyDescription>{postInfo.snippet}</CaseStudyDescription>
              </StyledHeader>
              <CaseStudyImgWrapper didLoad={this.state.didLoad}>
                <Img
                  title={postInfo.title}
                  alt={postInfo.snippet}
                  fluid={image}
                  fadeIn
                  onLoad={() =>
                    this.setState({
                      didLoad: true,
                    })
                  }
                />
              </CaseStudyImgWrapper>
              <PostContent>
                <MDXRenderer>{postNode.code.body}</MDXRenderer>
              </PostContent>
              <AuthorCard />
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
          <SiteFooter locale={locale} />
        </Layout>
      </ErrorBoundary>
    );
  }
}

CaseStudy.propTypes = {
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
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      cody: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        snippet: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
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
        tags
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
      code {
        body
      }
    }
  }
`;
