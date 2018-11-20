import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import rehypeReact from "rehype-react";

import { theme, rem, mediaMin, mediaMax } from "../theme/globalStyles";
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
import ReadTime from "../components/ReadTime/ReadTime";
import ArticleDate from "../components/ArticleDate/ArticleDate";
import { Copy } from "../components/Copy/Copy";
import { DefaultLink } from "../components/Link/Link";
import { Logo } from "../components/Logo/Logo";
import { HR } from "../components/HR/HR";

import { ScrollConsumer } from "../components/ScrollProvider/ScrollProvider";

const PostWrapper = styled.div`
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

const SiteHeader = styled.header`
  background-color: ${theme.colors.gray100};
  ${theme.shadow.navbar};
  width: 100%;

  ${mediaMin.m`
    background-color: ${theme.colors.gray100};
    position: fixed;
    top: 0;
    z-index: 10;
  `};
`;

const StyledSiteNav = styled.nav`
  display: flex;
  justify-content: space-between;

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

const ReadingModeH1 = styled.h4`
  font-size: ${rem(16)} !important;
  line-height: ${rem(24)} !important;
  padding: ${rem(8)} ${rem(16)} ${rem(8)} ${rem(8)};
`;

const ReadingModeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(8)};
  flex: 1;
  will-change: transform, opacity;
  position: absolute;

  ${mediaMin.l`
    transform: translateY(-10em);
    opacity: 0;
    transition: transform, opacity ease 0.15s;

    ${(props) =>
      props.slideDown &&
      css`
        transform: translateY(0);
        opacity: 1;
      `};
    `};
`;

const ReadingModeSocialWrapper = styled.div`
  display: inline-block;
  align-self: flex-end;
  margin-bottom: ${rem(4)};
  position: absolute;
`;

const StyledPostHeader = styled.header`
  margin-bottom: ${rem(16)};

  ${mediaMin.xxl`
    background-color: ${theme.colors.gray100};
    border-left: 8px solid ${theme.colors.main600};
    padding: ${rem(40)} ${rem(96)} ${rem(16)} ${rem(96)};
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

const PostDateReadTimeWrapper = styled.div`
  display: inline-block;
  margin-right: ${rem(24)};
`;

const PostAside = styled.aside`
  margin-top: ${rem(16)};
  outline: 1px solid;

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};

  ${mediaMax.xl`
    margin-top: ${rem(16)};
    margin-bottom: ${rem(32)};
  `};

  ${mediaMin.xl`
    float: right;
    margin-left: calc(((100% / 10) * 1) + ${rem(24)});
    width: calc(((100% / 10) * 3) - ${rem(24)});
  `};
`;

const StyledCopy = styled(Copy)`
  margin-bottom: ${rem(32)};
`;

const PostContent = styled.section`
  outline: 1px solid;
  max-width: ${theme.contain.post};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
    margin-bottom: ${rem(56)};
  `};

  ${mediaMin.xxl`
    display: inline-block;
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

const DummyInput = styled.textarea`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

const Item = styled.div`
  background-color: red;
  display: block;
  margin: 40px;
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    // "item-1": Item,
    // p: Copy,
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
    let introCopy = postInfo.intro.split("|");

    console.log("headings", postNode.headings);

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <SiteHeader role="banner">
          <StyledSiteNav aria-label="Page Menu" role="navigation">
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
                      topReading
                    />
                  );
                }

                return showReadingNav ? (
                  <>
                    <ReadingModeWrapper slideDown>
                      <ReadingModeH1>{postInfo.title}</ReadingModeH1>
                      <ReadingModeSocialWrapper>
                        {topReadingSocialShare}
                      </ReadingModeSocialWrapper>
                    </ReadingModeWrapper>
                    <MenuButton
                      onClick={this.openNav}
                      showNav={this.state.showNav}
                    />
                    <SiteNavList
                      showNav={this.state.showNav}
                      slideUp={showReadingNav}
                    />
                  </>
                ) : (
                  <>
                    <ReadingModeWrapper>
                      <ReadingModeH1>{postInfo.title}</ReadingModeH1>
                      <ReadingModeSocialWrapper>
                        {topReadingSocialShare}
                      </ReadingModeSocialWrapper>
                    </ReadingModeWrapper>
                    <MenuButton
                      onClick={this.openNav}
                      showNav={this.state.showNav}
                    />
                    <SiteNavList showNav={this.state.showNav} />
                  </>
                );
              }}
            </ScrollConsumer>
          </StyledSiteNav>
        </SiteHeader>

        <Main role="main">
          <PostWrapper>
            <StyledPostHeader>
              <PostH1>{postInfo.title}</PostH1>
              <HRTop />
              <PostInfo>
                <PostDateReadTimeWrapper>
                  <ArticleDate date={postInfo.date} />
                  <ReadTime timeToRead={postNode.timeToRead} />
                </PostDateReadTimeWrapper>
                <Tags tagsInPost={postInfo.tags} inline />
              </PostInfo>
            </StyledPostHeader>
            <HRBottom />
            <PostAside>
              <SocialShare
                slug={slug}
                title={postInfo.title}
                snippet={postInfo.snippet}
                onClick={this.copyURL}
                tooltipMessage={this.state.tooltipMessage}
              />
            </PostAside>
            <PostContent>
              <React.Fragment>
                {introCopy.map((paragraph) => (
                  <StyledCopy key={paragraph}>{paragraph}</StyledCopy>
                ))}
              </React.Fragment>
              {renderAst(postNode.htmlAst)}
            </PostContent>
          </PostWrapper>
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
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      headings(depth: h2) {
        value
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        snippet
        intro
        category
        tags
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
