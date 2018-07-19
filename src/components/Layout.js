import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/globalStyles";

import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet>
            <title>{config.siteTitle}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <SiteHeader />
          {children}
          <SiteFooter />
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

export default Layout;
