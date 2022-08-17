import React from "react";
import * as gatsby from "gatsby";
import userEvent from "@testing-library/user-event";
import { createEvent, fireEvent, screen } from "@testing-library/react";
import MockCookies from "js-cookie";

import { setupReactIntl, renderWithReactIntl } from "../../../helpers/tests";
import CookiesProvider from "../../../context/CookiesContext";
import CookieConsent from "../CookieConsent";
import LocaleContext from "../../../i18n/LocaleContext";
import { getLocationData, getStaticQueryData } from "../../../helpers/testData";

jest.mock("gatsby");

// Render the cookie consent initially because there is no cookie
jest.mock("js-cookie", () => ({
  getJSON: jest.fn(() => null),
  get: jest.fn(),
  set: jest.fn(),
}));

describe("CookieConsent", () => {
  beforeAll(() => setupReactIntl());

  beforeEach(() => {
    gatsby.useStaticQuery.mockReset();
    MockCookies.getJSON.mockImplementation(() => null);
  });

  test("renders the CookieConsent in english as visible", () => {
    const LOCALE = "en";
    const TEST_SLUG = "/test-cookies-policy";
    const TEST_TITLE = "Test cookies policy";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    const aside = screen.getByRole("complementary");
    const link = screen.getByRole("link");

    expect(aside).toBeInTheDocument();
    expect(aside).toBeVisible();
    expect(link).toHaveTextContent(/learn/i);
    expect(link).toHaveAttribute("href", TEST_SLUG);
    expect(screen.getByLabelText(/accept/i)).toHaveTextContent(/accept/i);
    expect(screen.getByLabelText(/deny/i)).toHaveTextContent(/deny/i);
    expect(screen.getByText(/improve their experience/i)).toBeInTheDocument();
  });

  test("renders the CookieConsent in english as hidden", () => {
    const LOCALE = "en";
    const TEST_SLUG = "/test-cookies-policy";
    const TEST_TITLE = "Test cookies policy";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    const aside = screen.getByRole("complementary", { hidden: true });
    const link = screen.getByRole("link", { hidden: true });

    expect(aside).toBeInTheDocument();
    expect(aside).not.toBeVisible();
    expect(link).toHaveTextContent(/learn/i);
    expect(link).toHaveAttribute("href", TEST_SLUG);
    expect(screen.getByLabelText(/accept/i)).toHaveTextContent(/accept/i);
    expect(screen.getByLabelText(/deny/i)).toHaveTextContent(/deny/i);
    expect(screen.getByText(/improve their experience/i)).toBeInTheDocument();
  });

  test("renders the CookieConsent in spanish as visible", () => {
    const LOCALE = "es";
    const TEST_SLUG = "/es/politica-cookies-test";
    const TEST_TITLE = "Política de Cookies";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    const aside = screen.getByRole("complementary");
    const link = screen.getByRole("link");

    expect(aside).toBeInTheDocument();
    expect(aside).toBeVisible();
    expect(link).toHaveTextContent(/Leer más/i);
    expect(link).toHaveAttribute("href", TEST_SLUG);
    expect(screen.getByLabelText(/acceptar/i)).toHaveTextContent(/acceptar/i);
    expect(screen.getByLabelText(/rechazar/i)).toHaveTextContent(/rechazar/i);
    expect(screen.getByText(/mejorar su experiencia/i)).toBeInTheDocument();
  });

  test("renders the CookieConsent in spanish as hidden", () => {
    const LOCALE = "es";
    const TEST_SLUG = "/es/politica-cookies-test";
    const TEST_TITLE = "Política de Cookies";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    const aside = screen.getByRole("complementary", { hidden: true });
    const link = screen.getByRole("link", { hidden: true });

    expect(aside).toBeInTheDocument();
    expect(aside).not.toBeVisible();
    expect(link).toHaveTextContent(/Leer más/i);
    expect(link).toHaveAttribute("href", TEST_SLUG);
    expect(screen.getByLabelText(/acceptar/i)).toHaveTextContent(/acceptar/i);
    expect(screen.getByLabelText(/rechazar/i)).toHaveTextContent(/rechazar/i);
    expect(screen.getByText(/mejorar su experiencia/i)).toBeInTheDocument();
  });

  test("hides the cookie consent when cookies are accepted", async () => {
    const LOCALE = "en";
    const TEST_SLUG = "/test-cookies-policy";
    const TEST_TITLE = "Test cookies policy";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    await userEvent.click(screen.getByLabelText(/accept/i));

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();

    const transitionEndEvent = createEvent("transitionend", aside);

    fireEvent(aside, transitionEndEvent);

    const hiddenAside = screen.getByRole("complementary", { hidden: true });
    expect(hiddenAside).not.toBeVisible();
  });

  test("hides the cookie consent when cookies are denied", async () => {
    const LOCALE = "en";
    const TEST_SLUG = "/test-cookies-policy";
    const TEST_TITLE = "Test cookies policy";
    const TEST_LOCALE = LOCALE;

    const USE_STATIC_QUERY_DATA = getStaticQueryData(
      TEST_SLUG,
      TEST_TITLE,
      TEST_LOCALE,
    );

    gatsby.useStaticQuery.mockImplementation(() => USE_STATIC_QUERY_DATA);

    renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <CookiesProvider location={getLocationData()}>
          <CookieConsent />
        </CookiesProvider>
      </LocaleContext.Provider>,
      LOCALE,
    );

    MockCookies.getJSON.mockImplementation(() => ({
      necessary: true,
      analytics: true,
      dismissed: false,
    }));

    await userEvent.click(screen.getByLabelText(/deny/i));

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();

    const transitionEndEvent = createEvent("transitionend", aside);

    fireEvent(aside, transitionEndEvent);

    const hiddenAside = screen.getByRole("complementary", { hidden: true });
    expect(hiddenAside).not.toBeVisible();
  });
});
