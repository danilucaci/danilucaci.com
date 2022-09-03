import React from "react";
import userEvent from "@testing-library/user-event";

import { renderWithReactIntl, setupReactIntl } from "../../../../helpers/tests";
import ContactFormErrorMessage from "../ContactFormErrorMessage";
import LocaleContext from "../../../../i18n/LocaleContext";
import messages from "../../../../i18n/i18n";

describe("ContactFormErrorMessage", () => {
  beforeAll(() => {
    setupReactIntl();
  });

  test("renders the contact form error message in english", () => {
    const LOCALE = "en";
    const ERROR_MESSAGE = "test error message";
    const CLEAR_ERROR_MESSAGE = jest.fn();

    const { getByRole, getAllByRole, getByText } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <ContactFormErrorMessage
          errorMessage={ERROR_MESSAGE}
          clearErrorMessage={CLEAR_ERROR_MESSAGE}
          shouldRenderCloseButton
        />
        ,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const wrapper = getByRole("status");
    const heading = getByRole("heading");
    const closeButtons = getAllByRole("button");
    const description = getByText(/@danilucaci.com/);

    expect(wrapper).toHaveAttribute("aria-live", "polite");
    expect(wrapper).toContainElement(heading);
    expect(wrapper).toContainElement(closeButtons[0]);
    expect(wrapper).toContainElement(description);
    expect(closeButtons).toHaveLength(2);
    expect(heading).toHaveTextContent(
      messages[LOCALE]["contact.page.error.title"],
    );
    expect(description).toHaveTextContent(
      messages[LOCALE]["contact.page.error.description"],
    );
  });

  test("renders the contact form error message in spanish", () => {
    const LOCALE = "es";
    const ERROR_MESSAGE = "test error message";
    const CLEAR_ERROR_MESSAGE = jest.fn();

    const { getByRole, getAllByRole, getByText } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <ContactFormErrorMessage
          errorMessage={ERROR_MESSAGE}
          clearErrorMessage={CLEAR_ERROR_MESSAGE}
          shouldRenderCloseButton
        />
        ,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const wrapper = getByRole("status");
    const heading = getByRole("heading");
    const closeButtons = getAllByRole("button");
    const description = getByText(/@danilucaci.com/);

    expect(wrapper).toHaveAttribute("aria-live", "polite");
    expect(wrapper).toContainElement(heading);
    expect(wrapper).toContainElement(closeButtons[0]);
    expect(wrapper).toContainElement(description);
    expect(closeButtons).toHaveLength(2);
    expect(heading).toHaveTextContent(
      messages[LOCALE]["contact.page.error.title"],
    );
    expect(description).toHaveTextContent(
      messages[LOCALE]["contact.page.error.description"],
    );
  });

  test("doesn’t render the close button if shouldRenderCloseButton is false", () => {
    const LOCALE = "en";
    const ERROR_MESSAGE = "test error message";
    const CLEAR_ERROR_MESSAGE = jest.fn();

    const { queryByText } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <ContactFormErrorMessage
          errorMessage={ERROR_MESSAGE}
          clearErrorMessage={CLEAR_ERROR_MESSAGE}
          shouldRenderCloseButton={false}
        />
        ,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const closeButton = queryByText(/close/);
    expect(closeButton).not.toBeInTheDocument();
  });

  test("renders the error message when the show error button is clicked", async () => {
    const LOCALE = "en";
    const ERROR_MESSAGE = "test error message";
    const CLEAR_ERROR_MESSAGE = jest.fn();

    const { getByText, findByText } = renderWithReactIntl(
      <LocaleContext.Provider value={{ locale: LOCALE }}>
        <ContactFormErrorMessage
          errorMessage={ERROR_MESSAGE}
          clearErrorMessage={CLEAR_ERROR_MESSAGE}
          shouldRenderCloseButton
        />
        ,
      </LocaleContext.Provider>,
      LOCALE,
    );

    const showButton = getByText(/show/i);
    const closeButton = getByText(/close/i);

    await userEvent.click(showButton);
    const errorMessageEl = await findByText(new RegExp(ERROR_MESSAGE));
    expect(errorMessageEl).toHaveTextContent(ERROR_MESSAGE);

    await userEvent.click(closeButton);
    expect(CLEAR_ERROR_MESSAGE).toHaveBeenCalledTimes(1);
  });
});
