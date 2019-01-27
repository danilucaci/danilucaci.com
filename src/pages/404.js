import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import intlMessages from "../i18n/i18n";

const NotFoundPage = (props) => {
  let lang = props.pageContext.locale;
  let changeLanguage = "";

  if (lang === "en") {
    changeLanguage = "/es/404";
  } else if (lang === "es") {
    changeLanguage = "/404";
  }
  return (
    <Layout location={props.location} locale={lang}>
      <Helmet title={`${intlMessages[lang].meta.pageNotFoundMetaTitle}`} />
      <SEO />
      <SiteHeader locale={lang} />
      <Main role="main">
        <h1>404 de mine</h1>
      </Main>
      <SiteFooter changeLanguage={changeLanguage} />
    </Layout>
  );
};

export default NotFoundPage;
