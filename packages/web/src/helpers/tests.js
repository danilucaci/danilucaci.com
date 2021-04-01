import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import IntlPolyfill from "intl";
import "intl/locale-data/jsonp/es-ES";

import intlMessages from "../i18n";
import { theme } from "../theme";

export function renderWithTheme(component) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export function setupReactIntl() {
  if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  } else {
    global.Intl = IntlPolyfill;
  }
}

export function renderWithReactIntl(
  component,
  locale = "en",
  messages = intlMessages[locale],
) {
  return render(
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      {component}
    </IntlProvider>,
  );
}
