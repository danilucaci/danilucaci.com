import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
var FontFaceObserver = require("fontfaceobserver");

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/globalStyles";
import GlobalFonts from "../theme/globalFonts";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalHTML from "../theme/globalCSS";
import { SVGSprite } from "./SVGSprite/SVGSprite";

require("./prism.css");

// console.log("env: " + process.env.GATSBY_ASSETS_URL);

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
  state = {};

  componentDidMount() {
    if (sessionStorage.fontsLoadedPolyfill) {
      var isLoaded = document.documentElement.className.indexOf("fonts-loaded");

      // Only add the class when it is not already added
      if (isLoaded === -1) {
        document.documentElement.className += " fonts-loaded";
      }

      console.log("%c Fonts already loaded.", "color: #79E36B");
      return;
    } else {
      this.loadFonts();
    }
  }

  loadFonts = () => {
    var OpenSansRegular = new FontFaceObserver("OpenSans Regular");
    var OpenSansBold = new FontFaceObserver("OpenSans Bold", {
      weight: 700,
    });
    var OpenSansItalic = new FontFaceObserver("OpenSans Italic", {
      style: "italic",
    });
    var MontserratBold = new FontFaceObserver("Montserrat Bold", {
      weight: 700,
    });

    Promise.all([
      OpenSansRegular.load(),
      OpenSansBold.load(),
      OpenSansItalic.load(),
      MontserratBold.load(),
    ]).then(function() {
      document.documentElement.className += " fonts-loaded";
      // Optimization for Repeat Views
      sessionStorage.fontsLoadedPolyfill = true;
      console.log("%c Fonts loaded.", "color: #79E36B");
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page id="scrollTop">
          <GlobalFonts />
          <GlobalReset />
          <GlobalAria />
          <GlobalHTML />
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
            {/* Twitter */}
            <script>
              {`window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function(f) {
                  t._e.push(f);
                };
                return t;
              }(document, "script", "twitter-wjs"));`}
            </script>
          </Helmet>
          <SVGSprite />
          {this.props.children}
        </Page>
      </ThemeProvider>
    );
  }
}

export default Layout;
