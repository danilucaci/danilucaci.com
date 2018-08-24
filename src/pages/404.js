import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import { H1 } from "../components/Headings/Headings";

const NotFoundPage = () => (
  <Layout>
    <Helmet title={`Sorry, this page doesn't exist - ${config.siteTitle}`} />
    <SEO />
    <SiteHeader />
    <Main role="main">
      <H1>404 de mine</H1>
    </Main>
    <SiteFooter />
  </Layout>
);

export default NotFoundPage;
