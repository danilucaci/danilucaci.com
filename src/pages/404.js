import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import intlMessages from "../i18n/i18n";

const NotFoundPage = (props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Helmet
      title={`${
        intlMessages[props.pageContext.locale].meta.pageNotFoundMetaTitle
      }`}
    />
    <SEO />
    <SiteHeader />
    <Main role="main">
      <h1>404 de mine</h1>
    </Main>
    <SiteFooter />
  </Layout>
);

export default NotFoundPage;
