import cookiesTypes from "./cookies-types";

const cookiesReducer = (state, action) => {
  switch (action.type) {
    case cookiesTypes.HAS_COOKIE_CONSENT: {
      return {
        ...state,
        hasGDPRConsent: true,
        initialCookieSet: true,
      };
    }
    case cookiesTypes.CLOSE_COOKIE_CONSENT: {
      return {
        ...state,
        openCookieConsent: false,
        isTransitioning: true,
      };
    }
    case cookiesTypes.OPEN_COOKIE_CONSENT: {
      return {
        ...state,
        hasGDPRConsent: false,
        openCookieConsent: true,
        initialCookieSet: true,
      };
    }
    case cookiesTypes.REMOVE_TRANSITION: {
      return {
        ...state,
        isTransitioning: !state.isTransitioning,
      };
    }
    default: {
      return state;
    }
  }
};

export default cookiesReducer;
