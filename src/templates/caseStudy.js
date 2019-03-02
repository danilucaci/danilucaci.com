import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
// import rehypeReact from "rehype-react";
import { FormattedMessage } from "react-intl";

import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import Img from "gatsby-image";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import SiblingPosts from "../components/SiblingPosts/SiblingPosts";
import AuthorCard from "../components/AuthorCard/AuthorCard";

import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";

const ArticleWrapper = styled.article``;

const StyledHeader = styled.header`
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
`};

  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};

  ${mediaMin.l`
    background-color: ${theme.colors.gray100};
    border-left: 8px solid ${theme.colors.main600};
    padding: ${rem(32)} ${rem(48)};
    margin-top: 0;
    margin-bottom: 0;
    ${theme.shadow.default};
  `};

  ${mediaMin.xxl`
    padding: ${rem(24)} ${rem(96)} ${rem(40)};
  `};
`;

const PostH1 = styled.h1`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-top: ${rem(16)};
    margin-bottom: ${rem(16)};
  `};
`;

const CaseStudyDescription = styled(Copy)`
  font-size: ${rem(24)};
  line-height: ${rem(40)};
`;

const TagsWrapper = styled.div``;

const Tag = styled(Copy)`
  display: inline-block;
  margin-right: ${rem(16)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(8)};

  ${mediaMin.xxl`
    margin-right: ${rem(24)};
  `};
`;

const CaseStudyImgWrapper = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col8};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.l`
    margin-top: ${rem(64)};
    margin-bottom: ${rem(64)};
  `};
`;

const OverviewContainer = styled.div`
  background-color: ${theme.colors.sectionBackground};
  width: 100%;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};

  margin: ${rem(32)} 0 ${rem(64)};

  ${mediaMin.m`    
    padding-top: ${rem(88)};
    padding-bottom: ${rem(88)};
    margin: ${rem(64)} 0 ${rem(112)};
  `};
`;

const OverviewIntro = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${rem(32)};

  ${mediaMin.m`    
    margin-bottom: ${rem(64)};
  `};

  p:first-of-type {
    margin-bottom: ${rem(32)};
  }

  h2 {
    display: block;
    margin-bottom: ${rem(16)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
    `};
  }
`;

const OverviewItems = styled.div`
  display: block;
  max-width: ${theme.contain.inner.col10};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.s`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `};
`;

const OverviewItem = styled.div`
  display: block;

  h4 {
    margin-bottom: ${rem(16)};
  }

  ${mediaMin.s`
    display: inline-block;
    vertical-align: top;
    flex: 1 1 auto;
    width: calc((100% / 2) - ${rem(32)});
  `};

  ${mediaMin.xl`
    flex: 1 1 auto;
    width: calc((100% / 4) - ${rem(32)});
  `};

  & + & {
    ${mediaMin.xl`
      margin-left: ${rem(32)};
    `};
  }
`;

const OverviewListLink = styled.a`
  display: block;
`;

const PostContent = styled.section`
  display: block;

  max-width: ${theme.contain.inner.col6};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

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

    &:first-of-type {
      margin-top: 0;
    }

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
  }

  h5 {
    display: block;
    margin-top: ${rem(32)};
    margin-bottom: ${rem(16)};
  }

  .toc {
    background-color: ${theme.colors.sectionBackground};
    margin: ${rem(32)} -${theme.gutters.s};
    padding: ${rem(24)} ${theme.gutters.s};

    ${mediaMin.s`
      margin: ${rem(32)} -${theme.gutters.m};
      padding: ${rem(32)} ${theme.gutters.m};
    `};

    ${mediaMin.l`
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
      padding: ${rem(32)} ${rem(96)};
    `};

    p + ul {
      margin-top: -${rem(32)};
    }

    ul {
      list-style-type: none;

      & li {
        margin: ${rem(8)} 0;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    a {
      text-decoration: none;
      color: ${theme.colors.dark900};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin-bottom: ${rem(32)};
  }

  p + ul {
    margin-top: -${rem(16)};
  }

  ul + p {
    margin-top: ${rem(32)};
  }

  ul {
    list-style-type: disc;
    list-style-position: outside;
  }

  li {
    margin-left: ${rem(24)};
  }

  strong {
    color: ${theme.colors.dark800};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyBold};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.m};
    line-height: ${theme.lineHeights.m};
  }

  figure img,
  figure video {
    ${theme.shadow.image} !important;
  }

  .container-8col {
    ${mediaMin.xl`
      width: ${rem(744)};
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
    `};
  }

  .container-12col {
    margin: ${rem(32)} 0;
    padding-top: ${rem(32)};

    ${mediaMin.xxl`
      & .container-375 {
        margin-bottom: 0;
      }
    `};

    ${mediaMin.xxl`
      display: flex;
      justify-content: center;
      max-width: ${rem(1008)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};

    ${mediaMin.xxxl`
      display: flex;
      justify-content: center;
      max-width: ${rem(1128)};
      margin-right: -${rem(288)};
      margin-left: -${rem(288)};
    `};
  }

  .container-wireflow {
    margin: ${rem(32)} 0;

    ${mediaMin.xxl`
      max-width: ${rem(1008)};
      margin-right: -${rem(216)};
      margin-left: -${rem(216)};
    `};

    ${mediaMin.xxxl`
      max-width: ${rem(1128)};
      margin-right: -${rem(288)};
      margin-left: -${rem(288)};
    `};
  }

  .pros-cons {
    margin-top: ${rem(32)};

    ${mediaMin.xxl`
      margin-top: 0;
      display: inline-block;
      vertical-align: top;
      width: calc(50% - ${rem(32)});
    `};
  }

  .pros-cons__component > h4 {
    margin-top: 0;
  }

  .pros-cons__component:first-of-type {
    ${mediaMin.xxl`
      margin-bottom: ${rem(32)};
    `};
  }

  .l-screenshot {
    width: 100%;
    margin-bottom: ${rem(32)};

    & > figure {
      margin: 0;
    }

    & > p {
      display: none;
    }

    & + h3 {
      margin-top: ${rem(32)};
    }

    ${mediaMin.xxl`
      display: inline-block;
      vertical-align: top;
    `};
  }

  .l-screenshot--contain-320 {
    ${mediaMin.xxs`
      max-width: ${rem(320)};
    `};
  }

  .l-screenshot--contain-375 {
    ${mediaMin.xxs`
      max-width: ${rem(375)};
    `};
  }

  .l-screenshot:first-of-type {
    ${mediaMin.xxl`
      margin-right: ${rem(32)};
    `};
  }

  .l-screenshot:first-of-type {
    ${mediaMin.xxl`
      margin-right: ${rem(32)};
    `};
  }

  .l-screenshot:nth-of-type(3) {
    ${mediaMin.xxl`
      margin-left: ${rem(32)};
    `};
  }

  blockquote {
    background-color: ${theme.colors.gray100};

    & > p {
      color: ${theme.colors.main600};
      margin-bottom: 0;
    }

    strong {
      color: ${theme.colors.main600};
    }

    margin-top: ${rem(32)};
    margin-bottom: ${rem(32)};

    margin-right: -${theme.gutters.s};
    margin-left: -${theme.gutters.s};
    padding: ${rem(16)} ${theme.gutters.s};

    ${mediaMin.m`
      border-left: 8px solid ${theme.colors.main600};
      margin-right: -${theme.gutters.m};
      margin-left: -${theme.gutters.m};
      padding: ${rem(32)} ${theme.gutters.m};
    `};

    ${mediaMin.xl`
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
      padding: ${rem(32)} ${rem(96)};
    `};
  }
`;

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {
//     "item-1": Item,
//     p: Copy,
//   },
// }).Compiler;

class CaseStudy extends Component {
  state = {};

  componentDidMount() {
    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false
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
    let scrollLine = document.querySelector(".js-scrollLine");
    let scrolled = calculateScroll();
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

    console.log(prevSlug);
    console.log(nextSlug);
    console.log(prevTitle);
    console.log(nextTitle);

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
              <TagsWrapper>
                {postInfo.tags &&
                  postInfo.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </TagsWrapper>
              <HR />
              <PostH1>{postInfo.title}</PostH1>
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
                {introCopy.map((entry, index) => (
                  <p key={index}>{entry}</p>
                ))}
              </OverviewIntro>
              <OverviewItems>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewTools">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {tools.map((entry, index) => (
                      <li key={index}>{entry}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewDeliverables">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {deliverables.map((entry, index) => (
                      <li key={index}>{entry}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewMethods">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {methods.map((entry, index) => (
                      <li key={index}>{entry}</li>
                    ))}
                  </ul>
                </OverviewItem>
                <OverviewItem>
                  <FormattedMessage id="caseStudyOverviewLinks">
                    {(txt) => <h4>{txt}</h4>}
                  </FormattedMessage>
                  <ul>
                    {links.map((entry, index) => (
                      <li key={index}>
                        <OverviewListLink
                          href={entry.link}
                          target="_blank"
                          rel="noopener"
                          key={index}
                        >
                          {entry.name}
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
  }),
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
  }),
};

export default CaseStudy;

export const pageQuery = graphql`
  query WorkEntryBySlug($slug: String) {
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
            fluid(maxWidth: 936) {
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
