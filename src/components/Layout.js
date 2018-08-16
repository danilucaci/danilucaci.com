import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
var FontFaceObserver = require("fontfaceobserver");

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/globalStyles";
import injectFonts from "../theme/injectFonts";
import injectReset from "../theme/injectReset";
import injectAria from "../theme/injectAria";
import injectCSS from "../theme/injectCSS";

require("./prism.css");

// console.log("env: " + process.env.GATSBY_ASSETS_URL);

import SiteHeader from "./SiteHeader/SiteHeader";
import { Main } from "./Main/Main";
import SiteFooter from "./SiteFooter/SiteFooter";

const Page = styled.div`
  /* Sticky Footer  */
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1;
  }
`;

class Layout extends Component {
  state = {
    hasScrolled: false,
    lastScrollPos: 0,
    showReadingNav: false,
    isBlogPost: false,
  };

  componentDidMount() {
    const isBlog = this.props.location.pathname.includes("/blog/");

    if (isBlog) {
      this.handleBlogPost();
    }

    if (sessionStorage.fontsLoadedPolyfill) {
      document.documentElement.className += " fonts-loaded";
      console.log("%c Fonts already loaded.", "color: #79E36B");
      return;
    } else {
      this.loadFonts();
    }
  }

  componentWillUnmount() {
    if (this.state.isBlogPost) {
      window.removeEventListener("scroll", this.scrollListener);
      window.removeEventListener("resize", this.handleResize);

      clearInterval(this.scrollInterval);
      console.log("%c Scroll Interval Removed", "color: cyan");
    }
  }

  handleBlogPost = () => {
    this.setState({
      isBlogPost: true,
    });

    addEventListener("scroll", this.scrollListener);

    console.log("%c Scroll Interval Set", `color: cyan`);

    this.scrollInterval = setInterval(() => {
      var didScroll = this.state.hasScrolled;

      if (didScroll) {
        this.hasScrolled();
        this.setState({ hasScrolled: false });
      }
    }, 800);
  };

  scrollListener = () => {
    this.setState({ hasScrolled: true });
  };

  hasScrolled = () => {
    let currentScrollPos = window.pageYOffset;
    let oldScrollPos = this.state.lastScrollPos;
    let sufficientScrollDiff = oldScrollPos - 60;

    if (currentScrollPos > 600) {
      if (currentScrollPos < sufficientScrollDiff) {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: false });
      } else {
        this.setState({ lastScrollPos: window.pageYOffset });
        this.setState({ showReadingNav: true });
      }
    } else {
      this.setState({
        showReadingNav: false,
      });
    }
  };

  loadFonts = () => {
    var fontA = new FontFaceObserver("OpenSans Regular");
    var fontB = new FontFaceObserver("OpenSans Bold", {
      weight: 700,
    });
    var fontC = new FontFaceObserver("OpenSans Italic", {
      style: "italic",
    });
    var fontD = new FontFaceObserver("Montserrat Bold", {
      weight: 700,
    });

    Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(
      function() {
        document.documentElement.className += " fonts-loaded";
        // Optimization for Repeat Views
        sessionStorage.fontsLoadedPolyfill = true;
        console.log("%c Fonts loaded.", "color: #79E36B");
      }
    );
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <SiteHeader showReadingNav={this.state.showReadingNav} />
          <Main role="main">{children}</Main>
          <SiteFooter />
        </Page>
      </ThemeProvider>
    );
  }
}

export default Layout;
