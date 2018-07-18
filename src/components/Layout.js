import React, { Component } from "react";

import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import styles from "../styles/main.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    );
  }
}

export default Layout;
