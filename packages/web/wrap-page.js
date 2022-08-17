import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";

import intlMessages from "./src/i18n/i18n";
import LocaleContext from "./src/i18n/LocaleContext";
import CookiesProvider from "./src/context/CookiesContext";
import { checkFontsLoaded } from "./src/helpers/loadFonts";
import GTMScript from "./src/components/GTMScript/GTMScript";

/**
 *
 * This needs to exist both in gatsby-browser and gatsby-ssr
 * if you use any react context, otherwise it fails during build.
 *
 * @see https://www.gatsbyjs.org/docs/api-files-gatsby-browser/
 *
 * The APIs wrapPageElement and wrapRootElement exist in both the browser
 * and Server-Side Rendering (SSR) APIs.
 *
 * If you use one of them, consider if you should implement it in both
 * gatsby-ssr.js and gatsby-browser.js so that pages generated through SSR
 * with Node.js are the same after being hydrated with browser JavaScript.
 */
function WrapPage({ element, props }) {
  const { pageContext: { locale = "en" } = {} } = props || {};
  const { location } = props;
  checkFontsLoaded();

  const localeContextValue = useMemo(() => ({ locale: locale }), [locale]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={intlMessages[locale]}
    >
      <LocaleContext.Provider value={localeContextValue}>
        <CookiesProvider location={location}>
          <GTMScript />
          {element}
        </CookiesProvider>
      </LocaleContext.Provider>
    </IntlProvider>
  );
}

export default WrapPage;
