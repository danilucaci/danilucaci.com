import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { theme, rem, mediaMin } from "../theme/globalStyles";
import Layout from "../components/Layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

import PostTOC from "../components/PostTOC/PostTOC";
import BottomReadingTOC from "../components/BottomReadingTOC/BottomReadingTOC";
import TopReadingTOC from "../components/TopReadingTOC/TopReadingTOC";
import SocialShare from "../components/SocialShare/SocialShare";
import ReadingSocialShare from "../components/ReadingSocialShare/ReadingSocialShare";
import Tags from "../components/Tags/Tags";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
import { Copy } from "../components/Copy/Copy";
import { H1 } from "../components/Headings/Headings";
import { DefaultLink } from "../components/Link/Link";
import { Logo } from "../components/Logo/Logo";
import { Icon } from "../components/Icon/Icon";

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
    color: ${theme.colors.dark900};
    display: block;

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h1s};
    line-height: ${theme.lineHeights.h1s};
    letter-spacing: ${theme.letterSpacing.h1};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h2 {
    color: ${theme.colors.dark900};
    display: block;

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h2s};
    line-height: ${theme.lineHeights.h2s};
    letter-spacing: ${theme.letterSpacing.h2};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h3 {
    color: ${theme.colors.dark900};
    display: block;

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h3s};
    line-height: ${theme.lineHeights.h3s};
    letter-spacing: ${theme.letterSpacing.h3};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
    font-size: ${theme.fontSizes.h3};
    line-height: ${theme.lineHeights.h3};
    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};
  `};
  }

  h4 {
    color: ${theme.colors.dark900};
    display: block;

    .fonts-loaded & {
      font-family: ${theme.fonts.header};
    }

    font-weight: 700;
    font-style: normal;

    font-size: ${theme.fontSizes.h4s};
    line-height: ${theme.lineHeights.h4};
    letter-spacing: ${theme.letterSpacing.h4};

    margin-bottom: ${rem(16)};
    margin-top: ${rem(32)};

    ${mediaMin.xs`
      font-size: ${theme.fontSizes.h4};
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
          height: ${rem(56)}; /* fixed header height*/
          margin-top: -${rem(56)}; /* negative fixed header height */
        `};
      }
      border-bottom: 2px solid ${theme.colors.main500};
    }
  }

  p {
    color: ${theme.colors.dark800};

    .fonts-loaded & {
      font-family: ${theme.fonts.bodyRegular};
    }

    font-weight: 400;
    font-style: normal;

    font-size: ${(props) =>
      props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};

    line-height: ${(props) =>
      props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};

    margin-bottom: ${rem(28)};
  }

  pre,
  code {
    font-family: ${theme.fonts.code};
    font-size: ${(props) =>
      props.small ? props.theme.fontSizes.s : props.theme.fontSizes.m};
    line-height: ${(props) =>
      props.small ? props.theme.lineHeights.s : props.theme.lineHeights.m};
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
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
  height: ${rem(56)};
  padding: 0 ${rem(8)} 0 ${rem(24)};

  ${theme.shadow.header};

  ${mediaMin.m`
    background-color: ${theme.colors.transparent};
    display: block;
    height: ${rem(48)};
    padding: 0;
    position: fixed;
    z-index: 10;
  `};
`;

const ReadingModePageNav = styled.nav`
  background-color: ${theme.colors.gray100};
  display: inline-table;
  line-height: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${rem(48)};

  ${theme.shadow.reading};

  ${mediaMin.xxl`
    display: none;
  `};
`;

const ReadingNavCol1 = styled.div`
  border-right: 1px solid #dadada;
  display: table-cell;
  width: 70%;
  text-align: center;

  ${mediaMin.m`
    width: 58%;
  `};
`;

const ReadingNavCol2 = styled.div`
  border-right: 1px solid #dadada;
  display: table-cell;
  width: ${rem(56)};
  text-align: center;

  ${mediaMin.m`
    width: 32%;
  `};
`;

const ReadingNavCol3 = styled.div`
  display: table-cell;
  width: ${rem(56)};
  text-align: center;
`;

const ScrollToTopLink = styled.a`
  text-decoration: none;

  &:hover {
    background-color: transparent;
  }

  &:active,
  &:focus {
    outline: 2px dashed ${theme.colors.main600};
  }

  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)} 0;
`;

const ScrollToTopIcon = styled(Icon)`
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)};
`;

const StyledLogoLink = styled(DefaultLink)`
  display: inline-block;
  width: ${theme.logoWidth};
  height: ${theme.logoHeight};
`;

const StyledPostHeader = styled.header``;

const StyledNav = styled.nav`
  display: block;
  max-width: ${theme.contain.content};
  margin-left: auto;
  margin-right: auto;

  ${mediaMin.s`
    height: ${rem(56)};
    padding-top: ${rem(4)};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};

  ${mediaMin.m`
    padding-top: 0;
    height: ${rem(48)};
    padding-right: ${theme.gutters.m};
    padding-left: ${theme.gutters.m};
  `};
`;

const PostH1 = styled(H1)`
  margin-bottom: ${rem(28)};
`;

const ReadingModeH1 = styled(H1)`
  display: inline-block;
  vertical-align: top;
  font-size: ${rem(16)} !important;
  line-height: ${rem(24)} !important;
  padding: ${rem(12)} ${rem(16)};
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
    float: right;
    display: inline-block;
    vertical-align: top;
    width: 40%;
    background-color: ${theme.colors.gray100};
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

  margin-left: auto;
  margin-right: auto;

  margin-top: ${rem(16)};

  ${mediaMin.s`
    margin-top: ${rem(32)};
  `};

  max-width: ${theme.contain.post};
`;

const DummyInput = styled.input`
  position: absolute;
  top: -1000em;
  left: -1000em;
  background-color: transparent;
  color: transparent;
`;

const MyDiv = styled.div``;

// const StyledDiv = styled(
//   React.forwardRef((props, ref) => {
//     return <MyDiv forwardedRef={ref} {...props} />;
//   })
// )`
//   background-color: red;
// `;

class Post extends Component {
  state = {
    tooltipMessage: "Copy page link",
    tooltipOpen: false,
    bottomReadingTocOpen: false,
    topReadingTocOpen: false,
    postTocOpen: false,
    readingShareNavOpen: false,
  };

  nodeRef = React.createRef();

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    this.addCopyButtonsToCodeNodes();
    // this.addGlobalClickListener();
  }

  componentDidUpdate() {
    let tooltipMessage = this.state.tooltipMessage;

    if (tooltipMessage === "Page link copied!") {
      setTimeout(() => {
        this.setState({ tooltipMessage: "Copy page link" });
      }, 1500);
    }
  }

  componentWillUnmount() {
    // document.removeEventListener("click", this.addGlobalClickListener);
  }

  addGlobalClickListener = () => {
    // document.addEventListener("click", this.closeAllDropdowns, true);
  };

  closeAllDropdowns = (e) => {
    // if (this.nodeRef.current.contains(e.target)) {
    //   console.log(this.nodeRef.current);
    // }

    // See this for fixed solution
    // https://github.com/styled-components/styled-components/pull/1923

    console.log(this.nodeRef.current);

    const currState = this.state;
    let stateKeys = Object.keys(currState);

    stateKeys.forEach((key) => {
      if (currState[`${key}`]) {
        this.setState((prevState) => ({
          [`${key}`]: !prevState[`${key}`],
        }));
      }
    });
  };

  openTopReadingToc = () => {
    this.setState((prevState) => ({
      topReadingTocOpen: !prevState.topReadingTocOpen,
    }));
  };

  openBottomReadingToc = () => {
    this.setState((prevState) => ({
      bottomReadingTocOpen: !prevState.bottomReadingTocOpen,
    }));

    this.closeOthers("bottomReadingTocOpen");
  };

  openPostToc = () => {
    this.setState((prevState) => ({
      postTocOpen: !prevState.postTocOpen,
    }));
  };

  openShareNav = () => {
    this.setState((prevState) => ({
      readingShareNavOpen: !prevState.readingShareNavOpen,
    }));

    this.closeOthers("readingShareNavOpen");
  };

  closeOthers = (from) => {
    const currState = this.state;
    let stateKeys = Object.keys(currState);

    let others = stateKeys.filter((key) => key !== `${from}`);

    others.forEach((other) => {
      // Ignore tooltipMessage to not change the message set
      if (other === "tooltipMessage") {
        return;
      } else {
        if (currState[`${other}`]) {
          // this.setState({ [`${other}`]: false });
          this.setState((prevState) => ({
            [`${other}`]: !prevState[`${other}`],
          }));
        }
      }
    });
  };

  copyURL = () => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let postURL = window.location.href;

    dummyNode.value = postURL;

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

    try {
      document.execCommand("copy");
      console.log("try");
      this.setState({ tooltipMessage: "Page link copied!" });
    } catch (err) {
      console.log("error");
      this.setState({ tooltipMessage: "Couldn't copy the link" });
    }

    window.getSelection().removeAllRanges();
  };

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

  addEventListenersToCopyButtons = () => {
    const getCopyButtons = Array.from(
      document.querySelectorAll(".js-codeCopy")
    );

    getCopyButtons.forEach((copyButton) => {
      copyButton.addEventListener("click", this.copyCode);
    });
  };

  copyCode = (e) => {
    let dummyNode = document.querySelector(".js-dummyInput");
    let currentCopyButton = e.target;

    const codeToCopy = e.target.previousElementSibling.textContent;
    dummyNode.value = codeToCopy;

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

    try {
      document.execCommand("copy");
      currentCopyButton.textContent = "Copied!";

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

  render() {
    const slug = this.props.data.markdownRemark.fields.slug;
    const postNode = this.props.data.markdownRemark;
    const postInfo = postNode.frontmatter;
    let introCopy = postInfo.intro.split("|");

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${postInfo.title} || ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <ScrollConsumer>
          {(context) => {
            const showReadingNav = context.showReadingNav;
            const pageWidth = context.pageWidth;

            let topReadingToc = null;

            if (pageWidth >= 840) {
              topReadingToc = (
                <TopReadingTOC
                  tableOfContents={postNode.tableOfContents}
                  contentVisible={this.state.topReadingTocOpen}
                  openTopReadingToc={this.openTopReadingToc}
                  // ref={this.nodeRef}
                />
              );
            }

            return showReadingNav && pageWidth >= 400 ? (
              <ReadingModePageHeader role="banner">
                <StyledNav aria-label="Page Menu" role="navigation">
                  <StyledLogoLink to="/">
                    <Logo />
                  </StyledLogoLink>
                  <ReadingModeH1>{postInfo.title}</ReadingModeH1>
                  {topReadingToc}
                </StyledNav>
              </ReadingModePageHeader>
            ) : null;
          }}
        </ScrollConsumer>

        <Wrapper>
          <StyledPostHeader>
            <PostH1>{postInfo.title}</PostH1>
            <PostInfo>
              <ArticleInfo
                date={postInfo.date}
                timeToRead={postNode.timeToRead}
              />
              <Tags tagsInPost={postInfo.tagsInPost} spaced />
              <SocialShare
                slug={slug}
                title={postInfo.title}
                snippet={postInfo.snippet}
                onClick={this.copyURL}
                tooltipMessage={this.state.tooltipMessage}
              />
            </PostInfo>
            <StyledIntro>
              {introCopy.map((paragraph) => (
                <StyledCopy key={paragraph}>{paragraph}</StyledCopy>
              ))}
            </StyledIntro>
          </StyledPostHeader>
          <PostContent>
            <DummyInput
              className="js-dummyInput"
              contentEditable="true"
              readOnly="true"
            />
            <PostTOC
              openPostToc={this.openPostToc}
              contentVisible={this.state.postTocOpen}
              tableOfContents={postNode.tableOfContents}
              // ref={this.nodeRef}
            />
            {/* <MyDiv ref={this.nodeRef}>
              <span>SUP</span>
            </MyDiv> */}
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </PostContent>
        </Wrapper>
        <ScrollConsumer>
          {(context) => {
            const showReadingNav = context.showReadingNav;
            const pageWidth = context.pageWidth;

            return showReadingNav && pageWidth < 840 ? (
              <ReadingModePageNav>
                <ReadingNavCol1>
                  <BottomReadingTOC
                    tableOfContents={postNode.tableOfContents}
                    contentVisible={this.state.bottomReadingTocOpen}
                    openBottomReadingToc={this.openBottomReadingToc}
                    // ref={this.nodeRef}
                  />
                </ReadingNavCol1>
                <ReadingNavCol2>
                  <ReadingSocialShare
                    slug={slug}
                    title={postInfo.title}
                    snippet={postInfo.snippet}
                    onClick={this.copyURL}
                    tooltipMessage={this.state.tooltipMessage}
                    openShareNav={this.openShareNav}
                    contentVisible={this.state.readingShareNavOpen}
                    // ref={this.nodeRef}
                  />
                </ReadingNavCol2>
                <ReadingNavCol3>
                  <ScrollToTopLink href="#scrollTop">
                    <ScrollToTopIcon>
                      <use xlinkHref="#up" />
                    </ScrollToTopIcon>
                  </ScrollToTopLink>
                </ReadingNavCol3>
              </ReadingModePageNav>
            ) : null;
          }}
        </ScrollConsumer>
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        snippet
        intro
        category
        tags
      }
      tableOfContents
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
