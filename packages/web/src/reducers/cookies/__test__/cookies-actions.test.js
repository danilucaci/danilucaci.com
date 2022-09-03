import MockCookies from "js-cookie";
import * as MockSentry from "@sentry/react";

import cookiesTypes from "../cookies-types";
import { removeGTMConsent } from "../../../helpers/ga";

import {
  checkCookies,
  setAcceptedCookies,
  setDeniedCookies,
  removeTransition,
} from "../cookies-actions";

jest.mock("../../../helpers/ga");

jest.mock("js-cookie", () => ({
  getJSON: jest.fn().mockImplementation(() => null),
  set: jest.fn().mockImplementation(() => {}),
  get: jest.fn().mockImplementation(() => {}),
}));

jest.mock("@sentry/react", () => ({
  captureMessage: jest.fn(),
  captureException: jest.fn(),
}));

const GATSBY_DL_COOKIE_NAME = process.env.GATSBY_DL_COOKIE_NAME;
const GATSBY_DL_COOKIE_EXP = process.env.GATSBY_DL_COOKIE_EXP;
const GATSBY_DL_COOKIE_DOMAIN = process.env.GATSBY_DL_COOKIE_DOMAIN;
const GATSBY_DL_COOKIE_SECURE = process.env.GATSBY_DL_COOKIE_SECURE;

describe("checkCookies", () => {
  beforeEach(() => {
    MockCookies.getJSON.mockImplementation(() => null);
    MockSentry.captureMessage.mockClear();
    MockSentry.captureException.mockClear();
    removeGTMConsent.mockClear();
  });

  test("returns a thunk", () => {
    expect(checkCookies()).toEqual(expect.any(Function));
  });

  test("dispatches HAS_COOKIE_CONSENT", () => {
    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: false };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: cookiesTypes.HAS_COOKIE_CONSENT,
    });

    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("doesn’t dispatch HAS_COOKIE_CONSENT if hasGDPRConsent is true", () => {
    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: true };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("removes the GTM script if no cookie was found and hasGDPRConsent was true", () => {
    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: true };

    thunk(mockDispatch, mockState);

    expect(MockSentry.captureMessage).toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).toHaveBeenCalled();
  });

  test("dispatches OPEN_COOKIE_CONSENT if no cookie is found", () => {
    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: false };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: cookiesTypes.OPEN_COOKIE_CONSENT,
    });

    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("dispatches OPEN_COOKIE_CONSENT if a cookie is found without analytics", () => {
    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: false,
      dismissed: false,
    }));

    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: false };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: cookiesTypes.OPEN_COOKIE_CONSENT,
    });

    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("doesn’t dispatch OPEN_COOKIE_CONSENT if a dismissed cookie is found", () => {
    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: false,
      dismissed: true,
    }));

    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: false };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).not.toHaveBeenCalledWith();
    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("catches the error and logs it with Sentry", () => {
    const TEST_ERROR = new Error("TEST ERROR");

    MockCookies.getJSON.mockImplementation(() => {
      throw TEST_ERROR;
    });

    const thunk = checkCookies();
    const mockDispatch = jest.fn();
    const mockState = { openCookieConsent: false, hasGDPRConsent: false };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).not.toHaveBeenCalledWith();
    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
    expect(MockSentry.captureException).toHaveBeenCalledWith(TEST_ERROR);
  });
});

describe("setAcceptedCookies", () => {
  beforeEach(() => {
    MockCookies.getJSON.mockClear();
    MockCookies.set.mockClear();
    MockCookies.get.mockClear();
    MockSentry.captureMessage.mockClear();
    MockSentry.captureException.mockClear();
    removeGTMConsent.mockClear();
  });

  test("returns a thunk", () => {
    expect(setAcceptedCookies()).toEqual(expect.any(Function));
  });

  test("creates an accepted cookie and dispatches CLOSE_COOKIE_CONSENT", () => {
    const thunk = setAcceptedCookies();
    const mockDispatch = jest.fn();
    const mockState = { acceptsCookie: { data: null } };

    thunk(mockDispatch, mockState);

    expect(MockCookies.set).toHaveBeenCalledWith(
      GATSBY_DL_COOKIE_NAME,
      mockState.acceptsCookie,
      {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: Boolean(GATSBY_DL_COOKIE_SECURE),
      },
    );

    expect(mockDispatch).toHaveBeenCalledWith({
      type: cookiesTypes.CLOSE_COOKIE_CONSENT,
    });

    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("catches the error and logs it with Sentry", () => {
    const TEST_ERROR = new Error("TEST ERROR");

    MockCookies.set.mockImplementation(() => {
      throw TEST_ERROR;
    });

    const thunk = setAcceptedCookies();
    const mockDispatch = jest.fn();
    const mockState = { acceptsCookie: { data: null } };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).not.toHaveBeenCalledWith();
    expect(MockSentry.captureException).toHaveBeenCalledWith(TEST_ERROR);
  });
});

describe("setDeniedCookies", () => {
  beforeEach(() => {
    MockCookies.getJSON.mockImplementation(() => {});
    MockCookies.set.mockImplementation(() => {});
    MockCookies.get.mockImplementation(() => {});
    MockSentry.captureMessage.mockClear();
    MockSentry.captureException.mockClear();
    removeGTMConsent.mockClear();
  });

  test("returns a thunk", () => {
    expect(setDeniedCookies()).toEqual(expect.any(Function));
  });

  test("creates a denied cookie and dispatches CLOSE_COOKIE_CONSENT", () => {
    const thunk = setDeniedCookies();
    const mockDispatch = jest.fn();
    const mockState = { deniesCookie: { data: null } };

    thunk(mockDispatch, mockState);

    expect(MockCookies.set).toHaveBeenCalledWith(
      GATSBY_DL_COOKIE_NAME,
      mockState.deniesCookie,
      {
        expires: Number(GATSBY_DL_COOKIE_EXP),
        domain: GATSBY_DL_COOKIE_DOMAIN,
        secure: Boolean(GATSBY_DL_COOKIE_SECURE),
      },
    );

    expect(mockDispatch).toHaveBeenCalledWith({
      type: cookiesTypes.CLOSE_COOKIE_CONSENT,
    });

    expect(MockSentry.captureMessage).not.toHaveBeenCalled();
    expect(MockSentry.captureException).not.toHaveBeenCalled();
    expect(removeGTMConsent).not.toHaveBeenCalled();
  });

  test("catches the error and logs it with Sentry", () => {
    const TEST_ERROR = new Error("TEST ERROR");

    MockCookies.set.mockImplementation(() => {
      throw TEST_ERROR;
    });

    const thunk = setDeniedCookies();
    const mockDispatch = jest.fn();
    const mockState = { acceptsCookie: { data: null } };

    thunk(mockDispatch, mockState);

    expect(mockDispatch).not.toHaveBeenCalledWith();
    expect(MockSentry.captureException).toHaveBeenCalledWith(TEST_ERROR);
  });
});

describe("removeTransition", () => {
  test("returns an action type", () => {
    expect(removeTransition()).toEqual({
      type: cookiesTypes.REMOVE_TRANSITION,
    });
  });
});
