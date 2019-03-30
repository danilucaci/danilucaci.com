import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import rehypeReact from "rehype-react";
import { FormattedMessage } from "react-intl";
import Img from "gatsby-image";

import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import AuthorCard from "../components/AuthorCard/AuthorCard";

import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";

import {
  ArticleWrapper,
  StyledHeader,
  PostH1,
  CaseStudyDescription,
  CaseStudyImgWrapper,
  OverviewContainer,
  OverviewIntro,
  OverviewItems,
  OverviewItem,
  OverviewListLink,
  PostContent,
} from "./styles/caseStudy";

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {
//     "item-1": Item,
//     p: Copy,
//   },
// }).Compiler;

class CaseStudy extends Component {
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
    this.removeAnchorsFromTabIndex();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
  }

  handlePageScroll = () => {
    this.handleScrollLine();
  };

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

  handleScrollLine = () => {
    const scrollLine = document.querySelector(".js-scrollLine");
    const scrolled = calculateScroll();
    scrollLine.style.width = scrolled + "%";
  };

  render() {
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const introCopy = postInfo.intro.split("|");
    const tools = postInfo.tools;
    const deliverables = postInfo.deliverables;
    const methods = postInfo.methods;
    const links = postInfo.links;
    const image = postInfo.image.childImageSharp.fluid;
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
              {/* <TagsWrapper>
                {postInfo.tags &&
                  postInfo.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </TagsWrapper> */}
              <PostH1>{postInfo.title}</PostH1>
              {/* <HR /> */}
              <CaseStudyDescription>{postInfo.snippet}</CaseStudyDescription>
            </StyledHeader>
            <CaseStudyImgWrapper>
              <Img
                title={postInfo.title}
                alt={postInfo.snippet}
                fluid={image}
                // fadeIn={true}
                // add gatsby-image props here
                // https://www.gatsbyjs.org/packages/gatsby-image/
              />
            </CaseStudyImgWrapper>
            <OverviewContainer>
              <OverviewIntro>
                <FormattedMessage id="caseStudyOverview">
                  {(txt) => <h2>{txt}</h2>}
                </FormattedMessage>
                {introCopy.map((entry) => (
                  <p key={entry}>{entry}</p>
                ))}
              </OverviewIntro>
              <OverviewItems>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewTools">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewDeliverables">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewMethods">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewLinks">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {links.map((link) => (
                      <li key={link.name}>
                        <OverviewListLink
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </OverviewListLink>
                      </li>
                    ))}
                  </ul>
                </OverviewItem>
              </OverviewItems>
            </OverviewContainer>
            <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
            {/* <PostContent>{renderAst(postNode.htmlAst)}</PostContent> */}
            <AuthorCard />
          </ArticleWrapper>
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
        <SiteFooter locale={locale} />
      </Layout>
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
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        snippet: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        tools: PropTypes.arrayOf(PropTypes.string).isRequired,
        deliverables: PropTypes.arrayOf(PropTypes.string).isRequired,
        methods: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.array.isRequired,
      }),
      html: PropTypes.string.isRequired,
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        snippet
        intro
        tools
        deliverables
        methods
        links {
          name
          link
        }
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1128) {
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
