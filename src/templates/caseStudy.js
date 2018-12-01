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
import { Copy } from "../components/Copy/Copy";
import { HR } from "../components/HR/HR";
import { calculateScroll, textPassiveEventSupport } from "../helpers/helpers";

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

const StyledHeader = styled.header`
  margin-bottom: ${rem(16)};
  background-color: ${theme.colors.gray100};
  margin-right: -${theme.gutters.s};
  margin-left: -${theme.gutters.s};
  padding: ${rem(8)} ${theme.gutters.s} ${rem(24)};

  ${mediaMin.m`
    margin-right: -${theme.gutters.m};
    margin-left: -${theme.gutters.m};
    padding: ${rem(16)} ${theme.gutters.m} ${rem(24)};
    margin-bottom: ${rem(32)};
  `};

  ${mediaMin.xxl`
    ${theme.shadow.default};
    margin-right: 0;
    margin-left: 0;
    border-left: 8px solid ${theme.colors.main600};
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

const TagsWrapper = styled.div`
  margin-bottom: ${rem(8)};
`;

const Tag = styled(Copy)`
  display: inline-block;
  margin-right: ${rem(16)};
`;

const CaseStudyImgWrapper = styled.div`
  display: block;
  max-width: ${theme.contain.blog};
  margin-left: auto;
  margin-right: auto;
`;

const PostContent = styled.section`
  display: block;

  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
    margin-bottom: ${rem(56)};
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

  figure img {
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
    background-color: ${theme.colors.gray100};
    ${theme.shadow.default};

    margin: ${rem(32)} 0;

    ${mediaMin.xl`
      width: 80vw;
      max-width: ${rem(1128)};
      margin-right: -22vw;
      margin-left: -22vw;
      padding: 8% 16%;
    `};
  }

  .pros-cons {
    display: inline-block;
    vertical-align: top;
    width: 50%;

    ${mediaMin.xxl`
      width: calc(100% - ${rem(415)});
    `};
    margin-left: ${rem(40)};
  }

  .container-375 {
    width: ${rem(375)};
    display: inline-block;
    vertical-align: top;
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
      margin-right: -${theme.gutters.m};
      margin-left: -${theme.gutters.m};
      padding: ${rem(32)} ${theme.gutters.m};
    `};

    ${mediaMin.xl`
      ${theme.shadow.default};
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
      padding: ${rem(32)} ${rem(96)};
    `};
  }

  .sub-hypothesis {
    color: ${theme.colors.main600};

    & * {
      color: ${theme.colors.main600};
    }
  }

  .toc {
    background-color: ${theme.colors.sectionBackground};
    margin: ${rem(32)};

    ${mediaMin.xl`
      margin-right: -${rem(96)};
      margin-left: -${rem(96)};
      padding: ${rem(24)} ${rem(96)};
    `};

    p + ul {
      margin-top: -${rem(32)};
    }

    ul {
      list-style-type: none;

      & li {
        margin: 0;
      }
    }

    a {
      text-decoration: none;
      color: ${theme.colors.dark900};
      margin: ${rem(16)} 0;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .toc__title {
    margin: 0;
    margin-bottom: ${rem(8)};
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
    var supportsPassive = textPassiveEventSupport();
    // Use our detect's results. passive applied if supported, capture will be false either way.
    window.addEventListener(
      "scroll",
      this.handlePageScroll,
      supportsPassive ? { passive: true } : false
    );

    this.handlePageScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePageScroll);
  }

  handlePageScroll = () => {
    this.handleScrollLine();
  };

  handleScrollLine = () => {
    let scrollLine = document.querySelector(".js-scrollLine");
    let scrolled = calculateScroll();
    scrollLine.style.width = scrolled + "%";
  };

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    const image = postInfo.image.childImageSharp.fluid;

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <SiteHeader showScrollIndicator />
        <Main role="main">
          <Wrapper>
            <StyledHeader>
              <TagsWrapper>
                {postInfo.tags &&
                  postInfo.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </TagsWrapper>
              <HR />
              <PostH1>{postInfo.title}</PostH1>
              <CaseStudyDescription>
                {postInfo.description}
              </CaseStudyDescription>
            </StyledHeader>
            <CaseStudyImgWrapper>
              <Img
                title={postInfo.title}
                alt={postInfo.description}
                fluid={image}
                // fadeIn={true}
                // add gatsby-image props here
                // https://www.gatsbyjs.org/packages/gatsby-image/
              />
            </CaseStudyImgWrapper>
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
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
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
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;
