import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Cookies from "js-cookie";
import ReactGA from "react-ga";
import Helmet from "react-helmet";
import * as Sentry from "@sentry/browser";

import { IntlProvider, addLocaleData } from "react-intl";
// Locale data
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";

import { Page } from "./styles";
import { theme } from "../theme/globalStyles";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalCSS from "../theme/globalCSS";
import GlobalGrid from "../theme/globalGrid";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import CookieConsent from "./CookieConsent/CookieConsent";
import { detectDataSaverMode, detectSlowConnectionType } from "../helpers/helpers";

import intlMessages from "../i18n/i18n";

addLocaleData([...enData, ...esData]);

const FontFaceObserver = require("fontfaceobserver");

require("../theme/prism.css");

const NODE_ENV = process.env.NODE_ENV;
const GATSBY_DL_CONSENT_COOKIE_NAME = process.env.GATSBY_DL_CONSENT_COOKIE_NAME;
const GATSBY_DL_COOKIE_NAME = process.env.GATSBY_DL_COOKIE_NAME;
const GATSBY_DL_COOKIE_SECURE =
  NODE_ENV === "development" ? false : process.env.GATSBY_DL_COOKIE_SECURE;
const GATSBY_DL_COOKIE_DOMAIN = process.env.GATSBY_DL_COOKIE_DOMAIN;
const GATSBY_GA_ID = process.env.GATSBY_GA_ID;
const GATSBY_SENTRY_URL = process.env.GATSBY_SENTRY_URL;

// should have been called before using it here
// ideally before even rendering your react app
if (NODE_ENV !== "development") {
  Sentry.init({
    dsn: GATSBY_SENTRY_URL,
  });
}

class Layout extends Component {
  state = {
    hasGDPRConsent: false,
    askCookieConsent: false,
    acceptsCookie: { necessary: true, analytics: true, dismissed: false },
    deniesCookie: { necessary: true, analytics: false, dismissed: true },
    cookieExp: 780,
    error: null,
    isTransitioning: false,
  };
  // cookieExp set in days same as GA expiry date

  componentDidMount() {
    // Tied to GTM Cookie_Consent_Accepted variable to fire analytics
    this.checkFontsLoaded();
    this.setInitialConsentCookie();
    this.checkGDPRStatus();
  }

  componentDidCatch(error, errorInfo) {
    if (NODE_ENV !== "development") {
      console.error("CDC: ", error);
      console.error("CDC: ", errorInfo);

      this.setState({ error });
      Sentry.withScope((scope) => {
        Object.keys(errorInfo).forEach((key) => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    }
  }

  setInitialConsentCookie = () => {
    // Tied to GTM Cookie_Consent_Accepted variable to fire analytics
    Cookies.set(GATSBY_DL_CONSENT_COOKIE_NAME, false, {
      expires: this.state.cookieExp,
      domain: GATSBY_DL_COOKIE_DOMAIN,
      secure: GATSBY_DL_COOKIE_SECURE,
    });
  };

  setAcceptedConsentCookie = () => {
    Cookies.set(GATSBY_DL_CONSENT_COOKIE_NAME, true, {
      expires: this.state.cookieExp,
      domain: GATSBY_DL_COOKIE_DOMAIN,
      secure: GATSBY_DL_COOKIE_SECURE,
    });
  };

  loadFonts = () => {
    const RobotoMonoRegular = new FontFaceObserver("Roboto Mono Regular");
    const RobotoMonoItalic = new FontFaceObserver("Roboto Mono Italic", {
      style: "italic",
    });
    const LatoRegular = new FontFaceObserver("Lato", {
      weight: 400,
    });
    const LatoBold = new FontFaceObserver("Lato Bold", {
      weight: 700,
    });
    const LatoItalic = new FontFaceObserver("Lato Italic", {
      weight: 400,
      style: "italic",
    });
    const MerriweatherBold = new FontFaceObserver("Merriweather Bold", {
      weight: 700,
    });
    const MerriweatherRegular = new FontFaceObserver("Merriweather Regular", {
      weight: 400,
    });
    const MerriweatherLight = new FontFaceObserver("Merriweather Light", {
      weight: 300,
    });

    Promise.all([
      RobotoMonoRegular.load(),
      RobotoMonoItalic.load(),
      LatoRegular.load(),
      LatoBold.load(),
      LatoItalic.load(),
      MerriweatherBold.load(),
      MerriweatherRegular.load(),
      MerriweatherLight.load(),
    ]).then(() => {
      document.documentElement.className += " fonts-loaded";
      // Optimization for Repeat Views
      sessionStorage.fontsLoadedPolyfill = true;
      if (NODE_ENV === "development") {
        console.log("%c Fonts loaded.", "color: #79E36B");
      }
    });
  };

  checkFontsLoaded = () => {
    if (sessionStorage.fontsLoadedPolyfill) {
      const isLoaded = document.documentElement.className.includes("fonts-loaded");
      // Only add the class when it is not already added
      if (!isLoaded) {
        document.documentElement.className += " fonts-loaded";
      }
      if (NODE_ENV === "development") {
        console.log("%c Fonts already loaded.", "color: #79E36B");
      }
    } else {
      // Don’t load fonts if  the user has data saver on or is on a slow connection
      if (detectDataSaverMode() || detectSlowConnectionType()) {
        return;
      }
      this.loadFonts();
    }
  };

  checkGDPRStatus = () => {
    // If it can read the cookie name from the .env variable
    if (GATSBY_DL_COOKIE_NAME) {
      const DLCookie = Cookies.getJSON(GATSBY_DL_COOKIE_NAME);
      // If it can find a previously set cookie
      if (DLCookie) {
        // If the cookie has analytics accepted
        if (DLCookie.analytics && !DLCookie.dismissed) {
          if (NODE_ENV === "development") {
            console.log("%c The user accepted cookies.", "color: #79E36B");
          }

          this.setState((prevState) => ({
            hasGDPRConsent: !prevState.hasGDPRConsent,
          }));

          // Set the initial cookie consent value to true
          // It is conected to GTM
          this.setAcceptedConsentCookie();

          // Load the analytics when cookies are accepted
          this.loadGTM();

          // Don't load analytics scripts if analytics cookies are not accepted
        } else if (!DLCookie.analytics && DLCookie.dismissed) {
          if (NODE_ENV === "development") {
            console.log("%c The user doesn't accept cookies.", "color: #79E36B");
          }
          if (this.state.askCookieConsent === true) {
            this.setState((prevState) => ({
              askCookieConsent: !prevState.askCookieConsent,
            }));
          }
        }
        // If it doesn't have analytics accepted set the state to ask for the consent
        // and open the cookieConsent pop up
        // This way it doesn't show up with js disabled
      } else {
        this.setState((prevState) => ({
          askCookieConsent: !prevState.askCookieConsent,
        }));

        if (NODE_ENV === "development") {
          console.log(
            "%c Didn't find a previous cookie, asking for the consent.",
            "color: #79E36B",
          );
        }
      }
    } else if (NODE_ENV === "development") {
      console.error("dl.com Can't read env cookie name.");
    }
  };

  // Google Analytics Init
  initGA = () => {
    if (NODE_ENV === "development") {
      console.log("%c GA Init!", "color: #79E36B");
    }
    ReactGA.initialize(GATSBY_GA_ID);
  };

  // Google Analytics Log pages views
  logPageView = () => {
    // https://github.com/nfl/react-helmet/issues/189

    /* Fixed by :
     * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/gatsby-browser.js
     * wrap inside a timeout to make sure react-helmet is done with its changes
     * (https://github.com/gatsbyjs/gatsby/issues/11592)
     */
    if ("requestAnimationFrame" in window) {
      requestAnimationFrame(() => {
        requestAnimationFrame(this.sendPageView);
      });
    } else {
      // simulate 2 rAF calls
      setTimeout(this.sendPageView, 32);
    }
  };

  sendPageView = () => {
    const pagePath = window.location
      ? window.location.pathname + window.location.search + window.location.hash
      : undefined;

    ReactGA.set({ page: pagePath });
    ReactGA.pageview(window.location.pathname);
  };

  showGDPRStatus = () => {
    if (GATSBY_DL_COOKIE_NAME) {
      if (GATSBY_DL_COOKIE_DOMAIN) {
        const DLCookie = Cookies.getJSON(GATSBY_DL_COOKIE_NAME);
        if (DLCookie) {
          if (DLCookie.analytics) {
            if (NODE_ENV === "development") {
              console.log("%c Cookies Accepted.", "color: #79E36B");
            }
          } else if (!DLCookie.analytics) {
            if (NODE_ENV === "development") {
              console.log("%c Cookies Denied.", "color: #79E36B");
            }
          }
        } else {
          if (NODE_ENV === "development") {
            console.log("%c Didn't find a cookie.", "color: #79E36B");
          }
        }
      } else if (NODE_ENV === "development") {
        if (NODE_ENV === "development") {
          console.warn("Can't read cookie domain name .env.");
        }
      }
    } else {
      if (NODE_ENV === "development") {
        console.warn("Can't read cookie domain name .env.");
      }
    }
  };

  acceptsCookies = () => {
    if (GATSBY_DL_COOKIE_NAME) {
      if (GATSBY_DL_COOKIE_DOMAIN) {
        Cookies.set(GATSBY_DL_COOKIE_NAME, this.state.acceptsCookie, {
          expires: this.state.cookieExp,
          domain: GATSBY_DL_COOKIE_DOMAIN,
          secure: GATSBY_DL_COOKIE_SECURE,
        });

        this.setState((prevState) => ({
          askCookieConsent: !prevState.askCookieConsent,
        }));

        // Check to see if the cookie was set
        this.checkGDPRStatus();
      } else if (NODE_ENV === "development") {
        console.warn("Can't read cookie domain name .env.");
      }
    } else if (NODE_ENV === "development") {
      console.warn("Can't read cookie name .env.");
    }
  };

  deniesCookies = () => {
    if (GATSBY_DL_COOKIE_NAME) {
      if (GATSBY_DL_COOKIE_DOMAIN) {
        Cookies.set(GATSBY_DL_COOKIE_NAME, this.state.deniesCookie, {
          expires: this.state.cookieExp,
          domain: GATSBY_DL_COOKIE_DOMAIN,
          secure: GATSBY_DL_COOKIE_SECURE,
        });

        this.handleTransitionState();

        // Check to see if the cookie was set
        this.checkGDPRStatus();
      } else if (NODE_ENV === "development") {
        console.warn("Can't read cookie domain name .env.");
      }
    } else if (NODE_ENV === "development") {
      console.warn("Can't read cookie name .env.");
    }
  };

  loadGTM = () => {
    // Avoids initializing GA each time a page loads
    // Creating a script tag each time
    if (!window._DL_GA_INITIALIZED) {
      this.initGA();
      window._DL_GA_INITIALIZED = true;
    }
    this.logPageView();
  };

  handleTransitionState = () => {
    this.setState((prevState) => ({
      isTransitioning: !prevState.isTransitioning,
    }));

    let timeOut = setTimeout(() => {
      this.setState((prevState) => ({
        isTransitioning: !prevState.isTransitioning,
      }));

      clearTimeout(timeOut);
    }, 400);
  };

  render() {
    let GTMScript = null;

    // fix for webpack window is not defined
    const globalWindow = typeof window !== "undefined";

    if (!globalWindow._DL_GTM_INITIALIZED && this.state.hasGDPRConsent) {
      GTMScript = (
        <Helmet>
          {"<!-- Google Tag Manager -->"}
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});let f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TJ6RBXR');`}
          </script>
          {"<!-- End Google Tag Manager -->"}
        </Helmet>
      );

      window._DL_GTM_INITIALIZED = true;
    }

    return (
      <ThemeProvider theme={theme}>
        <IntlProvider
          locale={this.props.locale}
          defaultLocale="en"
          messages={intlMessages[this.props.locale]}
        >
          <Page>
            {GTMScript}
            <SkipToMainContent />
            <GlobalReset />
            <GlobalAria />
            <GlobalCSS />
            <GlobalGrid />
            <SVGSprite />
            {this.state.error && (
              <button onClick={() => Sentry.showReportDialog()}>Report feedback</button>
            )}
            {this.props.children}
            <CookieConsent
              askCookieConsent={this.state.askCookieConsent}
              acceptsCookies={this.acceptsCookies}
              deniesCookies={this.deniesCookies}
              pageLocale={this.props.locale}
              isTransitioning={this.state.isTransitioning}
            />
          </Page>
        </IntlProvider>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
