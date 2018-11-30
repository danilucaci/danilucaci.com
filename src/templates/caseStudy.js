import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import rehypeReact from "rehype-react";

import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import Img from "gatsby-image";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Tags from "../components/Tags/Tags";
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
`};
`;

const StyledPostHeader = styled.header`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    background-color: ${theme.colors.gray100};
    border-left: 8px solid ${theme.colors.main600};
    padding: ${rem(40)} ${rem(96)};
  `};
`;

const PostH1 = styled.h1`
  margin-bottom: ${rem(8)};

  ${mediaMin.m`
    margin-bottom: 0;
  `};

  ${mediaMin.xl`
    margin-bottom: ${rem(16)};
  `};
`;

const HRTop = styled(HR)`
  display: none;

  ${mediaMin.xxl`
    display: block;
  `};
`;

const HRBottom = styled(HR)`
  display: none;

  ${mediaMin.xs`
    display: block;
  `};

  ${mediaMin.xxl`
    display: none;
  `};
`;

const PostInfo = styled.div`
  margin-top: ${rem(8)};
  margin-bottom: ${rem(16)};

  ${mediaMin.m`
    margin-top: ${rem(4)};
  `};

  ${mediaMin.xxl`
    margin-bottom: 0;
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

const PostContent = styled.section`
  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
    margin-bottom: ${rem(56)};
  `};

  ${mediaMin.xxl`
    display: block;
    vertical-align: top;
    margin-left: calc(((100% / 10) * 1) + ${rem(24)});
    width: calc((100% / 10) * 6);
  `};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h2 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
    `};
  }

  h3 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
    `};
  }

  h4 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(32)};
      margin-top: ${rem(64)};
    `};
  }

  & h2,
  & h3,
  & h2 a,
  & h3 a {
    &:target {
      &:before {
        content: "";
        display: block;
        height: ${rem(56)}; /* fixed header height*/
        margin-top: -${rem(56)}; /* negative fixed header height */
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    margin-bottom: ${rem(32)};
  }

  .js-codeCopy {
    background-color: ${theme.colors.gray100};
    display: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.xs};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

    position: absolute;
    top: ${rem(12)};
    right: ${rem(12)};
    padding: ${rem(8)} ${rem(16)};
  }

  .gatsby-highlight {
    position: relative;

    &:hover .js-codeCopy {
      display: block;
    }
  }
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    // "item-1": Item,
    // p: Copy,
  },
}).Compiler;

class Post extends Component {
  state = {};

  componentDidMount() {
    // Test via a getter in the options object to see if the passive property is accessed
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        },
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}

    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handleBlogPostScroll,
      supportsPassive ? { passive: true } : false
    );

    this.handleBlogPostScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleBlogPostScroll);
  }

  handleBlogPostScroll = () => {
    this.handleScrollLine();
    this.handleTOCScroll();
  };

  handleScrollLine = () => {
    let scrollLine = document.querySelector(".js-scrollLine");

    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let clientHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let docScrollHeight =
      document.body.scrollHeight || document.documentElement.scrollHeight;

    let docHeight = docScrollHeight - clientHeight;

    let scrolled = (winScroll / docHeight) * 100;
    scrollLine.style.width = scrolled + "%";
  };

  /*!
   * Determine if an element is in the viewport
   * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
   * https://vanillajstoolkit.com/helpers/isinviewport/
   * @param  {Node}    element The element
   * @return {Boolean}      Returns true if element is in the viewport
   */
  isInViewport = (element) => {
    let distance = element.getBoundingClientRect();

    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  handleTOCScroll = () => {
    let h2s = Array.from(document.querySelectorAll("h2"));

    h2s.forEach((heading) => {
      let isVis = this.isInViewport(heading);

      if (isVis) {
        // console.log("heading: ", heading);
      }
    });
  };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const image = postInfo.image.childImageSharp.fluid;
    console.log("headings", postNode.headings);

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteHeader showScrollIndicator />
        <Main role="main">
          <Wrapper>
            <StyledPostHeader>
              <PostH1>{postInfo.title}</PostH1>
              <div>{postInfo.date}</div>
              <Tags tagsInPost={postInfo.tags} spaced />
              <StyledCopy>{postInfo.description}</StyledCopy>
            </StyledPostHeader>
            <Img
              title={postInfo.title}
              alt={postInfo.description}
              fluid={image}
              // fadeIn={true}
              // add gatsby-image props here
              // https://www.gatsbyjs.org/packages/gatsby-image/
            />
            {/* <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
            <PostContent>{renderAst(postNode.htmlAst)}</PostContent>
          </Wrapper>
        </Main>
        <ScrollToTop />
        <SiteFooter />
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query WorkEntryBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      h2s: headings(depth: h2) {
        value
      }
      h3s: headings(depth: h3) {
        value
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 744) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
