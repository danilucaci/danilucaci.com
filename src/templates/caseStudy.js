import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import rehypeReact from "rehype-react";

import { theme, rem, mediaMin } from "../theme/globalStyles";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SiteNavList from "../components/SiteNavList/SiteNavList";
import MenuButton from "../components/MenuButton/MenuButton";
import SocialShare from "../components/SocialShare/SocialShare";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Tags from "../components/Tags/Tags";
import { Copy } from "../components/Copy/Copy";
import { Logo } from "../components/Logo/Logo";

import { ScrollConsumer } from "../components/ScrollProvider/ScrollProvider";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};

  margin-left: auto;
  margin-right: auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.s};
    padding-right: ${theme.gutters.s};
`};

  header h1,
  nav h3 {
    margin-top: 0 !important;
  }

  h1 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(16)};
      margin-top: ${rem(32)};
    `};
  }

  h2 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(16)};
      margin-top: ${rem(32)};
    `};
  }

  h3 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(16)};
      margin-top: ${rem(32)};
    `};
  }

  h4 {
    display: block;

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      margin-bottom: ${rem(28)};
      margin-top: ${rem(56)};
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
        height: ${rem(48)}; /* fixed header height*/
        margin-top: -${rem(48)}; /* negative fixed header height */

        ${mediaMin.s`
          height: ${rem(56)}; /* fixed header height */
          margin-top: -${rem(56)}; /* negative fixed header height */
        `};
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    margin-bottom: ${rem(28)};
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

const ReadingModePageHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.navbar};
  width: 100%;
  display: block;

  ${mediaMin.m`
    background-color: ${theme.colors.gray100};
    position: fixed;
    top: 0;
    z-index: 10;
  `};
`;

const StyledPostHeader = styled.header``;

const StyledNav = styled.nav`
  display: block;
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;
  padding-right: ${theme.gutters.s};
  padding-left: ${theme.gutters.s};

  ${mediaMin.s`
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};
`;

const PostH1 = styled.h1`
  margin-bottom: ${rem(28)};
`;

const ReadingModeH1 = styled.h1`
  display: inline-block;
  vertical-align: top;
  font-size: ${rem(16)} !important;
  line-height: ${rem(24)} !important;
  padding: ${rem(12)} ${rem(16)};
`;

const TopReadingPostInfo = styled.div`
  float: right;

  & > div {
    display: inline-block;
  }

  & > div:nth-of-type(2) {
    margin-left: ${rem(24)};
  }
`;

const StyledIntro = styled.div`
  ${mediaMin.m`
    display: inline-block;
    vertical-align: top;
    width: calc(60% - ${rem(24)});
    margin-right: ${rem(24)};
`};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(28)};
`;

const PostInfo = styled.aside`
  ${mediaMin.m`
    background-color: ${theme.colors.gray100};
    ${theme.shadow.subtle};
    float: right;
    display: inline-block;
    vertical-align: top;
    width: 40%;
    padding: ${rem(16)} ${rem(24)};
  `};
`;

const PostContent = styled.section`
  a:active,
  a:focus {
    outline: 2px dashed ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
  }

  a:visited,
  a:link {
    color: ${theme.colors.main600};
  }

  a:hover {
    color: ${theme.colors.main600};
    background-color: ${theme.colors.gray300};
    cursor: pointer;
  }

  /* bug fix for images wrapped in p tags by markdown
   * markdown wraps any non-block element in a p tag
   * but if I use showCaption in gatsby-config gatsby-remark-images
   * the images are transformed into a figure which are block level
   * so the image will be moved outside of the p tag
   ******************************************************
   * KEEP TRYING THIS IF IT STILL HOLDS UP
   ******************************************************
   */
  p:empty {
    display: none !important;
  }

  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};

  max-width: ${theme.contain.post};

  .gatsby-resp-image-figcaption {
    color: ${theme.colors.dark800};
    font-size: ${theme.fontSizes.s};
    line-height: ${theme.lineHeights.s};
  }
`;

const DummyInput = styled.textarea`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

const renderAst = new rehypeReact({
  // createElement: (component, props = {}, children = []) => {
  // if (component === "div") {
  // return <React.Fragment {...props}>{children}</React.Fragment>;
  // }
  // return React.createElement(component, props, children);
  // },
  createElement: React.createElement,
  components: {
    p: Copy,
  },
}).Compiler;

class Post extends Component {
  state = {
    tooltipMessage: "Copy page link",
    showNav: false,
    dropdownsState: {
      tooltipOpen: false,
    },
  };

  /****************************************************************
   * React lifecycle methods
   */

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    this.addCopyButtonsToCodeNodes();
  }

  componentDidUpdate() {
    let tooltipMessage = this.state.tooltipMessage;
    if (tooltipMessage === "Page link copied!") {
      setTimeout(() => {
        this.setState({ tooltipMessage: "Copy page link" });
      }, 1500);
    }
  }

  openNav = () => {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  };

  /****************************************************************
   * Code to handle the url copying and code snippets
   * It's all using a dummy input element which holds the content
   * Which is supposed to be copied to the clipboard
   * The content is taken from the state
   */
  copyURL = () => {
    let dummyNode = document.querySelector(".js-dummyInput");
    dummyNode.value = window.location.href;

    this.selectDummyNodeForCopy(dummyNode);

    try {
      document.execCommand("copy");
      this.setState({ tooltipMessage: "Page link copied!" });
    } catch (err) {
      this.setState({ tooltipMessage: "Couldn't copy the link" });
    }

    window.getSelection().removeAllRanges();
  };

  /*****************************************************************
   * Get each code hightlight made by gatsby and insert a span tag
   * to attach a click listener to trigger the code copying logic
   */
  addCopyButtonsToCodeNodes = () => {
    const getCodeNodes = Array.from(
      document.querySelectorAll(".gatsby-highlight")
    );

    getCodeNodes.forEach((codeNode) => {
      const copyLink = document.createElement("span");
      copyLink.textContent = "Copy";
      copyLink.className = "js-codeCopy";
      codeNode.appendChild(copyLink);
    });

    this.addEventListenersToCopyButtons();
  };

  /*****************************************************************
   * Get all the inserted span tags to trigger the code copying
   */
  addEventListenersToCopyButtons = () => {
    const getCopyButtons = Array.from(
      document.querySelectorAll(".js-codeCopy")
    );

    getCopyButtons.forEach((copyButton) => {
      copyButton.addEventListener("click", this.copyCode);
    });
  };

  /*****************************************************************
   * Get the textContent of the clicked inserted copy tag and
   * insert into the dummy input element to be able to use
   * execCommand("copy") as it only works on input elements
   */
  copyCode = (e) => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let currentCopyButton = e.target;

    dummyNode.value = e.target.previousElementSibling.textContent;

    this.selectDummyNodeForCopy(dummyNode);

    try {
      document.execCommand("copy");
      currentCopyButton.textContent = "Copied!";

      // If the textContent was changed, trigger a setTimeout after 2500ms
      // and change it back to "Copy"
      if (currentCopyButton.textContent === "Copied!") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2500);
      }
    } catch (err) {
      currentCopyButton.textContent = "Couldn't copy";
      if (currentCopyButton.textContent === "Couldn't copy") {
        setTimeout(() => {
          currentCopyButton.textContent = "Copy";
        }, 2500);
      }
    }

    window.getSelection().removeAllRanges();
  };

  selectDummyNodeForCopy = (dummyNode) => {
    // For iOS
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let range = document.createRange();
      range.selectNodeContents(dummyNode);

      let select = window.getSelection();
      select.removeAllRanges();
      select.addRange(range);
      dummyNode.setSelectionRange(0, 999999);
      dummyNode.blur();
    } else {
      dummyNode.select();
      dummyNode.blur();
    }
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

        <ReadingModePageHeader role="banner" className="js-topReadingNav">
          <StyledNav aria-label="Page Menu" role="navigation">
            <Logo />
            <ScrollConsumer>
              {(context) => {
                const showReadingNav = context.showReadingNav;
                const pageWidth = context.pageWidth;

                let topReadingSocialShare = null;

                if (pageWidth >= 860) {
                  topReadingSocialShare = (
                    <SocialShare
                      slug={slug}
                      title={postInfo.title}
                      snippet={postInfo.snippet}
                      onClick={this.copyURL}
                      tooltipMessage={this.state.tooltipMessage}
                      topReading={true}
                    />
                  );
                }

                return showReadingNav ? (
                  <>
                    <ReadingModeH1>{postInfo.title}</ReadingModeH1>
                    <TopReadingPostInfo>
                      {topReadingSocialShare}
                    </TopReadingPostInfo>
                    <MenuButton
                      onClick={this.openNav}
                      showNav={this.state.showNav}
                    />
                    <SiteNavList showNav={this.state.showNav} />
                  </>
                ) : (
                  <>
                    <MenuButton
                      onClick={this.openNav}
                      showNav={this.state.showNav}
                    />
                    <SiteNavList showNav={this.state.showNav} />
                  </>
                );
              }}
            </ScrollConsumer>
          </StyledNav>
        </ReadingModePageHeader>

        <Main role="main">
          <Wrapper>
            <StyledPostHeader>
              <PostH1>{postInfo.title}</PostH1>
              <div>{postInfo.date}</div>
              <Tags tagsInPost={postInfo.tags} spaced />
              <SocialShare
                slug={slug}
                title={postInfo.title}
                snippet={postInfo.snippet}
                onClick={this.copyURL}
                tooltipMessage={this.state.tooltipMessage}
              />
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
          <DummyInput
            className="js-dummyInput"
            contentEditable={true}
            readOnly={true}
            suppressContentEditableWarning={true}
          />
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
      headings(depth: h2) {
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
