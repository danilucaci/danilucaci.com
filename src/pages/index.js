import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <h1>Index Page</h1>
      </Layout>
    );
  }
}

export default Index;
