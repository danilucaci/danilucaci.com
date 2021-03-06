import { renderHook } from "@testing-library/react-hooks";

import { useCookies, useCookiesReducer } from "..";

jest.mock("../useCookiesReducer", () => () => [
  {
    hasGDPRConsent: false,
    openCookieConsent: false,
    acceptsCookie: { necessary: true, analytics: true, dismissed: false },
    deniesCookie: { necessary: true, analytics: false, dismissed: true },
    isTransitioning: false,
    initialCookieSet: false,
  },
  jest.fn(),
  {
    checkCookies: jest.fn(),
    setAcceptedCookies: jest.fn(),
    setDeniedCookies: jest.fn(),
    removeTransition: jest.fn(),
  },
  {
    HAS_COOKIE_CONSENT: "HAS_COOKIE_CONSENT",
    CLOSE_COOKIE_CONSENT: "CLOSE_COOKIE_CONSENT",
    OPEN_COOKIE_CONSENT: "OPEN_COOKIE_CONSENT",
    REMOVE_TRANSITION: "REMOVE_TRANSITION",
  },
]);

describe("useCookies", () => {
  afterAll(() => {
    useCookiesReducer.mockRestore();
  });

  test("calls the checkCookies action when openCookieConsent is false", () => {
    const LOCATION = {
      pathname: "/test",
    };

    const { result } = renderHook(() => useCookies(LOCATION));

    const [state, dispatch, actions, types] = result.current;

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(actions.checkCookies).toHaveBeenCalledTimes(1);

    expect(state).toEqual({
      hasGDPRConsent: false,
      openCookieConsent: false,
      acceptsCookie: { necessary: true, analytics: true, dismissed: false },
      deniesCookie: { necessary: true, analytics: false, dismissed: true },
      isTransitioning: false,
      initialCookieSet: false,
    });

    expect(types).toEqual({
      HAS_COOKIE_CONSENT: "HAS_COOKIE_CONSENT",
      CLOSE_COOKIE_CONSENT: "CLOSE_COOKIE_CONSENT",
      OPEN_COOKIE_CONSENT: "OPEN_COOKIE_CONSENT",
      REMOVE_TRANSITION: "REMOVE_TRANSITION",
    });
  });
});
