import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Services from "../components/Services/Services";
import config from "../../data/SiteConfig";

class ServicesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <Services />
        </div>
      </Layout>
    );
  }
}

export default ServicesPage;
