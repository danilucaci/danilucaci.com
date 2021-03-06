import React from "react";

import { renderWithReactIntl, setupReactIntl } from "../../../helpers/tests";
import ContactCard from "../ContactCard";
import LocaleContext from "../../../i18n/LocaleContext";
import localePaths from "../../../i18n/localePaths";
import messages from "../../../i18n/i18n";

describe("ContactCard", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders the contact card in english", () => {
    const LOCALE = "en";

    const { getByRole } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: "en" }}>
        <ContactCard />,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const cardTitle = getByRole("heading");
    const cardButton = getByRole("button");
    const cardWrapper = getByRole("complementary");

    expect(cardWrapper).toBeInTheDocument();
    expect(cardWrapper).toContainElement(cardTitle);
    expect(cardWrapper).toContainElement(cardButton);
    expect(cardButton).toHaveAttribute("href", localePaths[LOCALE].contact);
    expect(cardTitle).toHaveTextContent(messages[LOCALE]["contact.card.title"]);
    expect(cardButton).toHaveTextContent(messages[LOCALE]["contact.card.cta"]);
  });

  test("renders the contact card in spanish", () => {
    const LOCALE = "es";

    const { getByRole } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: "es" }}>
        <ContactCard />,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const cardTitle = getByRole("heading");
    const cardButton = getByRole("button");
    const cardWrapper = getByRole("complementary");

    expect(cardWrapper).toBeInTheDocument();
    expect(cardWrapper).toContainElement(cardTitle);
    expect(cardWrapper).toContainElement(cardButton);
    expect(cardButton).toHaveAttribute("href", localePaths[LOCALE].contact);
    expect(cardTitle).toHaveTextContent(messages[LOCALE]["contact.card.title"]);
    expect(cardButton).toHaveTextContent(messages[LOCALE]["contact.card.cta"]);
  });
});
