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
  loadFonts = () => {
    var fontA = new FontFaceObserver("OpenSans Regular");
    var fontB = new FontFaceObserver("OpenSans Bold", {
      weight: 700,
    });
    var fontC = new FontFaceObserver("OpenSans Italic", {
      style: "italic",
    });
    var fontD = new FontFaceObserver("Roboto Mono", {
      weight: 400,
    });
    var fontE = new FontFaceObserver("Montserrat Bold", {
      weight: 700,
    });

    Promise.all([
      fontA.load(),
      fontB.load(),
      fontC.load(),
      fontD.load(),
      fontE.load(),
    ]).then(function() {
      document.documentElement.className += " fonts-loaded";

      // Optimization for Repeat Views
      sessionStorage.fontsLoadedPolyfill = true;

      // Used for two stage font loading with datauri
      // sessionStorage.fontsLoadedCriticalFoftDataUriPolyfill = true;
      console.log("%c Fonts loaded.", "color: #79E36B");
    });
  };

  componentDidMount() {
    // Optimization for Repeat Views
    // if (sessionStorage.fontsLoadedCriticalFoftDataUriPolyfill) {
    if (sessionStorage.fontsLoadedPolyfill) {
      document.documentElement.className += " fonts-loaded";
      console.log("%c Fonts already loaded.", "color: #79E36B");
      return;
    } else {
      this.loadFonts();
    }
  }

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <SiteHeader />
          <Main role="main">{children}</Main>
          <SiteFooter />
        </Page>
      </ThemeProvider>
    );
  }
}

export default Layout;
