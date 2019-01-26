import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
var FontFaceObserver = require("fontfaceobserver");
import Cookies from "js-cookie";
import { IntlProvider, addLocaleData } from "react-intl";
// Locale data
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";

import { theme } from "../theme/globalStyles";
import config from "../../data/SiteConfig";
import GlobalFonts from "../theme/globalFonts";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalHTML from "../theme/globalCSS";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import { checkForDoNotTrack } from "../helpers/helpers";
import CookieConsent from "./CookieConsent/CookieConsent";

require("./prism.css");

// console.log("env: " + process.env.GATSBY_ASSETS_URL);

// Messages
import en from "../i18n/en.json";
import es from "../i18n/es.json";

const intlMessages = { en, es };

addLocaleData([...enData, ...esData]);

const Page = styled.div`
  /* Sticky Footer  */
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 0 auto;
  }
`;

class Layout extends Component {
  state = {
    doNotTrackActive: false,
    hasGDPRConsent: false,
    hasAnalyticsConsent: true,
    askGDPRConsent: true,
    cookieName: "DaniLucaciCookieConsent",
    cookieValues: { marketing: "true", analytics: "true" },
    cookieExpires: 1500,
    // cookieSecure: false,
    // cookieDomain: "/",
  };

  componentDidMount() {
    this.checkDNT();
    this.checkGDPRStatus();
    this.checkFontsLoaded();
  }

  componentDidUpdate() {
    this.showGDPRStatus();
  }

  checkFontsLoaded = () => {
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
  };

  checkDNT = () => {
    let doNotTrack = checkForDoNotTrack();
    if (doNotTrack) {
      this.setState((prevState) => ({
        doNotTrackActive: !prevState.doNotTrackActive,
      }));
      console.log(`%cDoNotTrack Active`, "color: #79E36B");
    }
  };

  checkGDPRStatus = () => {
    let danilucaciCookieConsent = Cookies.getJSON(this.state.cookieName);
    if (danilucaciCookieConsent) {
      this.setState((prevState) => ({
        askGDPRConsent: !prevState.askGDPRConsent,
        hasGDPRConsent: !prevState.hasGDPRConsent,
      }));
    }
  };

  showGDPRStatus = () => {
    let danilucaciCookieConsent = Cookies.getJSON(this.state.cookieName);
    if (danilucaciCookieConsent) {
      console.groupCollapsed(
        `%cdanilucaci.com GDPR Consent Found`,
        "color: #79E36B"
      );
      console.log("HasGDPRConsent: ", this.state.hasGDPRConsent);
      console.log("AskGDPRConsent: ", this.state.askGDPRConsent);
      console.log("CookieSet: ", danilucaciCookieConsent);
      console.groupEnd();
    } else {
      console.groupCollapsed(
        `%cdanilucaci.com GDPR Consent Not Found`,
        "color: #79E36B"
      );
      console.log("HasGDPRConsent: ", this.state.hasGDPRConsent);
      console.log("AskGDPRConsent: ", this.state.askGDPRConsent);
      console.log("CookieSet: ", danilucaciCookieConsent);
      console.groupEnd();
    }
  };

  acceptsCookies = () => {
    Cookies.set(this.state.cookieName, this.state.cookieValues, {
      expires: this.state.cookieExpires,
    });

    this.setState((prevState) => ({
      askGDPRConsent: !prevState.askGDPRConsent,
      hasGDPRConsent: !prevState.hasGDPRConsent,
    }));

    console.log(`%cdanilucaci.com Cookies Accepted`, "color: #79E36B");
    this.showGDPRStatus();
  };

  deniesCookies = () => {
    Cookies.remove(this.state.cookieName);

    this.setState((prevState) => ({
      askGDPRConsent: !prevState.askGDPRConsent,
    }));

    console.log(`%cdanilucaci.com Cookies Removed`, "color: #79E36B");
    this.showGDPRStatus();
  };

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
    const HotjarScript = `
      <!-- Hotjar Tracking Code for www.danilucaci.com -->
      <script>
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1122540,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      </script>
    `;
    const TwitterScript = `
      window.twttr = (function(d, s, id) {
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
      }(document, "script", "twitter-wjs"));
    `;
    return (
      <ThemeProvider theme={theme}>
        <IntlProvider
          locale={this.props.locale}
          messages={intlMessages[this.props.locale]}
        >
          <Page id="back_to_top">
            <Helmet>
              <title>{config.siteTitle}</title>
              <meta name="description" content={config.siteDescription} />
              {this.state.hasAnalyticsConsent &&
                this.state.hasAnalyticsConsent &&
                HotjarScript}
            </Helmet>
            <SkipToMainContent />
            <GlobalFonts />
            <GlobalReset />
            <GlobalAria />
            <GlobalHTML />
            <SVGSprite />
            <CookieConsent
              askGDPRConsent={this.state.askGDPRConsent}
              acceptsCookies={this.acceptsCookies}
              deniesCookies={this.deniesCookies}
              doNotTrackActive={this.state.doNotTrackActive}
            />
            {this.props.children}
          </Page>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

export default Layout;
