import cookiesReducer from "../cookies-reducer";
import cookiesTypes from "../cookies-types";
import cookiesInitialState from "../cookies-initial-state";

describe("cookiesReducer", () => {
  test("sets the accepted cookie consent", () => {
    const state = cookiesReducer(cookiesInitialState, {
      type: cookiesTypes.HAS_COOKIE_CONSENT,
    });

    expect(state).toEqual({
      ...cookiesInitialState,
      hasGDPRConsent: true,
      initialCookieSet: true,
    });
  });

  test("closes the cookie consent", () => {
    const state = cookiesReducer(cookiesInitialState, {
      type: cookiesTypes.CLOSE_COOKIE_CONSENT,
    });

    expect(state).toEqual({
      ...cookiesInitialState,
      openCookieConsent: false,
      isTransitioning: true,
    });
  });

  test("opens the cookie consent", () => {
    const state = cookiesReducer(cookiesInitialState, {
      type: cookiesTypes.OPEN_COOKIE_CONSENT,
    });

    expect(state).toEqual({
      ...cookiesInitialState,
      hasGDPRConsent: false,
      openCookieConsent: true,
      initialCookieSet: true,
    });
  });

  test("removes the transition of the cookie consent", () => {
    const state = cookiesReducer(cookiesInitialState, {
      type: cookiesTypes.REMOVE_TRANSITION,
    });

    expect(state).toEqual({
      ...cookiesInitialState,
      isTransitioning: !cookiesInitialState.isTransitioning,
    });
  });

  test("returns the default state of the cookie consent", () => {
    const state = cookiesReducer(cookiesInitialState, {
      type: null,
    });

    expect(state).toBe(cookiesInitialState);
  });
});
