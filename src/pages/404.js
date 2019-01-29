import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import { Main } from "../components/Main/Main";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import intlMessages from "../i18n/i18n";

const NotFoundPage = (props) => {
  let locale = props.pageContext.locale;
  let changeLanguage = "";

  if (locale === "en") {
    changeLanguage = "/es/404";
  } else if (locale === "es") {
    changeLanguage = "/404";
  }
  return (
    <Layout location={props.location} locale={locale}>
      <Helmet title={`${intlMessages[locale].meta.pageNotFoundMetaTitle}`} />
      <SEO />
      <SiteHeader locale={locale} />
      <Main role="main">
        <h1>404 de mine</h1>
      </Main>
      <SiteFooter changeLanguage={changeLanguage} locale={locale} />
    </Layout>
  );
};

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }),
};

export default NotFoundPage;
