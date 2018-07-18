import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <Contact />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
