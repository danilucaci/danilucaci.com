import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import { theme, rem, mediaMin } from "../theme/globalStyles";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import Layout from "../components/Layout";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SiteMenuList from "../components/SiteMenuList/SiteMenuList";
import MenuButton from "../components/MenuButton/MenuButton";

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
  ${theme.shadow.header};
  width: 100%;
  display: block;
  height: ${rem(64)};
  padding: ${rem(8)} ${rem(16)};

  ${mediaMin.s`
    width: 100%;
    height: ${rem(56)};
    padding-top: 0;
    padding-right: ${rem(8)};
    padding-left: ${rem(24)};
    padding-bottom: 0;
  `};

  ${mediaMin.m`
    position: fixed;
    top: 0;
    background-color: ${theme.colors.gray100};
    height: ${rem(48)};
    padding: 0;
    z-index: 10;
    will-change: opacity;
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
  max-width: ${theme.contain.page};
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
    showNav: false,
    dropdownsState: {
      tooltipOpen: false,
      bottomReadingTocOpen: false,
      topReadingTocOpen: false,
      postTocOpen: false,
      readingShareNavOpen: false,
    },
  };

  nodeRef = React.createRef();

  // Used for loking body scrolling
  // When the specified dropdowns are active
  topReadingTOCScrollLock = null;
  bottomReadingTOCScrollLock = null;
  topReadingModeNav = null;
  bottomReadingModeNav = null;
  scrollBarGap = 0;
  imOnIOS = null;
  previousBodyOverflowValue;
  hasPaddingAdded;
  previousTopReadingPaddingRight;
  previousBottomReadingPaddingRight;

  /****************************************************************
   * React lifecycle methods
   */

  componentDidMount() {
    const copyURLButton = document.querySelector(".js-copyURL");
    copyURLButton.addEventListener("click", this.copyURL);

    this.addCopyButtonsToCodeNodes();
    this.measureScrollBar();
    // this.addGlobalClickListener();
  }

  componentDidUpdate() {
    let tooltipMessage = this.state.tooltipMessage;
    if (tooltipMessage === "Page link copied!") {
      setTimeout(() => {
        this.setState({ tooltipMessage: "Copy page link" });
      }, 1500);
    }

    // Get the className added manually to the top reading container
    // in order to add padding to it as well
    // it's position fixed so it's ignoring the body padding
    // added with body scroll lock
    if (!this.topReadingModeNav) {
      let domElement = document.querySelector(".js-topReadingNav");
      // // it's only rendered when scrolled
      if (domElement !== null) {
        this.topReadingModeNav = domElement;
      }
    }

    // Get the className added manually to the bottom reading container
    // in order to add padding to it as well
    // it's position fixed so it's ignoring the body padding
    // added with body scroll lock
    if (!this.bottomReadingModeNav) {
      let domElement = document.querySelector(".js-bottomReadingNav");
      // it's only rendered when scrolled
      if (domElement !== null) {
        this.bottomReadingModeNav = domElement;
      }
    }

    // Get the className added manually to the top reading TOC
    // Reading TOCs are rendered using context so
    // they will only show up after scrolling the page
    if (!this.topReadingTOCScrollLock) {
      this.topReadingTOCScrollLock = document.querySelector(
        ".js-topReadingTOC"
      );
    }

    if (!this.bottomReadingTOCScrollLock) {
      // Get the className added manually to the bottom reading TOC
      this.bottomReadingTOCScrollLock = document.querySelector(
        ".js-bottomReadingTOC"
      );
    }

    if (this.state.dropdownsState.topReadingTocOpen === true) {
      // Disable body scroll when reading nav is open
      this.disableBodyScroll(this.topReadingTOCScrollLock, true);
      this.previousTopReadingPaddingRight = this.topReadingTOCScrollLock.style.paddingRight;
    }

    if (this.state.dropdownsState.bottomReadingTocOpen === true) {
      // Disable body scroll when reading nav is open
      this.disableBodyScroll(this.bottomReadingTOCScrollLock, true);
      this.previousBottomReadingPaddingRight = this.bottomReadingTOCScrollLock.style.paddingRight;
    }

    if (
      this.state.dropdownsState.topReadingTocOpen === false &&
      this.state.dropdownsState.bottomReadingTocOpen === false
    ) {
      // 4. Re-enable body scroll
      this.enableBodyScroll(this.topReadingTOCScrollLock);
      this.enableBodyScroll(this.bottomReadingTOCScrollLock);
    }
  }

  componentWillUnmount() {
    // Clear all body-scroll-locks set with body-scroll-lock library
    // document.removeEventListener("click", this.addGlobalClickListener);
    this.enableBodyScroll();
  }

  /****************************************************************
   * Code to handle the body scrolling
   */

  checkIOSDevice = () => {
    this.imOnIOS =
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.platform &&
      /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(
        window.navigator.platform
      );
  };

  disableBodyScroll = (targetElement, withPadding) => {
    // From: https://github.com/willmcpo/body-scroll-lock/blob/master/src/bodyScrollLock.js
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    // This comment is valid for the other setTimeout(() => {} ↓
    setTimeout(() => {
      if (this.previousBodyOverflowValue === undefined) {
        this.previousBodyOverflowValue = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    });

    if (withPadding) {
      this.hasPaddingAdded = true;
      this.addScrollBarPadding();
    }
  };

  enableBodyScroll = () => {
    // From: https://github.com/willmcpo/body-scroll-lock/blob/master/src/bodyScrollLock.js
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    // This comment is valid for the other setTimeout(() => {} ↓
    setTimeout(() => {
      if (this.previousBodyOverflowValue !== undefined) {
        document.body.style.overflow = this.previousBodyOverflowValue;
      }
    });

    if (this.hasPaddingAdded) {
      this.removeScrollBarPadding();
    }
  };

  addScrollBarPadding = () => {
    setTimeout(() => {
      if (this.scrollBarGap > 0) {
        document.body.style.paddingRight = `${this.scrollBarGap}px`;

        if (this.previousTopReadingPaddingRight !== undefined) {
          this.topReadingModeNav.style.paddingRight = `${this.scrollBarGap}px`;
        }

        if (this.previousBottomReadingPaddingRight !== undefined) {
          this.bottomReadingModeNav.style.paddingRight = `${
            this.scrollBarGap
          }px`;
        }
      }
    });
  };

  removeScrollBarPadding = () => {
    setTimeout(() => {
      this.scrollBarGap = 0;
      document.body.style.paddingRight = `0px`;
      if (this.previousTopReadingPaddingRight !== undefined) {
        this.topReadingModeNav.style.paddingRight = this.previousTopReadingPaddingRight;
      }
      if (this.previousBottomReadingPaddingRight !== undefined) {
        this.bottomReadingModeNav.style.paddingRight = this.previousBottomReadingPaddingRight;
      }
    });
  };

  measureScrollBar = () => {
    this.scrollBarGap =
      window.innerWidth - document.documentElement.clientWidth;
  };

  /****************************************************************
   * Code to handle the nav, toc and reading dropdowns
   */

  addGlobalClickListener = () => {
    // document.addEventListener("click", this.closeAllDropdowns, true);
  };

  closeAllDropdowns = (e) => {
    // if (this.nodeRef.current.contains(e.target)) {
    //   console.log(this.nodeRef.current);
    // }

    // See this for fixed solution
    // https://github.com/styled-components/styled-components/issues/1694

    console.log(this.nodeRef.current);

    const currState = this.state.dropdownsState;
    let stateKeys = Object.keys(currState);

    stateKeys.forEach((key) => {
      if (currState[`${key}`]) {
        this.setState((prevState) => ({
          [`${key}`]: !prevState[`${key}`],
        }));
      }
    });
  };

  openNav = () => {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  };

  openTopReadingToc = () => {
    this.setState((prevState) => ({
      dropdownsState: {
        ...prevState.dropdownsState,
        topReadingTocOpen: !prevState.dropdownsState.topReadingTocOpen,
      },
    }));

    this.measureScrollBar();
  };

  openBottomReadingToc = () => {
    this.setState((prevState) => ({
      dropdownsState: {
        ...prevState.dropdownsState,
        bottomReadingTocOpen: !prevState.dropdownsState.bottomReadingTocOpen,
      },
    }));

    this.measureScrollBar();
    this.closeOthers("bottomReadingTocOpen");
  };

  openPostToc = () => {
    this.setState((prevState) => ({
      dropdownsState: {
        ...prevState.dropdownsState,
        postTocOpen: !prevState.dropdownsState.postTocOpen,
      },
    }));
  };

  openShareNav = () => {
    this.setState((prevState) => ({
      dropdownsState: {
        ...prevState.dropdownsState,
        readingShareNavOpen: !prevState.dropdownsState.readingShareNavOpen,
      },
    }));

    this.closeOthers("readingShareNavOpen");
  };

  closeOthers = (from) => {
    const currState = this.state.dropdownsState;
    let stateKeys = Object.keys(currState);
    let others = stateKeys.filter((key) => key !== `${from}`);

    others.forEach((other) => {
      // if it's set to true
      if (currState[`${other}`]) {
        this.setState((prevState) => ({
          dropdownsState: {
            ...prevState.dropdownsState,
            [`${other}`]: !prevState.dropdownsState[`${other}`],
          },
        }));
      }
    });
  };

  /****************************************************************
   * Code to handle the url copying and code snippets
   * It's all using a dummy input element which holds the content
   * Which is supposed to be copied to the clipboard
   * The content is taken from the state
   */

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
      this.setState({ tooltipMessage: "Page link copied!" });
    } catch (err) {
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
          <title>{`${postInfo.title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <ReadingModePageHeader role="banner" className="js-topReadingNav">
          <StyledNav aria-label="Page Menu" role="navigation">
            <StyledLogoLink to="/">
              <Logo />
            </StyledLogoLink>
            <ScrollConsumer>
              {(context) => {
                const showReadingNav = context.showReadingNav;
                const pageWidth = context.pageWidth;

                let topReadingToc = null;
                let topReadingSocialShare = null;

                if (pageWidth >= 840) {
                  topReadingToc = (
                    <TopReadingTOC
                      tableOfContents={postNode.tableOfContents}
                      contentVisible={
                        this.state.dropdownsState.topReadingTocOpen
                      }
                      openTopReadingToc={this.openTopReadingToc}
                      // ref={this.nodeRef}
                    />
                  );
                }

                if (pageWidth >= 1060) {
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
                      {topReadingToc}
                      {topReadingSocialShare}
                    </TopReadingPostInfo>
                  </>
                ) : (
                  <>
                    <MenuButton
                      onClick={this.openNav}
                      showNav={this.state.showNav}
                    />
                    <SiteMenuList showNav={this.state.showNav} />
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
              <PostInfo>
                <ArticleInfo
                  date={postInfo.date}
                  timeToRead={postNode.timeToRead}
                />
                <Tags tagsInPost={postInfo.tags} spaced />
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
                readOnly={true}
              />
              <PostTOC
                openPostToc={this.openPostToc}
                contentVisible={this.state.dropdownsState.postTocOpen}
                tableOfContents={postNode.tableOfContents}
                // ref={this.nodeRef}
              />
              {/* <MyDiv ref={this.nodeRef}>
              <span>SUP</span>
            </MyDiv> */}
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </PostContent>
          </Wrapper>
        </Main>

        <ScrollConsumer>
          {(context) => {
            const showReadingNav = context.showReadingNav;
            const pageWidth = context.pageWidth;

            return showReadingNav && pageWidth < 840 ? (
              <ReadingModePageNav className="js-bottomReadingNav">
                <ReadingNavCol1>
                  <BottomReadingTOC
                    tableOfContents={postNode.tableOfContents}
                    contentVisible={
                      this.state.dropdownsState.bottomReadingTocOpen
                    }
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
                    contentVisible={
                      this.state.dropdownsState.readingShareNavOpen
                    }
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

        <SiteFooter />
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
