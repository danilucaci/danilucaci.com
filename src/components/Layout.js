import React, { useLayoutEffect, createContext } from "react";
import { node, string, shape, bool } from "prop-types";
import { ThemeProvider } from "styled-components";
import Cookies from "js-cookie";
import ReactGA from "react-ga";
import Helmet from "react-helmet";
import * as Sentry from "@sentry/browser";

import { Page } from "./styles";
import { theme } from "../theme/theme";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalCSS from "../theme/globalCSS";
import GlobalGrid from "../theme/globalGrid";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import CookieConsent from "./CookieConsent/CookieConsent";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

import { checkFontsLoaded } from "../helpers/loadFonts";

require("../theme/prism.css");

const NODE_ENV = process.env.NODE_ENV;
const GATSBY_DL_CONSENT_COOKIE_NAME = process.env.GATSBY_DL_CONSENT_COOKIE_NAME;
const GATSBY_DL_COOKIE_NAME = process.env.GATSBY_DL_COOKIE_NAME;
const GATSBY_DL_COOKIE_EXP = process.env.GATSBY_DL_COOKIE_EXP;
const GATSBY_DL_COOKIE_SECURE =
  NODE_ENV === "development" ? false : process.env.GATSBY_DL_COOKIE_SECURE;
const GATSBY_DL_COOKIE_DOMAIN = process.env.GATSBY_DL_COOKIE_DOMAIN;
const GATSBY_GA_ID = process.env.GATSBY_GA_ID;

const initialState = {
  hasGDPRConsent: false,
  openCookieConsent: false,
  acceptsCookie: { necessary: true, analytics: true, dismissed: false },
  deniesCookie: { necessary: true, analytics: false, dismissed: true },
  isTransitioning: false,
  initialCookieSet: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HAS_COOKIE_CONSENT": {
      return {
        ...state,
        hasGDPRConsent: true,
      };
    }
    case "DISABLE_COOKIE_CONSENT": {
      return {
        ...state,
        openCookieConsent: false,
      };
    }
    case "TOGGLE_COOKIE_CONSENT": {
      return {
        ...state,
        openCookieConsent: true,
        initialCookieSet: true,
      };
    }
    case "TOGGLE_TRANSITION": {
      return {
        ...state,
        isTransitioning: !state.isTransitioning,
      };
    }
    default:
      throw new Error(`Unhandled action type received: ${action.type}`);
  }
};

export const GDPRContext = createContext();

const Layout = ({
  location,
  twinPostURL,
  locale,
  children,
  expandHeaderAndFooter,
  colorHeader,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useLayoutEffect(() => {
    checkFontsLoaded();
  }, []);

  useLayoutEffect(() => {
    // If it can read the cookie name from the .env variable
    try {
      const DLCookie = Cookies.getJSON(GATSBY_DL_COOKIE_NAME);

      // If it can find a previously set cookie
      if (DLCookie) {
        // If the cookie has analytics accepted
        // And the consent is dismissed
        if (DLCookie.analytics && !DLCookie.dismissed) {
          try {
            // Avoids initializing GA each time a page loads
            // Creating a script tag each time
            if (!window._DL_GA_INITIALIZED) {
              ReactGA.initialize(GATSBY_GA_ID);
              window._DL_GA_INITIALIZED = true;
            }

            const sendPageView = () => {
              const pagePath = window.location
                ? window.location.pathname +
                  window.location.search +
                  window.location.hash
                : undefined;

              ReactGA.set({ page: pagePath });
              ReactGA.pageview(window.location.pathname);
            };

            // https://github.com/nfl/react-helmet/issues/189
            /* Fixed in:
             * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/gatsby-browser.js
             * wrap inside a timeout to make sure react-helmet is done with its changes
             * (https://github.com/gatsbyjs/gatsby/issues/11592)
             */
            if ("requestAnimationFrame" in window) {
              requestAnimationFrame(() => {
                requestAnimationFrame(sendPageView);
              });
            } else {
              // simulate 2 rAF calls
              setTimeout(sendPageView, 32);
            }

            dispatch({ type: "HAS_COOKIE_CONSENT" });
          } catch (error) {
            Sentry.captureException(error);
          }
          // Don't load analytics scripts if analytics cookies are not accepted
        } else if (!DLCookie.analytics && DLCookie.dismissed) {
          if (state.openCookieConsent === true) {
            dispatch({ type: "DISABLE_COOKIE_CONSENT" });
          }
        }
      } else {
        // If it didn’t find a previous cookie
        // 1. Set state to ask for the consent
        // 2. Check if GATSBY_DL_CONSENT_COOKIE_NAME is already set
        // 2.1 GATSBY_DL_CONSENT_COOKIE_NAME is the one linked to GTM var
        // 3. If not, set it
        // 4. Open the cookieConsent pop up
        // This way it doesn't show up with js disabled
        try {
          const DLGTMCookie = Cookies.getJSON(GATSBY_DL_CONSENT_COOKIE_NAME);

          if (DLGTMCookie !== undefined) {
            dispatch({ type: "TOGGLE_COOKIE_CONSENT" });
          } else {
            // Tied to GTM Cookie_Consent_Accepted variable to fire analytics
            // Set the initial cookie consent value to true
            try {
              Cookies.set(GATSBY_DL_CONSENT_COOKIE_NAME, false, {
                expires: Number(GATSBY_DL_COOKIE_EXP),
                domain: GATSBY_DL_COOKIE_DOMAIN,
                secure: GATSBY_DL_COOKIE_SECURE,
              });

              dispatch({ type: "TOGGLE_COOKIE_CONSENT" });
            } catch (error) {
              Sentry.captureException(error);
            }
          }
        } catch (error) {
          Sentry.captureException(error);
        }
      }
    } catch (error) {
      Sentry.captureException(error);
    }
  }, [state.openCookieConsent]);

  const acceptedCookies = () => {
    try {
      Cookies.set(GATSBY_DL_COOKIE_NAME, state.acceptsCookie, {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: GATSBY_DL_COOKIE_SECURE,
      });

      Cookies.set(GATSBY_DL_CONSENT_COOKIE_NAME, true, {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: GATSBY_DL_COOKIE_SECURE,
      });

      dispatch({ type: "DISABLE_COOKIE_CONSENT" });
      handleTransitionState();
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const deniedCookies = () => {
    try {
      Cookies.set(GATSBY_DL_COOKIE_NAME, state.deniesCookie, {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: GATSBY_DL_COOKIE_SECURE,
      });

      dispatch({ type: "DISABLE_COOKIE_CONSENT" });
      handleTransitionState();
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const handleTransitionState = () => {
    dispatch({ type: "TOGGLE_TRANSITION" });

    let timeOut = setTimeout(() => {
      dispatch({ type: "TOGGLE_TRANSITION" });

      clearTimeout(timeOut);
    }, 400);
  };

  let GTMScript = null;

  // fix for webpack window is not defined
  const globalWindow = typeof window !== "undefined";

  if (!globalWindow._DL_GTM_INITIALIZED && state.hasGDPRConsent) {
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
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GDPRContext.Provider value={state.hasGDPRConsent}>
          <Page>
            <div
              id="top"
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                border: "0",
              }}
            />
            {GTMScript}
            <SkipToMainContent />
            <GlobalReset />
            <GlobalAria />
            <GlobalCSS />
            <GlobalGrid />
            <SVGSprite />
            <SiteHeader
              twinPostURL={twinPostURL}
              locale={locale}
              currentPath={location.pathname}
              expand={expandHeaderAndFooter}
              colorHeader={colorHeader}
            />
            {children}
            <ScrollToTop />
            <SiteFooter
              locale={locale}
              twinPostURL={twinPostURL}
              currentPath={location.pathname}
              expand={expandHeaderAndFooter}
            />
            <CookieConsent
              openCookieConsent={state.openCookieConsent}
              acceptedCookies={acceptedCookies}
              deniedCookies={deniedCookies}
              pageLocale={locale}
              isTransitioning={state.isTransitioning}
            />
          </Page>
        </GDPRContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

Layout.propTypes = {
  locale: string.isRequired,
  children: node.isRequired,
  twinPostURL: string.isRequired,
  expandHeaderAndFooter: bool,
  colorHeader: bool,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

Layout.defaultProps = {
  expandHeaderAndFooter: false,
  colorHeader: false,
};

export default Layout;
