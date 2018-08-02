import React, { Component } from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

const Wrapper = styled.div`
  max-width: ${theme.contain.content};
  margin: 0 auto;

  padding-left: ${theme.gutters.s};
  padding-right: ${theme.gutters.s};

  ${mediaMin.s`
    padding-left: ${theme.gutters.m};
    padding-right: ${theme.gutters.m};
  `};
`;

class ServicesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Helmet title={`Services || ${config.siteTitle}`} />
          <SEO />
        </Wrapper>
      </Layout>
    );
  }
}

export default ServicesPage;
