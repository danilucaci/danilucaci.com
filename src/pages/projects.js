import React, { Component } from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

import styled from "styled-components";
import { theme, mediaMin, rem } from "../theme/globalStyles";

const ProjectsWrapper = styled.div`
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
        <Helmet title={`Projects - ${config.siteTitle}`} />
        <SEO />
        <SiteHeader />
        <Main role="main">
          <ProjectsWrapper>
            <h1>Hola Projects</h1>
          </ProjectsWrapper>
        </Main>
        <SiteFooter />
      </Layout>
    );
  }
}

export default ServicesPage;
