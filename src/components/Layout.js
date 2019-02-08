import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
var FontFaceObserver = require("fontfaceobserver");
import Cookies from "js-cookie";
import { IntlProvider, addLocaleData } from "react-intl";
import Helmet from "react-helmet";
// Locale data
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";
import ReactGA from "react-ga";

import { theme } from "../theme/globalStyles";
import GlobalFonts from "../theme/globalFonts";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalHTML from "../theme/globalCSS";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import CookieConsent from "./CookieConsent/CookieConsent";
import {
  checkForDoNotTrack,
  detectDataSaverMode,
  detectSlowConnectionType,
} from "../helpers/helpers";

require("./prism.css");

import intlMessages from "../i18n/i18n";
addLocaleData([...enData, ...esData]);

const NODE_ENV = process.env.NODE_ENV;
const DL_COOKIE_NAME = process.env.DL_COOKIE_NAME;
const DL_COOKIE_SECURE = process.env.DL_COOKIE_SECURE;
const DL_COOKIE_DOMAIN = process.env.DL_COOKIE_DOMAIN;
const GA_ID = process.env.GA_ID;

export const initGA = () => {
  console.log("%c GA Init!", "color: #79E36B");
  ReactGA.initialize(GA_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

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
    askGDPRConsent: true,
    acceptsCookie: { necessary: true, analytics: true },
    deniesCookie: { necessary: true, analytics: false },
    cookieExp: 730, // cookieExp set in days
  };

  componentDidMount() {
    this.checkGDPRStatus();
    this.checkFontsLoaded();
  }

  componentDidUpdate() {
    if (NODE_ENV === "development") {
      this.showGDPRStatus();
    }
  }

  checkFontsLoaded = () => {
    if (sessionStorage.fontsLoadedPolyfill) {
      var isLoaded = document.documentElement.className.includes(
        "fonts-loaded"
      );
      // Only add the class when it is not already added
      if (!isLoaded) {
        document.documentElement.className += " fonts-loaded";
      }
      if (NODE_ENV === "development") {
        console.log("%c Fonts already loaded.", "color: #79E36B");
      }
      return;
    } else {
      if (detectDataSaverMode() || detectSlowConnectionType()) {
        return;
      } else {
        this.loadFonts();
      }
    }
  };

  loadFonts = () => {
    var RobotoMonoRegular = new FontFaceObserver("Roboto Mono Regular");
    var RobotoMonoItalic = new FontFaceObserver("Roboto Mono Italic", {
      style: "italic",
    });
    var OpenSansRegular = new FontFaceObserver("Open Sans Regular");
    var OpenSansBold = new FontFaceObserver("Open Sans Bold", {
      weight: 700,
    });
    var OpenSansItalic = new FontFaceObserver("Open Sans Italic", {
      style: "italic",
    });
    var MontserratBold = new FontFaceObserver("Montserrat Bold", {
      weight: 700,
    });
    var MontserratRegular = new FontFaceObserver("Montserrat Regular");

    Promise.all([
      RobotoMonoRegular.load(),
      RobotoMonoItalic.load(),
      OpenSansRegular.load(),
      OpenSansBold.load(),
      OpenSansItalic.load(),
      MontserratBold.load(),
      MontserratRegular.load(),
    ]).then(function() {
      document.documentElement.className += " fonts-loaded";
      // Optimization for Repeat Views
      sessionStorage.fontsLoadedPolyfill = true;
      if (NODE_ENV === "development") {
        console.log("%c Fonts loaded.", "color: #79E36B");
      }
    });
  };

  checkGDPRStatus = () => {
    if (DL_COOKIE_NAME) {
      let DLCookie = Cookies.getJSON(DL_COOKIE_NAME);
      if (DLCookie) {
        if (DLCookie.analytics) {
          this.setState((prevState) => ({
            askGDPRConsent: !prevState.askGDPRConsent,
            hasGDPRConsent: !prevState.hasGDPRConsent,
          }));

          // Load the analytics when cookies are accepted
          this.loadGTM();

          // Don't load analytics scripts if analytics cookies are not accepted
        } else if (!DLCookie.analytics) {
          this.setState((prevState) => ({
            askGDPRConsent: !prevState.askGDPRConsent,
          }));
        }
      } else {
        if (NODE_ENV === "development") {
          console.log(`%c Didn't find a cookie.`, "color: #79E36B");
        }
      }
    } else {
      if (NODE_ENV === "development") {
        console.error("dl.com Can't read cookie name.");
      }
    }
  };

  showGDPRStatus = () => {
    if (DL_COOKIE_NAME) {
      let DLCookie = Cookies.getJSON(DL_COOKIE_NAME);
      if (DLCookie) {
        if (DLCookie.analytics) {
          console.log(`%c Cookies Accepted.`, "color: #79E36B");
        } else if (!DLCookie.analytics) {
          console.log(`%c Cookies Denied.`, "color: #79E36B");
        }
      } else {
        console.log(`%c Didn't find a cookie.`, "color: #79E36B");
      }
    } else {
      console.error("dl.com Can't read cookie name.");
    }
  };

  acceptsCookies = () => {
    const hasCookieData = DL_COOKIE_DOMAIN && DL_COOKIE_SECURE;

    if (DL_COOKIE_NAME) {
      if (hasCookieData) {
        const secure = DL_COOKIE_SECURE === "true";

        Cookies.set(DL_COOKIE_NAME, this.state.acceptsCookie, {
          expires: this.state.cookieExp,
          domain: DL_COOKIE_DOMAIN,
          secure: secure,
        });

        // Check to see if the cookie was set
        this.checkGDPRStatus();
      } else {
        if (NODE_ENV === "development") {
          console.error("Can't read cookie data.");
        }
      }
    } else {
      if (NODE_ENV === "development") {
        console.error("Can't read cookie name.");
      }
    }
  };

  deniesCookies = () => {
    const hasCookieData = DL_COOKIE_DOMAIN && DL_COOKIE_SECURE;

    if (DL_COOKIE_NAME) {
      if (hasCookieData) {
        const secure = DL_COOKIE_SECURE === "true";

        Cookies.set(DL_COOKIE_NAME, this.state.deniesCookie, {
          expires: this.state.cookieExp,
          domain: DL_COOKIE_DOMAIN,
          secure: secure,
        });

        // Check to see if the cookie was set
        this.checkGDPRStatus();
      } else {
        if (NODE_ENV === "development") {
          console.error("Can't read cookie data.");
        }
      }
    } else {
      if (NODE_ENV === "development") {
        console.error("Can't read cookie name.");
      }
    }
  };

  removeCookies = () => {
    if (DL_COOKIE_NAME) {
      Cookies.remove(DL_COOKIE_NAME);

      this.setState((prevState) => ({
        askGDPRConsent: !prevState.askGDPRConsent,
      }));
      if (NODE_ENV === "development") {
        console.log(`%c Cookies Removed`, "color: #79E36B");
      }
      this.showGDPRStatus();
    } else {
      if (NODE_ENV === "development") {
        console.error("Can't read cookie name.");
      }
    }
  };

  loadGTM = () => {
    if (!window._DL_GA_INITIALIZED) {
      initGA();
      window._DL_GA_INITIALIZED = true;
    }
    logPageView();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <IntlProvider
          locale={this.props.locale}
          messages={intlMessages[this.props.locale]}
        >
          <Page>
            {this.state.hasGDPRConsent && (
              <Helmet>
                {`<!-- Google Tag Manager -->`}
                <script>
                  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-TJ6RBXR');`}
                </script>
                {`<!-- End Google Tag Manager -->`}
              </Helmet>
            )}
            <SkipToMainContent />
            <GlobalFonts />
            <GlobalReset />
            <GlobalAria />
            <GlobalHTML />
            <SVGSprite />
            {this.state.askGDPRConsent && (
              <CookieConsent
                askGDPRConsent={this.state.askGDPRConsent}
                acceptsCookies={this.acceptsCookies}
                deniesCookies={this.deniesCookies}
                pageLocale={this.props.locale}
              />
            )}
            {this.props.children}
          </Page>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Layout;
