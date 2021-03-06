import React from "react";
import { node, string, shape, bool } from "prop-types";
import { ThemeProvider } from "styled-components";

import "../theme/prism.css";
import { Page } from "./styles";
import { theme } from "../theme/theme";
import GlobalReset from "../theme/globalReset";
import GlobalAria from "../theme/globalAria";
import GlobalCSS from "../theme/globalCSS";
import GlobalGrid from "../theme/globalGrid";
import { SVGSprite } from "./SVGSprite/SVGSprite";
import SkipToMainContent from "./SkipToMainContent/SkipToMainContent";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import ScrollToTopID from "./ScrollToTopID/ScrollToTopID";
import CookieConsent from "./CookieConsent/CookieConsent";

const Layout = ({
  location,
  twinPostURL,
  children,
  expandHeaderAndFooter,
  colorHeader,
}) => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Page>
          <CookieConsent />
          <ScrollToTopID />
          <ScrollToTop />
          <SkipToMainContent />
          <GlobalReset />
          <GlobalAria />
          <GlobalCSS />
          <GlobalGrid />
          <SVGSprite />
          <SiteHeader
            twinPostURL={twinPostURL}
            currentPath={location.pathname}
            expand={expandHeaderAndFooter}
            colorHeader={colorHeader}
          />
          {children}
          <SiteFooter
            twinPostURL={twinPostURL}
            currentPath={location.pathname}
            expand={expandHeaderAndFooter}
          />
        </Page>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  twinPostURL: string.isRequired,
  expandHeaderAndFooter: bool,
  colorHeader: bool,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

Layout.defaultProps = {
  expandHeaderAndFooter: false,
  colorHeader: false,
};

export default Layout;
