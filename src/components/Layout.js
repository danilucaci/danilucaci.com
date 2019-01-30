import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
var FontFaceObserver = require("fontfaceobserver");
import Cookies from "js-cookie";
import { IntlProvider, addLocaleData } from "react-intl";
// Locale data
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";

import { theme } from "../theme/globalStyles";
import GlobalFonts from "../theme/globalFonts";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalHTML from "../theme/globalCSS";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import { checkForDoNotTrack } from "../helpers/helpers";
import CookieConsent from "./CookieConsent/CookieConsent";

require("./prism.css");

import intlMessages from "../i18n/i18n";
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
    acceptsCookie: { necessary: true, analytics: true },
    deniesCookie: { necessary: true, analytics: false },
    cookieExp: 730,
  };

  componentDidMount() {
    // this.checkDNT();
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
      console.log(`%c DNT Active`, "color: #79E36B");
    }
  };

  checkGDPRStatus = () => {
    if (process.env.DL_COOKIE_NAME) {
      let DLCookie = Cookies.getJSON(process.env.DL_COOKIE_NAME);

      if (DLCookie) {
        if (DLCookie.analytics) {
          this.setState((prevState) => ({
            askGDPRConsent: !prevState.askGDPRConsent,
            hasGDPRConsent: !prevState.hasGDPRConsent,
          }));
        } else if (!DLCookie.analytics) {
          this.setState((prevState) => ({
            askGDPRConsent: !prevState.askGDPRConsent,
          }));
        }
      } else {
        console.log(`%c Didn't find a cookie.`, "color: #79E36B");
      }
    } else {
      console.warn("dl.com Can't read cookie name.");
    }
  };

  showGDPRStatus = () => {
    if (process.env.DL_COOKIE_NAME) {
      let DLCookie = Cookies.getJSON(process.env.DL_COOKIE_NAME);
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
      console.warn("dl.com Can't read cookie name.");
    }
  };

  acceptsCookies = () => {
    const hasCookieData =
      process.env.DL_COOKIE_DOMAIN && process.env.DL_COOKIE_SECURE;

    if (process.env.DL_COOKIE_NAME) {
      if (hasCookieData) {
        const secure = process.env.DL_COOKIE_SECURE === "true";

        Cookies.set(process.env.DL_COOKIE_NAME, this.state.acceptsCookie, {
          expires: this.state.cookieExp,
          domain: process.env.DL_COOKIE_DOMAIN,
          secure: secure,
        });

        this.setState((prevState) => ({
          askGDPRConsent: !prevState.askGDPRConsent,
          hasGDPRConsent: !prevState.hasGDPRConsent,
        }));

        this.showGDPRStatus();
      } else {
        console.error("Can't read cookie data.");
      }
    } else {
      console.error("Can't read cookie name.");
    }
  };

  deniesCookies = () => {
    const hasCookieData =
      process.env.DL_COOKIE_DOMAIN && process.env.DL_COOKIE_SECURE;

    if (process.env.DL_COOKIE_NAME) {
      if (hasCookieData) {
        const secure = process.env.DL_COOKIE_SECURE === "true";

        Cookies.set(process.env.DL_COOKIE_NAME, this.state.deniesCookie, {
          expires: this.state.cookieExp,
          domain: process.env.DL_COOKIE_DOMAIN,
          secure: secure,
        });

        this.setState((prevState) => ({
          askGDPRConsent: !prevState.askGDPRConsent,
        }));

        this.showGDPRStatus();
      } else {
        console.error("Can't read cookie data.");
      }
    } else {
      console.error("Can't read cookie name.");
    }
  };

  removeCookies = () => {
    if (process.env.DL_COOKIE_NAME) {
      Cookies.remove(process.env.DL_COOKIE_NAME);

      this.setState((prevState) => ({
        askGDPRConsent: !prevState.askGDPRConsent,
      }));

      console.log(`%c Cookies Removed`, "color: #79E36B");
      this.showGDPRStatus();
    } else {
      console.error("Can't read cookie name.");
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
              <html lang={this.props.locale} />
              <title>{intlMessages[this.props.locale].meta.siteTitle}</title>
              <meta
                name="description"
                content={intlMessages[this.props.locale].meta.siteDescription}
              />
              {this.state.hasAnalyticsConsent && HotjarScript && TwitterScript}
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
              pageLocale={this.props.locale}
            />
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
