import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import config from "../../data/SiteConfig";

const NotFoundPage = () => (
  <Layout>
    <Helmet title={`Sorry, this page doesn't exist - ${config.siteTitle}`} />
    <SEO />
    <SiteHeader />
    <Main role="main">
      <h1>404 de mine</h1>
    </Main>
    <SiteFooter />
  </Layout>
);

export default NotFoundPage;
