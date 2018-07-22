import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/globalStyles";
import injectFonts from "../theme/injectFonts";
import injectReset from "../theme/injectReset";
import injectAria from "../theme/injectAria";
import injectCSS from "../theme/injectCSS";

import SiteHeader from "./SiteHeader/SiteHeader";
import { Main } from "./Main/Main";
import SiteFooter from "./SiteFooter/SiteFooter";

const Page = styled.div`
  /* Sticky Footer  */
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1;
  }

  position: relative;
`;

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
