import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import { ThemeProvider } from "styled-components";
import { theme } from "../theme/globalStyles";
import injectCSS from "../theme/injectCSS";

import { Page } from "./Page/Page";
import SiteHeader from "./SiteHeader/SiteHeader";
import { Main } from "./Main/Main";
import SiteFooter from "./SiteFooter/SiteFooter";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <SiteHeader />
          <Main>{children}</Main>
          <SiteFooter />
        </Page>
      </ThemeProvider>
    );
  }
}

export default Layout;
