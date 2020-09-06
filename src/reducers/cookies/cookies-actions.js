import Cookies from "js-cookie";
import * as Sentry from "@sentry/browser";

import cookiesTypes from "./cookies-types";
import { removeGTMConsent } from "../../helpers/ga";

const NODE_ENV = process.env.NODE_ENV;
const GATSBY_DL_COOKIE_NAME = process.env.GATSBY_DL_COOKIE_NAME;
const GATSBY_DL_COOKIE_EXP = process.env.GATSBY_DL_COOKIE_EXP;
const GATSBY_DL_COOKIE_DOMAIN = process.env.GATSBY_DL_COOKIE_DOMAIN;
const GATSBY_DL_COOKIE_SECURE = process.env.GATSBY_DL_COOKIE_SECURE;

const __DEV__ = NODE_ENV === "development";
const COOKIE_SECURE = __DEV__ ? false : GATSBY_DL_COOKIE_SECURE;

export function checkCookies() {
  return function thunk(dispatch, { openCookieConsent, hasGDPRConsent }) {
    // In case I forget to set the env variables in production (netlify)
    try {
      const DLCookie = Cookies.getJSON(GATSBY_DL_COOKIE_NAME);

      // If it can find a previously set cookie with analytics accepted,
      // and the consent not dismissed.
      if (DLCookie && DLCookie.analytics && !DLCookie.dismissed) {
        // Don’t dispatch again if it already had the consent.
        // This is checked on each route change.
        if (!hasGDPRConsent) {
          dispatch({ type: cookiesTypes.HAS_COOKIE_CONSENT });
        }
      } else {
        // If the cookies were removed and it had a consent previously, trigger a page reload
        // to remove the GTM script so the scripts already loaded don’t keep firing events.
        if (hasGDPRConsent) {
          Sentry.captureMessage(
            "checkCookies: Removed GTM consent. No cookie found.",
          );
          removeGTMConsent();
        }

        // If it didn’t find a previous cookie ask for the consent,
        // this way it doesn't show up with js disabled.
        if (
          (!DLCookie && !openCookieConsent) ||
          (DLCookie && !DLCookie.dismissed && !openCookieConsent)
        ) {
          dispatch({ type: cookiesTypes.OPEN_COOKIE_CONSENT });
        }
      }
    } catch (error) {
      Sentry.captureException(error);
    }
  };
}

export function setAcceptedCookies() {
  return function thunk(dispatch, { acceptsCookie }) {
    try {
      Cookies.set(GATSBY_DL_COOKIE_NAME, acceptsCookie, {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: COOKIE_SECURE,
      });

      dispatch({ type: cookiesTypes.CLOSE_COOKIE_CONSENT });
    } catch (error) {
      Sentry.captureException(error);
    }
  };
}

export function setDeniedCookies() {
  return function thunk(dispatch, { deniesCookie }) {
    try {
      Cookies.set(GATSBY_DL_COOKIE_NAME, deniesCookie, {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: COOKIE_SECURE,
      });

      dispatch({ type: cookiesTypes.CLOSE_COOKIE_CONSENT });
    } catch (error) {
      Sentry.captureException(error);
    }
  };
}

export function removeTransition() {
  return {
    type: cookiesTypes.REMOVE_TRANSITION,
  };
}
